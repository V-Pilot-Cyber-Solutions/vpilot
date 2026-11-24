import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ShieldCheck, Workflow, FileCheck2, Layers3, Radar, RotateCcw, DatabaseBackup, FlaskConical, KeyRound, ServerCog, Network, Laptop, Building2, ClipboardCheck, LockKeyhole, Target, UsersRound } from "lucide-react";
import "./vpilot-home-final.css";

const briefing = "/contact?intent=executive-briefing";
const signIn = "https://pudica.io/MicrosoftIdentity/Account/SignIn";
// Contact fallback for offers without a confirmed standalone page.
const scope = (key) => `/contact?intent=${encodeURIComponent(key)}`;

const services = [
  [ServerCog, "IT & Infrastructure Security Operations", "Keep essential systems supportable and secure.", "Run agreed identity, endpoint, cloud and server operations. Coordinate patching, service requests and controlled changes.", "Service review covering changes, open issues and owners.", scope("infrastructure-operations")],
  [Network, "Cloud Migrations", "Move workloads without losing sight of continuity or control.", "Map dependencies and target controls, plan migration waves, and agree cutover, rollback and post-migration checks before moving workloads.", "Migration plan, cutover checklist and acceptance record.", scope("cloud-migrations")],
  [ClipboardCheck, "Security Configuration & Compliance Management", "Know where deployed configurations differ from approved policy.", "Assess benchmarks, maintain baselines, correct drift and track approved exceptions.", "Baseline, drift, retest and exception record.", scope("configuration-compliance")],
  [Target, "Vulnerability Remediation", "Close infrastructure and package exposure with evidence.", "Correlate scanner findings with actual exposure, prioritise by business impact, and validate approved treatments before verifying closure.", "Retest evidence or an owned, time-bound exception.", "/services/managed-vulnerability-remediation"],
  [Layers3, "Application Security Governance", "Make application risk an owned engineering decision.", "Set ownership, security requirements and release criteria. Route design and scan findings through the right engineering and release process.", "Application risk, treatment and release decision record.", scope("application-security-governance")],
  [Radar, "SIEM & Detection Operations", "Get a useful signal to the right responder.", "Maintain telemetry and configuration-aware monitoring profiles. Test detection logic, alert context, routing and escalation.", "Detection validation and coverage report.", "/services/managed-siem"],
  [ShieldCheck, "Incident Readiness & Response", "Contain disruption and coordinate a controlled return to service.", "Exercise playbooks, assess business impact and coordinate authorised containment, eradication and restoration.", "Exercised playbook or response decision timeline.", "/services/incident-readiness-response"],
  [FileCheck2, "Digital Forensics Investigations", "Establish what happened, what was affected and what remains uncertain.", "Preserve and analyse authorised endpoint, cloud and identity evidence. Maintain chain-of-custody records where applicable and separate observed facts from investigative conclusions.", "Forensic timeline, evidence register, findings and limitations.", scope("digital-forensics-investigations")],
  [DatabaseBackup, "Backup, Recovery & Continuity Assurance", "Demonstrate whether a priority service can recover.", "Review backup coverage, validate restore points and exercise critical dependencies against agreed time and data-loss objectives.", "Restore or recovery exercise evidence and corrective actions.", "/services/managed-backup-recovery"],
];

const governance = [
  [Building2, "CISO as a Service", "Give leadership a decision-ready view of risk.", "Connect strategy, ownership, exceptions and investment priorities to current operating evidence.", "Executive risk briefing and treatment roadmap.", "/services/ciso-as-a-service"],
  [ClipboardCheck, "Certification Readiness & Continuous Compliance", "Build evidence as controls are operated.", "Support ISO/IEC 27001 gap assessment, ISMS readiness, management review and corrective actions.", "Readiness roadmap and evidence inventory.", "/services/iso-27001-certification-readiness"],
  [LockKeyhole, "DPO & Privacy Operations", "Make privacy accountable in day-to-day work.", "Support applicable privacy readiness, processing inventories, rights workflows and processor oversight.", "Owned privacy action register.", scope("privacy-operations")],
  [Network, "Enterprise Risk & Vendor Assurance", "Identify business-service and supplier risks that need a decision.", "Assess dependencies and suppliers, review evidence, and track treatments, exceptions and reassessment.", "Risk treatment and supplier assurance records.", scope("enterprise-vendor-assurance")],
];

const capabilities = [
  [Target, "Autonomous Remediations", "Close exposure without losing sight of service continuity.", "Start with approved configuration benchmarks. Correlate applicable scanner findings to distinguish configuration corrections from infrastructure and software-package patches. Application findings stay in the portfolio but follow ProdSecApps engineering and release governance.", "Retest, service-health checks and any approved exception.", "/platform/autonomous-remediation"],
  [Radar, "Integrated Security Operations", "Know whether your detections and response procedures work together.", "Use asset and configuration context to validate SIEM detections, exercise incident playbooks and coordinate eligible identity and access actions within approved authority.", "Detection test, escalation route or authorised response record.", "/platform/integrated-security-operations"],
  [DatabaseBackup, "Autonomous Resilience", "Show which services can recover, and under what conditions.", "Check backup coverage, validate restore points and rehearse rollback or restoration for eligible workflows. Compare results with agreed recovery objectives and record untested dependencies.", "Restore test results, recovery objectives and outstanding dependencies.", "/platform/autonomous-resilience"],
  [FileCheck2, "GRC & Operational Evidence", "Give leadership a current view of exceptions and remaining risk.", "Link control evidence, approval decisions, time-bound exceptions and residual risk to the originating workflow and its accountable owner.", "Approval history, exception owner and next review date.", "/platform/grc-compliance"],
];

const platformControls = [
  ["Versioned state", "GoldenVault keeps observed configurations separate from approved baselines and preserves the version used for validation."],
  ["Isolated validation", "SecLabs reconstructs relevant conditions to check compatibility, detection, and rollback or restoration before production reliance."],
  ["Customer-controlled execution", "The Autonomy Risk Profile routes work to human review, explicit approval, or pre-approved policy. A passing test never grants execution authority."],
];

const lifecycle = [
  [Radar, "Acquire and contextualise", "SenseScan acquires authorised configuration evidence across the Six-Layer Technical Taxonomy. Classify the observed state against benchmarks and link it to business services and relevant findings."],
  [DatabaseBackup, "Preserve in GoldenVault", "Version observed configurations separately from approved baselines, monitoring profiles, playbooks and recovery blueprints."],
  [FlaskConical, "Validate in SecLabs", "Reconstruct relevant conditions in isolation. Test eligible changes, service compatibility, detection signals and rollback or recovery paths."],
  [ShieldCheck, "Authorise and operate", "Use the Autonomy Risk Profile to route actions to human review, explicit approval or customer-approved policy execution."],
  [FileCheck2, "Verify and learn", "Check service health, detection coverage and the outcome after execution. Feed evidence and remaining risk back into GoldenVault."],
];
const roles = [
  [ShieldCheck, "V Pilot operates", "We run the contracted scope, coordinate escalation and report what changed, what was verified and what remains open."],
  [Workflow, "PUDICA validates and orchestrates", "The platform links evidence, isolated testing, authorised action and production verification for eligible workflows."],
  [Building2, "Customer leadership retains authority", "Your authorised owners keep material approvals and formal risk acceptance. Business ownership and statutory accountability stay with the customer."],
];
const engagements = [
  [Target, "Specialist Engagement", "Start with a defined migration, remediation, investigation, application review or recovery exercise. Receive the agreed evidence and handover."],
  [UsersRound, "Co-Managed Operations", "Keep your internal team and agree who operates each control, approves changes and owns escalation."],
  [ShieldCheck, "Fully Managed Operations", "Delegate day-to-day delivery across the contracted workspace, infrastructure and security scope, with agreed reporting and service levels."],
];
const workspace = [
  [KeyRound, "Identity and access", "Joiners, movers and leavers, MFA, conditional access and privileged administration."],
  [Laptop, "Devices and customer data", "Device compliance, patching, encryption, approved software, managed browser and supported data loss prevention."],
  [ServerCog, "Essential infrastructure", "Remote operation of agreed cloud services, business applications and necessary customer-hosted servers."],
  [ClipboardCheck, "IT support and change", "User support, incident coordination, controlled change and evidence aligned to agreed ISO/IEC 27001 objectives."],
];
const decision = [
  ["Business service", "Remote workforce access."],
  ["Treatment", "Update the gateway package and correct the configuration deviation."],
  ["SecLabs checks", "Confirm approved access, expected SIEM signals and a viable rollback path."],
  ["Decision rights", "The designated change owner approves rollout. Any residual-risk exception goes to the authorised risk owner."],
  ["Closure criteria", "Verify production access and monitoring. If a check fails, follow the approved rollback or escalation path."],
];

function Action({ to, children, variant = "primary" }) {
  return <Link to={to} className={`vp-button is-${variant}`}>{children}<ArrowRight aria-hidden="true" /></Link>;
}
function Heading({ eyebrow, title, id, children }) {
  return <div className="vp-heading"><p className="vp-kicker">{eyebrow}</p><h2 id={id}>{title}</h2>{children && <p className="vp-lead">{children}</p>}</div>;
}
function Cards({ items, className = "", evidenceLabel = "Example deliverable" }) {
  return <div className={`vp-grid ${className}`}>{items.map(([Icon, title, outcome, copy, evidence, to]) => (
    <article key={title} className="vp-card" data-vp-motion><Icon className="vp-icon" aria-hidden="true" /><h3>{title}</h3>
      <p className={copy ? "vp-outcome" : undefined}>{outcome}</p>{copy && <p>{copy}</p>}
      {evidence && <dl className="vp-deliverable"><dt>{evidenceLabel}</dt><dd>{evidence}</dd></dl>}
      {to && <Action to={to} variant="text">{to.startsWith("/contact?") ? "Discuss scope" : "Explore scope"}<span className="vp-sr-only">: {title}</span></Action>}
    </article>
  ))}</div>;
}

export default function HomePage({ initialSection = null }) {
  const root = useRef(null);
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    const raw = initialSection || new URLSearchParams(search).get("section") || hash;
    if (!raw) return;
    let id = raw.replace(/^#/, "");
    try { id = decodeURIComponent(id); } catch { /* Keep the original ID. */ }
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target || !root.current?.contains(target)) return;
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ block: "start", behavior: reduced ? "instant" : "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [initialSection, pathname, hash, search]);
  useEffect(() => {
    const node = root.current;
    if (!node || typeof window.IntersectionObserver !== "function") return;
    const observer = new window.IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) if (isIntersecting) {
        target.setAttribute("data-vp-entered", "");
        observer.unobserve(target);
      }
    }, { threshold: .12 });
    node.querySelectorAll("[data-vp-motion]:not([data-vp-entered])").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <main className="vp-home" ref={root}>
    <section className="vp-hero vp-dark" aria-labelledby="vp-home-title">
      <img
        className="vp-hero-backdrop"
        src="/assets/vpilot-virtual-security-operations-hero.png"
        width={1024}
        height={1337}
        alt=""
        fetchPriority="high"
      />
      <div className="vp-shell vp-hero-layout">
        <div className="vp-hero-copy">
          <p className="vp-kicker">Integrated Cyber Operations, Governance &amp; Assurance</p>
          <h1 id="vp-home-title"><span>We Pilot Your</span>{" "}<strong>Security Operations.</strong></h1>
          <p className="vp-lead">V Pilot connects IT support, technical cyber operations, executive governance and recovery through one accountable operating model.</p>
          <p className="vp-lead"><strong>PUDICA Autonomy</strong> converts organizational risk, threat intelligence and trusted technical evidence into validated cyber action.</p>
          <div className="vp-actions"><Action to={briefing}>Book an executive briefing</Action><Action to="/platform" variant="outline">Explore PUDICA Autonomy</Action></div>
        </div>
      </div>
    </section>
    <section className="vp-section vp-tint" id="why-v-pilot" aria-labelledby="vp-why-title"><div className="vp-shell">
      <Heading id="vp-why-title" eyebrow="Why V Pilot" title="Know what is controlled, what changed and what can recover.">Reduce avoidable complexity without weakening controls or recovery readiness. Give every agreed control an owner and define how its operation will be verified.</Heading>
      <Cards items={[[UsersRound,"Know who owns the work","See who operates the control, who approves the change and who handles escalation."],[FileCheck2,"Verify corrective action","Review whether the finding closed, the service stayed healthy and any exception needs action."],[RotateCcw,"Test service recovery","See what was restored, which dependencies were tested and which gaps remain."]]} />
    </div></section>
    <section className="vp-section" id="how-we-operate" aria-labelledby="vp-operation-title"><div className="vp-shell">
      <Heading id="vp-operation-title" eyebrow="How we operate" title="Delegate delivery. Retain decision rights." />
      <Cards items={roles} />
      <p className="vp-note" id="continuous-operations">We agree scope, baselines, authority, escalation and recovery requirements before operating. <strong>ProdSecOps</strong> guides infrastructure security. <strong>ProdSecApps</strong> guides application governance from acquisition and design through release, operation and retirement.</p>
    </div></section>
    <section className="vp-section vp-dark" id="pudica-autonomy" aria-labelledby="vp-platform-title"><div className="vp-shell">
      <Heading id="vp-platform-title" eyebrow="Flagship SaaS platform" title="PUDICA Autonomy"><strong>Context Before Action. Confidence After Recovery.</strong> PUDICA Autonomy is V Pilot’s AI-assisted, policy-governed security orchestration platform. It connects evidence from supported tools to isolated validation, customer-approved action and production verification. Autonomous Remediations is one capability within that platform.</Heading>
      <div className="vp-platform-overview" aria-labelledby="vp-capability-title">
        <h3 id="vp-capability-title" className="vp-flow-heading">Platform capabilities and decision evidence</h3>
        <Cards items={capabilities} className="vp-grid--two vp-capabilities" evidenceLabel="Example evidence" />
        <dl className="vp-platform-controls" aria-label="Platform controls">
          {platformControls.map(([title, copy]) => <div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}
        </dl>
      </div>
      <h3 className="vp-flow-heading">How evidence becomes an authorised action</h3>
      <ol className="vp-flow" aria-label="Shared PUDICA lifecycle">{lifecycle.map(([Icon,title,copy],i) => <li key={title}><span className="vp-step" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><Icon aria-hidden="true" /><h4>{title}</h4><p>{copy}</p></li>)}</ol>
      <p className="vp-note">Scope and integration support are agreed during onboarding. SecLabs does not replace required staging, performance testing or enterprise recovery exercises.</p>
      <div className="vp-actions"><Action to="/platform" variant="outline">Explore platform architecture</Action><a className="vp-button is-text" href={signIn}>Sign in to PUDICA <span className="vp-domain">pudica.io</span><ArrowRight aria-hidden="true" /></a></div>
    </div></section>
    <section id="decision-evidence" className="vp-section vp-tint" aria-labelledby="vp-evidence-title"><div className="vp-shell vp-split">
      <Heading id="vp-evidence-title" eyebrow="A remediation example" title="See the evidence behind a security decision.">A gateway update shows what the change approver needs to see before release and what the operator must verify in production. This is an illustrative record, not a customer result.</Heading>
      <figure className="vp-record"><figcaption>Illustrative change decision record</figcaption><dl>{decision.map(([label,copy]) => <div key={label}><dt>{label}</dt><dd>{copy}</dd></div>)}</dl></figure>
    </div></section>
    <section className="vp-section" id="services" aria-labelledby="vp-services-title"><div className="vp-shell">
      <Heading id="vp-services-title" eyebrow="Operational services" title="Cybersecurity operations with defined deliverables">Commission a specific service or combine ongoing operations under one agreement. Define the systems in scope, service levels, change authority and what counts as completion.</Heading>
      <Cards items={services} /><div className="vp-actions"><Action to="/services" variant="outline">Explore all services</Action></div>
    </div></section>
    <section className="vp-section vp-tint" id="executive-governance" aria-labelledby="vp-governance-title"><div className="vp-shell">
      <Heading id="vp-governance-title" eyebrow="Executive Governance, Privacy & Assurance" title="Give leadership a clear basis for risk decisions.">Connect control evidence to management review: which risks exceed tolerance, who owns treatment and what leadership needs to decide.</Heading>
      <Cards items={governance} className="vp-grid--two" /><p className="vp-note">Readiness support does not confer certification. Independent audit and certification decisions remain separate. Any formal DPO appointment is separately scoped.</p>
    </div></section>
    <section className="vp-section" id="nativetrust" aria-labelledby="vp-workspace-title"><div className="vp-shell">
      <Heading id="vp-workspace-title" eyebrow="NativeTrust Managed Workspace" title="Remote IT and security for the complete workspace.">NativeTrust brings cloud-first workspace support and security operations together for small and mid-sized businesses. We remotely manage people’s access, devices, approved apps and essential infrastructure under agreed Zero Trust policies.</Heading>
      <Cards items={workspace} className="vp-grid--two" /><div className="vp-actions"><Action to="/solutions/nativetrust-workspace" variant="outline">Explore NativeTrust Managed Workspace</Action></div>
    </div></section>
    <section className="vp-section vp-tint" id="engagement-options" aria-labelledby="vp-engagement-title"><div className="vp-shell">
      <Heading id="vp-engagement-title" eyebrow="Ways to engage" title="Choose the right level of operational responsibility." /><Cards items={engagements} />
    </div></section>
    <section className="vp-section vp-dark vp-close" aria-labelledby="vp-final-title"><div className="vp-shell vp-split">
      <Heading id="vp-final-title" eyebrow="Executive briefing" title="Define the operating scope in an executive briefing.">Bring a control gap, planned migration or recovery priority. We’ll discuss scope, escalation, decision rights and the evidence you need to judge progress.</Heading>
      <div className="vp-actions"><Action to={briefing}>Book an executive briefing</Action><Action to={scope("autonomy")} variant="outline">Assess PUDICA readiness</Action></div>
    </div></section>
  </main>;
}
