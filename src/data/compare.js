import { asset } from "../lib/config";

export const CMP_COLS = ["Cloud: Self-Managed Operations", "Cloud: Virtual Support", "Hybrid: Managed or Co-Managed", "NativeTrust Endpoint"];
export const CMP_ROWS = [
  ["Day-to-day operator", "Your team", "Your team; V Pilot assists remotely", "V Pilot or shared, by named responsibility", "V Pilot operates contracted endpoint policies"],
  ["First milestone", "Connect a supported environment and validate the first workflow", "Guided setup, pilot and handover", "Map dependencies and transition the agreed scope", "Assess device policies and pilot a representative group"],
  ["What scales", "Proven workflows across supported cloud assets", "The same workflows, with rollout guidance", "Approved workflows by site or workload; named operators handle exceptions", "Device groups and supported browser and data controls"],
  ["Evidence", "Validation, approval and production verification", "The same records plus agreed support reviews", "Operating backlog, exceptions and verification", "Policy coverage, exceptions and corrective actions"],
  ["Not implied", "Customer-hosted software or delegated operations", "Help desk, continuous monitoring or production execution", "Unrestricted production authority or 24/7 coverage", "General IT support, incident response or third-party licences"],
];
export const CMP_STATUS = { Included: "verified", Optional: "neutral", Scoped: "pending", "Not included": "open" };
export const CAP_COMPARE = [
  ["Configuration & Identity Operations", "Scoped", "Approved baselines, identity context and supported workflows."],
  ["Autonomous Remediations", "Scoped", "Selected configuration, package and application remediation workflows."],
  ["SIEM & Detection Operations", "Scoped", "Supported telemetry, detection validation and routing."],
  ["Autonomous Resilience", "Scoped", "Configuration reconstruction and eligible recovery validation. Business-data backup is not included by default."],
  ["Autonomous Incident Management", "Scoped", "The full package requires active Autonomous Remediations, SIEM & Detection Operations and Autonomous Resilience subscriptions, plus the agreed configuration and identity foundation."],
  ["NativeTrust Endpoint", "Scoped", "Managed endpoint security operated by V Pilot on supported devices, browsers and applications. Available on its own or alongside PUDICA. It is not a PUDICA subscription."],
];
export const PRICING_ROWS = [
  ["PUDICA Cloud Subscription", "Annual platform minimum, asset bands and selected workstreams", "Billable asset definition, short-lived asset treatment, integrations, usage, retention and product support."],
  ["Cloud Virtual Support", "Fixed-fee onboarding and optional recurring retainer", "Included hours, channels, coverage, review cadence and whether V Pilot advises or performs named actions."],
  ["Hybrid Managed Operations", "One-time discovery and transition, platform subscription and recurring service fee", "Sites, asset classes, covered hours, delegated actions, escalation and out-of-scope rates."],
  ["NativeTrust Endpoint", "One-time assessment and policy rollout, then a monthly fee per managed endpoint with an agreed minimum", "Supported operating systems, shared-device rules, controls, licences and separately scoped add-ons."],
];
