/* PAGE: Sample change decision (/resources/sample-change-decision)
   Styles: styles/platform.css
   Content: data/platform.js (RECORD) */
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { RecordCard } from "../components/platform";
import { Link } from "../lib/router";

export function SampleDecisionPage() {
  return (
    <>
      <PageHero art="contours" compact crumbs={[["Resources", "/resources"], ["Sample change decision"]]} eyebrow="Worked example" title="See what stands behind a change before it runs." lead="An illustrative view of the evidence an approver would review: what was checked before approval, what is still awaiting a decision and what production verification still requires." />
      <section className="band" aria-labelledby="rec-title"><div className="wrap split split--record"><div><h2 id="rec-title" className="sr-only">Illustrative decision record</h2><p className="callout reveal"><b>Illustrative example.</b> Figures show the format of the operating record and do not represent a customer result. This is a public narrative, not a client case study or a production result, and it is not live telemetry. It shows one open change: validated in isolation, awaiting approval, production verification due.</p><p className="inline-links reveal"><Link to="/pudica-autonomy#validation-architecture">See the validation architecture <Icon name="arrow" size={16} /></Link><Link to="/resources/executive-assurance-summary">Executive assurance summary <Icon name="arrow" size={16} /></Link></p></div><RecordCard /></div></section>
      <CtaBand />
    </>
  );
}
