/* PAGE: Services (/services)
   Styles: styles/services.css
   Content: data/services.js */
import "../styles/services.css";
import { CtaBand } from "../components/CtaBand";
import { DeliveryOptions, EngagementCards } from "../components/Engagement";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { GroupSection, IndependencePanel, RelatedManaged } from "../components/ServiceCards";
import { StepRail } from "../components/StepRail";
import { AnchorBtn, SectionHead } from "../components/atoms";
import { Tile } from "../components/brand";
import { ADOPT_STAGES } from "../data/services";
import { COMPARE_TO } from "../lib/config";
import { Link, contactTo } from "../lib/router";

export function ProdSystemsNote() {
  return (
    <aside className="scopebox reveal" id="production-systems-support" aria-label="Production systems support">
      <Tile icon="gear" />
      <div><p className="scopebox__k">Named scope · where agreed</p><h3>Production Systems Support</h3>
        <p>V Pilot can administer named cloud and server systems, perform routine maintenance and coordinate approved production changes. The agreement defines the assets, maintenance windows, responsibilities and provider handoffs. For managed desktops, laptops and browsers, see <Link to="/services/nativetrust-endpoint">NativeTrust Endpoint</Link>. A migration or investigation has its own scope.</p></div>
    </aside>
  );
}
function RelatedIdentity() {
  return (
    <aside className="relman reveal" aria-label="Related service">
      <Tile icon="key" sm size={22} />
      <div><p className="relman__k">Related service</p><h3>Managed Identity & Access Operations</h3><p>Separately commissionable for identity lifecycle, access reviews and privileged access. It is not a seventh card in this grid and not a default part of NativeTrust Endpoint.</p></div>
      <Link className="textlink" to="/services/managed-iam-operations">Explore the service <Icon name="arrow" size={15} /></Link>
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
        lead="Delegate ongoing security operations, commission executive security leadership or bring in specialists for a defined outcome. Before work starts, we agree what V Pilot will operate, what your team will approve and what evidence you'll receive."
        actions={<><AnchorBtn href="#catalogue">Browse Services</AnchorBtn><AnchorBtn href="#how-to-engage" variant="ghost">Compare Engagement Options</AnchorBtn></>} />
      <div id="catalogue">
        <GroupSection g="mso" band="band--cloud" extra={<><ProdSystemsNote /><RelatedIdentity /></>} cta={["Scope Your Managed Operations", contactTo("Managed Security Operations")]} />
        <GroupSection g="govern" extra={<div className="gov2"><IndependencePanel /><RelatedManaged /></div>} cta={["Discuss Your Governance Scope", contactTo("GRC as a Service")]} band="" />
        <GroupSection g="specialist" band="band--cloud" cta={["Discuss a Specialist Engagement", contactTo("Specialist Engagement")]} />
      </div>
      <section id="how-to-engage" className="band" aria-labelledby="eng-title"><div className="wrap">
        <SectionHead eyebrow="How to engage" title="Choose how much responsibility to delegate." id="eng-title" lead="Define assets, access, operating hours, service levels, escalation, third-party responsibilities and handover in the statement of work." />
        <EngagementCards />
        <h3 className="subhead">Enter at your current stage</h3>
        <StepRail items={ADOPT_STAGES} gateLabel="Go/no-go decision" />
        <DeliveryOptions />
      </div></section>
      <CtaBand title="Scope the work you want V Pilot to run." lead="Tell us the service you need to operate, the change you need to deliver or the evidence leadership is asking for. We'll define the scope, the approval boundaries and how to show completion." primary={["Scope Your Managed Operations", contactTo("Managed Security Operations")]} secondary={["Compare Operating Models", COMPARE_TO]} note="Existing customers with an active incident should use their contracted escalation channel, not the general enquiry form. Do not submit credentials, incident evidence or sensitive customer data through the enquiry form." />
    </>
  );
}
