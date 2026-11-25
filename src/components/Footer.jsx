import { useState } from "react";
import { Icon } from "./Icon";
import { BrandLogo, Emblem } from "./brand";
import { FOOTER_GROUPS, LEGAL_LINKS } from "../data/navigation";
import { PUDICA_SIGNIN, SOCIAL } from "../lib/config";
import { Link } from "../lib/router";

/* ==========================================================================
   FOOTER: compact, white, aligned to the logo
   ========================================================================== */
const SocialMark = ({ name, size = 17 }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true, focusable: "false" };
  switch (name) {
    case "Facebook": return (<svg {...p} fill="currentColor"><path d="M13.5 22v-8h2.8l.42-3.2H13.5V8.75c0-.93.26-1.56 1.6-1.56h1.71V4.33c-.3-.04-1.31-.13-2.5-.13-2.47 0-4.16 1.5-4.16 4.28v2.32H7.35V14h2.8v8h3.35Z" /></svg>);
    case "LinkedIn": return (<svg {...p} fill="currentColor"><path d="M5.37 3.5A2.37 2.37 0 1 1 5.37 8.24 2.37 2.37 0 0 1 5.37 3.5ZM3.32 9.72h4.1V22h-4.1V9.72Zm6.65 0h3.93v1.68h.06c.55-1.04 1.88-2.14 3.88-2.14 4.15 0 4.92 2.73 4.92 6.29V22h-4.1v-5.72c0-1.36-.03-3.12-1.9-3.12-1.91 0-2.2 1.49-2.2 3.02V22h-4.1V9.72Z" /></svg>);
    case "X": return (<svg {...p} fill="currentColor"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.25-8.29L2.94 2H9.35l4.43 5.86L18.9 2Zm-1.1 17.84h1.72L8.41 4.05H6.56L17.8 19.84Z" /></svg>);
    case "Instagram": return (<svg {...p} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>);
    default: return (<svg {...p} fill="currentColor"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.05 0 0 .98-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.1c.98 0 1.95.13 2.86.38 2.18-1.49 3.15-1.18 3.15-1.18.64 1.58.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.28c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>);
  }
};
function FooterGroup({ group, open, onToggle, idx }) {
  return (
    <section className={`ft-group ft-g${idx} ${open ? "is-open" : ""}`}>
      <button className="ft-toggle" type="button" onClick={onToggle} aria-expanded={open} aria-controls={`ft-list-${idx}`}><span>{group.title}</span><Icon name="chevron" size={16} /></button>
      <h3>{group.title}</h3>
      <ul id={`ft-list-${idx}`}>{group.items.map(([label, to, priority]) => (<li key={label}><Link className={priority ? "is-priority" : ""} to={to}><span>{label}</span>{priority && <Icon name="arrow" size={12} />}</Link></li>))}</ul>
    </section>
  );
}
export function Footer({ reduced }) {
  const [openGroup, setOpenGroup] = useState(null);
  const year = new Date().getFullYear();
  return (
    <footer className="ft">
      <div className="ft__accent" aria-hidden="true" />
      <section className="ft__primary">
        <div className="wrap ft__layout">
          <div className="ft__brand">
            <Link to="/" className="ft__logo" aria-label="V Pilot home"><BrandLogo reduced={reduced} width="230" height="106" loading="lazy" /></Link>
            <h2>Managed Cybersecurity Operations &amp; Assurance.</h2>
            <p>V Pilot's virtual operations team runs the work you delegate. You keep the decisions. PUDICA Autonomy connects the evidence.</p>
            <div className="ft__follow" role="group" aria-label="V Pilot on social media">
              <p>Follow V Pilot</p>
              <div>{SOCIAL.map(([name, url], k) => (<a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`V Pilot on ${name}`} title={name} style={{ "--k": k }}><SocialMark name={name} size={19} /></a>))}</div>
            </div>
            <a className="ft__signin" href={PUDICA_SIGNIN} target="_blank" rel="noopener noreferrer"><Emblem kind="pudica" size={18} />Sign in to PUDICA <Icon name="external" size={13} /></a>
          </div>
          <nav className="ft__nav" aria-label="Footer">
            {FOOTER_GROUPS.map((g, i) => (<FooterGroup key={g.title} idx={i} group={g} open={openGroup === i} onToggle={() => setOpenGroup(openGroup === i ? null : i)} />))}
          </nav>
        </div>
      </section>
      <section className="ft__legal"><div className="wrap ft__legal-in"><p><Emblem kind="vpilot" size={18} className="ft__mini" />© {year} V Pilot Cyber Solutions LLP. All rights reserved.</p><nav aria-label="Legal and trust links">{LEGAL_LINKS.map(([l, to]) => (<Link key={to} to={to}>{l}</Link>))}</nav></div></section>
    </footer>
  );
}
