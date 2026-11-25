import { MSO_SLUGS } from "./services";
import { Link } from "../lib/router";
import { Home } from "../pages/HomePage";

export const BUY_PATHS = [
  { key: "cloud", icon: "cloud", tag: "Automate cloud security operations", title: "PUDICA Autonomy for Cloud Operations",
    copy: "Start with PUDICA Autonomy for Cloud Operations. Connect a supported environment, validate one workflow and scale it across eligible workloads. Your team runs the operation, with optional V Pilot Virtual Support.",
    buys: "A platform subscription for supported cloud workflows. The customer runs the operation, with optional V Pilot Virtual Support.",
    chips: ["Supported cloud environments", "Self-Managed Operations", "Optional Virtual Support"], cta: ["Explore Cloud Operations", "/pudica-autonomy#cloud-operations"] },
  { key: "hybrid", icon: "nodes", tag: "Run security across cloud and on-premises", title: "PUDICA Autonomy for Hybrid Operations",
    copy: "Choose PUDICA Autonomy for Hybrid Operations with a scoped V Pilot managed or co-managed service. We map dependencies, operate the agreed work and expand automation as individual workflows qualify.",
    buys: "A platform subscription plus a scoped V Pilot managed or co-managed service, expanding automation in stages.",
    chips: ["Cloud and on-premises", "Managed or co-managed", "Staged automation"], cta: ["Explore Hybrid Operations", "/pudica-autonomy#hybrid-operations"] },
  { key: "endpoint", icon: "laptop", tag: "Protect workforce endpoints and customer data", title: "NativeTrust Endpoint",
    copy: "Choose NativeTrust Endpoint for managed security across supported desktops, laptops, browsers and approved applications. Start with a representative user group and scale the controls that work.",
    buys: "A managed endpoint security service on supported devices, browsers and applications. Available on its own or alongside PUDICA.",
    chips: ["Device hardening", "Device-based access", "Browser and data controls"], cta: ["Explore NativeTrust Endpoint", "/services/nativetrust-endpoint"] },
];
export const HOME_TOOL_STEPS = [
  { icon: "database", t: "Receive evidence", d: "A supported finding, alert or event starts the work." },
  { icon: "users", t: "Assign ownership", d: "Each item gets an accountable owner and an agreed closure test." },
  { icon: "flask", t: "Validate where appropriate", d: "Eligible changes are tested in isolation before production." },
  { icon: "gate", t: "Approve and act", d: "The designated approver decides. A passing test is not permission.", gate: true },
  { icon: "check", t: "Verify or escalate", d: "Production checks confirm closure. Anything unresolved stays open with an owner." },
];
export const VALUES = [
  { icon: "nodes", t: "Operational ownership", d: "Know who operates the work and where it escalates." },
  { icon: "shieldcheck", t: "Risk-governed action", d: "Prioritise changes by exposure, business impact and service dependencies." },
  { icon: "restore", t: "Tested resilience", d: "See which changes and restoration procedures have been tested." },
  { icon: "clipboard", t: "Continuous assurance", d: "Capture decisions, exceptions and results as the work happens." },
];
export const HOME_CATEGORIES = [
  { key: "mso", icon: "gear", eyebrow: "Managed Security Operations", title: "Delegate the work. Keep control of the decisions.",
    copy: "V Pilot protects endpoints, treats exposure, monitors critical services, coordinates response, tests recovery and helps govern application risk. Commission one service or combine several under a single operating agreement, with named coverage and change authority.",
    for: "For teams that need an accountable operator for day-to-day security work.", receive: "Policy coverage, retests, coverage matrices and restore results.",
    slugs: MSO_SLUGS, cta: ["Explore Managed Security Operations", "/managed-security-operations"] },
  { key: "govern", emblem: "vpilot", eyebrow: "Executive Governance & Assurance", title: "GRC as a Service",
    copy: "Give leadership a clear basis for deciding what to fund, treat or accept. GRC as a Service brings security priorities, control ownership and material risks into one executive roadmap. Add readiness, enterprise risk or privacy support, or commission them separately. Independent audit and certification decisions stay independent.",
    for: "For executives who need decisions backed by evidence, not activity reports.", receive: "An executive brief, a security roadmap and a decision log.",
    slugs: ["grc-as-a-service", "certification-readiness", "enterprise-risk-vendor-assurance", "privacy-operations-dpo-support"], cta: ["Discuss Your Governance Scope", "/services#executive-governance"] },
  { key: "specialist", icon: "clipboard", eyebrow: "Specialist Engagements", title: "Bring in the right expertise for a defined outcome.",
    copy: "Secure Cloud Migration plans a controlled cutover, rollback and operating handover. Digital Forensics & Investigation establishes what authorised evidence supports and what remains uncertain. Each engagement starts with a defined question and ends with agreed evidence and handover.",
    for: "For a defined change or investigation with a clear start and finish.", receive: "A cutover and acceptance record, or an evidence register, timeline and findings.",
    slugs: ["secure-cloud-migration", "digital-forensics-investigation"], cta: ["Discuss a Specialist Engagement", "/services#specialist-engagements"] },
];
/* ==========================================================================
   Home: operating gap, responsibility, why
   ========================================================================== */
export const CYCLE = [
  { k: "Govern", t: "Own controls and decisions.", icon: "clipboard" }, { k: "Protect", t: "Maintain baselines and treat exposure.", icon: "shield" },
  { k: "Monitor", t: "Verify telemetry and escalation.", icon: "eye" }, { k: "Respond", t: "Exercise playbooks and coordinate authorised action.", icon: "alert" },
  { k: "Recover", t: "Test service restoration and record what remains unproven.", icon: "restore" },
];
export const FLOW = [
  { icon: "search", t: "Find the issue", d: "A scanner, SIEM or assessment surfaces a problem.", ex: "A scanner flags an SSH-related finding on an administration host." },
  { icon: "users", t: "Assign an owner", d: "Every finding gets an accountable owner and an escalation path.", ex: "The infrastructure owner confirms it is an admin service, not a file-transfer system, and takes the work." },
  { icon: "flask", t: "Validate the proposed treatment", d: "Define the fix, acceptance criteria and rollback, and test eligible changes where appropriate.", ex: "Access, expected SIEM signals and rollback are checked in an isolated environment." },
  { icon: "gate", t: "Obtain approval", d: "The designated approver decides. A passing test is not permission.", ex: "The change approver reviews the evidence and approves the maintenance window.", gate: true },
  { icon: "gear", t: "Act", d: "Execute within approved authority and the agreed window.", ex: "The correction is applied in the window, with the rollback ready if service health changes." },
  { icon: "check", t: "Verify the result", d: "Confirm closure, service health and monitoring. Exceptions stay open with an owner.", ex: "The retest passes, access still works and monitoring fires. The record closes with an owner and date." },
];
export const FLOW_DELAYS = [1800, 2000, 2200, 3000, 2200, 2800];
export const FLOW_BRANCH = "If a change fails verification or cannot proceed, we record the reason and follow the agreed rollback or escalation path. An approved exception stays visible until the designated owner reviews or closes it.";
export const GAP_PROOF = [
  { icon: "shieldcheck", t: "Owned remediation", k: "Proof", d: "A retest or exception record. Closure is confirmed after rollout, not assumed from a ticket status." },
  { icon: "restore", t: "Tested recovery", k: "Proof", d: "Restoration criteria and gaps. What remains unproven stays visible." },
  { icon: "chart", t: "Executive visibility", k: "Proof", d: "The risk, the owner and the next decision, so leadership sees what was closed and what remains exposed." },
];
export const LANES = [
  { key: "customer", icon: "building", who: "Your authorised owners", verb: "Decide", text: "Set priorities, approve material changes and formally accept remaining risk.", tags: ["Priorities", "Material approvals", "Risk acceptance"], out: "The decision, recorded" },
  { key: "vpilot", emblem: "vpilot", who: "Your team or V Pilot", verb: "Operate", text: "In customer-operated engagements, your team runs the workflows. In managed engagements, V Pilot runs the work you delegate and escalates decisions outside its authority.", tags: ["Delivery", "Backlog", "Escalation", "Reporting"], out: "Operating backlog and escalation record", note: "GRC as a Service, where commissioned, supports governance alongside delivery. It does not replace customer authority." },
  { key: "pudica", emblem: "pudica", who: "PUDICA Autonomy", verb: "Validates and orchestrates", text: "Link evidence to the affected service, test where appropriate, apply approved authority and verify the result for eligible work.", tags: ["Evidence", "Isolated testing", "Approved execution", "Verification"], out: "Validation and verification evidence" },
];
export const HANDOFFS = { a: { fwd: "Delegates scope and authority", back: "Reports and escalates" }, b: { fwd: "Eligible work", back: "Evidence and verification" } };
export const LANE_STEPS = [
  { lanes: [0], t: "Your authorised owners set priorities, authority and risk appetite." },
  { lanes: [0, 1], conn: "a", dir: "fwd", t: "The customer delegates the agreed scope and authority to V Pilot." },
  { lanes: [1, 2], conn: "b", dir: "fwd", t: "V Pilot sends eligible work to PUDICA for validation in isolation." },
  { lanes: [2, 1], conn: "b", dir: "back", t: "PUDICA returns validation evidence and verification records." },
  { lanes: [1, 0], conn: "a", dir: "back", t: "V Pilot reports outcomes and escalates material decisions back to the customer." },
];
export const LANE_DELAYS = [2200, 2500, 2500, 2500, 2700];
export const FRAMEWORK_RAIL = [
  { mark: "ops", t: "ProdSecOps", d: "Production-aware infrastructure security", to: "/resources/frameworks#prodsecops" },
  { mark: "apps", t: "ProdSecApps", d: "Application trust and engineering governance", to: "/resources/frameworks#prodsecapps" },
  { icon: "clipboard", t: "Continuous Assurance", d: "Evidence and corrective-action follow-through", to: "/#cycle" },
];
