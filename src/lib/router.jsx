import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { BASE, OFFER, REDIRECTS, hrefOf } from "./config";

/* ==========================================================================
   ROUTER
   ========================================================================== */
const RouterCtx = createContext({ path: "/", search: "", hash: "", nonce: 0, navigate: () => {} });
export const useRouter = () => useContext(RouterCtx);
function parseTarget(to) {
  let p = to;
  let hash = "";
  let search = "";
  const hi = p.indexOf("#");
  if (hi >= 0) { hash = p.slice(hi + 1); p = p.slice(0, hi); }
  const qi = p.indexOf("?");
  if (qi >= 0) { search = p.slice(qi); p = p.slice(0, qi); }
  return { p: p || "/", search, hash };
}
function readLocation() {
  if (typeof window === "undefined") return { path: "/", search: "", hash: "" };
  let p = window.location.pathname;
  if (BASE !== "/" && p.startsWith(BASE.slice(0, -1))) p = p.slice(BASE.length - 1);
  p = p.replace(/\/index\.html$/, "");
  p = ("/" + p.replace(/^\/+/, "")).replace(/\/+$/, "") || "/";
  let search = window.location.search;
  let hash = window.location.hash.replace(/^#/, "");
  const to = (hash && REDIRECTS[`${p}#${hash}`]) || REDIRECTS[p];
  if (to) {
    const t = parseTarget(to);
    p = t.p;
    search = t.search || search;
    hash = t.hash || hash;
    window.history.replaceState({}, "", hrefOf(p) + search + (hash ? `#${hash}` : ""));
  }
  return { path: p, search, hash };
}
export function Router({ children }) {
  const [loc, setLoc] = useState(() => ({ ...readLocation(), nonce: 0 }));
  useEffect(() => {
    const on = () => setLoc((l) => ({ ...readLocation(), nonce: l.nonce + 1 }));
    window.addEventListener("popstate", on);
    return () => window.removeEventListener("popstate", on);
  }, []);
  const navigate = useCallback((to, opts = {}) => {
    window.history[opts.replace ? "replaceState" : "pushState"]({}, "", hrefOf(to));
    setLoc((l) => ({ ...readLocation(), nonce: l.nonce + 1 }));
  }, []);
  const value = useMemo(() => ({ ...loc, navigate }), [loc, navigate]);
  return <RouterCtx.Provider value={value}>{children}</RouterCtx.Provider>;
}
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter();
  const external = /^(https?:|mailto:|tel:)/.test(to);
  const handle = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented || external || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === "_blank") return;
    e.preventDefault();
    navigate(to);
  };
  return (<a href={hrefOf(to)} onClick={handle} {...rest}>{children}</a>);
}
export const enc = encodeURIComponent;
export const contactTo = (interest) => `/contact?interest=${enc(interest)}`;
export const offerTo = () => contactTo(OFFER.interest);
