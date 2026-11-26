import { CAREER_INTERESTS } from "./careers";
import { WORKSTREAMS } from "./platform";
import { CARD_ITEMS, GRC_AREAS, MSO, SPECIALIST } from "./services";
import { PRODUCT_SOLUTIONS } from "./solutions";
import { ADDRESS, COMPARE_TO, CONTACT_EMAIL, OFFER, PHONE } from "../lib/config";
import { contactTo } from "../lib/router";

/* ==========================================================================
   Ask V Pilot (guided FAQ; approved answers only)
   ========================================================================== */
export const ASK_INTRO = "Explore PUDICA Autonomy, Managed Security Operations, Specialist Solutions such as NativeTrust Endpoint, or GRC as a Service. For a scoped recommendation, book an executive briefing. Please don't share credentials, incident evidence or sensitive customer data here.";
export const ASK_FAQ = [
  { q: "What do you need to secure, and who should run the work?", a: "Start with where the work sits: cloud workflows you want to automate (PUDICA Autonomy for Cloud Operations), a hybrid estate that needs an operator (PUDICA Autonomy for Hybrid Operations), or workforce desktops and browsers (NativeTrust Endpoint).", to: "/#paths", label: "Find your starting point" },
  { q: "What are V Pilot's three service categories?", a: "Managed Security Operations (remediation, detection, incident response and recovery), Specialist Solutions (NativeTrust Endpoint, identity and IT operations, application security governance, cloud migration and digital forensics) and GRC as a Service (readiness, enterprise risk and privacy).", to: "/#services-overview", label: "Service categories" },
  { q: "What is NativeTrust Endpoint?", a: "A Specialist Solution for managed endpoint security. V Pilot operates agreed security controls for supported devices, browsers and work data. Coverage depends on the environment, licensing and agreed scope. It is not a PUDICA subscription and does not include general IT support.", to: "/services/nativetrust-endpoint", label: "NativeTrust Endpoint" },
  { q: "Does PUDICA run in the cloud or on our premises?", a: "PUDICA Autonomy is delivered as SaaS. Eligible validation uses a customer-owned test bed, informed by the SecLabs Knowledge Center. The operating agreement names who runs the workflows.", to: "/pudica-autonomy#deployment", label: "Deployment" },
  { q: "What is V Pilot Remote Support?", a: "V Pilot Remote Support provides remote onboarding guidance, troubleshooting and rollout support. Your team operates the workflows and executes production changes. Remote Support does not include production execution or ongoing operations by V Pilot.", to: "/pudica-autonomy#cloud-operations", label: "Cloud Operations" },
  { q: "Who operates the work?", a: "Customer-Operated: your team. Customer-Operated with V Pilot Remote Support: your team, with remote guidance from V Pilot. Hybrid Operations: V Pilot or a shared team, by named responsibility, as Co-Managed or Fully Managed Operations. NativeTrust Endpoint: V Pilot operates the contracted endpoint policies.", to: COMPARE_TO, label: "Compare Operating Models" },
  { q: "Can we keep our current tools?", a: "Yes, where the tools or their outputs are supported for the agreed workflow. Supported scanner, SIEM and endpoint outputs can be integrated, imported or reviewed manually, as agreed.", to: "/#tools", label: "Work with the tools you already have" },
  { q: "What does GRC as a Service include?", a: "Three packages you can commission independently or combine: Certification Readiness & Continuous Compliance, Enterprise Risk & Vendor Assurance, and Privacy Operations & DPO Support. Independent audit, attestation and certification decisions remain separate.", to: "/services/grc-as-a-service", label: "GRC as a Service" },
  { q: "Who handles identity and everyday IT requests?", a: "Managed Identity & IT Operations covers approved joiner, mover and leaver workflows, scoped privileged access, Intune administration and named IT service requests. General help desk is not implied.", to: "/services/managed-identity-it-operations", label: "Managed Identity & IT Operations" },
  { q: "Can PUDICA make production changes on its own?", a: "Only eligible actions can run within customer-approved policy. A validation result supports approval; it does not grant authority. Production checks still determine closure.", to: "/pudica-autonomy#validation-architecture", label: "Validation architecture" },
  { q: "Do you certify compliance?", a: "No. V Pilot supports readiness, evidence and corrective actions. Independent certification, attestation and audit conclusions remain separate.", to: "/services/certification-readiness", label: "Certification Readiness & Continuous Compliance" },
  { q: "Which services can we commission?", a: "__SERVICES__", to: "/services", label: "Service catalogue" },
  { q: "Where is V Pilot based?", a: `${ADDRESS.join(", ")}. Email ${CONTACT_EMAIL} or call ${PHONE}.`, to: "/contact", label: "Contact" },
  { q: "Are you hiring?", a: "Open roles and an internship, including a hands-on puzzle challenge, are listed on the careers page.", to: "/company/careers", label: "Careers" },
];
export const ENGAGEMENT_CHOICES = ["Not sure yet", "Specialist Engagement", "Co-Managed Operations", "Fully Managed Operations"];
export const ENVIRONMENTS = ["Cloud (supported cloud environments)", "Hybrid (cloud, on-premises and legacy)", "Workforce endpoints and browsers", "Not sure yet"];
export const INTERESTS = [...new Set([
  "Executive briefing", ...(OFFER.enabled ? [OFFER.interest] : []), "Managed Security Operations", "GRC as a Service", "PUDICA Autonomy demo", "Cloud deployment options", "Hybrid readiness assessment", "Customer-hosted PUDICA requirements", "Compare operating models", "Autonomy readiness assessment",
  "Scoped quote: PUDICA subscription", "Scoped quote: V Pilot Remote Support", "Scoped quote: Hybrid Operations: Co-Managed or Fully Managed", "Scoped quote: NativeTrust Endpoint", "Proof-of-concept scoping discussion", "Partnership", "Careers enquiry", ...CAREER_INTERESTS,
  ...CARD_ITEMS.map((s) => s.name), "Security Baselines & Configuration Drift", "Vulnerability Remediation", "Secure Business Transformation", "Incident & Recovery Readiness",
])];
export const MENUS = [
  { key: "autonomy", label: "Autonomy", to: "/pudica-autonomy", wide: true, match: ["/pudica-autonomy", "/products/compare"], lead: "Validate before you act",
    groups: [
      { title: "Platform", links: [["PUDICA Autonomy overview", "/pudica-autonomy"], ["Cloud Operations", "/pudica-autonomy#cloud-operations"], ["Hybrid Operations", "/pudica-autonomy#hybrid-operations"], ["Compare Operating Models", COMPARE_TO]] },
      { title: "Capabilities", links: WORKSTREAMS.map((w) => [w.name, "/pudica-autonomy#capabilities"]) },
      { title: "How it works", links: [["Validation Architecture", "/pudica-autonomy#validation-architecture"], ["GoldenVault and test bed", "/pudica-autonomy#goldenvault-test-bed"], ["Autonomy Readiness", "/pudica-autonomy#autonomy-readiness"], ["Sample Change Decision", "/pudica-autonomy#sample-change-decision"], ["Deployment", "/pudica-autonomy#deployment"]] },
    ], feature: ["Request a PUDICA Demo", contactTo("PUDICA Autonomy demo")], emblem: "pudica" },
  { key: "solutions", label: "Solutions", to: "/products#solutions", match: ["/products", "/solutions"], exclude: ["/products/compare"], lead: "Start with the problem you need to solve",
    groups: [
      { title: "Platform solutions", links: PRODUCT_SOLUTIONS.slice(0, 3).map((s) => [s.t, s.to]) },
      { title: "Service solutions", links: PRODUCT_SOLUTIONS.slice(3).map((s) => [s.t, s.to]) },
    ], feature: ["Not sure where to start? Compare Operating Models", COMPARE_TO] },
  { key: "services", label: "Services", to: "/services", wide: true, match: ["/services", "/managed-security-operations"], lead: "Choose what V Pilot will run with you",
    groups: [
      { title: "Managed Security Operations", links: MSO.map((s) => [s.name, `/services/${s.slug}`]) },
      { title: "Specialist Solutions", links: SPECIALIST.map((s) => [s.name, `/services/${s.slug}`]) },
      { title: "GRC as a Service", links: [["GRC as a Service overview", "/services/grc-as-a-service"], ...GRC_AREAS.map((s) => [s.name, `/services/${s.slug}`]), ["How to engage", "/services#how-to-engage"]] },
    ], feature: ["Compare engagement options", "/services#how-to-engage"] },
  { key: "resources", label: "Resources", to: "/resources", match: ["/resources"], lead: "Resources for security leaders",
    groups: [{ title: "Available now", links: [["Resources overview", "/resources"], ["ProdSecOps & ProdSecApps", "/resources/frameworks"], ["Sample change decision", "/resources/sample-change-decision"], ["Executive assurance summary", "/resources/executive-assurance-summary"]] }],
    note: "Executive briefs, technical guides and product documentation are listed here as they are published and maintained.", feature: ["Review a sample change decision.", "/resources/sample-change-decision"] },
  { key: "company", label: "Company", to: "/company", match: ["/company"], lead: "Your accountable cyber operating partner",
    groups: [{ title: "Who we are", links: [["About V Pilot", "/company"], ["Company profile 2026", "/company/profile"], ["Why V Pilot?", "/company#why"], ["Careers", "/company/careers"]] }, { title: "Get in touch", links: [["Contact", "/contact"], ["Customer support", "/support"]] }],
    feature: ["Book an executive briefing", contactTo("Executive briefing")], emblem: "vpilot" },
];
export const FOOTER_GROUPS = [
  { title: "Autonomy", items: [["PUDICA Autonomy", "/pudica-autonomy", true], ["Cloud Operations", "/pudica-autonomy#cloud-operations"], ["Hybrid Operations", "/pudica-autonomy#hybrid-operations"], ["Validation Architecture", "/pudica-autonomy#validation-architecture"], ["Autonomy Readiness", "/pudica-autonomy#autonomy-readiness"], ["Compare Operating Models", COMPARE_TO]] },
  { title: "Services", items: [["Managed Security Operations", "/managed-security-operations", true], ["Specialist Solutions", "/services#specialist-solutions", true], ["NativeTrust Endpoint", "/services/nativetrust-endpoint"], ["Managed Identity & IT Operations", "/services/managed-identity-it-operations"], ["GRC as a Service", "/services/grc-as-a-service", true], ["How to engage", "/services#how-to-engage"]] },
  { title: "Company", items: [["About V Pilot", "/company"], ["Company profile 2026", "/company/profile"], ["Why V Pilot?", "/company#why", true], ["How we operate", "/#operating-model"], ["Careers", "/company/careers"], ["Contact", "/contact"]] },
  { title: "Resources", items: [["Resources", "/resources"], ["Solutions", "/products#solutions"], ["ProdSecOps & ProdSecApps", "/resources/frameworks"], ["Sample Change Decision", "/resources/sample-change-decision"], ["Executive Assurance Summary", "/resources/executive-assurance-summary"], ["Customer Support", "/support"]] },
];
export const LEGAL_LINKS = [["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"], ["Cookie Policy", "/cookies"], ["Security Disclosure", "/security-disclosure"], ["Accessibility", "/accessibility"]];
