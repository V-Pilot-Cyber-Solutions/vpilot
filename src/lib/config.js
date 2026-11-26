import { ALIASES, GRC } from "../data/services";
import { SOLUTIONS } from "../data/solutions";
import { Hero, Home } from "../pages/HomePage";

/* ==========================================================================
   V PILOT CYBER SOLUTIONS LLP — vpilot.org
   Multi-page enterprise site · built-in router · no extra dependency

   Canonical placement
     Home      explains how V Pilot operates, how existing tools feed the work, and where to start
     Solutions /products overview; Autonomy: PUDICA Autonomy (flagship platform) and Compare Operating Models
     Services  three categories: Managed Security Operations, Specialist Solutions, GRC as a Service
     Services  owns the catalogue and engagement options
     Resources frameworks, sample decision record, executive summary
     NativeTrust Endpoint is a Specialist Solution (/services/nativetrust-endpoint).
   Retired: "IT & Infrastructure Security Operations" (old route shows a scope chooser; see ALIASES).
   Service detail pages share one structure: Hero > When this fits > What V Pilot delivers >
   How we work with your team > What it looks like in practice > Evidence and next step.
   ========================================================================== */

const BASE_RAW = import.meta.env.BASE_URL;
export const BASE = BASE_RAW.endsWith("/") ? BASE_RAW : BASE_RAW + "/";
export const asset = (file) => `${BASE}assets/${file}`;
export const hrefOf = (to) => (/^(https?:|mailto:|tel:)/.test(to) ? to : BASE + to.replace(/^\//, ""));
/* --- Confirm before launch -------------------------------------------------- */
export const CONTACT_EMAIL = "enquiry@vpilot.org";
export const PHONE = "+91 94423 31700";
export const PHONE_HREF = "tel:+919442331700";
export const ADDRESS = ["V Pilot Cyber Solutions LLP", "Suite No. 12, PulseBay 64", "Subbiah Salai, opposite Railway Station", "Puducherry 605001, India"];
export const MAP_SRC = "https://www.google.com/maps?q=Pulsebay%2064%20Puducherry%20605001&output=embed";
export const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Pulsebay%2064%20Puducherry%20605001";
export const FORM_ENDPOINT = ""; // optional POST endpoint (e.g. Formspree). Empty = opens an email draft for the visitor to send.
const PUDICA_URL = "https://pudica.io";
export const PUDICA_SIGNIN = "https://pudica.io/MicrosoftIdentity/Account/SignIn";
export const SITE = "V Pilot";
export const DEFAULT_DESC = "Automate eligible cloud security workflows with PUDICA Autonomy, delegate agreed hybrid security operations to V Pilot, or protect workforce devices with NativeTrust Endpoint.";
export const SOCIAL = [
  ["Facebook", "https://www.facebook.com/VPilotCyberSolutions"],
  ["LinkedIn", "https://www.linkedin.com/company/vpilotcyber"],
  ["X", "https://x.com/vpilotcyber"],
  ["Instagram", "https://www.instagram.com/vpilotcyber"],
  ["GitHub", "https://github.com/V-Pilot-Cyber-Solutions"],
];
/* Campaign (ticker + /offers/dpo-onboarding). enabled:false hides it. Confirm approval, dates and terms before launch. */
/* HOLD (wording standard item 10): the privacy onboarding campaign is disabled. Reinstate it only after eligibility, discount basis, scope, validity and terms are approved:
   set enabled: true and fill badge, discount, service, urgency, cta and interest. While disabled, the header shows a static link to the privacy service instead of a ticker. */
export const OFFER = { enabled: false, badge: "", discount: "", service: "", urgency: "", cta: "", interest: "" };
/* HOLD (items 12, 13, 14): no consent manager is installed. When one is, set CONSENT_MANAGER = true and connect the "vpilot:open-cookie-settings" event. */
export const CONSENT_MANAGER = false;
/* HOLD (item 15): publish internship duration, week plan and priority-consideration wording only after HR confirms duration, stipend, IP, confidentiality and applicant-data handling. */
export const INTERNSHIP_TERMS_CONFIRMED = false;
const TRIAL_LABEL = "Free Trial";
const TRIAL_INTEREST = "Free trial";
export const HEADER_CTA = { label: "Book an Executive Briefing", interest: "Executive briefing" }; // switch to { label: TRIAL_LABEL, interest: TRIAL_INTEREST } only when the trial, eligibility and fulfilment are approved
export const SITE_URL = "https://vpilot.org";
export const COMPARE_TO = "/products/compare";
/* Published paths that moved. Checked as "path#hash" first, then "path". An incoming hash is kept when the target has none. */
export const REDIRECTS = {
  "/operating-model": "/#operating-model",
  "/how-we-operate": "/#operating-model",
  "/operating-model#authority": "/#authority",
  "/operating-model#cycle": "/#cycle",
  "/operating-model#structure": "/company#co-structure",
  "/operating-model/frameworks": "/resources/frameworks",
  "/operating-model/engagement": "/services#how-to-engage",
  "/solutions": "/products#solutions",
  "/solutions/nativetrust-endpoint": "/services/nativetrust-endpoint",
  "/products/nativetrust": "/services/nativetrust-endpoint",
  "/products/nativetrust-endpoint": "/services/nativetrust-endpoint",
  "/products/5pilot-cloud": "/products/compare",
  "/products/5pilot-cloud#cloud-it-support": "/products/compare#compare-table",
  "/products/5pilot-cloud#workforce-identity-endpoint": "/products/compare#compare-table",
  "/products/5pilot-cloud#managed-security-ops": "/products/compare#compare-table",
  "/products/5pilot-cloud#audit-readiness-evidence": "/products/compare#compare-table",
  "/services/ciso-as-a-service": "/services/grc-as-a-service",
  "/services/managed-iam-operations": "/services/managed-identity-it-operations",
  "/services/vulnerability-configuration-management": "/services/vulnerability-compliance-remediation-management",
  "/services/digital-forensics-investigation": "/services/digital-forensics-training-investigations",
  "/services#executive-governance": "/services#grc-as-a-service",
  "/services#specialist-engagements": "/services#specialist-solutions",
  "/pudica-autonomy/architecture": "/pudica-autonomy#validation-architecture",
  "/pudica-autonomy/readiness": "/pudica-autonomy#autonomy-readiness",
  "/pudica-autonomy#workstreams": "/pudica-autonomy#capabilities",
  "/offers/dpo-onboarding": "/services/privacy-operations-dpo-support",
};
