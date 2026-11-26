

export const FW = {
  ops: { name: "PROD SEC OPS", short: "ProdSecOps", m1: "#1c7be0", m2: "#74e9ef", words: ["Analyze", "Prove", "Govern", "Operate", "Recover", "Assure"] },
  apps: { name: "PROD SEC APPS", short: "ProdSecApps", m1: "#6d4cff", m2: "#e08bff", words: ["Design", "Build", "Test", "Release", "Operate", "Retire"] },
};
export const PRODSECOPS_CYCLE = ["Discover", "Assess", "Prioritize", "Validate", "Authorize", "Remediate", "Monitor", "Recover", "Verify", "Improve"];
export const PRODSECOPS_DOMAINS = [
  ["Identity and workforce", "Entra ID, Active Directory, Conditional Access, privileged access, Intune and secure remote work."],
  ["Infrastructure", "Servers, operating systems, networks, cloud, databases, middleware and technical support."],
  ["Security operations", "Vulnerability, secure configuration, SIEM, threat intelligence and incident response."],
  ["Service controls", "Change, problem, backup, recovery, BCP and DR."],
  ["Governance", "Enterprise risk, exceptions, evidence, control health and management reporting."],
];
export const PRODSECOPS_PRACTICES = [
  ["Common backlog", "Findings, alerts, support, change, incidents, backup failures, risk treatments and audit actions enter one system."],
  ["Risk contextualization", "Priority considers impact, severity, exposure, exploit activity, actual state, controls and recovery."],
  ["Agile execution", "Work is organized as service outcomes, remediation stories, incident tasks, changes and recovery exercises."],
  ["Validation before production", "GoldenVault and the validation environment support high-risk remediation, detection, rollback and recovery testing."],
  ["Evidence-based closure", "Implementation alone is insufficient; retest, health, monitoring, recovery and residual risk are checked."],
  ["Continual improvement", "Outcomes update procedures, detections, playbooks, controls and automation eligibility."],
];
export const PRODSECAPPS_DOMAINS = [
  ["Portfolio governance", "Inventory, business and technical ownership, criticality, classification, supplier and lifecycle."],
  ["Required Level of Trust", "Risk-proportionate security, privacy, monitoring, evidence and recovery requirements."],
  ["Secure acquisition", "Supplier assurance, contractual controls, provenance, data use, support and exit."],
  ["Architecture and privacy", "Threat modelling, trust boundaries, identity, authorization, cryptography and privacy by design."],
  ["DevSecOps", "SAST, DAST, SCA, API, secrets, container, Kubernetes, IaC and CI/CD controls."],
  ["Engineering remediation", "Validation, root cause, code and dependency correction, regression, retest and evidence."],
  ["Production assurance", "Release gates, exceptions, runtime monitoring, incidents, recovery and retirement."],
];
