import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DatabaseBackup,
  Eye,
  FileCheck2,
  FlaskConical,
  Gauge,
  KeyRound,
  Laptop,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  RotateCcw,
  ServerCog,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";
import "./vpilot-home-final.css";

const heroOutcomes = [
  [UsersRound, "Accountable operations", "One relationship across security, IT operations and recovery."],
  [Target, "Risk-governed decisions", "Business impact, threat activity and dependency determine priority."],
  [RotateCcw, "Validated resilience", "Prove remediation, response and recovery before operational reliance."],
  [Workflow, "Governed autonomy", "Advance only observable, authorised and recoverable workflows."],
];

const whyCards = [
  [UsersRound, "Integrated ownership", "Connect administration, monitoring, remediation, response and recovery."],
  [ShieldCheck, "Risk-governed action", "Use criticality, exposure, controls, dependencies and recoverability."],
  [Wrench, "Continuous remediation", "Move configuration, vulnerability and application findings to verified closure."],
  [Radar, "Detection assurance", "Validate telemetry, analytics logic, monitoring profiles and incident playbooks."],
  [DatabaseBackup, "Recovery confidence", "Prove service, configuration, monitoring and dependency restoration."],
  [Gauge, "Executive assurance", "Report ownership, exceptions, corrective action, resilience and residual risk."],
];

const executiveServices = [
  {
    Icon: Building2,
    title: "CISO as a Service",
    outcome: "Security leadership connected to operational delivery.",
    copy: "Security strategy, operating-model design, risk governance, programme oversight, executive reporting and board assurance. Technical priorities become owned roadmaps, measurable decisions and managed corrective action.",
    labels: ["Strategy", "Risk oversight", "Board reporting", "Operating governance"],
  },
  {
    Icon: ClipboardCheck,
    title: "Certification Readiness",
    outcome: "Operate controls. Preserve evidence. Demonstrate readiness.",
    copy: "ISO/IEC 27001 and related assurance support through gap assessment, control ownership, risk treatment, evidence design, internal review, corrective action and management-readiness preparation.",
    labels: ["Gap assessment", "Control operation", "Evidence readiness", "Corrective action"],
  },
  {
    Icon: LockKeyhole,
    title: "DPO & Privacy Operations",
    outcome: "Operational privacy accountability, not static documentation.",
    copy: "Processing inventories, data flows, DPIAs, rights requests, processor oversight, breach coordination and privacy evidence connected to daily business and technology operations.",
    labels: ["Processing inventory", "DPIA support", "Rights workflows", "Breach coordination"],
  },
  {
    Icon: Network,
    title: "Enterprise & Vendor Risk",
    outcome: "Risk decisions that influence technical operations.",
    copy: "Assess enterprise and supplier exposure, map dependencies, assign ownership, govern exceptions, track treatment commitments and report residual risk using current operational evidence.",
    labels: ["Enterprise risk", "Supplier assurance", "Exception governance", "Residual risk"],
  },
];

const pudicaStages = [
  {
    Icon: Radar,
    title: "Sense & Contextualise",
    copy: "Acquire authorised configuration, vulnerability, identity, telemetry and recovery evidence; classify it through the technical taxonomy and business-service context.",
    foot: "Exact target context",
  },
  {
    Icon: DatabaseBackup,
    title: "Preserve in GoldenVault",
    copy: "Maintain versioned trusted state, approved baselines, monitoring profiles, incident playbooks, dependencies and recovery blueprints.",
    foot: "Versioned operational knowledge",
  },
  {
    Icon: FlaskConical,
    title: "Prove in SecLabs",
    copy: "Reconstruct eligible target states and validate remediation, compatibility, telemetry, incident response, rollback and recovery in isolation.",
    foot: "Evidence before production",
  },
  {
    Icon: ShieldCheck,
    title: "Authorise & Orchestrate",
    copy: "Apply risk decisions, least privilege, customer approval, segregation of duties, change controls and human override before action.",
    foot: "Explicit operational authority",
  },
  {
    Icon: BrainCircuit,
    title: "Verify & Learn",
    copy: "Confirm service health, control effectiveness, monitoring continuity, recovery readiness and residual risk; update the Autonomy Risk Profile.",
    foot: "Continuous operational learning",
  },
];

const pudicaCapabilities = [
  [Wrench, "Autonomous remediation", "Configuration, vulnerability and application treatment within approved authority."],
  [Eye, "Detection assurance", "Telemetry health, analytics validation, monitoring profiles and coverage evidence."],
  [ShieldCheck, "Incident response", "Approved playbooks, containment, evidence, restoration and verification."],
  [DatabaseBackup, "Recovery assurance", "Restore proving, dependencies, rollback conditions and RPO/RTO evidence."],
  [KeyRound, "Identity operations", "Privilege, access policy, administrative authority and identity-state context."],
];

const readiness = [
  [Radar, "Baseline", "Establish authorised state, assets, ownership and evidence."],
  [Target, "Contextualise", "Map exposure, dependencies, controls, exceptions and recovery needs."],
  [FlaskConical, "Prove", "Validate remediation, monitoring, response, impact and recovery."],
  [Gauge, "Authorise", "Advance eligible workflows within approved boundaries."],
];

const nativeTrust = [
  [KeyRound, "Identity & access", "MFA, lifecycle administration, access policy and privilege separation."],
  [Laptop, "Managed endpoints", "Compliance, encryption, patch governance and secure configuration."],
  [Eye, "Managed browser", "Approved sites, extensions, downloads and supported DLP controls."],
  [Wrench, "IT support", "Software administration, user assistance and provider coordination."],
  [Layers3, "Application access", "Governed SaaS and business-application access."],
  [FileCheck2, "Continuous evidence", "Exceptions, service reviews, corrective action and operational proof."],
];

const continuousCycle = [
  [ClipboardCheck, "Service readiness", "Approve scope, inventory, RACI, access, baselines, telemetry, playbooks and acceptance criteria."],
  [Eye, "Observe", "Maintain workforce, infrastructure, application, telemetry and recovery visibility."],
  [Target, "Assess & prioritise", "Combine business risk, threat intelligence, exposure, controls and recoverability."],
  [Wrench, "Operate", "Administer, monitor, remediate, respond and recover within agreed authority."],
  [FlaskConical, "Validate", "Confirm effectiveness, compatibility, detection continuity and restoration."],
  [Activity, "Report & improve", "Preserve evidence, report residual risk and improve the operating baseline."],
];

const servicePortfolio = [
  {
    Icon: ShieldCheck,
    title: "Executive governance & assurance",
    promise: "Govern • Assure • Improve",
    copy: "CISO leadership, certification readiness, privacy operations, enterprise risk, supplier assurance and board reporting.",
    tone: "blue",
  },
  {
    Icon: Laptop,
    title: "NativeTrust managed workspace",
    promise: "Trust • Manage • Support",
    copy: "Zero Trust identity, endpoint governance, secure-browser controls, encryption, application access, user support and evidence.",
    tone: "green",
  },
  {
    Icon: Target,
    title: "Vulnerability remediation",
    promise: "Identify • Contextualise • Close",
    copy: "Configuration hardening, infrastructure vulnerabilities, supported scanner findings, risk treatment, retesting and verified closure.",
    tone: "red",
  },
  {
    Icon: Layers3,
    title: "Application security governance",
    promise: "Design • Build • Validate",
    copy: "Architecture assurance, threat modelling, SAST/DAST/SCA governance, CI/CD controls, remediation and secure release.",
    tone: "purple",
  },
  {
    Icon: Radar,
    title: "SIEM & monitoring operations",
    promise: "Monitor • Detect • Respond",
    copy: "Telemetry onboarding, monitoring profiles, detection engineering, alert triage, investigation, hunting and escalation." ,
    tone: "indigo",
  },
  {
    Icon: DatabaseBackup,
    title: "Incident, forensics & recovery",
    promise: "Contain • Recover • Learn",
    copy: "Incident readiness, playbook simulation, containment, digital and cloud forensics, restoration and resilience evidence.",
    tone: "orange",
  },
  {
    Icon: ServerCog,
    title: "Trusted configuration governance",
    promise: "Baseline • Control • Verify",
    copy: "Security baselines, configuration acquisition, drift management, compliance hardening, exceptions and evidence." ,
    tone: "cyan",
  },
];

const engagement = [
  [UsersRound, "Specialist engagement", "Focused expertise for one defined requirement.", ["Defined scope and service level", "Dedicated reporting and evidence", "Expandable when needed"]],
  [Network, "Integrated operations", "Multiple capabilities coordinated through one shared operating context.", ["Shared governance and evidence", "Cross-capability escalation", "Risk-based prioritisation"]],
  [Gauge, "Complete V Pilot operations", "An integrated operating model delivered as an extension of the organisation.", ["Connected technical operations", "Unified SLAs and reporting", "PUDICA orchestration and assurance"]],
];

function Heading({ eyebrow, title, lead, light = false }) {
  return (
    <div className={`vp-heading ${light ? "is-light" : ""}`} data-reveal>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

function CompactCard({ Icon, title, copy }) {
  return (
    <article className="vp-compact-card" data-reveal>
      <Icon aria-hidden="true" />
      <div><h3>{title}</h3><p>{copy}</p></div>
    </article>
  );
}

export default function HomePage({ initialSection = null }) {
  const location = useLocation();
  const [activeService, setActiveService] = useState(0);
  const activePortfolio = useMemo(() => servicePortfolio[activeService], [activeService]);

  useEffect(() => {
    const section = initialSection || new URLSearchParams(location.search).get("section") || location.hash.replace("#", "");
    if (section) window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 100);
    else window.scrollTo({ top: 0, behavior: "auto" });

    const nodes = document.querySelectorAll("[data-reveal], [data-stagger]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7%" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [initialSection, location.pathname, location.search, location.hash]);

  return (
    <main className="vp-home">
      <section className="vp-hero">
        <img className="vp-hero-image" src="/assets/vpilot-virtual-security-operations-hero.png" alt="" fetchPriority="high" />
        <div className="vp-hero-overlay" />
        <div className="vp-shell vp-hero-layout">
          <div className="vp-hero-copy" data-reveal>
            <span className="vp-kicker">Integrated cyber operations, governance & assurance</span>
            <h1><span>We Pilot Your</span><strong>Security Operations.</strong></h1>
            <h2>Expert-led operations today. Risk-governed autonomy when ready.</h2>
            <p>V Pilot connects workforce operations, infrastructure and application security, monitoring, remediation, incident response, recovery and executive assurance through one accountable operating model.</p>
            <div className="vp-actions">
              <Link className="vp-btn vp-primary" to="/platform">Explore PUDICA Autonomy <ArrowRight /></Link>
              <Link className="vp-btn vp-secondary" to="/contact?intent=operating-model">Design your operating model <ArrowRight /></Link>
            </div>
          </div>
        </div>
        <div className="vp-shell vp-outcomes">
          {heroOutcomes.map(([Icon, title, copy]) => <CompactCard key={title} Icon={Icon} title={title} copy={copy} />)}
        </div>
      </section>

      <section className="vp-section vp-why">
        <div className="vp-shell">
          <Heading eyebrow="WHY V PILOT" title="Minimum Viable Infrastructure. Maximum Viable Protection." lead="Retain what business services genuinely require while reducing avoidable complexity and increasing control coverage, recoverability, evidence quality and operational accountability." />
          <div className="vp-grid-3" data-stagger>{whyCards.map(([Icon, title, copy]) => <CompactCard key={title} Icon={Icon} title={title} copy={copy} />)}</div>
        </div>
      </section>

      <section className="vp-section vp-executive" id="executive-governance">
        <div className="vp-shell">
          <div className="vp-executive-heading">
            <Heading eyebrow="EXECUTIVE GOVERNANCE, PRIVACY & ASSURANCE" title="Specialised GRC leadership connected to daily cyber operations." lead="Give CISOs and executive teams one assurance layer across strategy, ISO/IEC 27001 readiness, privacy accountability, enterprise risk and supplier assurance. Decisions, owners, exceptions and corrective actions stay connected to current operational evidence." />
            <Link className="vp-executive-briefing" to="/contact?intent=executive-grc">Schedule a GRC briefing <ArrowRight /></Link>
          </div>
          <div className="vp-executive-grid" data-stagger>
            {executiveServices.map(({ Icon, title, outcome, copy, labels }, index) => (
              <article className={`vp-executive-card ${index === 0 ? "is-featured" : ""}`} key={title}>
                <div className="vp-executive-icon"><Icon /></div>
                <span className="vp-executive-type">{index === 0 ? "Executive leadership" : "Specialised assurance"}</span>
                <h3>{title}</h3><b>{outcome}</b><p>{copy}</p>
                <ul>{labels.map((label) => <li key={label}>{label}</li>)}</ul>
                <Link to={`/services?executive=${encodeURIComponent(title)}`}>Explore specialised service <ArrowRight /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section vp-platform" id="pudica-autonomy">
        <div className="vp-shell">
          <div className="vp-platform-intro" data-reveal>
            <div className="vp-platform-brand">
              <img src="/assets/pudica-approved-lockup.png" alt="PUDICA Autonomy" />
              <span>V PILOT'S FLAGSHIP CYBER-AUTONOMY SAAS PLATFORM</span>
            </div>
            <div>
              <span className="vp-kicker">Risk-driven • Threat-informed • ISO/IEC 27001-aligned operating method</span>
              <h2>AI-Driven Risk Autonomy for Technical Cyber Operations.</h2>
              <p>PUDICA connects organisational risk and threat intelligence with exact technical state to orchestrate vulnerability remediation, SIEM monitoring, incident response, identity operations and cyber recovery.</p>
              <p>GoldenVault preserves trusted operational knowledge. SecLabs proves eligible actions in isolation. Explicit authority governs execution. Verified outcomes update residual risk and the Autonomy Risk Profile.</p>
            </div>
          </div>

          <div className="vp-lifecycle-heading">
            <div><span>RISK AUTONOMY OPERATING LIFECYCLE</span><h3>Trusted context becomes governed technical action.</h3></div>
            <p>Every stage advances only when context, validation, authority, observability and recoverability requirements are satisfied.</p>
          </div>
          <div className="vp-lifecycle" data-stagger>
            {pudicaStages.map(({ Icon, title, copy, foot }, index) => (
              <article className="vp-lifecycle-stage" key={title} style={{ "--step": index }}>
                <div className="vp-lifecycle-stage-head"><Icon /><span>{title}</span></div>
                <p>{copy}</p>
                <div className="vp-lifecycle-stage-foot"><i />{foot}</div>
              </article>
            ))}
          </div>
          <div className="vp-platform-capabilities" data-stagger>
            {pudicaCapabilities.map(([Icon, title, copy]) => <CompactCard key={title} Icon={Icon} title={title} copy={copy} />)}
          </div>
          <div className="vp-platform-close">
            <b>From risk context to validated, authorised and recoverable cyber action.</b>
            <Link className="vp-btn vp-primary" to="/platform">Explore the Platform Architecture <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="vp-section vp-operating" id="how-we-operate">
        <div className="vp-shell">
          <Heading eyebrow="HOW V PILOT OPERATES" title="One Accountable Partner. One Risk-Governed Operating Architecture." lead="V Pilot provides specialists, service ownership, governance and executive assurance. PUDICA provides context, isolated proving, orchestration and operational learning. Customer leadership retains business authority and formal risk acceptance." />
          <div className="vp-operating-grid" data-reveal>
            <article><img src="/assets/vpilot-approved-3d-compass-nw.svg" alt="V Pilot" /><h3>Accountable expert operation</h3></article>
            <ArrowRight />
            <article><img src="/assets/pudica-approved-lockup.png" alt="PUDICA Autonomy" /><h3>Governed technical orchestration</h3></article>
          </div>
          <div className="vp-readiness">
            <div className="vp-readiness-title"><span>AUTONOMY READINESS</span><h3>Autonomy earned through evidence.</h3></div>
            <div className="vp-readiness-row">
              {readiness.map(([Icon, title, copy], index) => (
                <article key={title}><Icon /><div><h4>{title}</h4><p>{copy}</p></div>{index < readiness.length - 1 && <ArrowRight />}</article>
              ))}
              <aside><span>A GUIDED JOURNEY</span><div><b>Human-led</b><ArrowRight /><b>AI-assisted</b><ArrowRight /><b>Approval-gated</b><ArrowRight /><b>Policy-governed</b></div></aside>
            </div>
          </div>
        </div>
      </section>

      <section className="vp-section vp-native" id="nativetrust">
        <div className="vp-shell">
          <Heading eyebrow="NATIVETRUST MANAGED WORKSPACE" title="Secure the Native Workstation. Simplify Workforce Operations." lead="NativeTrust combines identity administration, endpoint compliance, encryption, secure-browser controls, application access, software support, user assistance and continuous operational evidence." />
          <div className="vp-native-grid">
            <img src="/assets/vpilot-nativetrust-managed-workspace.png" alt="NativeTrust managed workspace" data-reveal />
            <div data-stagger>{nativeTrust.map(([Icon, title, copy]) => <CompactCard key={title} Icon={Icon} title={title} copy={copy} />)}</div>
          </div>
        </div>
      </section>

      <section className="vp-section vp-continuous" id="continuous-operations">
        <div className="vp-shell">
          <Heading eyebrow="SERVICE READINESS & CONTINUOUS OPERATIONS" title="Establish the Service. Operate Continuously. Improve With Evidence." lead="Every engagement begins with an approved operating baseline, then moves into a recurring cycle connecting administration, remediation, monitoring, response, recovery and assurance." />
          <div className="vp-cycle" data-stagger>
            {continuousCycle.map(([Icon, title, copy], index) => (
              <article key={title}><Icon /><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p>{index < continuousCycle.length - 1 && <ArrowRight />}</article>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section vp-services" id="services">
        <div className="vp-shell">
          <div className="vp-section-top">
            <Heading eyebrow="CONNECTED OPERATIONAL SERVICES" title="Specialist Services. One Shared Operating Context." lead="Choose one service, combine related services, or delegate an integrated operating scope. Shared ownership, risk criteria, authority, evidence, escalation and recovery requirements keep every service connected." />
            <Link to="/services">Explore all services <ArrowRight /></Link>
          </div>
          <div className="vp-service-tabs" role="tablist" aria-label="V Pilot service portfolio">
            {servicePortfolio.map((item, index) => (
              <button key={item.title} className={index === activeService ? "is-active" : ""} onClick={() => setActiveService(index)} role="tab" aria-selected={index === activeService}>
                <item.Icon /><span>{item.title}</span>
              </button>
            ))}
          </div>
          <div className={`vp-service-feature tone-${activePortfolio.tone}`} data-reveal>
            <div className="vp-service-feature-copy">
              <span>SPECIALISED SERVICE</span>
              <h3>{activePortfolio.title}</h3>
              <b>{activePortfolio.promise}</b>
              <p>{activePortfolio.copy}</p>
              <Link to={`/services?capability=${encodeURIComponent(activePortfolio.title)}`}>View service scope <ArrowRight /></Link>
            </div>
            <div className="vp-service-feature-grid">
              {servicePortfolio.map(({ Icon, title }, index) => <div key={title} className={index === activeService ? "is-active" : ""}><Icon /><span>{title}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="vp-section vp-engagement">
        <div className="vp-shell">
          <Heading eyebrow="ENGAGEMENT OPTIONS" title="Choose the Breadth of Support That Fits Your Organisation." lead="Capability selection determines what V Pilot delivers. Responsibility selection determines who operates, approves and assures it." />
          <div className="vp-engagement-grid">
            {engagement.map(([Icon, title, copy, items]) => (
              <article key={title} data-reveal><Icon /><h3>{title}</h3><p>{copy}</p><ul>{items.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul><Link to="/contact?intent=scope">Discuss this option <ArrowRight /></Link></article>
            ))}
          </div>
          <div className="vp-responsibility"><b>Responsibility choices</b><span>Managed</span><span>Co-managed</span><span>Assurance-led</span></div>
        </div>
      </section>

      <section className="vp-final">
        <div className="vp-shell"><div><span>START THE CONVERSATION</span><h2>Build the Operating Capability Your Business Needs.</h2><p>Begin with executive governance, NativeTrust, one specialist service or complete integrated operations.</p></div><div className="vp-actions"><Link className="vp-btn vp-primary" to="/contact">Book a Consultation <ArrowRight /></Link><Link className="vp-btn vp-secondary" to="/contact?intent=autonomy">Assess PUDICA Readiness <ArrowRight /></Link></div></div>
      </section>
    </main>
  );
}
