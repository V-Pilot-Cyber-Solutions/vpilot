import { resolve } from "../App";
import { Status } from "../components/atoms";
import { asset } from "../lib/config";

/* ==========================================================================
   SERVICE CATALOGUE
   ========================================================================== */
export const GROUPS = { mso: "Managed Security Operations", govern: "Executive Governance & Assurance", specialist: "Specialist Engagements" };
export const GROUP_ANCHOR = { mso: "managed-security-operations", govern: "executive-governance", specialist: "specialist-engagements" };
export const SERVICES = [
  /* ---------- Managed Security Operations ---------- */
  {
    slug: "managed-iam-operations", group: "mso", icon: "key", name: "Managed Identity & Access Operations", cta: "Scope your identity operations",
    headline: "Make every access change traceable, from approval to removal.",
    scope: "We operate agreed workforce identity workflows: joiners, movers and leavers, authentication and access policies, access reviews, and privileged access administration. We record execution and route exceptions to the designated owner.",
    blurb: "Give access changes a named approver and a completion record. We operate agreed user lifecycle, access reviews and privileged-access workflows. Your designated owners retain entitlement and exception decisions.",
    evidence: "Access action, approval, expiry and verification record.",
    fits: ["Access accumulates every time someone changes role.", "Contractors and administrators hold temporary privilege that nobody revisits.", "Leaver access depends on informal handoffs between HR, IT and application owners."],
    delivers: "We operate the agreed identity workflows and record each action: who requested it, who approved it, what V Pilot changed, when any exception expires and how removal was verified. Closure means the approved state is confirmed in the target systems, not that a ticket was closed.",
    operates: ["Approved joiner, mover and leaver actions", "Authentication and access policy administration", "Access reviews and privileged-access workflows", "Execution records and exception routing"],
    decides: ["Who should hold which entitlement", "Exceptions and their expiry (designated approvers)", "Lifecycle events (HR and business owners confirm)"],
    separately: ["General help desk and endpoint administration (NativeTrust Endpoint covers contracted endpoint policies only)", "Independent access review or audit", "Identity architecture projects"],
    cases: [
      ["An employee changes roles.", "We compare approved new access with existing entitlements, route any exceptions and verify that obsolete access was removed.", "Access doesn't simply accumulate with each move."],
      ["A contractor needs temporary elevated access.", "We record the sponsor, approved duration and removal check.", "Temporary privilege has an expiry and a verifiable end."],
    ],
    record: { title: "Access lifecycle record", cols: ["Request", "Approver", "V Pilot action", "Expiry", "Verification"], rows: [
      ["Role change: analyst to team lead", "Business owner", "Obsolete access removed, new access granted", "Standing", [ "Verified removed", "verified"]],
      ["Contractor elevated access", "Sponsor and system owner", "Temporary privilege granted", "End of agreed duration", ["Removal check due", "open"]],
      ["Leaver: contractor account", "HR confirmation", "Accounts disabled per system", "Immediate", ["Verification pending", "pending"]],
    ] },
    bring: ["The identity platforms and systems in scope", "Joiner, mover and leaver triggers and who confirms them", "Privileged roles and who approves them"],
    related: [["/services/nativetrust-endpoint", "NativeTrust Endpoint", "Choose it when you also want managed device, browser and endpoint data controls. Identity administration is not part of the endpoint service."], ["/services/grc-as-a-service", "GRC as a Service", "Feed identity evidence into executive review. IAM is an operational service, not an independent review."]],
    perspectives: [["Catalogue", "Managed Identity & Access Operations is a separately commissionable service under Managed Security Operations."], ["GRC as a Service", "A related managed service, so identity evidence can reach executive review."], ["NativeTrust Endpoint", "Device-based access policies use identity signals, but identity administration is not part of the endpoint service."], ["PUDICA Autonomy", "Configuration & Identity Operations is the platform workstream behind eligible identity actions."]],
  },
  {
    slug: "vulnerability-configuration-management", group: "mso", icon: "shieldcheck", name: "Vulnerability & Configuration Management", cta: "Review your exposure",
    headline: "Keep approved baselines and actual exposure in view.",
    scope: "A baseline issue asks whether a setting meets approved policy. A vulnerability asks whether a deployed component is exposed and what treatment fits. Both may require a production change, but they start with different evidence and should close against different criteria.",
    blurb: "Reduce exposure by treating vulnerable components and deviations from approved settings. Choose the brief that matches your need: Security Baselines & Configuration Drift or Vulnerability Remediation.",
    evidence: "Baseline comparison, remediation retest or time-bound exception.",
    briefs: ["security-baselines-configuration-drift", "vulnerability-remediation"],
    fits: ["Scanner output and configuration reports pile up without a clear owner or closure test.", "A setting was changed in an emergency and nobody confirmed whether it should remain.", "Leadership asks what exposure remains open, and the answer depends on whose spreadsheet you read."],
    delivers: "One portfolio entry, two briefs. Security Baselines & Configuration Drift compares observed settings with approved policy. Vulnerability Remediation assesses vulnerable components against the deployed state. Dropping 'Compliance' from the configuration title separates technical conformity from organisational readiness, which sits under Certification Readiness & Continuous Compliance.",
    operates: ["Comparison of observed state with baselines", "Prioritisation by business impact and dependency", "Treatment, retest and exception tracking", "Production changes within agreed authority"],
    decides: ["Whether a material change can proceed", "Whether a time-bound deviation or exposure may remain", "Change windows and service-health checks"],
    separately: ["Application vulnerabilities and release decisions (Application Security Governance)", "Formal certification readiness", "Penetration testing"],
    cases: [
      ["A scanner finding appears on two systems with different roles.", "We confirm applicability for each and choose the brief that fits: a component treatment or a baseline correction.", "One buying path, without hiding the difference between a policy deviation and a vulnerable component."],
      ["Leadership wants to know what exposure is still open.", "We report verified closures separately from approved exceptions and open work.", "A deferred fix is never counted as remediated."],
    ],
    record: { title: "Exposure register (illustrative extract)", cols: ["Item", "Evidence type", "Brief", "Closure test", "State"], rows: [
      ["Remote-access rule left after incident", "Observed setting vs baseline", "Baselines & Drift", "Retest matches approved baseline", ["Treatment proposed", "pending"]],
      ["Package flaw on file-transfer host", "Deployed component and exposure", "Vulnerability Remediation", "Production retest passes", ["Validated in isolation", "verified"]],
      ["Legacy protocol needed by one workload", "Dependency and compensating control", "Baselines & Drift", "Time-bound exception with owner", ["Exception open", "open"]],
    ] },
    bring: ["Your scanner or configuration reports and baselines", "Change windows and service owners", "Who accepts remaining exposure"],
    related: [["/services/application-security-governance", "Application Security Governance", "For application vulnerabilities and release decisions."], ["/pudica-autonomy", "PUDICA Autonomy", "Where an eligible workflow applies: versioned evidence, isolated validation, customer-approved execution."]],
    pudica: "PUDICA placement. Autonomous Remediations covers configuration benchmark issues, software package vulnerabilities and application vulnerabilities. The six-layer taxonomy, including OSE Kernel, describes the configuration benchmark foundation, not the entire service catalogue. Eligible application remediation still follows the application owner's engineering, testing and release controls. Where an eligible workflow applies: versioned evidence, isolated validation, customer-approved execution, production retest.",
  },
  {
    slug: "security-baselines-configuration-drift", group: "mso", brief: true, parent: "vulnerability-configuration-management", icon: "sliders", name: "Security Baselines & Configuration Drift", cta: "Review a configuration baseline",
    headline: "Know what changed, why it matters and whether the deviation can remain.",
    scope: "We compare the observed state of agreed systems with applicable benchmarks or customer-approved baselines. We prioritise drift by business impact, propose corrections, retest approved changes and track exceptions.",
    blurb: "Compare observed settings with approved baselines, correct authorised deviations and track exceptions with owners and review dates.",
    evidence: "Approved baseline, observed state, treatment, retest and exception expiry.",
    fits: ["An emergency change is still in place after the incident ended.", "A benchmark setting conflicts with a supported workload.", "Nobody can say which deviations are justified and which are drift."],
    delivers: "We establish the approved baseline, compare it with the observed state, rank each deviation by business impact and dependency, and propose a correction. After approval we retest. Where correction cannot proceed, we record a time-bound exception with an owner and review date. Where PUDICA is in scope, SenseScan acquires authorised evidence and GoldenVault keeps the observed state separate from the approved baseline.",
    operates: ["Baseline comparison against applicable benchmarks or approved baselines", "Drift prioritisation and treatment proposals", "Retest of approved changes", "Exception tracking with owners and expiry"],
    decides: ["Which settings apply and which dependencies must be preserved (technical owners)", "Whether to approve a material change", "Whether to accept a time-bound deviation (designated owner)"],
    separately: ["Vulnerable components (Vulnerability Remediation)", "Organisational readiness and certification", "Platform re-architecture"],
    cases: [
      ["An emergency rule remains after its purpose ends.", "We confirm dependencies, coordinate correction and verify the resulting state.", "Temporary access doesn't become an undocumented permanent setting."],
      ["A benchmark setting conflicts with a supported workload.", "We assess alternatives and document an approved exception if correction cannot proceed.", "The customer can distinguish a justified deviation from unmanaged drift."],
    ],
    record: { title: "Baseline comparison", cols: ["Setting", "Approved baseline", "Observed state", "Treatment", "Status"], rows: [
      ["Remote-access rule R-12", "Disabled after change window", "Still enabled", "Correction proposed", ["Awaiting approval", "pending"]],
      ["Minimum password length", "14 characters", "14 characters", "None needed", ["Conforms", "verified"]],
      ["Legacy protocol on database host", "Disabled", "Enabled for one workload", "Time-bound exception", ["Exception, review date set", "open"]],
    ] },
    bring: ["Applicable benchmarks or your approved baselines", "Systems in scope and technical owners", "Who approves change and accepts deviations"],
    related: [["/services/vulnerability-remediation", "Vulnerability Remediation", "When the issue is a vulnerable component rather than a setting."], ["/services/certification-readiness", "Certification Readiness & Continuous Compliance", "For organisational readiness, separate from technical conformity."]],
    pudica: "PUDICA placement. Autonomous Remediations covers configuration benchmark issues, software package vulnerabilities and application vulnerabilities. The six-layer taxonomy, including OSE Kernel, describes the configuration benchmark foundation, not the entire service catalogue.",
  },
  {
    slug: "vulnerability-remediation", group: "mso", brief: true, parent: "vulnerability-configuration-management", icon: "shieldcheck", name: "Vulnerability Remediation", cta: "Review your remediation backlog",
    headline: "Close the exposure, not just the ticket.",
    scope: "We assess applicable infrastructure and software-package findings against the deployed state, service dependencies and business impact. We prepare treatment and rollback, validate eligible changes where appropriate, and check production results.",
    blurb: "Assess infrastructure and software-package findings against the deployed state. Verify the treatment in production or keep the remaining exposure visible as an open exception.",
    evidence: "Applicability decision, validation and rollback evidence, production retest or owned exception.",
    fits: ["The same scanner finding appears on systems with different dependencies.", "A vendor dependency blocks a package update.", "Tickets close, but nobody has verified the production result."],
    delivers: "We confirm that each finding applies to the deployed component and its exposure, prepare the treatment and a rollback, validate eligible changes where appropriate and check production after rollout. A deferred fix remains open under its agreed treatment; it is not counted as remediated.",
    operates: ["Applicability assessment against the deployed state", "Treatment and rollback preparation", "Validation of eligible changes", "Production retest and exception records"],
    decides: ["Change windows and service-health checks (technical owners)", "Execution within agreed authority", "Whether to accept remaining exposure (risk owner)"],
    separately: ["Configuration deviations (Baselines & Drift)", "Application code fixes (engineering owners)", "Penetration testing"],
    cases: [
      ["A vendor dependency blocks a package update.", "We propose interim controls, record the remaining exposure and set a review date.", "Deferred work stays visible with an owner and a next decision."],
      ["The same finding affects two services with different dependencies.", "We confirm applicability and validate a treatment for each operating context.", "The team avoids applying the same production change simply because the scanner used the same label."],
    ],
    record: { title: "Remediation record", cols: ["Finding", "Applicability", "Validation", "Production retest", "Disposition"], rows: [
      ["Package flaw on file-transfer host", "Confirmed: component deployed and exposed", "Compatibility and rollback checked in isolation", "Passed", ["Closed, verified", "verified"]],
      ["Same flaw on administration host", "Confirmed: different dependency", "Separate treatment validated", "Due after approval", ["Awaiting approval", "pending"]],
      ["Package blocked by vendor dependency", "Confirmed", "Interim control tested", "Not applicable yet", ["Exception open, review date set", "open"]],
    ] },
    bring: ["Scanner output and asset ownership", "Maintenance windows and rollback expectations", "Who accepts remaining exposure"],
    related: [["/services/security-baselines-configuration-drift", "Security Baselines & Configuration Drift", "When the issue is a setting that deviates from policy."], ["/services/application-security-governance", "Application Security Governance", "For application vulnerabilities and release decisions."]],
    pudica: "PUDICA placement. Autonomous Remediations covers configuration benchmark issues, software package vulnerabilities and application vulnerabilities. Eligible application remediation still follows the application owner's engineering, testing and release controls. Where an eligible workflow applies: versioned evidence, isolated validation, customer-approved execution, production retest.",
  },
  {
    slug: "application-security-governance", group: "mso", icon: "code", framework: "apps", name: "Application Security Governance", cta: "Review an application release gate",
    headline: "Make application security an owned engineering and release decision.",
    scope: "Through ProdSecApps, we help teams define security requirements for applications they build, buy or inherit. We connect architecture, testing and dependency findings to engineering actions, release criteria and operating evidence.",
    blurb: "Turn application risk into owned engineering work and explicit release decisions. Through ProdSecApps, we connect security requirements, findings and testing to the teams responsible for delivery. The application owner retains release authority.",
    evidence: "Release criteria, unresolved findings and decision record.",
    fits: ["A launch date is close and security requirements were never turned into release checks.", "Findings sit in a report that no engineering team owns.", "A legacy application is being containerised and carries old dependencies with it."],
    delivers: "We define proportionate security requirements for web, mobile, API and acquired applications, connect architecture reviews, static and dynamic testing and dependency findings to the responsible engineering team, and track unresolved findings against release criteria. The result is a release decision with a visible basis, not a report.",
    operates: ["Security requirements and release criteria", "Routing of findings to the owning engineering team", "Tracking of unresolved findings", "Release decision records"],
    decides: ["Business criticality and delivery constraints (product teams)", "Code changes and regression tests (engineering)", "Release authority (designated application owner)"],
    separately: ["Infrastructure package remediation", "Penetration testing", "Application development"],
    cases: [
      ["A customer-facing API is nearing launch.", "We translate access, monitoring and recovery requirements into release checks.", "The release owner can see what passed, what remains open and what needs a decision."],
      ["A legacy application moves to containers.", "We separate application dependency and code issues from platform-hardening work.", "Each issue reaches the team that can fix it, with its own test and closure criteria."],
    ],
    record: { title: "Release decision record", cols: ["Criterion", "Engineering owner", "Evidence", "Disposition"], rows: [
      ["Authentication and access checks", "API team", "Test results attached", ["Met", "verified"]],
      ["Dependency findings", "Platform team", "Two findings open", ["Decision required", "pending"]],
      ["Monitoring and recovery requirements", "Operations", "Rollback rehearsal due", ["Open", "open"]],
    ] },
    bring: ["Application inventory and business criticality", "Delivery pipeline and current testing", "Who holds release authority"],
    related: [["/services/vulnerability-remediation", "Vulnerability Remediation", "For infrastructure and package exposure."], ["/resources/frameworks#prodsecapps", "ProdSecApps framework", "The operating framework behind this service."]],
  },
  {
    slug: "managed-detection-siem-operations", group: "mso", icon: "search", name: "Managed Detection & SIEM Operations", cta: "Review your detection coverage",
    headline: "Know that a relevant signal will reach the right responder.",
    scope: "We onboard agreed telemetry, validate detection behaviour, triage within contracted coverage and test routing. We report unsupported sources and coverage gaps as explicitly as working detections.",
    blurb: "Verify that the expected security signals reach the right responder. We manage agreed telemetry, detection validation, triage and escalation within contracted coverage.",
    evidence: "Detection coverage matrix, validation result and escalation route.",
    fits: ["Your audit feed stopped after a migration, but dashboards still look healthy.", "A critical service has an approved exception and nobody monitors the risk.", "Alerts arrive without an agreed owner or escalation path."],
    delivers: "We onboard agreed telemetry into supported SIEM tools, validate that detections behave as expected with controlled test events, triage within the contracted coverage and test the route to the responder. Coverage gaps and unsupported sources are reported as plainly as working detections. Detection does not imply unrestricted response.",
    operates: ["Telemetry onboarding and monitoring profiles", "Detection validation with controlled test events", "Triage and escalation within contracted coverage", "Coverage and gap reporting"],
    decides: ["Priority services, response contacts and escalation authority (your security team)", "Actions V Pilot may take on an alert", "Coverage hours, published only where approved"],
    separately: ["Containment and restoration (Incident Readiness & Response)", "SIEM licensing and platform ownership", "Threat hunting engagements"],
    cases: [
      ["A migration drops an audit feed, but dashboards still look healthy.", "We test the signal path and confirm routing.", "Missing visibility isn't mistaken for a quiet environment."],
      ["A critical service has an approved vulnerability exception.", "We review and test the associated monitoring and escalation.", "The temporary risk has an observable control, not just a register entry."],
    ],
    record: { title: "Detection coverage matrix", cols: ["Source", "Test status", "Responder", "Known gap"], rows: [
      ["Identity provider sign-in logs", ["Tested, signal received", "verified"], "Security on-call", "None recorded"],
      ["Firewall and VPN logs", ["Test due", "pending"], "Network owner", "Retention shorter than agreed"],
      ["Legacy file server", ["Unsupported source", "open"], "Manual review", "No native telemetry"],
    ] },
    bring: ["Priority services and log sources", "Existing SIEM and responders", "Escalation authority and approved coverage hours"],
    related: [["/services/incident-readiness-response", "Incident Readiness & Response", "For who acts, and how, once a signal becomes an incident."], ["/pudica-autonomy", "PUDICA Autonomy", "SIEM & Detection Operations is also a platform workstream."]],
  },
  {
    slug: "incident-readiness-response", group: "mso", icon: "alert", name: "Incident Readiness & Response", cta: "Scope an incident readiness exercise",
    headline: "Know who can act before an incident forces the decision.",
    scope: "We develop and exercise playbooks, clarify escalation and coordinate authorised containment and restoration. Afterward, we document decisions, verification checks and corrective actions.",
    blurb: "Agree who can act before an incident forces the decision. We exercise playbooks and coordinate authorised response and restoration within the scope you delegate.",
    evidence: "Exercised playbook, decision timeline and corrective actions.",
    fits: ["Teams disagree about who can restrict a privileged account.", "A recovery plan exists but has never been exercised with incident command.", "You need one decision timeline instead of competing accounts."],
    delivers: "We develop and exercise playbooks, clarify severity and escalation, and coordinate authorised containment and restoration. Afterward we document decisions, verification checks and corrective actions. Autonomous Incident Management is an advanced PUDICA-enabled option for eligible workflows; it is separately scoped and not included by default.",
    operates: ["Playbook development and exercises", "Coordination of authorised containment and restoration", "Decision timelines and verification checks", "Corrective-action tracking"],
    decides: ["Incident authority, service owners and escalation contacts", "Material service disruption and return-to-service", "External communications"],
    separately: ["Forensic investigation (Digital Forensics & Investigation)", "Advanced PUDICA-enabled response", "Enterprise continuity exercises"],
    cases: [
      ["Suspicious activity affects a privileged identity.", "We apply the agreed escalation path and coordinate authorised action.", "Teams work from one decision timeline instead of improvising authority."],
      ["A ransomware tabletop exposes unclear restoration priorities.", "We exercise the handoff between incident command and recovery teams.", "Leaders can resolve conflicting priorities before an outage."],
    ],
    record: { title: "Exercise decision timeline", kind: "timeline", rows: [
      ["T+0", "Privileged-identity alert received and severity agreed", ["Authority confirmed", "verified"]],
      ["T+15 min", "Incident authority approves restricting the account", ["Approved", "verified"]],
      ["T+40 min", "Restoration priority disputed between two service owners", ["Decision required", "pending"]],
      ["After action", "Corrective action: name a single restoration authority", ["Action open", "open"]],
    ] },
    bring: ["Incident authority and escalation contacts", "Critical services and restoration priorities", "Existing playbooks and recent incidents"],
    notice: "Existing customers with an active incident should use their contracted support channel, not the sales form.",
    related: [["/services/digital-forensics-investigation", "Digital Forensics & Investigation", "Incident response coordinates action. Forensics establishes what the evidence supports."], ["/services/backup-recovery-assurance", "Backup & Recovery Assurance", "For proving what can be restored."]],
  },
  {
    slug: "backup-recovery-assurance", group: "mso", icon: "restore", name: "Backup & Recovery Assurance", cta: "Plan a restore exercise",
    headline: "Show what can return, not just what was backed up.",
    scope: "We review agreed backup coverage, identify service dependencies and exercise restoration against agreed recovery time and data-loss objectives. Continuity Exercises are separately scoped work.",
    blurb: "Find out what can be restored, not just what was backed up. We test agreed recovery objectives and service dependencies. Broader continuity exercises are scoped separately.",
    evidence: "Restore results, untested dependencies and corrective actions.",
    fits: ["A backup job reports success but no one has restored the application end to end.", "A change has a proposed rollback that was never rehearsed.", "Leadership wants evidence of recoverability, not a list of backup jobs."],
    delivers: "We distinguish configuration reconstruction, data and workload restoration, and business-service recovery, then exercise the restoration you agreed against recovery time and data-loss objectives. GoldenVault configuration evidence is not a substitute for business-data backup. A tested restore is not the same as an enterprise continuity exercise, which is scoped separately.",
    operates: ["Review of agreed backup coverage and dependencies", "Restore exercises against agreed objectives", "Records of what was and was not tested", "Corrective-action tracking"],
    decides: ["The critical service and recovery objectives (business owners)", "Dependencies and acceptance checks (infrastructure, application and backup owners)", "Which corrections to fund"],
    separately: ["Backup platform operation and licensing", "Enterprise continuity and disaster-recovery exercises", "Incident response"],
    cases: [
      ["A database backup succeeds, but the application has never been restored end to end.", "We exercise the agreed restore and check application dependencies, access and integrity.", "Leadership sees the difference between recoverable data and a recoverable service."],
      ["A gateway change has a proposed rollback but no rehearsal.", "We validate the eligible reversal path and document production prerequisites.", "The approver can evaluate the recovery path as well as the forward change."],
    ],
    record: { title: "Recovery exercise summary", cols: ["Service", "Agreed objective", "Observed", "Untested dependency", "Action"], rows: [
      ["Finance application", "Restore within 4 hours", "Restored in 3 h 10 min", "Reporting integration", ["Met; dependency to test", "verified"]],
      ["Customer portal", "Restore within 2 hours", "Restored in 3 h 40 min", "Payment gateway", ["Objective missed", "pending"]],
      ["Shared file service", "Restore within 8 hours", "Not exercised", "Whole service", ["Exercise planned", "open"]],
    ] },
    bring: ["Critical services and recovery objectives", "Backup tools and owners", "Dependencies you already know about"],
    related: [["/services/incident-readiness-response", "Incident Readiness & Response", "For the decision path during an incident."], ["/pudica-autonomy", "PUDICA Autonomy", "Autonomous Resilience is the platform workstream."]],
  },
  /* ---------- Executive Governance & Assurance ---------- */
  {
    slug: "grc-as-a-service", group: "govern", icon: "building", umbrella: true, name: "GRC as a Service", cta: "Discuss your governance scope",
    headline: "Give leadership a decision, not another dashboard.",
    scope: "Know what changed, what can recover and what still needs a decision. V Pilot turns findings and alerts into owned work, approved actions and verified outcomes, and reports which exposures were addressed, what recovery tests demonstrated and where risk remains.",
    blurb: "Set security priorities, review control ownership and bring material decisions to leadership. Connect the security roadmap to operating evidence rather than relying on activity reports alone.",
    evidence: "Executive decision brief, security roadmap and decision log.",
    output: "Executive brief, security roadmap and decision log",
    areas: ["certification-readiness", "enterprise-risk-vendor-assurance", "privacy-operations-dpo-support"],
    fits: ["Several providers report activity, but nobody owns the whole roadmap.", "A recovery weakness competes with other investment needs.", "The board asks for a decision and the evidence is spread across reports."],
    delivers: "V Pilot maintains an agreed security roadmap, reviews control ownership and exceptions, and brings material decisions to the executive sponsor. GRC as a Service provides CISO-level security leadership and itself produces the executive brief, the security roadmap and the decision log. Commission it with the specialist scopes you need, or commission those scopes independently.",
    operates: ["Security roadmap and control-ownership review", "Exception review and treatment follow-through", "Executive briefs and decision logs", "Coordination of the specialist scopes you commission"],
    decides: ["Risk thresholds, review cadence and escalation criteria (agreed together)", "Budget authority and material approvals", "Formal risk acceptance"],
    separately: ["Certification readiness, enterprise risk and privacy scopes", "Managed Identity & Access Operations", "Independent audit, attestation or certification"],
    cases: [
      ["Several providers report activity, but nobody owns the whole roadmap.", "We connect their evidence to critical services and assign decisions and actions.", "Leadership can prioritise across providers."],
      ["A recovery weakness competes with other investment needs.", "We present tested results, treatment options and the consequence of deferral.", "The funding decision has a clear basis and review date."],
    ],
    record: { title: "Executive decision brief", cols: ["Decision needed", "Options", "Evidence", "Owner", "Review"], rows: [
      ["Fund restore improvements for the customer portal?", "Fund now · Defer with exception", "Restore exercise missed its objective", "Executive sponsor", ["Decision required", "pending"]],
      ["Extend monitoring to a legacy file server?", "Add compensating control · Accept", "Unsupported source in coverage matrix", "Risk owner", ["Review date set", "open"]],
    ] },
    bring: ["The executive sponsor and decision forums", "Current providers and their reports", "Audit, certification or privacy dates you are working to"],
    related: [["/services/managed-iam-operations", "Related managed service: Managed Identity & Access Operations", "An operational service, not an independent review or a default inclusion."]],
  },
  {
    slug: "certification-readiness", group: "govern", icon: "clipboard", areaOf: "grc-as-a-service", name: "Certification Readiness & Continuous Compliance", cta: "Scope a readiness programme",
    headline: "Build evidence between reviews, not just before the audit.",
    scope: "We assess agreed requirements, identify control owners, establish evidence routines and track corrective actions. Your teams operate their assigned controls; V Pilot coordinates the readiness work in scope.",
    blurb: "Build evidence between reviews, not just before the audit. We support gap assessment, control ownership, evidence routines and corrective-action tracking within the agreed programme.",
    evidence: "Readiness roadmap, evidence index and corrective-action register.",
    fits: ["A first-time audit is approaching and evidence is fragmented.", "A recurring review depends on a last-minute evidence collection effort.", "Policies exist, but operating evidence is inconsistent."],
    delivers: "We assess the agreed requirements, identify control owners, establish evidence routines and track corrective actions. Programmes can include scoped ISO/IEC 27001 or ISO 22301 readiness, PCI DSS assessment readiness, SOC 2 attestation readiness and HIPAA support where applicable. Independent audit, attestation or certification conclusions remain separate.",
    operates: ["Gap assessment and control-ownership mapping", "Evidence calendar, sampling and routines", "Corrective-action tracking", "Management-review inputs"],
    decides: ["Which standards and scope apply", "Operation of assigned controls (your teams)", "Whether and when to engage an independent assessor"],
    separately: ["Independent audit, attestation or certification", "Technical conformity work (Baselines & Drift)", "Control implementation projects"],
    cases: [
      ["A first-time audit is approaching and evidence is fragmented.", "We map ownership, identify missing evidence and track agreed corrections.", "Management sees what is demonstrably ready and what still needs work."],
      ["A recurring review depends on a last-minute evidence collection effort.", "We establish an evidence calendar and review stale or missing records.", "Gaps surface while teams still have time to act."],
    ],
    record: { title: "Readiness and corrective-action register", cols: ["Control area", "Owner", "Evidence", "Corrective action"], rows: [
      ["Access reviews", "IT manager", ["Current", "verified"], "None"],
      ["Backup and restore testing", "Infrastructure lead", ["Stale", "pending"], "Schedule restore exercise"],
      ["Supplier assessments", "Procurement", ["Missing", "open"], "Collect assurance evidence"],
    ] },
    bring: ["The standard and scope you are working toward", "Existing policies and evidence", "Audit dates"],
    related: [["/services/security-baselines-configuration-drift", "Security Baselines & Configuration Drift", "For technical conformity, separate from organisational readiness."]],
  },
  {
    slug: "enterprise-risk-vendor-assurance", group: "govern", icon: "layers", areaOf: "grc-as-a-service", name: "Enterprise Risk & Vendor Assurance", cta: "Review a critical supplier or dependency",
    headline: "See which dependencies put a critical service at risk.",
    scope: "We connect technology and supplier risks to business services, assess available assurance evidence and propose treatment or renewal conditions.",
    blurb: "Connect supplier and technology risks to the business services that depend on them. Review assurance evidence, propose treatment and make ownership and reassessment dates explicit.",
    evidence: "Dependency map, supplier assurance record and treatment decision.",
    fits: ["A critical provider's assurance evidence is incomplete at renewal.", "Several accepted exceptions affect the same customer service.", "Nobody can show which suppliers a business service depends on."],
    delivers: "We map critical business services to internal systems and suppliers, review the assurance evidence available, prioritise risks and track treatments through reassessment. Compensating controls, owners and exception expiry are recorded so a decision can be revisited when conditions change.",
    operates: ["Service-to-dependency mapping", "Review of supplier assurance evidence", "Treatment proposals and renewal conditions", "Reassessment tracking"],
    decides: ["Commercial and contractual decisions (procurement and legal)", "Whether to accept residual risk (designated risk owner)", "Service impact (business owners)"],
    separately: ["Independent supplier audits", "Contract negotiation", "Technical remediation"],
    cases: [
      ["A critical payroll provider has incomplete assurance evidence at renewal.", "We identify the gaps and propose conditions and reassessment dates.", "Procurement can negotiate against an explicit risk position."],
      ["Several accepted exceptions affect the same customer service.", "We map the shared dependency and prepare a combined treatment decision.", "Leadership can see concentration that individual records hide."],
    ],
    record: { title: "Dependency and supplier assurance record", cols: ["Service", "Dependency", "Assurance evidence", "Treatment", "Reassess"], rows: [
      ["Payroll", "Hosted payroll provider", ["Incomplete", "pending"], "Renewal conditions proposed", "In 6 months"],
      ["Customer portal", "Payment gateway", ["Current", "verified"], "None", "Annual"],
      ["Field operations", "Single regional carrier", ["Not requested", "open"], "Request evidence", "At renewal"],
    ] },
    bring: ["Critical business services", "Supplier list and contract dates", "Your risk register, if one exists"],
    related: [["/services/grc-as-a-service", "GRC as a Service", "To bring treatment decisions to leadership."]],
  },
  {
    slug: "privacy-operations-dpo-support", group: "govern", icon: "lock", areaOf: "grc-as-a-service", name: "Privacy Operations & DPO Support", cta: "Scope your privacy operations",
    headline: "Give privacy work a clear intake, owner and record.",
    scope: "We support agreed processing inventories, rights-request workflows, processor oversight, privacy assessments and breach coordination. Any formal DPO appointment and reporting arrangements are separately scoped.",
    blurb: "Give privacy work a clear route, owner and record. We support agreed processing records, rights workflows and processor oversight. A formal DPO appointment and its reporting arrangements are separately scoped.",
    evidence: "Privacy action register, workflow record and review dates.",
    fits: ["Rights requests arrive through several inboxes.", "A new platform introduces a processor and new data flows.", "Privacy accountability exists on paper but not in daily work."],
    delivers: "We support processing inventories and data-flow mapping, rights-request intake and routing, processor oversight, privacy impact assessments and breach coordination. Readiness support can cover applicable regimes such as DPDPA and GDPR. Not every organisation requires a statutory DPO, but every organisation processing personal data needs clear privacy accountability.",
    operates: ["Processing inventory and data-flow mapping", "Rights-request intake, routing and review workflow", "Processor oversight and impact-assessment support", "Breach coordination and a privacy action register"],
    decides: ["Legal interpretation and notifications (your designated privacy decision-makers and counsel)", "Organisational policy", "Whether to appoint a DPO"],
    separately: ["Any formal DPO appointment and its reporting arrangements", "Legal advice", "Regulator correspondence"],
    cases: [
      ["Rights requests arrive through several inboxes.", "We support a single intake, routing and review process.", "Requests can be tracked without relying on informal handoffs."],
      ["A new people platform introduces a processor and new data flows.", "We map the flows and document review actions before rollout.", "Privacy conditions become launch decisions rather than retrospective findings."],
    ],
    record: { title: "Privacy action register", cols: ["Workflow", "Owner", "Status", "Review date"], rows: [
      ["Rights-request intake", "Privacy lead", ["Operating", "verified"], "Quarterly"],
      ["New HR platform data flows", "HR director", ["Review actions open", "pending"], "Before rollout"],
      ["Processor oversight", "Procurement", ["Not started", "open"], "To be set"],
    ] },
    bring: ["Where personal data is collected and held", "Processors and platforms", "Existing privacy roles"],
    related: [["/services/grc-as-a-service", "GRC as a Service", "For privacy decisions that need leadership."]],
  },
  /* ---------- Specialist Engagements ---------- */
  {
    slug: "secure-cloud-migration", group: "specialist", icon: "cloud", name: "Secure Cloud Migration", cta: "Review your migration scope",
    headline: "Move workloads with a clear go/no-go decision and an accountable handover.",
    scope: "We map dependencies, plan target controls and migration waves, rehearse eligible cutover and rollback steps, and verify agreed checks.",
    blurb: "Move agreed workloads with target controls, a go/no-go decision and a defined rollback path. Verify that the service meets acceptance criteria before handover.",
    evidence: "Migration plan, cutover checklist and acceptance record.",
    fits: ["A workplace migration carries years of inherited permissions.", "A business application must move before its hosting contract ends.", "You need a handover into ongoing operations, not just moved infrastructure."],
    delivers: "We map dependencies, plan target controls and migration waves, rehearse eligible cutover and rollback steps and verify the agreed checks. Acceptance is based on a working service. Ongoing management can transition to Managed Security Operations or PUDICA Hybrid Operations under a separate scope.",
    operates: ["Dependency mapping and target controls", "Migration waves and eligible cutover rehearsals", "Rollback decision points", "Handover record"],
    decides: ["The window, the go/no-go decision and acceptance criteria (your service owner)", "Essential functions and acceptable disruption", "Who operates the environment afterward"],
    separately: ["Ongoing operation (Managed Security Operations or PUDICA Hybrid Operations)", "Ongoing production support (Managed Security Operations)", "Application re-engineering"],
    cases: [
      ["A workplace migration carries years of inherited permissions.", "We pilot a representative group and validate approved access in the target environment.", "Unnecessary permissions don't have to follow the workload."],
      ["A business application must move before its hosting contract ends.", "We sequence dependencies, confirm rollback decision points and validate business functions at cutover.", "Acceptance is based on a working service, not simply moved infrastructure."],
    ],
    record: { title: "Cutover plan and go/no-go checklist", kind: "timeline", rows: [
      ["Wave 1", "Pilot group migrated; approved access validated", ["Accepted", "verified"]],
      ["Rehearsal", "Cutover and rollback steps rehearsed for the application", ["Rollback point confirmed", "verified"]],
      ["Go/no-go", "Service owner reviews checklist and open issues", ["Decision required", "pending"]],
      ["Handover", "Operating team accepts runbook and monitoring", ["Planned", "open"]],
    ] },
    bring: ["Workloads and dependencies in scope", "Cutover constraints and acceptance criteria", "Who operates the environment afterward"],
    related: [["/pudica-autonomy#hybrid-operations", "PUDICA Hybrid Operations", "For operating the environment once it is ready."], ["/managed-security-operations", "Managed Security Operations", "For ongoing production operation."]],
  },
  {
    slug: "digital-forensics-investigation", group: "specialist", icon: "eye", name: "Digital Forensics & Investigation", cta: "Discuss an authorised investigation",
    headline: "Separate what happened from what the available evidence can prove.",
    scope: "We preserve and analyse authorised evidence, document provenance and handling, and distinguish observations, supported findings and limitations.",
    blurb: "Establish what the available evidence supports and what remains uncertain. We preserve and analyse authorised evidence within an agreed investigation scope.",
    evidence: "Evidence register, timeline, findings and limitations.",
    fits: ["External sharing is recorded, but actual access is uncertain.", "An outage follows an unexpected administrative change and accounts conflict.", "You need a defensible technical timeline, with its limits stated."],
    delivers: "We preserve and analyse authorised evidence, document provenance and handling and distinguish observations, supported findings and limitations. Investigation is not incident command, and a public enquiry form is not an evidence-upload channel.",
    operates: ["Preservation and analysis of authorised evidence", "Provenance and handling records", "Timeline reconstruction", "Findings with stated limitations"],
    decides: ["The questions, systems and handling requirements (your authorised sponsor and counsel)", "Legal, regulatory or employment action", "What may be shared"],
    separately: ["Incident command and containment (Incident Readiness & Response)", "Legal advice", "Configuration evidence acquisition through SenseScan"],
    cases: [
      ["External sharing is recorded, but actual access is uncertain.", "We correlate available sharing, access and identity records.", "Decision-makers can distinguish confirmed activity from an unanswered question."],
      ["An outage follows an unexpected administrative change.", "We reconstruct the timeline from authorised records and identify gaps.", "Corrective actions can be based on a supported sequence rather than conflicting accounts."],
    ],
    record: { title: "Evidence timeline (illustrative)", kind: "timeline", rows: [
      ["Evidence", "Authorised logs and change records preserved with handling notes", ["Registered", "verified"]],
      ["Sequence", "Administrative change precedes outage by 6 minutes", ["Supported by logs", "verified"]],
      ["Gap", "Access logs for one system retained for 7 days only", ["Limitation recorded", "open"]],
      ["Finding", "Cause of the change cannot be established from available records", ["Unanswered", "pending"]],
    ] },
    bring: ["The questions you need answered", "Systems and evidence sources, authorised by your sponsor", "Handling requirements (counsel where appropriate)"],
    notice: "Do not send evidence, credentials or sensitive data through the enquiry form. An authorised transfer route is agreed during scoping.",
    related: [["/services/incident-readiness-response", "Incident Readiness & Response", "Incident response coordinates action; forensics establishes what the evidence supports."]],
  },
];
const NT_ENDPOINT = {
  slug: "nativetrust-endpoint", group: "mso", icon: "laptop", eyebrow: "Managed Endpoint Security", name: "NativeTrust Endpoint", cta: "Scope an Endpoint Pilot", seoTitle: "NativeTrust Endpoint | Managed Endpoint Security by V Pilot",
  headline: "Secure the desktop your people already use.",
  scope: "V Pilot configures and operates agreed Zero Trust controls across supported desktops, laptops, browsers and approved applications. Device posture and identity inform access. Managed browser and endpoint policies help govern how people handle customer data. We pilot controls with representative users, verify approved work still functions and expand by device group.",
  blurb: "Protect customer data where people work. Operate agreed Zero Trust controls across supported devices, browsers and applications.",
  evidence: "Device and browser policy coverage, exceptions and corrective actions.",
  fits: ["Customer data is handled on desktops and laptops, and browser sessions are loosely governed.", "Access to approved applications should depend on device posture as well as identity.", "Policies exist, but nobody can show device coverage, exceptions and corrective actions."],
  delivers: "We configure and operate agreed Zero Trust controls on supported desktops and laptops. Device hardening covers enrolment, encryption, patch posture and endpoint protection. Access uses device compliance and identity policies to decide who reaches approved applications. Browser and data controls apply approved browser profiles and, where the tooling supports them, restrictions on downloads, uploads or copying. Ongoing operation reviews policy drift, exceptions and contracted escalation. Controls such as download, upload or copy restrictions depend on supported tooling, licensing and agreed scope.",
  operates: ["Device enrolment and hardening", "Encryption, patch posture and endpoint protection", "Device-based access policies", "Supported browser and data controls", "Review of policy drift, exceptions and escalations"],
  decides: ["Which applications and data uses are approved (business and data owners)", "Which user groups join each pilot and rollout stage", "Exceptions and their expiry (designated approvers)"],
  separately: ["General IT support or help desk", "Broader identity administration (Managed Identity & Access Operations)", "Incident response (Incident Readiness & Response)", "Third-party licences and detection or response add-ons", "Virtual desktop estates: fit is assessed alongside NativeTrust"],
  cases: [
    ["A team handles customer data from managed laptops, and nobody can show how browser sessions are governed.", "We pilot device compliance, approved browser profiles and supported download, upload and copy restrictions with a representative group, then confirm people can still complete their daily work.", "Approved work keeps functioning, and the policies that protect customer data are demonstrably in place."],
    ["A business application needs an exception to the browser policy.", "We route the request to the designated approver, apply the narrowest agreed change, verify the workflow and record the expiry or review date.", "Staff can do the work without a permanent, undocumented bypass."],
  ],
  record: { title: "Endpoint policy coverage", cols: ["Device group", "Policy", "Coverage", "Exceptions", "Status"], rows: [
    ["Pilot group (30 laptops)", "Encryption and patch posture", "30 of 30 compliant", "None", ["Verified", "verified"]],
    ["Finance desktops", "Approved browser profile", "24 of 28 enrolled", "4 awaiting owner decision", ["Decision required", "pending"]],
    ["Contractor devices", "Download restrictions", "Tooling not licensed", "Scoped separately", ["Not in scope", "open"]],
  ] },
  bring: ["Supported operating systems and device groups", "Approved applications and browser requirements", "Where customer data is handled and who owns it"],
  related: [["/services/managed-iam-operations", "Managed Identity & Access Operations", "For identity lifecycle and privileged access. Separately commissionable."], ["/pudica-autonomy", "PUDICA Autonomy", "NativeTrust Endpoint is not a PUDICA subscription. It can be commissioned on its own or alongside the platform."]],
  notice: "Confirm supported platforms, browser and data controls and third-party licences in the proposal.",
};
const SERVICE_COPY = [
  ["vulnerability-configuration-management", "Close the exposure, not just the ticket. Assess findings against what is deployed, verify approved fixes and keep deferred risks visible.", "Baseline comparison, production retest or owned exception."],
  ["managed-detection-siem-operations", "Get the right signal to the right responder. Test agreed telemetry, detection rules and escalation paths.", "Coverage matrix showing tests, gaps and responders."],
  ["incident-readiness-response", "Know who can act before an incident forces the decision. Exercise playbooks and coordinate authorised action within agreed coverage.", "Exercised playbook, decision timeline and corrective actions."],
  ["backup-recovery-assurance", "Show what can actually be restored. Test agreed recovery paths and make unproven dependencies visible.", "Restore results against agreed objectives, with gaps and owners."],
  ["application-security-governance", "Make application risk an explicit release decision. Give findings an engineering owner, a closure test and a documented decision.", "Release criteria, unresolved findings and decision record."],
];
SERVICES.push(NT_ENDPOINT);
SERVICE_COPY.forEach(([slug, blurb, evidence]) => { const s = SERVICES.find((x) => x.slug === slug); if (s) { s.blurb = blurb; s.evidence = evidence; } });
SERVICES.forEach((s) => { s.eyebrow = s.eyebrow || GROUPS[s.group]; });
const ALL_ITEMS = SERVICES;
export const bySlug = (s) => ALL_ITEMS.find((x) => x.slug === s);
export const CARD_ITEMS = ALL_ITEMS.filter((s) => !s.brief);
export const byGroup = (g) => CARD_ITEMS.filter((s) => s.group === g);
export const MSO_SLUGS = ["nativetrust-endpoint", "vulnerability-configuration-management", "managed-detection-siem-operations", "incident-readiness-response", "backup-recovery-assurance", "application-security-governance"];
export const MSO = MSO_SLUGS.map(bySlug);
const GOVERN = byGroup("govern");
export const SPECIALIST = byGroup("specialist");
export const GRC = bySlug("grc-as-a-service");
export const GRC_AREAS = GRC.areas.map(bySlug);
/* Retired and renamed routes */
export const ALIASES = { "it-infrastructure-security-operations": "__chooser", "cloud-migrations": "secure-cloud-migration", "siem-detection-operations": "managed-detection-siem-operations", "digital-forensics-investigations": "digital-forensics-investigation", "backup-recovery-continuity": "backup-recovery-assurance", "dpo-privacy-operations": "privacy-operations-dpo-support", "security-configuration-compliance": "security-baselines-configuration-drift" };
export const GROUP_INTRO = {
  mso: ["Delegate the work. Keep control of the decisions.", "V Pilot protects endpoints, treats exposure, monitors critical services, coordinates response, tests recovery and helps govern application risk. Commission the service you need or combine several under one operating agreement. PUDICA Autonomy supports eligible workflows where applicable; it is not a prerequisite for every service."],
  govern: ["Give leadership a clear basis for deciding what to fund, treat or accept.", "GRC as a Service brings security priorities, control ownership and material risks into one executive roadmap. Add Certification Readiness & Continuous Compliance, Enterprise Risk & Vendor Assurance or Privacy Operations & DPO Support where needed, or commission them separately. Independent audit, attestation and certification decisions remain separate."],
  specialist: ["Bring in the right expertise for a defined outcome.", "Secure Cloud Migration plans a controlled cutover, rollback and operating handover. Digital Forensics & Investigation establishes what authorised evidence supports and what remains uncertain. Each engagement starts with a defined question or outcome and ends with agreed evidence and handover."],
};
export const ADOPT_STAGES = [
  { icon: "search", t: "Assess", d: "Confirm systems, dependencies, tooling and the first workflow worth automating.", out: "Readiness and scope brief" },
  { icon: "flask", t: "Launch", d: "Connect a supported environment and pilot a representative workflow.", out: "Baseline, validation record and go/no-go decision", gate: true },
  { icon: "clipboard", t: "Operationalise", d: "Set approval boundaries, train the operator and verify the first authorised production run.", out: "Runbook, ownership matrix and verification record" },
  { icon: "chart", t: "Scale", d: "Extend proven workflows only where the rollout criteria are met.", out: "Expansion plan and evidence of eligible workflows" },
];
export const ENGAGEMENT = [
  { name: "Specialist Engagement", icon: "clipboard", text: "Commission a defined piece of work, with agreed outputs, acceptance criteria and handover." },
  { name: "Co-Managed Operations", icon: "users", text: "Share named responsibilities with V Pilot. Agree who acts, who approves and where work passes between teams." },
  { name: "Fully Managed Operations", emblem: "vpilot", text: "Delegate day-to-day delivery across the contracted scope. V Pilot operates and reports; your authorised owners retain material decisions." },
];
export const CARD_ORDER = { mso: MSO_SLUGS, govern: ["grc-as-a-service", "certification-readiness", "enterprise-risk-vendor-assurance", "privacy-operations-dpo-support"] };
