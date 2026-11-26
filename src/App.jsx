import "./styles/base.css";
import "./styles/shared.css";
import "./styles/cards.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/ask-vpilot.css";
import "./styles/platform.css";
import { useEffect, useMemo, useRef } from "react";
import { AskVPilot } from "./components/AskVPilot";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LEGAL_DOCS } from "./data/legal";
import { ALIASES, bySlug } from "./data/services";
import { SOLUTIONS } from "./data/solutions";
import { useReducedMotion, useReveal, useTilt } from "./hooks/index";
import { DEFAULT_DESC, SITE, SITE_URL } from "./lib/config";
import { Router, useRouter } from "./lib/router";
import { CareersPage } from "./pages/CareersPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ComparePage } from "./pages/ComparePage";
import { ContactPage } from "./pages/ContactPage";
import { FrameworksPage } from "./pages/FrameworksPage";
import { Home } from "./pages/HomePage";
import { LegalIndex, LegalPage } from "./pages/LegalPages";
import { MsoPage } from "./pages/MsoPage";
import { NotFound } from "./pages/NotFound";
import { ProductsPage } from "./pages/ProductsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { PudicaPage } from "./pages/PudicaPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { SampleDecisionPage } from "./pages/SampleDecisionPage";
import { ScopeChooser } from "./pages/ScopeChooser";
import { ServiceDetail } from "./pages/ServiceDetail";
import { ServicesPage } from "./pages/ServicesPage";
import { SolutionDetail } from "./pages/SolutionDetail";
import { SummaryPage } from "./pages/SummaryPage";
import { SupportPage } from "./pages/SupportPage";

/* ==========================================================================
   ROUTES + APP
   ========================================================================== */
export function resolve(path, reduced) {
  const parts = path.split("/").filter(Boolean);
  const a = parts[0];
  const b = parts[1];
  const T = (title, el, desc, full, extra = {}) => ({ title, el, desc, full, ...extra });
  if (!a) return T("We Pilot Your Security Operations", <Home reduced={reduced} />, DEFAULT_DESC, "V Pilot | Managed Cybersecurity Operations & Security Automation");
  if (LEGAL_DOCS[a] && !b) return T(LEGAL_DOCS[a].title, <LegalPage key={a} doc={LEGAL_DOCS[a]} />);
  switch (a) {
    case "products":
      if (!b) return T("Solutions", <ProductsPage />, "Cloud security automation, hybrid security operations, workforce endpoint protection and more. Start with the problem you need to solve.", "Solutions: Security Automation and Managed Operations | V Pilot");
      if (b === "compare") return T("Compare Operating Models", <ComparePage />, "Compare Customer-Operated, Customer-Operated with V Pilot Remote Support, Hybrid Co-Managed or Fully Managed Operations and NativeTrust Endpoint by who runs the work and what evidence you receive.", "Compare Operating Models | PUDICA Autonomy and NativeTrust Endpoint | V Pilot");
      break;
    case "managed-security-operations": return T("Managed Security Operations", <MsoPage />, "Delegate vulnerability and compliance remediation, detection, incident response and recovery assurance to V Pilot, within agreed scope and approvals.");
    case "solutions": {
      if (b === "nativetrust") return T("Choose a scope", <ScopeChooser kind="nativetrust" />, undefined, undefined, { noindex: true });
      const s = SOLUTIONS.find((x) => x.slug === b);
      if (s) return T(s.name, <SolutionDetail key={s.slug} item={s} />, s.lead);
      break;
    }
    case "services": {
      if (!b) return T("Services", <ServicesPage />, "Choose Managed Security Operations, Specialist Solutions or GRC as a Service. Agree who operates the work, who approves changes and what evidence you receive.", "Cybersecurity Services | V Pilot");
      const slug = ALIASES[b] || b;
      if (slug === "__chooser") return T("Choose a scope", <ScopeChooser kind="it-infra" />, undefined, undefined, { noindex: true });
      const s = bySlug(slug);
      if (s) return T(s.name, <ServiceDetail key={s.slug} item={s} />, `${s.headline} ${s.scope}`, s.seoTitle);
      break;
    }
    case "pudica-autonomy":
      if (!b) return T("PUDICA Autonomy", <PudicaPage />, "Automate eligible cloud security workflows, extend across hybrid infrastructure as workflows qualify, and keep control of production change with PUDICA Autonomy.", "PUDICA Autonomy | Security Operations Automation by V Pilot");
      break;
    case "resources":
      if (!b) return T("Resources", <ResourcesPage />);
      if (b === "frameworks") return T("ProdSecOps & ProdSecApps", <FrameworksPage />, "ProdSecOps and ProdSecApps guide infrastructure and application security as continuous lifecycles. They are operating frameworks, not software products or certification labels.");
      if (b === "sample-change-decision") return T("Sample change decision", <SampleDecisionPage />);
      if (b === "executive-assurance-summary") return T("Executive assurance summary", <SummaryPage />);
      break;
    case "company":
      if (!b) return T("Company", <CompanyPage />);
      if (b === "profile") return T("Company profile 2026", <ProfilePage />, "V Pilot company profile 2026: purpose, operating model, service portfolio, partner ecosystem, measures and standards alignment for Managed Security Operations, Specialist Solutions and GRC as a Service.", "Company Profile 2026 | Integrated Cyber Operations, Governance & Assurance | V Pilot");
      if (b === "careers") return T("Careers", <CareersPage />, "Open roles for Cloud Forensics Analyst, DevSecOps Engineer and Pentest Engineer, plus an internship with a hands-on challenge in cloud forensics and application security governance.", "Careers | Cloud Forensics, DevSecOps and Pentest Roles at V Pilot");
      break;
    case "contact": return T("Contact", <ContactPage />);
    case "support": return T("Customer support", <SupportPage />);
    case "legal": return T("Legal & Trust", <LegalIndex />);
    default:
  }
  return T("Page not found", <NotFound />, undefined, undefined, { noindex: true });
}
function upsertHead(tag, key, attrs) {
  let el = document.head.querySelector(`${tag}[${key[0]}="${key[1]}"]`);
  if (!el) { el = document.createElement(tag); el.setAttribute(key[0], key[1]); document.head.appendChild(el); }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}
function Shell() {
  const { path, hash, nonce } = useRouter();
  const reduced = useReducedMotion();
  const rootRef = useRef(null);
  const lastPath = useRef(null);
  const route = useMemo(() => resolve(path, reduced), [path, reduced]);
  useReveal(rootRef, !reduced, path);
  useTilt(rootRef, !reduced);
  useEffect(() => {
    const title = route.full || (path === "/" ? `${SITE} | ${route.title}` : `${route.title} | ${SITE}`);
    const desc = route.desc || DEFAULT_DESC;
    const url = SITE_URL + (path === "/" ? "/" : path);
    document.title = title;
    upsertHead("meta", ["name", "description"], { content: desc });
    upsertHead("meta", ["name", "robots"], { content: route.noindex ? "noindex,follow" : "index,follow,max-image-preview:large" });
    upsertHead("link", ["rel", "canonical"], { href: url });
    upsertHead("meta", ["property", "og:title"], { content: title });
    upsertHead("meta", ["property", "og:description"], { content: desc });
    upsertHead("meta", ["property", "og:url"], { content: url });
    upsertHead("meta", ["name", "twitter:title"], { content: title });
    upsertHead("meta", ["name", "twitter:description"], { content: desc });
  }, [path, route]);
  useEffect(() => {
    const changed = lastPath.current !== path;
    lastPath.current = path;
    if (changed) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (!hash) return undefined;
    let tries = 0;
    let t;
    const go = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: reduced || changed ? "auto" : "smooth", block: "start" });
      else if (tries++ < 12) t = setTimeout(go, 60);
    };
    t = setTimeout(go, changed ? 80 : 0);
    return () => clearTimeout(t);
  }, [path, hash, nonce, reduced]);
  return (
    <div ref={rootRef} className={`site ${reduced ? "" : "motion-ok"}`}>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); const m = document.getElementById("main"); if (m) m.focus(); }}>Skip to content</a>
      <Header reduced={reduced} />
      <main id="main" tabIndex={-1} key={path} className="page">{route.el}</main>
      <Footer reduced={reduced} />
      <AskVPilot />
    </div>
  );
}
export default function App() { return (<Router><Shell /></Router>); }
