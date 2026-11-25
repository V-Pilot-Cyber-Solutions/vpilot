import { asset } from "../lib/config";
import { Link } from "../lib/router";

export const DEPLOY_CARDS = [
  { icon: "cloud", t: "Platform", d: "PUDICA Autonomy is delivered as a SaaS platform. Customer-hosted requirements are discussed during scoping and agreed individually. They are not a separate self-managed edition." },
  { icon: "flask", t: "Test bed", d: "Eligible validation takes place in a test bed your organisation owns, informed by the SecLabs Knowledge Center. Test-bed ownership does not make the platform customer-hosted." },
  { icon: "users", t: "Who operates", d: "The platform subscription is separate from Co-Managed or Fully Managed Operations. The agreement confirms who is responsible for configuration, policies, monitoring and escalation." },
];
export const READINESS_ENV = [
  { env: "Cloud-managed estate", window: "About one month", note: "For an eligible, well-bounded cloud-only scope.", does: "Establish access, device inventory, policies, service desk, baseline reporting and escalation. Enable selected workflows as they pass readiness checks." },
  { env: "Complex hybrid infrastructure", window: "Up to six months", note: "Planning window, confirmed after discovery.", does: "Provide PUDICA platform access plus extensive virtual management support as agreed. V Pilot operates the available scope, maps dependencies, builds the ARP and validates candidate workflows in stages." },
];
/* ==========================================================================
   PUDICA Autonomy
   ========================================================================== */
export const TOOL_SOURCES = [["search", "Scanner report"], ["alert", "SIEM alert"], ["key", "Identity or endpoint event"], ["code", "Application finding"], ["restore", "Backup report"]];
export const TOOL_STEPS = [
  { icon: "database", t: "Ingest the evidence", d: "Supported outputs enter as findings, alerts and control evidence." },
  { icon: "layers", t: "Match it", d: "Link each finding to the asset, owner, deployed configuration and baseline." },
  { icon: "flask", t: "Test the proposed action", d: "Eligible actions are tested in isolation, away from production." },
  { icon: "gate", t: "Apply customer-approved authority", d: "Policy decides what can run. A lab result supports the decision; it is not permission.", gate: true },
  { icon: "check", t: "Verify and record", d: "Production checks show whether it worked, and the result is recorded." },
];
export const WORKSTREAMS = [
  { icon: "sliders", name: "Configuration & Identity Operations", home: "Maintain the approved configuration and access context behind each decision. V Pilot governs baselines, privileged access and exceptions; PUDICA supports eligible actions.",
    buyer: "Which baselines and access policies apply, who governs them, and where drift or exceptions need action. This is the operating foundation V Pilot's team manages.",
    promise: "Maintain approved configuration and access policies. V Pilot's team governs baselines, identity lifecycle, privileged access and exceptions; PUDICA coordinates eligible changes using the customer's risk context.",
    evidence: "Baseline comparison, drift and access reviews, approval and exception records.",
    uses: ["Baseline drift: route an unexpected service setting to its owner with before-and-after evidence.", "Privileged access review: flag temporary access due to expire and route renewal for approval."] },
  { icon: "shieldcheck", name: "Autonomous Remediations", home: "Covers configuration benchmark issues, software package vulnerabilities and application vulnerabilities. Test compatibility and rollback where applicable, and distinguish verified closure from an approved exception.",
    buyer: "Whether the treatment addresses the actual configuration or package exposure, with compatibility and rollback evidence where applicable. Eligible application remediation still follows the application owner's engineering, testing and release controls.",
    promise: "Treat the affected configuration, software package or application exposure, not just the scanner result. Validate whether the change reduces exposure and preserves the service before it moves toward production.",
    evidence: "Applicability decision, lab findings, approved change, production retest or an open exception.",
    uses: ["Gateway update: associate the approved change with its GoldenVault version and test compatibility and rollback.", "Deferred package fix: link the open exposure to compensating controls and an exception review."] },
  { icon: "search", name: "SIEM & Detection Operations", home: "Verify that expected telemetry reaches the right responder, with asset and risk context. Keep monitoring linked to unresolved exposures and time-bound exceptions.",
    buyer: "Whether expected telemetry, detection behaviour and escalation work for the deployed environment and its open risks.",
    promise: "Make monitoring reflect what is actually deployed, what matters to the business and what risks remain open, using supported SIEM environments such as Splunk or Microsoft Sentinel where scoped.",
    evidence: "Detection test, telemetry coverage, escalation route and monitoring tied to an open exception.",
    uses: ["New log source: validate signal receipt and routing with controlled test telemetry.", "Exception monitoring: link an open risk to a detection and review both when the exception expires."] },
  { icon: "restore", name: "Autonomous Resilience", home: "Reconstruct relevant configurations, exercise separately scoped data restoration, and record which services and dependencies have demonstrated recoverability.",
    buyer: "What configuration can be reconstructed, what data is separately protected, and what service recovery has actually been tested. GoldenVault is not business-data backup by default.",
    promise: "Connect configuration reconstruction, separately scoped backup protection and tested restoration. Know what can be recovered, under what conditions and with which dependencies.",
    evidence: "Backup coverage, restore exercise results, recovery objectives and corrective actions.",
    uses: ["Configuration reconstruction: test whether the relevant service settings can be rebuilt from a named version.", "Data restore: exercise a separately protected workload and measure what can actually return."] },
  { icon: "alert", name: "Autonomous Incident Management", home: "Exercise playbooks and coordinate repeatable, authorised responses where the necessary remediation, detection and resilience workstreams are in scope. Escalate novel or material decisions.",
    buyer: "Which playbooks have been exercised and which repeatable response actions may be coordinated within approved authority. The detail page shows the required remediation, detection and resilience subscriptions.",
    promise: "Prepare and exercise response playbooks against representative defensive scenarios, then coordinate approved actions when production signals match the validated conditions. Unfamiliar or materially disruptive cases go to the designated incident lead.",
    evidence: "Playbook version, exercise results, authority, event timeline and recovery verification.",
    uses: ["Playbook rehearsal: exercise an account-compromise scenario using controlled defensive signals and check escalation.", "Previously validated response: proceed only when production conditions match the approved workflow; otherwise escalate."] },
  { icon: "laptop", name: "NativeTrust Endpoint", link: ["Open the NativeTrust Endpoint service", "/services/nativetrust-endpoint"],
    home: "Managed endpoint security for supported desktops, laptops, browsers and approved applications. V Pilot configures and operates agreed Zero Trust controls and reports policy coverage, exceptions and corrective actions.",
    buyer: "Which devices, browsers and applications are covered, which controls apply to each device group, and where exceptions need a decision. V Pilot's team operates the agreed policies.",
    promise: "Secure the desktop your people already use. Device posture and identity inform access to approved applications, and managed browser and endpoint policies help govern how people handle customer data. Controls such as download, upload or copy restrictions depend on supported tooling, licensing and agreed scope.",
    evidence: "Device and browser policy coverage, exceptions with owners and review dates, and corrective actions.",
    uses: ["Pilot group: apply device compliance and browser policy to a representative group, then confirm people can still complete their daily work.", "Policy exception: route a browser-policy request to the approver, apply the narrowest change and record its expiry."] },
];
export const STAGES = [
  { icon: "database", v: "Acquire", verb: "SenseScan acquires", sys: "SenseScan", short: "Capture authorised configuration evidence and correlate applicable findings.",
    text: "Authorised Forensic Configuration Acquisition captures evidence against applicable CIS Benchmarks or customer-defined controls, organised across the Six-Layer Technical Taxonomy. Findings from tools such as Tenable or Qualys are linked to the asset, component and configuration version. This is configuration evidence, not incident forensic collection.",
    items: ["Authorised configuration", "Supported scanner findings", "Supported SIEM telemetry", "Six-layer taxonomy"] },
  { icon: "layers", v: "Version", verb: "GoldenVault versions the observed state", sys: "GoldenVault", short: "Keep the observed state separate from the approved baseline.",
    text: "Store Compliance as Backup Code (CaBC) as a versioned configuration package or GoldenVault image. Keep the observed state separate from the approved baseline: a captured system may contain drift, and versioning it does not approve it. GoldenVault preserves configuration and reconstruction knowledge. It does not back up business data by default.",
    items: ["Versioned observed state", "Approved baselines", "Monitoring profiles", "Recovery procedures"] },
  { icon: "flask", v: "Validate", verb: "Validation in isolation", sys: "Test bed", sandbox: true, short: "Reconstruct the relevant conditions and test the proposed action away from production.",
    text: "The relevant conditions are reconstructed in an isolated environment. In PUDICA Autonomy that is a customer-owned test bed, informed by the SecLabs Knowledge Center. The team compares the observed or drifted state with the approved baseline, checks remediation and service compatibility, and validates detection, rollback and restoration where applicable, using controlled defensive simulations. A lab result is not proof of production behaviour.",
    items: ["Compatibility", "Expected detection signals", "Service impact", "Rollback and restoration"] },
  { icon: "gate", v: "Authorise", verb: "Customer-approved authority governs execution", sys: "Authority gate", gate: true, short: "The Autonomy Risk Profile routes the action to review, approval or pre-approved policy.",
    text: "The Autonomy Risk Profile (ARP) determines the route to production: expert review, explicit approval or a pre-approved policy. When evidence, dependencies or recovery readiness are insufficient, the action is held for specialist treatment or raised as a time-bound risk exception with an owner, compensating controls and an expiry date. A passing test is evidence, not permission.",
    items: ["Expert review", "Explicit approval", "Pre-approved policy", "Hold or time-bound exception"] },
  { icon: "chart", v: "Verify", verb: "Production checks verify the outcome", sys: "Production", short: "Execute only within approved authority, then check service health and control effect.",
    text: "Where appropriate, the validated treatment is packaged as Autonomous Remediation Code (ARC) with its tested detection logic, playbook and rollback or restore procedure. After authorised deployment, production checks verify the control, service health and expected telemetry. Reuse the evidence only within its validated scope.",
    items: ["Service health", "Control effect", "Expected telemetry", "Escalate or roll back"] },
];
export const STAGE_DELAYS = [1800, 1800, 2800, 3800, 3000];
export const ACR_LINKS = [
  { icon: "layers", t: "GoldenVault version", d: "The named observed state the change is built from." }, { icon: "clipboard", t: "Validation criteria", d: "Expected outcome, acceptance and compatibility checks." },
  { icon: "search", t: "Detection evidence", d: "The telemetry and alerts that should appear after change." }, { icon: "restore", t: "Recovery requirements", d: "Rollback or restoration that must be shown to work." },
];
const RESILIENCE_PILLARS = [
  { t: "Reconstruct configuration", d: "Rebuild settings from a versioned CaBC package or GoldenVault image." },
  { t: "Protect workload and business data", d: "Separately scoped backup systems protect data and workloads." },
  { t: "Prove service recovery", d: "Restoration exercises and dependency checks show the service can return." },
];
export const LAYERS = ["OSE Kernel", "Services and Middleware", "Database", "EMS (Enterprise Managed Layer)", "Network", "Standalone Software Packages"];
export const AUTONOMY = [{ a: "A0", n: "Observe" }, { a: "A1", n: "Recommend" }, { a: "A2", n: "Prepare" }, { a: "A3", n: "Human-approved execution" }, { a: "A4", n: "Policy-governed execution" }, { a: "A5", n: "Governed closed loop" }];
export const ADOPTION = [
  { icon: "eye", t: "Observe & baseline", d: "Understand the environment." }, { icon: "refresh", t: "Understand risk", d: "Analyse exposure and dependencies." },
  { icon: "flask", t: "Recommend & validate", d: "Test and prove in a controlled scope." },
  { icon: "gate", t: "Authorise", d: "The customer decides which workflows may run, and under what policy.", gate: true },
  { icon: "chart", t: "Operate under policy & verify", d: "Run approved workflows and verify every outcome." },
];
export const RECORD = [
  { label: "Proposed change", status: "Proposed", tone: "neutral", text: "A package update and a configuration correction for the remote-access gateway." },
  { label: "GoldenVault version used", status: "Referenced", tone: "neutral", text: "The proposal is linked to a named GoldenVault version, kept separate from the approved baseline." },
  { label: "Isolated checks", status: "Validated in isolation", tone: "verified", text: "Access, expected SIEM signals and rollback checked in an isolated environment. Material differences from production recorded." },
  { label: "Change approval", status: "Awaiting approval", tone: "pending", text: "The designated change approver decides on rollout. The risk owner reviews any exception separately, with rationale and expiry." },
  { label: "Production verification", status: "Verification due", tone: "open", text: "Confirm service access, telemetry and the intended corrective outcome. If checks fail, apply approved rollback or escalation." },
];
export const SUMMARY_FIELDS = [
  ["Priority exposure", "Remote-access gateway configuration drift"], ["Service affected", "Remote workforce access"], ["Treatment owner", "Named infrastructure owner"],
  ["Due date", "Set by the change approver"], ["Prior approval", "Approval history linked to the originating work"], ["Recovery evidence", "Restore or rollback test result"], ["Next decision", "Exception review with expiry date"],
];
export const FW = {
  ops: { name: "PROD SEC OPS", short: "ProdSecOps", m1: "#1c7be0", m2: "#74e9ef", words: ["Analyze", "Prove", "Govern", "Operate", "Recover", "Assure"] },
  apps: { name: "PROD SEC APPS", short: "ProdSecApps", m1: "#6d4cff", m2: "#e08bff", words: ["Design", "Build", "Test", "Release", "Operate", "Retire"] },
};
/* ==========================================================================
   PUDICA + OPERATING MODEL + OTHER PAGES
   ========================================================================== */
/* ==========================================================================
   PUDICA AUTONOMY: one page, visible sections
   Capabilities · Validation Architecture · Autonomy Readiness · Sample Change Decision · Deployment
   ========================================================================== */
export const PUDICA_SECTIONS = [["cloud-operations", "Cloud Operations"], ["hybrid-operations", "Hybrid Operations"], ["capabilities", "Capabilities"], ["validation-architecture", "Validation Architecture"], ["autonomy-readiness", "Autonomy Readiness"], ["sample-change-decision", "Sample Change Decision"], ["deployment", "Deployment"]];
