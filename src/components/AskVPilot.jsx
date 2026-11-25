import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Emblem } from "./brand";
import { ASK_FAQ, ASK_INTRO } from "../data/navigation";
import { CARD_ITEMS, GROUPS } from "../data/services";
import { useReducedMotion } from "../hooks/index";
import { contactTo, useRouter } from "../lib/router";

/* ==========================================================================
   ASK V PILOT: two-faced 3D emblem medallion that opens a guided FAQ. Back-to-top is a separate control.
   Opens only on click; Escape closes; focus returns to the opener. Guided FAQ with approved answers only.
   ========================================================================== */
export function AskVPilot() {
  const [open, setOpen] = useState(false);
  const [played, setPlayed] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [thread, setThread] = useState([]);
  const opener = useRef(null);
  const panel = useRef(null);
  const closeBtn = useRef(null);
  const bodyRef = useRef(null);
  const reduced = useReducedMotion();
  const { navigate } = useRouter();
  useEffect(() => {
    const on = () => setShowTop((window.scrollY || 0) > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const close = useCallback(() => { setOpen(false); if (opener.current) opener.current.focus(); }, []);
  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => closeBtn.current && closeBtn.current.focus(), 40);
    const onKey = (e) => {
      if (e.key === "Escape") { e.stopPropagation(); close(); return; }
      if (e.key === "Tab" && panel.current) {
        const f = panel.current.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); document.removeEventListener("keydown", onKey); };
  }, [open, close]);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTo({ top: bodyRef.current.scrollHeight, behavior: reduced ? "auto" : "smooth" }); }, [thread, reduced]);
  const go = (to) => { setOpen(false); navigate(to); };
  const play = () => { if (!played && !reduced) setPlayed(true); };
  return (
    <>
      <div className="ask" data-open={open ? "true" : "false"}>
        <button type="button" className={`totop ${showTop ? "is-on" : ""}`} aria-label="Back to top" tabIndex={showTop ? 0 : -1} onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}><Icon name="up" size={18} /></button>
        <button ref={opener} type="button" className={`medal ${played ? "is-played" : ""}`} aria-haspopup="dialog" aria-expanded={open} aria-controls="ask-panel" aria-label="Ask V Pilot: open the service guide" onClick={() => setOpen((o) => !o)} onMouseEnter={play} onFocus={play}>
          <span className="medal__label" aria-hidden="true">Ask V Pilot</span>
          <span className="medal__glow" aria-hidden="true" />
            <span className="medal__coin" aria-hidden="true"><span className="medal__face medal__face--front"><Emblem kind="vpilot" size={42} /></span><span className="medal__face medal__face--back"><Emblem kind="vpilot" size={42} /></span></span>
        </button>
      </div>
      {open && (
        <section ref={panel} id="ask-panel" className="askp" role="dialog" aria-modal="false" aria-labelledby="ask-title">
          <header className="askp__head"><Emblem kind="vpilot" size={34} /><div><h2 id="ask-title">Ask V Pilot</h2><p>Guided answers from approved V Pilot content</p></div><button ref={closeBtn} type="button" className="askp__x" aria-label="Close the service guide" onClick={close}><Icon name="close" size={18} /></button></header>
          <div className="askp__body" ref={bodyRef} aria-live="polite">
            <p className="askp__msg askp__msg--bot">{ASK_INTRO}</p>
            {thread.map((f, k) => (
              <Fragment key={k}>
                <p className="askp__msg askp__msg--me">{f.q}</p>
                <div className="askp__msg askp__msg--bot">
                  {f.a === "__SERVICES__" ? (
                    <><p>Choose a scope:</p><ul className="askp__list">
                      {Object.entries(GROUPS).map(([key, label]) => (<li key={key}><b>{label}</b><span>{CARD_ITEMS.filter((s) => s.group === key).map((s) => s.name).join(" · ")}</span></li>))}
                      <li><b>NativeTrust Endpoint</b><span>Managed endpoint security, listed under Managed Security Operations</span></li><li><b>PUDICA Autonomy</b><span>The flagship platform: cloud and hybrid operating models</span></li>
                    </ul></>
                  ) : (<p>{f.a}</p>)}
                  <button type="button" className="askp__link" onClick={() => go(f.to)}>{f.label} <Icon name="arrow" size={13} /></button>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="askp__foot">
            <p className="askp__k">Quick questions</p>
            <div className="askp__chips">{ASK_FAQ.map((f) => (<button key={f.q} type="button" className="askp__chip" onClick={() => setThread((t) => [...t, f])}>{f.q}</button>))}</div>
            <div className="askp__cta"><button type="button" className="btn btn--solid btn--sm" onClick={() => go(contactTo("Executive briefing"))}><span>Book an executive briefing</span><Icon name="arrow" size={14} /></button></div>
            <p className="askp__note">Guided FAQ, not an AI assistant. Please don't share credentials, incident evidence or sensitive customer data.</p>
          </div>
        </section>
      )}
    </>
  );
}
