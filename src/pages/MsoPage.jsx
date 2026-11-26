/* PAGE: Managed Security Operations (/managed-security-operations)
   Styles: styles/services.css
   Content: data/services.js (MSO_SLUGS) */
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { ServiceCard } from "../components/ServiceCards";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Tile } from "../components/brand";
import { GROUP_INTRO, MSO } from "../data/services";
import { Link, contactTo } from "../lib/router";
import { ProdSystemsNote } from "./ServicesPage";

export function MsoPage() {
  const [title, lead] = GROUP_INTRO.mso;
  return (
    <>
      <PageHero art="contours" crumbs={[["Services", "/services"], ["Managed Security Operations"]]} eyebrow="Managed Security Operations" title={title}
        lead={<><span className="phero__headline">Enabled by PUDICA Autonomy where workflows are eligible.</span>{lead}</>}
        actions={<><AnchorBtn href="#responsibilities">See what you can delegate</AnchorBtn><Btn to={contactTo("Managed Security Operations")} variant="ghost">Scope Your Managed Operations</Btn></>} />
      <section id="responsibilities" className="band band--cloud" aria-labelledby="mso-list">
        <div className="wrap">
          <SectionHead eyebrow="What you can delegate" title="Four responsibilities, each with its own evidence." id="mso-list" lead="We work within named coverage and change authority, and report what was verified, what remains open and who needs to act." />
          <ul className="cards cards--2">{MSO.map((s, i) => (<ServiceCard key={s.slug} s={s} i={i} />))}</ul>
          <ProdSystemsNote />
          <p className="inline-links reveal"><Link to="/services#specialist-solutions">Looking for endpoint security, identity operations or application governance? See Specialist Solutions <Icon name="arrow" size={16} /></Link></p>
        </div>
      </section>
      <section className="band" aria-labelledby="chg-title"><div className="wrap split">
        <SectionHead eyebrow="Delivery practice" title="Controlled change is how V Pilot delivers safely, not another service to buy." id="chg-title" lead="Across production services, a change is proposed, validated where eligible, approved, executed in the agreed window and verified. Identity and IT changes keep their own approvals through Managed Identity & IT Operations. Changes to managed device, browser and data policies follow the same path within NativeTrust Endpoint." />
        <ul className="points points--stack">{[["refresh", "Production systems", "Routine maintenance and approved production changes follow the same propose, validate, approve, act and verify path."], ["key", "Identity and IT operations", "Identity and IT changes keep their own approvals and evidence, separate from device and server change."], ["laptop", "Endpoints", "Changes to managed device, browser and data policies follow the same path within NativeTrust Endpoint."]].map(([ic, t, d], k) => (<li key={t} className="point tilt reveal" data-tilt="4" style={{ "--i": k }}><Tile icon={ic} sm size={22} /><h3>{t}</h3><p>{d}</p></li>))}</ul>
      </div></section>
      <CtaBand title="Scope the operations you want to delegate." lead="Name the systems, coverage hours and change authority. We will confirm what V Pilot runs, what your team still approves and what evidence you will receive." primary={["Scope Your Managed Operations", contactTo("Managed Security Operations")]} secondary={["Compare engagement options", "/services#how-to-engage"]} note="Existing customers with an active incident should use their contracted escalation channel." />
    </>
  );
}
