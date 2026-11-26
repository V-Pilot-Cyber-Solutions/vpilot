import { resolve } from "../App";
import { GRC } from "./services";

export const WHY_REASONS = [
  { icon: "nodes", t: "One accountable operator", d: "The V Pilot virtual operations team runs the responsibilities you delegate, with a named owner, a defined scope and a clear escalation path for each." },
  { icon: "gate", t: "Decisions stay with you", d: "Customer leadership keeps material approvals and formal risk acceptance. Every engagement states who runs the work, who approves change and what must be escalated." },
  { icon: "clipboard", t: "Evidence, not assurances", d: "You receive the retest, the exception, the restore result or the decision record, so you can show what changed, what was verified and where risk remains." },
  { icon: "flask", t: "Tested before production", d: "PUDICA validates eligible changes in isolation first. A passing lab test supports the decision; it is never permission to deploy." },
  { icon: "cloud", t: "Built for cloud-managed and hybrid estates", d: "PUDICA Autonomy supports cloud-managed workflows, and V Pilot can operate or co-manage hybrid scope. For complex hybrid estates, V Pilot manages hands-on while building the evidence needed for governed autonomy." },
  { icon: "shieldcheck", t: "Honest about boundaries", d: "We do not award certificates, promise audit outcomes, back up business data by default or hand production authority to a platform." },
];
export const WHY_COMPARE = [
  ["Tools and scanners", "Surface findings and alerts.", "Do not assign an owner, resolve production dependencies or prove the outcome on their own."],
  ["Assessments and policies", "Describe what should happen.", "Do not operate the control or show it working throughout the year."],
  ["V Pilot", "Operates the delegated work with PUDICA-validated evidence.", "You decide; we run it, verify it and report where risk remains."],
];
export const PROOF = [
  { n: "01", t: "Control ownership and escalation matrix", d: "Every material control has a named owner and a defined escalation path." },
  { n: "02", t: "Remediation retest and service-health record", d: "Closure is confirmed after rollout, not assumed from a ticket status." },
  { n: "03", t: "Restoration exercise and corrective-action record", d: "Recovery is exercised, and what remains unproven stays visible." },
];
export const BRAND_MAP = [
  { emblem: "vpilot", t: "V Pilot Cyber Solutions LLP", d: "The operating and contracting partner. Named responsibilities, agreed coverage and evidence of delivery across Managed Security Operations, Specialist Solutions and GRC as a Service." },
  { emblem: "pudica", t: "PUDICA Autonomy", d: "The flagship security operations automation platform. Risk-based prioritisation, validation, authorised action and production verification for eligible workflows." },
  { icon: "laptop", t: "NativeTrust Endpoint", d: "A Specialist Solution for managed endpoint security: agreed device, access, browser and data controls, with evidence of coverage and exceptions." },
  { mark: "ops", t: "ProdSecOps", d: "The production security operating framework. Infrastructure security work aligned to service dependencies and recovery requirements." },
  { mark: "apps", t: "ProdSecApps", d: "The application trust framework. Application security ownership and decisions from acquisition and engineering to release and retirement." },
  { icon: "clipboard", t: "GRC as a Service", d: "Governance, risk and compliance packages: readiness, enterprise risk and vendor assurance, and privacy operations. Independent assurance stays independent." },
];
