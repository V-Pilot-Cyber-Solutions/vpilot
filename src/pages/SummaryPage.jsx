/* PAGE: Executive assurance summary (/resources/executive-assurance-summary)
   Styles: styles/platform.css
   Content: data/platform.js (SUMMARY_FIELDS) */
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { IndependencePanel } from "../components/ServiceCards";
import { SummaryCard } from "../components/platform";
import { GRC } from "../data/services";
import { Link } from "../lib/router";

export function SummaryPage() {
  return (
    <>
      <PageHero art="contours" compact crumbs={[["Resources", "/resources"], ["Executive assurance summary"]]} eyebrow="Executive governance" title="Turn operating evidence into decisions." lead="Which risks exceed tolerance, who owns treatment and what needs approval now? GRC as a Service gives leadership a clear basis for risk decisions." />
      <section className="band" aria-labelledby="sum-title"><div className="wrap split"><div><h2 id="sum-title" className="sr-only">Sample executive assurance summary</h2><IndependencePanel /><p className="inline-links reveal"><Link to="/services/grc-as-a-service">See GRC as a Service <Icon name="arrow" size={16} /></Link></p></div><SummaryCard /></div></section>
      <CtaBand />
    </>
  );
}
