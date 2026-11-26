/* PAGE: Services (/services): three categories, how to engage, proof of concept
   Styles: styles/services.css
   Content: data/services.js (GROUP_INTRO, CARD_ORDER, ENGAGEMENT_PATTERNS) */
import "../styles/services.css";
import { CtaBand } from "../components/CtaBand";
import { DeliveryOptions, EngagementCards, FourQuestions } from "../components/Engagement";
import { PageHero } from "../components/PageHero";
import { GroupSection, IndependencePanel } from "../components/ServiceCards";
import { StepRail } from "../components/StepRail";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Tile } from "../components/brand";
import { CheckList, KeyCall } from "../components/detail";
import { ADOPT_STAGES, ENGAGEMENT_PATTERNS } from "../data/services";
import { COMPARE_TO } from "../lib/config";
import { Link, contactTo } from "../lib/router";

export function ProdSystemsNote() {
  return (
    <aside className="scopebox reveal" id="production-systems-support" aria-label="Production systems support">
      <Tile icon="gear" />
      <div><p className="scopebox__k">Named scope · where agreed</p><h3>Production Systems Support</h3>
        <p>V Pilot can administer named cloud and server systems, perform routine maintenance and coordinate approved production changes. The agreement defines the assets, maintenance windows, responsibilities and provider handoffs. For managed desktops, laptops and browsers, see <Link to="/services/nativetrust-endpoint">NativeTrust Endpoint</Link>. For identity operations and named IT service requests, see <Link to="/services/managed-identity-it-operations">Managed Identity &amp; IT Operations</Link>.</p></div>
    </aside>
  );
}
/* ==========================================================================
   HOME
   ========================================================================== */

/* ==========================================================================
   SERVICES (catalogue), MANAGED SECURITY OPERATIONS, scope chooser
   ========================================================================== */
export function ServicesPage() {
  return (
    <>
      <PageHero art="contours" crumbs={[["Services"]]} eyebrow="V Pilot Services" title="Choose what V Pilot will run with you."
        lead="Choose the work first, then choose who runs it. Delegate recurring security operations, commission a defined solution or an ongoing technical responsibility, or take on governance, risk and compliance. Before work starts, we agree what V Pilot will operate, what your team will approve and what evidence you will receive."
        actions={<><AnchorBtn href="#catalogue">Browse Services</AnchorBtn><AnchorBtn href="#how-to-engage" variant="ghost">Compare Engagement Options</AnchorBtn></>} />
      <div id="catalogue">
        <GroupSection g="mso" band="band--cloud" extra={<ProdSystemsNote />} cta={["Scope Your Managed Operations", contactTo("Managed Security Operations")]} />
        <GroupSection g="specialist" band="" cta={["Discuss a Specialist Solution", contactTo("Specialist Solution")]} />
        <GroupSection g="govern" band="band--cloud" extra={<div className="gov2"><IndependencePanel /></div>} cta={["Discuss Your GRC Scope", contactTo("GRC as a Service")]} />
      </div>
      <section id="how-to-engage" className="band" aria-labelledby="eng-title"><div className="wrap">
        <SectionHead eyebrow="How to engage" title="Choose how much responsibility to delegate." id="eng-title" lead="Choose the work first, then choose who runs it. Commission a Specialist Engagement, share named responsibilities through Co-Managed Operations or delegate the contracted work through Fully Managed Operations. Define assets, access, operating hours, service levels, escalation, third-party responsibilities and handover in the statement of work." />
        <EngagementCards />
        <KeyCall label="How we word every commitment" text="Remote Support guides. Managed Operations performs the work assigned to V Pilot. Customer leaders retain material approvals and formal risk acceptance." />
        <h3 className="subhead">Four questions every scope answers</h3>
        <FourQuestions />
        <CheckList title="Commercial engagement patterns (commercial terms are quoted by scope)" items={ENGAGEMENT_PATTERNS} />
        <h3 className="subhead">Enter at your current stage</h3>
        <StepRail items={ADOPT_STAGES} gateLabel="Go/no-go decision" />
        <DeliveryOptions />
      </div></section>
      <section id="proof-of-concept" className="band band--cloud" aria-labelledby="poc-title"><div className="wrap split">
        <SectionHead eyebrow="Start small" title="Prove one outcome before committing to a wider programme." id="poc-title" lead="Nominate an executive sponsor, a technical owner and one priority: an exposure that needs verified closure, an endpoint control that needs testing or an assurance gap that needs a clear owner. Agree the permitted evidence, test boundary, approver, stop conditions and the criteria for success before work begins." />
        <div className="reveal" style={{ "--i": 1 }}>
          <KeyCall label="What leadership receives" text="Results against the agreed criteria, known limitations and a recommendation to scale, refine or stop. Any production work requires separate authority." />
          <p className="inline-links"><Btn to={contactTo("Proof-of-concept scoping discussion")} variant="cyan">Request a Proof-of-Concept Scoping Discussion</Btn></p>
        </div>
      </div></section>
      <CtaBand title="Scope the work you want V Pilot to run." lead="Tell us the service you need to operate, the change you need to deliver or the evidence leadership is asking for. We'll define the scope, the approval boundaries and how to show completion." primary={["Scope Your Managed Operations", contactTo("Managed Security Operations")]} secondary={["Compare Operating Models", COMPARE_TO]} note="Existing customers with an active incident should use their contracted escalation channel, not the general enquiry form. Do not submit credentials, incident evidence or sensitive customer data through the enquiry form." />
    </>
  );
}
