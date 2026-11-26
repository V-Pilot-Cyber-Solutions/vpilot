import { asset } from "../lib/config";

export const CMP_COLS = ["Cloud: Customer-Operated", "Cloud: Customer-Operated with V Pilot Remote Support", "Hybrid: Co-Managed or Fully Managed Operations", "NativeTrust Endpoint"];
export const CMP_ROWS = [
  ["Day-to-day operator", "Your team", "Your team. V Pilot provides remote guidance.", "V Pilot or shared, by named responsibility", "V Pilot operates the contracted endpoint policies"],
  ["Who executes a production change", "Your team", "Your team. V Pilot does not execute production changes under this option.", "The operator named in the agreement for each responsibility, within delegated authority", "V Pilot, for the agreed endpoint policies and within agreed authority"],
  ["First milestone", "Connect a supported environment and validate the first workflow", "Guided onboarding, a pilot and handover to your team", "Map dependencies and transition the agreed scope", "Assess device policies and pilot a representative group"],
  ["What scales", "Proven workflows across supported cloud assets", "The same workflows, with rollout support", "Approved workflows by site or workload; named operators handle exceptions", "Device groups and supported browser and data controls"],
  ["Evidence", "Validation, approval and production verification", "The same records plus agreed support reviews", "Operating backlog, exceptions and verification", "Policy coverage, exceptions and corrective actions"],
  ["Not implied", "Customer-hosted software or delegated operations", "V Pilot production execution, ongoing operations, help desk or continuous monitoring", "Unrestricted production authority or 24/7 coverage", "General IT support, incident response or third-party licences"],
];
export const CMP_STATUS = { Included: "verified", Optional: "neutral", Scoped: "pending", "Not included": "open" };
export const CAP_COMPARE = [
  ["Configuration & Identity Operations", "Scoped", "Approved baselines, identity context and supported workflows."],
  ["Autonomous Remediations", "Scoped", "Selected configuration, package and application remediation workflows."],
  ["SIEM & Detection Operations", "Scoped", "Supported telemetry, detection validation and routing."],
  ["Autonomous Resilience", "Scoped", "Configuration reconstruction and eligible recovery validation. Business-data backup is not included by default."],
  ["Autonomous Incident Management", "Scoped", "The full package requires active Autonomous Remediations, SIEM & Detection Operations and Autonomous Resilience subscriptions, plus the agreed configuration and identity foundation."],
];
export const PRICING_ROWS = [
  ["PUDICA subscription", "Quoted by scope", "The selected workstreams, in-scope environments and eligible workflows. The billable asset definition, integrations, usage, retention and product support."],
  ["V Pilot Remote Support", "Quoted by scope", "Included guidance, channels, coverage and review cadence. Remote Support does not include production execution or ongoing operations by V Pilot. Any such work is a separately scoped engagement."],
  ["Hybrid Operations: Co-Managed or Fully Managed", "Quoted by scope", "Sites, asset classes, covered hours, activities assigned to V Pilot, customer approvals, escalation and what is out of scope."],
  ["NativeTrust Endpoint", "Quoted by scope", "Supported operating systems, shared-device rules, controls, licences and separately scoped add-ons."],
];
