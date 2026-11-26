/* PAGE: Privacy, Terms, Cookies, Security Disclosure, Accessibility
   Styles: styles/legal.css
   Content: data/legal.jsx; lib/config.js (CONSENT_MANAGER) */
import "../styles/legal.css";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../components/Icon";
import { Tile } from "../components/brand";
import { LEGAL_CONTACTS, LEGAL_DATE, LEGAL_DOCS } from "../data/legal";
import { LEGAL_LINKS } from "../data/navigation";
import { useParallax } from "../hooks/index";
import { Link, useRouter } from "../lib/router";
import { Home } from "./HomePage";

function LegalHero({ title, intro, children }) {
  const bg = useRef(null);
  useParallax(bg, 0.05);
  return (
    <section className="vpl-hero" aria-labelledby="vpl-page-title"><div className="vpl-hero__bg" ref={bg} aria-hidden="true" /><div className="wrap vpl-hero__in">
      <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li><Link to="/legal">Legal &amp; Trust</Link></li><li aria-current="page"><span>{title}</span></li></ol></nav>
      <span className="vpl-hero__eyebrow">Legal &amp; Trust</span><h1 id="vpl-page-title">{title}</h1><p>{intro}</p>{children}</div></section>
  );
}
function TrustPanel() {
  return (<section className="vpl-trust" aria-labelledby="vpl-trust-title"><div className="wrap vpl-trust__in"><span className="vpl-trust__ico"><Icon name="shieldcheck" size={34} /></span><div><h2 id="vpl-trust-title">Questions about this policy?</h2><p>Use the dedicated channel for the subject involved. Do not send passwords, private keys, government identifiers or unnecessary customer data.</p><div className="vpl-trust__links">{LEGAL_CONTACTS.map(([label, email]) => (<a key={email} href={`mailto:${email}`}><b>{label}:</b> {email}</a>))}</div></div></div></section>);
}
export function LegalPage({ doc }) {
  const { path } = useRouter();
  const [active, setActive] = useState(doc.sections[0].id);
  useEffect(() => {
    const els = doc.sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver((entries) => { const v = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (v) setActive(v.target.id); }, { rootMargin: "-18% 0px -66% 0px", threshold: 0 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [doc]);
  return (
    <div className="vpl-page">
      <LegalHero title={doc.title} intro={doc.intro}><div className="vpl-meta"><span><b>Effective date:</b> {LEGAL_DATE}</span><i /><span><b>Last reviewed:</b> {LEGAL_DATE}</span><i /><span><b>Policy owner:</b> {doc.owner}</span></div></LegalHero>
      <div className="wrap vpl-layout">
        <aside className="vpl-toc" aria-label="On this page"><strong>On this page</strong>{doc.sections.map((s) => (<Link key={s.id} to={`${path}#${s.id}`} className={active === s.id ? "is-active" : ""} aria-current={active === s.id ? "location" : undefined}>{s.title}</Link>))}</aside>
        <article className="vpl-content">{doc.sections.map((s) => (<section key={s.id} id={s.id} className="vpl-section reveal"><h2>{s.title}</h2>{s.content}</section>))}</article>
        <aside className="vpl-rail"><div><strong>Policy owner</strong><p>{doc.owner}</p></div><button type="button" onClick={() => window.print()}><Icon name="printer" size={16} /> Print page</button><a href={`mailto:${LEGAL_CONTACTS[0][1]}`}><Icon name="mail" size={16} /> Contact policy team</a>
          {doc.sources && doc.sources.length > 0 && (<div className="vpl-sources"><strong>Official references</strong>{doc.sources.map(([label, url]) => (<a key={url} href={url} target="_blank" rel="noopener noreferrer">{label}<Icon name="external" size={12} /></a>))}</div>)}
          <div className="vpl-related"><strong>Other policies</strong>{LEGAL_LINKS.filter(([, to]) => to !== path).map(([l, to]) => (<Link key={to} to={to}>{l}</Link>))}</div></aside>
      </div>
      <TrustPanel />
    </div>
  );
}
export function LegalIndex() {
  return (
    <div className="vpl-page"><LegalHero title="Policies and legal" intro="Privacy, terms, cookies, security disclosure and accessibility information for vpilot.org." />
      <div className="wrap vpl-index"><ul className="sol sol--three">{LEGAL_LINKS.map(([l, to], i) => { const key = to.replace("/", ""); return (<li key={to} className="sol__card reveal" style={{ "--i": i % 3 }}><Tile icon={["lock", "clipboard", "sliders", "shieldcheck", "eye"][i]} /><h3>{l}</h3><p>{LEGAL_DOCS[key].intro}</p><Link className="textlink" to={to}>Read {l.toLowerCase()} <Icon name="arrow" size={15} /></Link></li>); })}</ul></div>
      <TrustPanel /></div>
  );
}
