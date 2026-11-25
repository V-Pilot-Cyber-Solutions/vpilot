import { CAREER_INTERESTS } from "./careers";
import { WORKSTREAMS } from "./platform";
import { CARD_ITEMS, GRC_AREAS, MSO, SPECIALIST } from "./services";
import { PRODUCT_SOLUTIONS } from "./solutions";
import { ADDRESS, COMPARE_TO, CONTACT_EMAIL, OFFER, PHONE } from "../lib/config";
import { contactTo } from "../lib/router";

/* ==========================================================================
   Ask V Pilot (guided FAQ; approved answers only)
   ========================================================================== */
export const ASK_INTRO = "Explore PUDICA Autonomy, NativeTrust Endpoint, our managed services or GRC as a Service. For a scoped recommendation, book an executive briefing. Please don't share credentials, incident evidence or sensitive customer data here.";
export const ASK_FAQ = [
  { q: "What do you need to secure, and who should run the work?", a: "Start with where the work sits: cloud workflows you want to automate (PUDICA Autonomy for Cloud Operations), a hybrid estate that needs an operator (PUDICA Autonomy for Hybrid Operations), or workforce desktops and browsers (NativeTrust Endpoint).", to: "/#paths", label: "Find your starting point" },
  { q: "What can V Pilot operate for us?", a: "V Pilot can run agreed security work, including endpoint controls, remediation, detection, incident response and recovery. We define scope, hours and escalation with your team.", to: "/managed-security-operations", label: "Managed Security Operations" },
  { q: "What is NativeTrust Endpoint?", a: "A managed endpoint security service. V Pilot configures and operates agreed Zero Trust controls on supported desktops, laptops, browsers and approved applications. It is not a PUDICA subscription and does not include general IT support.", to: "/services/nativetrust-endpoint", label: "NativeTrust Endpoint" },
  { q: "Does PUDICA run in the cloud or on our premises?", a: "PUDICA Autonomy is delivered as SaaS. Eligible validation uses a customer-owned test bed. Self-Managed Operations means your team operates the workflows, not that you host the platform.", to: "/pudica-autonomy#deployment", label: "Deployment" },
  { q: "Who operates the work?", a: "In Cloud Self-Managed Operations your team does. With Virtual Support, V Pilot assists remotely. In Hybrid Operations, V Pilot or a shared team operates by named responsibility. NativeTrust Endpoint is operated by V Pilot.", to: COMPARE_TO, label: "Compare Operating Models" },
  { q: "Can we keep our current tools?", a: "Yes, where the tools or their outputs are supported for the agreed workflow. We confirm integration, import or manual review during scoping.", to: "/#tools", label: "Work with the tools you already have" },
  { q: "What does GRC as a Service include?", a: "It provides executive security leadership, a roadmap and decision reporting. Readiness, enterprise risk and privacy can be added by scope.", to: "/services/grc-as-a-service", label: "GRC as a Service" },
  { q: "Can PUDICA make production changes on its own?", a: "Only eligible actions can run within customer-approved policy. A validation result supports approval; it does not grant authority. Production checks still determine closure.", to: "/pudica-autonomy#validation-architecture", label: "Validation architecture" },
  { q: "Do you certify compliance?", a: "V Pilot supports readiness, evidence and corrective actions. Independent certification and attestation decisions remain separate.", to: "/services/certification-readiness", label: "Certification Readiness & Continuous Compliance" },
  { q: "Which services can we commission?", a: "__SERVICES__", to: "/services", label: "Service catalogue" },
  { q: "Where is V Pilot based?", a: `${ADDRESS.join(", ")}. Email ${CONTACT_EMAIL} or call ${PHONE}.`, to: "/contact", label: "Contact" },
  { q: "Are you hiring?", a: "Open roles and a two-month internship, including a hands-on puzzle challenge, are listed on the careers page.", to: "/company/careers", label: "Careers" },
];
export const ENGAGEMENT_CHOICES = ["Not sure yet", "Specialist Engagement", "Co-Managed Operations", "Fully Managed Operations"];
export const ENVIRONMENTS = ["Cloud (supported cloud environments)", "Hybrid (cloud, on-premises and legacy)", "Workforce endpoints and browsers", "Not sure yet"];
export const INTERESTS = [
  "Executive briefing", ...(OFFER.enabled ? [OFFER.interest] : []), "Managed Security Operations", "NativeTrust Endpoint", "GRC as a Service", "PUDICA Autonomy demo", "Cloud deployment options", "Hybrid readiness assessment", "Customer-hosted PUDICA requirements", "Compare operating models", "Autonomy readiness assessment",
  "Scoped quote: PUDICA Cloud Subscription", "Scoped quote: Cloud Virtual Support", "Scoped quote: Hybrid Managed Operations", "Scoped quote: NativeTrust Endpoint", "Partnership", "Careers enquiry", ...CAREER_INTERESTS,
  ...CARD_ITEMS.filter((s) => s.slug !== "grc-as-a-service" && s.slug !== "nativetrust-endpoint").map((s) => s.name), "Security Baselines & Configuration Drift", "Vulnerability Remediation", "Secure Business Transformation", "Incident & Recovery Readiness",
];
export const MENUS = [
  { key: "autonomy", label: "Autonomy", to: "/pudica-autonomy", wide: true, match: ["/pudica-autonomy", "/products/compare"], lead: "Validate before you act",
    groups: [
      { title: "Platform", links: [["PUDICA Autonomy overview", "/pudica-autonomy"], ["Cloud Operations", "/pudica-autonomy#cloud-operations"], ["Hybrid Operations", "/pudica-autonomy#hybrid-operations"], ["Compare Operating Models", COMPARE_TO]] },
      { title: "Capabilities", links: WORKSTREAMS.map((w) => [w.name, w.link ? w.link[1] : "/pudica-autonomy#capabilities"]) },
      { title: "How it works", links: [["Validation Architecture", "/pudica-autonomy#validation-architecture"], ["Autonomy Readiness", "/pudica-autonomy#autonomy-readiness"], ["Sample Change Decision", "/pudica-autonomy#sample-change-decision"], ["Deployment", "/pudica-autonomy#deployment"]] },
    ], feature: ["Request a PUDICA Demo", contactTo("PUDICA Autonomy demo")], emblem: "pudica" },
  { key: "solutions", label: "Solutions", to: "/products#solutions", match: ["/products", "/solutions"], exclude: ["/products/compare"], lead: "Start with the problem you need to solve",
    groups: [
      { title: "Platform solutions", links: PRODUCT_SOLUTIONS.slice(0, 3).map((s) => [s.t, s.to]) },
      { title: "Service solutions", links: PRODUCT_SOLUTIONS.slice(3).map((s) => [s.t, s.to]) },
    ], feature: ["Not sure where to start? Compare Operating Models", COMPARE_TO] },
  { key: "services", label: "Services", to: "/services", wide: true, match: ["/services", "/managed-security-operations"], lead: "Choose what V Pilot will run with you",
    groups: [
      { title: "Managed Security Operations", links: [...MSO.map((s) => [s.name, `/services/${s.slug}`]), ["Managed Identity & Access Operations (related)", "/services/managed-iam-operations"]] },
      { title: "Executive Governance & Assurance", links: [["GRC as a Service", "/services/grc-as-a-service"], ...GRC_AREAS.map((s) => [s.name, `/services/${s.slug}`])] },
      { title: "Specialist Engagements", links: [...SPECIALIST.map((s) => [s.name, `/services/${s.slug}`]), ["How to engage", "/services#how-to-engage"]] },
    ], feature: ["Compare engagement options", "/services#how-to-engage"] },
  { key: "resources", label: "Resources", to: "/resources", match: ["/resources"], lead: "Resources for security leaders",
    groups: [{ title: "Available now", links: [["Resources overview", "/resources"], ["ProdSecOps & ProdSecApps", "/resources/frameworks"], ["Sample change decision", "/resources/sample-change-decision"], ["Executive assurance summary", "/resources/executive-assurance-summary"]] }],
    note: "Executive briefs, technical guides and product documentation are listed here as they are published and maintained.", feature: ["Review a sample change decision.", "/resources/sample-change-decision"] },
  { key: "company", label: "Company", to: "/company", match: ["/company"], lead: "Your accountable cyber operating partner",
    groups: [{ title: "Who we are", links: [["About V Pilot", "/company"], ["Why V Pilot?", "/company#why"], ["Careers", "/company/careers"]] }, { title: "Get in touch", links: [["Contact", "/contact"], ["Customer support", "/support"]] }],
    feature: ["Book an executive briefing", contactTo("Executive briefing")], emblem: "vpilot" },
];
export const FOOTER_GROUPS = [
  { title: "Autonomy", items: [["PUDICA Autonomy", "/pudica-autonomy", true], ["Cloud Operations", "/pudica-autonomy#cloud-operations"], ["Hybrid Operations", "/pudica-autonomy#hybrid-operations"], ["Validation Architecture", "/pudica-autonomy#validation-architecture"], ["Autonomy Readiness", "/pudica-autonomy#autonomy-readiness"], ["Compare Operating Models", COMPARE_TO]] },
  { title: "Services", items: [["Managed Security Operations", "/managed-security-operations", true], ["NativeTrust Endpoint", "/services/nativetrust-endpoint", true], ["GRC as a Service", "/services/grc-as-a-service", true], ["Specialist Engagements", "/services#specialist-engagements"], ["Managed Identity & Access Operations", "/services/managed-iam-operations"], ["How to engage", "/services#how-to-engage"]] },
  { title: "Company", items: [["About V Pilot", "/company"], ["Why V Pilot?", "/company#why", true], ["How we operate", "/#operating-model"], ["Careers", "/company/careers"], ["Contact", "/contact"]] },
  { title: "Resources", items: [["Resources", "/resources"], ["Solutions", "/products#solutions"], ["ProdSecOps & ProdSecApps", "/resources/frameworks"], ["Sample Change Decision", "/resources/sample-change-decision"], ["Executive Assurance Summary", "/resources/executive-assurance-summary"], ["Customer Support", "/support"]] },
];
export const LEGAL_LINKS = [["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"], ["Cookie Settings", "/cookies"], ["Security Disclosure", "/security-disclosure"], ["Accessibility", "/accessibility"]];
