/* PAGE: Solutions overview (/products)
   Styles: styles/products.css
   Content: data/solutions.js */
import "../styles/products.css";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { StepRail } from "../components/StepRail";
import { Btn, SectionHead } from "../components/atoms";
import { Emblem3D, Tile } from "../components/brand";
import { BUY_PATHS } from "../data/home";
import { ADOPT_STAGES } from "../data/services";
import { PRODUCT_CAPS, PRODUCT_SOLUTIONS } from "../data/solutions";
import { COMPARE_TO, asset } from "../lib/config";
import { Link, contactTo } from "../lib/router";

/* ==========================================================================
   NATIVETRUST MANAGED WORKSPACE (solution page)
   ========================================================================== */
/* ==========================================================================
   SOLUTIONS and operating-model comparison
   ========================================================================== */
export function ProductsPage() {
  return (
    <>
      <PageHero art="contours" crumbs={[["Solutions"]]} eyebrow="Solutions and platform" title="Automate security operations. Keep control of production change."
        lead="PUDICA Autonomy is V Pilot's flagship security operations automation platform. It connects supported evidence to validation, authorised action and production verification. Start with a supported cloud workflow, or combine the platform with V Pilot's managed operations for a hybrid environment."
        actions={<><Btn to="/pudica-autonomy" variant="cyan">Explore PUDICA Autonomy</Btn><Btn to={COMPARE_TO} variant="ghost">Compare Operating Models</Btn></>}>
        <div className="glass glass--brand"><Emblem3D kind="pudica" size={170} label="PUDICA emblem" /><img src={asset("pudica-lockup.png")} alt="PUDICA" width="280" height="50" /><p className="glass__v">Validated in isolation. Approved by your authority. Verified in production.</p></div>
      </PageHero>
      <section id="starting-points" className="band" aria-labelledby="sp-h"><div className="wrap">
        <SectionHead eyebrow="Starting points" title="Three ways to begin." id="sp-h" lead="Cloud and hybrid describe where workloads run. A customer-owned test bed describes where eligible changes are validated. Neither decides who runs the operation." />
        <ul className="bpaths">{BUY_PATHS.map((p, k) => (
          <li key={p.key} className={`bpath bpath--${p.key} tilt reveal`} data-tilt="5" style={{ "--i": k }}>
            <Tile icon={p.icon} /><p className="bpath__tag">{p.tag}</p><h3>{p.title}</h3><p className="bpath__copy">{p.copy}</p>
            <p className="bpath__buy"><b>What you are buying</b>{p.buys}</p><Btn to={p.cta[1]} size="sm">{p.cta[0]}</Btn>
          </li>))}</ul>
      </div></section>
      <section id="capabilities" className="band band--cloud" aria-labelledby="cap-h"><div className="wrap">
        <SectionHead eyebrow="Capabilities" title="Integrated Security Operations Management." id="cap-h" lead="Six workstreams, with evidence linked to the work. Each link goes to a visible section of the PUDICA page or to the NativeTrust Endpoint service." />
        <div className="capgroups">{PRODUCT_CAPS.map((g, k) => (
          <article key={g.title} className="capgroup tilt reveal" data-tilt="4" style={{ "--i": k }}>
            <h3><Icon name={g.icon} size={20} />{g.title}</h3>
            <ul>{g.links.map(([t, to]) => (<li key={t}><Link to={to}>{t} <Icon name="arrow" size={14} /></Link></li>))}</ul>
          </article>))}</div>
      </div></section>
      <section id="solutions" className="band" aria-labelledby="sol-h"><div className="wrap">
        <SectionHead eyebrow="Solutions" title="Start with the problem you need to solve." id="sol-h" lead="A growing cloud estate, a hybrid production environment and a workforce handling sensitive data need different controls and different operators. Choose the outcome you need, then see the platform capabilities and services that can help you achieve it." />
        <ul className="sol sol--three">{PRODUCT_SOLUTIONS.map((s, i) => (
          <li key={s.t} className="sol__card tilt reveal" data-tilt="5" style={{ "--i": i % 3 }}>
            <Tile icon={s.icon} /><p className="sol__tag">{s.tag}</p><h3>{s.t}</h3><p>{s.d}</p>
            <Link className="textlink" to={s.to}>{s.cta} <Icon name="arrow" size={15} /></Link>
          </li>))}</ul>
        <p className="inline-links reveal"><Link to={COMPARE_TO}>Not sure where to start? Compare Operating Models <Icon name="arrow" size={16} /></Link></p>
      </div></section>
      <section id="adoption" className="band band--cloud" aria-labelledby="ad-h"><div className="wrap">
        <SectionHead eyebrow="Adoption" title="Assess, launch, operationalise, scale." id="ad-h" lead="Enter at your current stage and see what you receive at the end of each one. Elapsed time alone does not move a workflow into automation." />
        <StepRail items={ADOPT_STAGES} gateLabel="Go/no-go decision" />
      </div></section>
      <CtaBand title="See PUDICA Autonomy in your operating context." lead="Start with a demo, or compare the operating models to decide who should run the work." primary={["Request a PUDICA Demo", contactTo("PUDICA Autonomy demo")]} secondary={["Compare Operating Models", COMPARE_TO]} />
    </>
  );
}
