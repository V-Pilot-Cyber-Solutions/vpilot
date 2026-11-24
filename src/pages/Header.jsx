import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";
import "./vpilot-enterprise-nav.css";

const signin = "https://pudica.io/MicrosoftIdentity/Account/SignIn";
const briefing = "/contact?intent=executive-briefing";
const inquiry = (intent) => `/contact?intent=${intent}`;
const menus = [
  { label: "Company", title: "Your cyber operating partner", intro: "V Pilot runs agreed cybersecurity operations. Your leadership retains material approvals and formal risk acceptance.", href: "/about-v-pilot", cta: "About V Pilot", groups: [
    ["Who we are", [["About V Pilot", "/about-v-pilot"], ["Why V Pilot", "/why-v-pilot"], ["Careers", "/careers"]]],
    ["How we work", [["Operating model & decision rights", "/#how-we-operate"], ["Security assurance", "/security-assurance"], ["Engagement options", "/#engagement-options"]]],
  ], feature: ["ACCOUNTABILITY", "Know who owns the work", "See how ownership, escalation and verification support executive oversight.", "/#how-we-operate", "See how we operate"] },
  { label: "PUDICA Autonomy", title: "Validate before you act", intro: "V Pilot’s flagship SaaS platform connects technical evidence, isolated validation, approval and production verification.", href: "/platform", cta: "View platform overview", groups: [
    ["Capabilities", [["Autonomous Remediations", "/platform/autonomous-remediation"], ["Integrated Security Operations", "/platform/integrated-security-operations"], ["Autonomous Resilience", "/platform/autonomous-resilience"], ["GRC & Operational Evidence", "/platform/grc-compliance"]]],
    ["Validation & access", [["GoldenVault & SecLabs", "/platform/seclabs"], ["Illustrative decision record", "/#decision-evidence"], ["PUDICA sign-in (pudica.io)", signin]]],
  ], feature: ["PLATFORM CONTROLS", "Evidence supports approval", "GoldenVault preserves versioned state. SecLabs tests eligible actions before the authorised owner decides what runs.", "/platform/seclabs", "Explore validation"] },
  { label: "Solutions", title: "Solve a business security priority", intro: "Combine the right capabilities for a cloud programme, distributed workforce or critical service that needs to recover.", href: "/solutions", cta: "View all solutions", groups: [
    ["Transform & operate", [["Secure Business Transformation", "/solutions/secure-business-transformation"], ["NativeTrust Managed Workspace", "/solutions/nativetrust-workspace"], ["Integrated Security Operations", "/solutions/integrated-security-operations"]]],
    ["Govern & recover", [["Enterprise Risk Management", "/solutions/enterprise-risk-management"], ["Incident Response & Forensics", "/solutions/incident-response-forensics"], ["Cyber Resilience & Recovery", "/solutions/cyber-resilience-recovery"], ["Privacy & Data Protection", "/solutions/privacy-data-protection"]]],
  ], feature: ["WORKFORCE OPERATIONS", "Secure the whole workspace", "NativeTrust brings remote IT support, identity, endpoints and essential infrastructure into one operating scope.", "/solutions/nativetrust-workspace", "Explore NativeTrust"] },
  { label: "Services", title: "Choose what V Pilot will run", intro: "Commission specialist work or delegate ongoing operations with clear scope, authority and evidence.", href: "/services", cta: "View service catalogue", groups: [
    ["Operate & remediate", [["IT & Infrastructure Security", inquiry("infrastructure-operations")], ["Cloud Migrations", inquiry("cloud-migrations")], ["Configuration & Compliance", inquiry("configuration-compliance")], ["Vulnerability Remediation", "/services/managed-vulnerability-remediation"], ["Application Security Governance", inquiry("application-security-governance")]]],
    ["Detect, respond & recover", [["SIEM & Detection Operations", "/services/managed-siem"], ["Incident Readiness & Response", "/services/incident-readiness-response"], ["Digital Forensics Investigations", inquiry("digital-forensics-investigations")], ["Backup, Recovery & Continuity", "/services/managed-backup-recovery"]]],
    ["Executive governance", [["CISO as a Service", "/services/ciso-as-a-service"], ["Certification Readiness", "/services/iso-27001-certification-readiness"], ["DPO & Privacy Operations", inquiry("privacy-operations")], ["Enterprise Risk & Vendor Assurance", inquiry("enterprise-vendor-assurance")]]],
  ], feature: ["ENGAGEMENT MODELS", "Define the scope and authority", "Compare specialist, co-managed and fully managed delivery. Agree who operates each control and who approves material changes.", "/#engagement-options", "Compare engagement options"] },
  { label: "Frameworks", title: "How we govern the work", intro: "Apply a consistent method for infrastructure and application security without losing sight of production dependencies or decision rights.", href: "/frameworks", cta: "View all frameworks", groups: [
    ["Operating frameworks", [["ProdSecOps: infrastructure security", "/frameworks/prodsecops"], ["ProdSecApps: application governance", "/frameworks/prodsecapps"]]],
    ["Assurance practices", [["Shared responsibility", "/frameworks/shared-responsibility"], ["Evidence by design", "/frameworks/evidence-by-design"], ["5D Threat Intelligence", "/frameworks/5d-threat-intelligence"]]],
  ], feature: ["PRODSECOPS", "Protect what runs the business", "Plan security changes around service dependencies, approved change windows, detection and recovery.", "/frameworks/prodsecops", "Explore ProdSecOps"] },
  { label: "Resources", title: "Resources for security leaders", intro: "Review capabilities, operating guidance and technical references before defining scope or preparing a decision.", href: "/resources", cta: "Browse resources", groups: [
    ["For decision-makers", [["Insights", "/resources/insights"], ["Solution briefs", "/resources/solution-briefs"]]],
    ["For delivery teams", [["Technical guides", "/resources/technical-guides"], ["Security advisories", "/resources/security-advisories"], ["PUDICA documentation", "/docs/pudica"], ["Service documentation", "/docs/services"]]],
  ], feature: ["WORKED EXAMPLE", "Review a change decision", "See an illustrative record of validation, approval and production closure criteria.", "/#decision-evidence", "View the example"] },
];

function Destination({ to, children, ...props }) {
  return to === signin ? <a href={to} {...props}>{children}</a> : <Link to={to} {...props}>{children}</Link>;
}
function Panel({ item, id, trigger, close }) {
  const [eyebrow, title, copy, to, cta] = item.feature;
  return <div className="vpen-panel" id={id} aria-labelledby={trigger}>
    <div className="vpen-summary"><p className="vpen-label">{item.label}</p><h2>{item.title}</h2><p>{item.intro}</p><Link to={item.href} onClick={close} className="vpen-text-action">{item.cta}<ArrowRight aria-hidden="true" /></Link></div>
    <div className="vpen-groups" style={{ "--vpen-groups": item.groups.length }}>
      {item.groups.map(([name, links]) => <div key={name}><h3>{name}</h3><ul>{links.map(([label, href]) => <li key={label}><Destination to={href} onClick={close}>{label}<ArrowRight aria-hidden="true" /></Destination></li>)}</ul></div>)}
    </div>
    <aside className="vpen-feature"><p className="vpen-label">{eyebrow}</p><h3>{title}</h3><p>{copy}</p><Link to={to} className="vpen-text-action" onClick={close}>{cta}<ArrowRight aria-hidden="true" /></Link></aside>
  </div>;
}

export default function Header() {
  const [active, setActive] = useState(null), [mobile, setMobile] = useState(false);
  const uid = useId(), root = useRef(null), activeButton = useRef(null), mobileButton = useRef(null);
  const {pathname, search, hash} = useLocation();
  function close() { setActive(null); setMobile(false); }
  useEffect(() => { setActive(null); setMobile(false); }, [pathname, search, hash]);
  useEffect(() => {
    function outside(event) { if (root.current && !root.current.contains(event.target)) { setActive(null); setMobile(false); } }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  return <header className="vpen" ref={root} onBlur={(event) => {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
  }} onKeyDown={(event) => {
    if (event.key !== "Escape" || (active === null && !mobile)) return;
    event.preventDefault();
    if (active !== null) { setActive(null); activeButton.current?.focus(); }
    else { setMobile(false); mobileButton.current?.focus(); }
  }}>
    <nav className="vpen-utility" aria-label="Utility navigation"><Link to="/support" onClick={close}>Customer support</Link><a href={signin}>PUDICA sign-in</a><Link to="/careers" onClick={close}>Careers</Link><Link to="/contact" onClick={close}>Contact</Link></nav>
    <div className="vpen-bar">
      <Link className="vpen-brand" to="/" aria-label="V Pilot home" onClick={close}><ApprovedVPilotBrand compact /></Link>
      <button ref={mobileButton} className="vpen-toggle" type="button" aria-expanded={mobile} aria-controls={`${uid}-nav`} onClick={() => { setMobile(!mobile); setActive(null); }}>{mobile ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}{mobile ? "Close menu" : "Menu"}</button>
      <nav className={`vpen-nav ${mobile ? "is-open" : ""}`} id={`${uid}-nav`} aria-label="Primary navigation">
        <ul>{menus.map((item, i) => <li key={item.label}>
          <button type="button" id={`${uid}-tab-${i}`} aria-expanded={active === i} aria-controls={`${uid}-panel-${i}`} onClick={(e) => { activeButton.current = e.currentTarget; setActive(active === i ? null : i); }}>{item.label}<ChevronDown aria-hidden="true" /></button>
          <div hidden={active !== i} id={`${uid}-panel-${i}`}>{active === i && <Panel item={item} id={`${uid}-content-${i}`} trigger={`${uid}-tab-${i}`} close={close} />}</div>
        </li>)}</ul>
        <div className="vpen-mobile-links"><Link to={briefing} onClick={close}>Book an executive briefing</Link><a href={signin}>PUDICA sign-in</a><Link to="/support" onClick={close}>Customer support</Link><Link to="/contact" onClick={close}>Contact</Link></div>
      </nav>
      <Link className="vpen-briefing" to={briefing} onClick={close}>Book an executive briefing<ArrowRight aria-hidden="true" /></Link>
    </div>
  </header>;
}
