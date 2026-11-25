

/* ==========================================================================
   Operating-model comparison, pricing and deployment content
   ========================================================================== */
/* ==========================================================================
   Product and comparison data
   ========================================================================== */

/* Product overview, comparison, deployment */
export const PRODUCT_CAPS = [
  { title: "Six workstreams", icon: "layers", links: [["Configuration & Identity Operations", "/pudica-autonomy#capabilities"], ["Autonomous Remediations", "/pudica-autonomy#capabilities"], ["SIEM & Detection Operations", "/pudica-autonomy#capabilities"], ["Autonomous Resilience", "/pudica-autonomy#capabilities"], ["Autonomous Incident Management", "/pudica-autonomy#capabilities"], ["NativeTrust Endpoint", "/services/nativetrust-endpoint"]] },
  { title: "How it works", icon: "flask", links: [["Validation Architecture", "/pudica-autonomy#validation-architecture"], ["Autonomy Readiness", "/pudica-autonomy#autonomy-readiness"], ["Sample Change Decision", "/pudica-autonomy#sample-change-decision"], ["Deployment", "/pudica-autonomy#deployment"]] },
];
export const PRODUCT_SOLUTIONS = [
  { icon: "cloud", t: "Cloud Security Automation", d: "Connect a supported cloud environment and prove one security workflow before expanding it across workloads or accounts. Run it with your own team or add Virtual Support for rollout guidance.", to: "/pudica-autonomy#cloud-operations", cta: "Explore Cloud Operations", tag: "Product: PUDICA Autonomy" },
  { icon: "nodes", t: "Hybrid Managed Security Operations", d: "Keep security work moving across cloud and on-premises systems while you map dependencies and validate what can be automated. Start with named owners and an agreed scope.", to: "/pudica-autonomy#hybrid-operations", cta: "Explore Hybrid Operations", tag: "Product plus service" },
  { icon: "laptop", t: "Workforce Endpoint & Data Protection", d: "Protect approved work on managed desktops and laptops. Apply device, access, browser and data policies, then verify that people can still complete the work they need to do.", to: "/services/nativetrust-endpoint", cta: "Explore NativeTrust Endpoint", tag: "Service: NativeTrust Endpoint" },
  { icon: "code", t: "Application Trust", d: "Turn security requirements and findings into engineering actions and release criteria. Give the application owner a clear basis for the release decision.", to: "/solutions/application-trust", cta: "Explore Application Trust", tag: "Service: Application Security Governance" },
  { icon: "refresh", t: "Secure Business Transformation", d: "Move workloads with target controls, go/no-go criteria and a rollback path. Verify service acceptance before handing the environment to its operator.", to: "/solutions/secure-business-transformation", cta: "Explore Secure Business Transformation", tag: "Service: Secure Cloud Migration" },
  { icon: "restore", t: "Incident & Recovery Readiness", d: "Exercise who responds, who authorises restoration and how the business will know the service is ready to return. Show what was tested and what remains unproven.", to: "/solutions/incident-recovery-readiness", cta: "Explore Incident & Recovery Readiness", tag: "Service: Incident Readiness & Response" },
];
export const SOLUTIONS = [
  { slug: "application-trust", icon: "code", framework: "apps", name: "Application Trust", short: "Govern application trust across the enterprise.", lead: "Set security expectations for what you build, buy, integrate and retire, then turn findings into owned engineering decisions.",
    body: ["V Pilot helps customers define who owns each web, mobile, API, SaaS and business application, what security it requires, and what evidence is needed to release, operate, recover or retire it.", "ProdSecApps is informed by ISO/IEC 27034 application-security concepts; ProdSecOps governs infrastructure operations within the customer's ISO/IEC 27001 context. They are complementary frameworks, not certification labels. Application owners retain engineering and release authority."],
    pointsTitle: "How application trust is governed",
    points: [{ icon: "clipboard", t: "Expectations across the lifecycle", d: "Security requirements from acquisition and design through release and retirement." }, { icon: "code", t: "CI/CD gates for new change", d: "Static, dynamic and software composition testing brought into delivery pipelines." }, { icon: "refresh", t: "Owned remediation", d: "Findings from tools such as SonarQube routed to engineering and linked to deployed versions and business context." }, { icon: "key", t: "Release authority stays with owners", d: "Application owners retain release authority. OWASP Top 10 informs review priorities; it is not the full governance scope." }],
    related: ["application-security-governance", "vulnerability-remediation", "enterprise-risk-vendor-assurance"], interest: "Application Security Governance" },
  { slug: "secure-business-transformation", icon: "cloud", name: "Secure Business Transformation", short: "Change the environment without leaving security behind.", lead: "Define the target controls, the migration sequence and the evidence required to accept the new operating state.",
    body: ["Each transformation is planned around dependencies, agreed target controls and a controlled cutover, with a handover that records what was validated. Secure Cloud Migration has its own scope and acceptance criteria."],
    pointsTitle: "Transformation journey",
    points: [{ icon: "search", t: "Discovery and dependency mapping", d: "Dependency mapping across the services in scope." }, { icon: "clipboard", t: "Target controls agreed", d: "Agreed target controls and the evidence needed to accept the new operating state." }, { icon: "refresh", t: "Controlled cutover", d: "Migration waves, cutover and rollback. The customer approves the change window and acceptance criteria." }, { icon: "shieldcheck", t: "Operating handover", d: "V Pilot records post-migration validation and the handover." }],
    related: ["secure-cloud-migration", "certification-readiness", "managed-iam-operations"], interest: "Secure Business Transformation" },
  { slug: "incident-recovery-readiness", icon: "restore", name: "Incident & Recovery Readiness", short: "Give responders a playbook, and prove services can be restored.", lead: "Connect incident playbooks, forensic investigation and restoration testing under one accountable operating model.",
    body: ["Readiness is demonstrated, not assumed. Approved scenarios are exercised, investigations preserve evidence with limitations stated, and recovery is tested against agreed objectives so that what remains unproven stays visible."],
    pointsTitle: "What this combines",
    points: [{ icon: "alert", t: "Incident readiness and response", d: "A playbook and decision path before an incident, with authorised containment and restoration." }, { icon: "eye", t: "Digital forensics", d: "Authorised evidence preserved and analysed, with findings and limitations distinguished." }, { icon: "restore", t: "Backup and recovery assurance", d: "Restore evidence compared with agreed recovery-time and recovery-point objectives." }],
    related: ["incident-readiness-response", "digital-forensics-investigation", "backup-recovery-assurance"], interest: "Incident & Recovery Readiness" },
];
