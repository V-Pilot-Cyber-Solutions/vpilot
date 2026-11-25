import { useEffect, useRef, useState } from "react";

/* ==========================================================================
   HOOKS
   ========================================================================== */
export function useMedia(query, initial = false) {
  const [match, setMatch] = useState(() => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia(query).matches : initial));
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    on();
    if (mq.addEventListener) mq.addEventListener("change", on); else mq.addListener(on);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on));
  }, [query]);
  return match;
}
export const useReducedMotion = () => useMedia("(prefers-reduced-motion: reduce)", false);
/* Scroll reveal: the revealed state is a data-in attribute (not a class), so React re-renders can never wipe it. */
export function useReveal(rootRef, enabled, routeKey) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const show = (n) => n.setAttribute("data-in", "");
    if (!enabled || !("IntersectionObserver" in window)) {
      const all = () => root.querySelectorAll(".reveal:not([data-in])").forEach(show);
      all();
      const mo = new MutationObserver(all);
      mo.observe(root, { childList: true, subtree: true });
      return () => mo.disconnect();
    }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    const seen = new WeakSet();
    const scan = () => {
      const vh = window.innerHeight || 800;
      root.querySelectorAll(".reveal:not([data-in])").forEach((n) => {
        if (seen.has(n)) return;
        seen.add(n);
        const r = n.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) show(n); else io.observe(n);
      });
    };
    scan();
    let raf = 0;
    const mo = new MutationObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan); });
    mo.observe(root, { childList: true, subtree: true });
    return () => { cancelAnimationFrame(raf); mo.disconnect(); io.disconnect(); };
  }, [rootRef, enabled, routeKey]);
}
/* 3D pointer tilt: elements with data-tilt="<max degrees>" lean toward the pointer and carry a glare. */
export function useTilt(rootRef, enabled) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled || !window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;
    let raf = 0;
    let cur = null;
    const reset = (el) => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); el.removeAttribute("data-tilting"); };
    const move = (e) => {
      const el = e.target.closest ? e.target.closest("[data-tilt]") : null;
      if (cur && cur !== el) reset(cur);
      cur = el;
      if (!el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const max = parseFloat(el.getAttribute("data-tilt")) || 7;
        el.style.setProperty("--ry", `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${((0.5 - py) * 2 * max).toFixed(2)}deg`);
        el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
        el.setAttribute("data-tilting", "");
      });
    };
    const leave = () => { if (cur) reset(cur); cur = null; };
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); root.removeEventListener("pointermove", move); root.removeEventListener("pointerleave", leave); };
  }, [rootRef, enabled]);
}
export function useInView(ref, margin = "0px") {
  const [seen, setSeen] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, margin]);
  return seen;
}
export function useTabVisible() {
  const [v, setV] = useState(true);
  useEffect(() => {
    const on = () => setV(document.visibilityState !== "hidden");
    on();
    document.addEventListener("visibilitychange", on);
    return () => document.removeEventListener("visibilitychange", on);
  }, []);
  return v;
}
export function useParallax(ref, strength = 0.08) {
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return undefined;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        el.style.setProperty("--py", `${((r.top + r.height / 2 - window.innerHeight / 2) * strength).toFixed(1)}px`);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [ref, strength, reduced]);
}
function useCycle(count, delays, enabled) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!enabled) return undefined;
    const t = setTimeout(() => setI((x) => (x + 1) % count), delays[i % delays.length]);
    return () => clearTimeout(t);
  }, [i, count, delays, enabled]);
  return [i, setI];
}
/* Sequence plays only while in view, tab visible, no reduced motion, and not hovered or focused. */
export function useSequence(count, delays) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const tab = useTabVisible();
  const reduced = useReducedMotion();
  const [hold, setHold] = useState(false);
  const [i, setI] = useCycle(count, delays, inView && tab && !reduced && !hold);
  const bind = { ref, onMouseEnter: () => setHold(true), onMouseLeave: () => setHold(false), onFocus: () => setHold(true), onBlur: () => setHold(false) };
  return { i, setI, bind };
}
