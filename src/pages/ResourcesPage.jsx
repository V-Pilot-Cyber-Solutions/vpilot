/* PAGE: Resources (/resources)
   Styles: styles/cards.css
   Content: - */
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/atoms";
import { Tile } from "../components/brand";
import { COMPARE_TO } from "../lib/config";
import { Link } from "../lib/router";

export function ResourcesPage() {
  const cards = [
    ["clipboard", "Sample change decision", "An illustrative decision record showing what stands behind a change that is still open.", "/resources/sample-change-decision"],
    ["chart", "Executive assurance summary", "An illustrative sample of the summary leadership uses to make risk decisions.", "/resources/executive-assurance-summary"],
    ["nodes", "ProdSecOps & ProdSecApps", "The infrastructure and application security frameworks, shown as one lifecycle loop in two disciplines.", "/resources/frameworks"],
    ["layers", "Validation architecture", "How PUDICA Autonomy acquires, versions, validates, authorises and verifies.", "/pudica-autonomy#validation-architecture"],
    ["eye", "Autonomy readiness", "How autonomy is earned through operational evidence.", "/pudica-autonomy#autonomy-readiness"],
    ["users", "How we operate", "Who operates, who decides and who validates.", "/#operating-model"],
    ["gear", "Engagement options", "Specialist, co-managed and fully managed engagement.", "/services#how-to-engage"],
    ["cloud", "Compare Operating Models", "Customer-Operated, Remote Support, Hybrid and endpoint: who runs the work, side by side.", COMPARE_TO],
  ];
  return (
    <>
      <PageHero art="contours" crumbs={[["Resources"]]} eyebrow="Resources" title="Resources for security leaders." lead="Executive briefs, technical guides and product documentation are listed here as they are published and maintained." />
      <section className="band" aria-labelledby="res-title"><div className="wrap"><SectionHead eyebrow="Available now" title="Start with the evidence." id="res-title" /><ul className="sol sol--three">{cards.map(([ic, t, d, to], i) => (<li key={t} className="sol__card tilt reveal" data-tilt="5" style={{ "--i": i % 3 }}><Tile icon={ic} /><h3>{t}</h3><p>{d}</p><Link className="textlink" to={to}>Open <Icon name="arrow" size={15} /></Link></li>))}</ul></div></section>
      <CtaBand />
    </>
  );
}
