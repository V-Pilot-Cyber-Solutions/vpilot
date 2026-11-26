import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Btn } from "./atoms";
import { BrandLogo, Emblem } from "./brand";
import { MENUS } from "../data/navigation";
import { useMedia } from "../hooks/index";
import { HEADER_CTA, OFFER, PUDICA_SIGNIN } from "../lib/config";
import { Link, contactTo, offerTo, useRouter } from "../lib/router";

/* ==========================================================================
   OFFER TICKER + HEADER
   ========================================================================== */
function OfferTicker({ reduced }) {
  if (!OFFER.enabled) return <p className="utility__static"></p>;
  const items = [
    <span key="a"><b>{OFFER.discount}</b> {OFFER.service}</span>,
    <span key="b">{OFFER.urgency}: clear accountability, operational privacy, continuous evidence</span>,
    <Link key="d" to={offerTo()} className="ticker__cta">{OFFER.cta} <Icon name="arrow" size={13} /></Link>,
  ];
  const one = (suffix, hidden) => items.map((it, k) => (<span className="ticker__item" key={`${suffix}${k}`} aria-hidden={hidden ? "true" : undefined}>{it}<i className="ticker__sep" aria-hidden="true" /></span>));
  return (
    <div className="ticker" role="region" aria-label="Current campaign">
      <Link to={offerTo()} className="ticker__badge"><Icon name="flame" size={14} />{OFFER.badge}</Link>
      {reduced ? (<p className="ticker__static"><b>{OFFER.discount}</b> {OFFER.service}. <Link to={offerTo()} className="ticker__cta">{OFFER.cta} <Icon name="arrow" size={13} /></Link></p>)
        : (<div className="ticker__viewport"><div className="ticker__track"><div className="ticker__set">{one("a", false)}{one("b", true)}</div><div className="ticker__set" aria-hidden="true">{one("c", true)}{one("d", true)}</div></div></div>)}
    </div>
  );
}
export function Header({ reduced }) {
  const { path, hash, nonce } = useRouter();
  const [open, setOpen] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [acc, setAcc] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const wide = useMedia("(min-width: 1181px)", true);
  const closeTimer = useRef(null);
  /* Close menus on every navigation, including same-path hash jumps. */
  useEffect(() => { setOpen(null); setDrawer(false); }, [path, hash, nonce]);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setScrolled(y > 8);
        const h = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--progress", h > 0 ? String(Math.min(1, y / h)) : "0");
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [path]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setOpen(null); setDrawer(false); } };
    const onDown = (e) => { if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(null); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown); };
  }, []);
  useEffect(() => { if (wide) setDrawer(false); }, [wide]);
  useEffect(() => { document.body.classList.toggle("no-scroll", drawer); return () => document.body.classList.remove("no-scroll"); }, [drawer]);
  const enter = (k) => { clearTimeout(closeTimer.current); if (wide) setOpen(k); };
  const leave = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpen(null), 140); };
  const inList = (list) => (list || []).some((x) => path === x || path.startsWith(x + "/"));
  const isActive = (m) => inList(m.match) && !inList(m.exclude);
  return (
    <header ref={headerRef} className={`masthead ${scrolled ? "is-scrolled" : ""}`} onMouseLeave={leave}>
      <div className="progress" aria-hidden="true" />
      <div className="utility"><div className="utility__in"><OfferTicker reduced={reduced} />
        <div className="utility__links"><Link to="/support">Customer Support</Link><Link to="/contact">Contact</Link><a className="utility__signin" href={PUDICA_SIGNIN} target="_blank" rel="noopener noreferrer">PUDICA Sign-in <Icon name="external" size={11} /></a></div></div></div>
      <div className="primary">
        <Link className="brand" to="/" aria-label="V Pilot Cyber Solutions LLP, home"><BrandLogo reduced={reduced} width="190" height="87" /></Link>
        {wide && (<nav className="menus" aria-label="Primary"><ul>{MENUS.map((m) => (
          <li key={m.key} onMouseEnter={() => enter(m.key)}>
            <Link className={`menu-link ${isActive(m) ? "is-current" : ""} ${open === m.key ? "is-open" : ""}`} to={m.to} aria-current={path === m.to ? "page" : undefined} onFocus={() => open && setOpen(m.key)}>{m.label}</Link>
            <button type="button" className={`menu-caret ${open === m.key ? "is-open" : ""}`} aria-label={`${m.label} menu`} aria-expanded={open === m.key} aria-controls={`panel-${m.key}`} onClick={() => setOpen(open === m.key ? null : m.key)}><Icon name="chevron" size={12} /></button>
          </li>))}</ul></nav>)}
        <div className="primary__actions"><Btn to={contactTo(HEADER_CTA.interest)} variant="cyan" size="sm" className="btn--trial">{HEADER_CTA.label}</Btn>
          {!wide && (<button type="button" className="icon-btn" aria-expanded={drawer} aria-controls="drawer" aria-label={drawer ? "Close menu" : "Open menu"} onClick={() => setDrawer((d) => !d)}><Icon name={drawer ? "close" : "menu"} size={22} /></button>)}</div>
      </div>
      {wide && MENUS.map((m) => (
        <div key={m.key} id={`panel-${m.key}`} className={`mega ${open === m.key ? "is-open" : ""}`} role="region" aria-label={m.label} hidden={open !== m.key} onMouseEnter={() => enter(m.key)}>
          {(
            <div className="mega__in">
              <div className="mega__lead"><p className="mega__kicker">{m.label}</p><p className="mega__title">{m.lead}</p><Link className="mega__all" to={m.to}>View {m.label} <Icon name="arrow" size={14} /></Link></div>
              <div className={`mega__groups ${m.wide ? "mega__groups--3" : ""}`}>{m.groups.map((g) => (<div key={g.title} className="mega__group"><p className="mega__gtitle">{g.title}</p><ul>{g.links.map(([t, h]) => (<li key={t}><Link to={h}>{t}</Link></li>))}</ul></div>))}{m.note && <p className="mega__note">{m.note}</p>}</div>
              <Link className="mega__feature" to={m.feature[1]}>{m.emblem && <Emblem kind={m.emblem} size={64} className="mega__emb" />}<span>{m.feature[0]}</span><Icon name="arrow" /></Link>
            </div>
          )}
        </div>
      ))}
      {!wide && (
        <div id="drawer" className={`drawer ${drawer ? "is-open" : ""}`} hidden={!drawer}>
          <nav aria-label="Primary mobile">
            {MENUS.map((m) => (
              <div key={m.key} className="acc">
                <button type="button" className="acc__btn" aria-expanded={acc === m.key} onClick={() => setAcc(acc === m.key ? null : m.key)}><span>{m.label}<small>{m.lead}</small></span><Icon name="chevron" /></button>
                <div className="acc__panel" hidden={acc !== m.key}>
                  {(<><ul><li><Link to={m.to}><b>{m.label} overview</b></Link></li></ul>{m.groups.map((g) => (<div key={g.title}><p className="mega__gtitle">{g.title}</p><ul>{g.links.map(([t, h]) => (<li key={t}><Link to={h}>{t}</Link></li>))}</ul></div>))}{m.note && <p className="mega__note">{m.note}</p>}</>)}
                </div>
              </div>
            ))}
            <div className="drawer__cta"><Btn to={contactTo(HEADER_CTA.interest)} variant="cyan">{HEADER_CTA.label}</Btn><Btn to={contactTo("PUDICA Autonomy demo")} variant="outline">Request a PUDICA Demo</Btn></div>
            <div className="drawer__utility"><Link to="/support">Customer Support</Link><Link to="/contact">Contact</Link><a href={PUDICA_SIGNIN} target="_blank" rel="noopener noreferrer">PUDICA Sign-in (pudica.io)</a></div>
          </nav>
        </div>
      )}
    </header>
  );
}
