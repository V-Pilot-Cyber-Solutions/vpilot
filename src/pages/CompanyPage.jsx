/* PAGE: Company (/company)
   Styles: styles/company.css
   Content: data/company.js (BRAND_MAP) */
import "../styles/company.css";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { Btn, Eyebrow, SectionHead } from "../components/atoms";
import { Emblem, Emblem3D, Tile } from "../components/brand";
import { BRAND_MAP, PROOF, WHY_COMPARE, WHY_REASONS } from "../data/company";
import { Link, contactTo } from "../lib/router";

function WhySection({ id = "why" }) {
  return (
    <section id={id} className="band why" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="why__top">
          <header className="section-head reveal"><Eyebrow>Why V Pilot?</Eyebrow><h2 id={`${id}-title`}>Because someone has to run the work, and prove it.</h2><p className="lead">Tools surface findings and policies describe intent. Neither runs the control, resolves the dependency or shows leadership what changed. V Pilot operates the delegated work, so you can answer three questions with evidence: what does V Pilot run, what do we still decide, and what proves the outcome?</p></header>
          <div className="why__emb reveal" style={{ "--i": 1 }}><Emblem3D kind="vpilot" size={200} label="V Pilot emblem" /></div>
        </div>
        <ul className="why__grid">{WHY_REASONS.map((w, i) => (<li key={w.t} className="why__card tilt reveal" data-tilt="6" style={{ "--i": i % 3 }}><span className="why__n">{String(i + 1).padStart(2, "0")}</span><Tile icon={w.icon} /><h3>{w.t}</h3><p>{w.d}</p></li>))}</ul>
        <div className="compare reveal" role="table" aria-label="How V Pilot differs">{WHY_COMPARE.map(([who, does, gap], i) => (<div key={who} className={`compare__col ${i === 2 ? "is-us" : ""}`} role="row"><p className="compare__who">{i === 2 && <Emblem kind="vpilot" size={22} />}{who}</p><p><b>Does</b>{does}</p><p><b>{i === 2 ? "You get" : "Leaves a gap"}</b>{gap}</p></div>))}</div>
        <p className="inline-links reveal"><Link to={contactTo("Executive briefing")}>Book an Executive Briefing <Icon name="arrow" size={16} /></Link></p>
      </div>
    </section>
  );
}
export function BrandMap({ id = "structure" }) {
  return (<ul className="bmap" id={id}>{BRAND_MAP.map((b, k) => (<li key={b.t} className="bmap__row tilt reveal" data-tilt="5" style={{ "--i": k % 3 }}><Tile icon={b.icon} emblem={b.emblem} mark={b.mark} sm /><h3>{b.t}</h3><p>{b.d}</p></li>))}</ul>);
}
/* ==========================================================================
   SMALL PAGE PARTS
   ========================================================================== */
function ProofRow() { return (<ul className="proof">{PROOF.map((p, i) => (<li key={p.n} className="proof__card reveal" style={{ "--i": i }}><span className="proof__n">{p.n}</span><h3>{p.t}</h3><p>{p.d}</p></li>))}</ul>); }
export function CompanyPage() {
  return (
    <>
      <PageHero art="soc" crumbs={[["Company"]]} eyebrow="Integrated Cyber Operations, Governance & Assurance" title="Your accountable cyber operating partner." lead="V Pilot protects critical services, delivers security-sensitive changes and gives leadership a clear view of remaining risk. V Pilot operates the agreed work; PUDICA connects the evidence; customer leaders retain material approvals and formal risk acceptance." actions={<><Btn to={contactTo("Executive briefing")} variant="cyan">Book an Executive Briefing</Btn><Btn to="/company/profile" variant="ghost">Read the Company Profile</Btn></>}>
        <div className="glass glass--tag"><Emblem3D kind="vpilot" size={170} label="V Pilot emblem" /><ul className="tagstack"><li>People</li><li>Process</li><li>Technology</li><li className="hi">Higher resilience</li></ul></div>
      </PageHero>
      <WhySection id="why" />
      <section className="band band--cloud" aria-labelledby="co-struct"><div className="wrap"><SectionHead eyebrow="How the company fits together" title="V Pilot operates. PUDICA automates. NativeTrust Endpoint protects the desktop." id="co-struct" lead="Customer leadership retains authority." /><BrandMap id="co-structure" />
        <div className="principle reveal"><div><p className="principle__k">Supporting principle</p><h3>Reduce complexity without weakening control.</h3><p>V Pilot keeps the systems the business needs rather than cutting infrastructure indiscriminately.</p></div><p className="principle__mvp">Minimum Viable Infrastructure.<br />Maximum Viable Protection.</p></div>
        <p className="inline-links reveal"><Link to="/company/profile">See purpose, operating model, partner ecosystem and standards in the company profile <Icon name="arrow" size={16} /></Link></p></div></section>
      <section className="band" aria-labelledby="co-proof"><div className="wrap split"><SectionHead eyebrow="What you can expect" title="Know what is controlled, what changed and what can recover." id="co-proof" lead="We report verified results, open exceptions and decisions due. Tools generate findings. V Pilot connects each material finding to an owner, an authorised decision and a verified result." /><ProofRow /></div></section>
      <CtaBand />
    </>
  );
}
