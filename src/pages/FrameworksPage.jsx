/* PAGE: ProdSecOps and ProdSecApps (/resources/frameworks)
   Styles: styles/frameworks.css
   Content: data/frameworks.js */
import "../styles/frameworks.css";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { AnchorBtn, SectionHead } from "../components/atoms";
import { FrameworkMark, Tile } from "../components/brand";
import { FlowChain, KeyCall, SpecTable } from "../components/detail";
import { FW, PRODSECAPPS_DOMAINS, PRODSECOPS_CYCLE, PRODSECOPS_DOMAINS, PRODSECOPS_PRACTICES } from "../data/frameworks";
import { FRAMEWORK_RAIL } from "../data/home";
import { Link } from "../lib/router";

export function FrameworksPage() {
  return (
    <>
      <PageHero art="contours" crumbs={[["Resources", "/resources"], ["ProdSecOps & ProdSecApps"]]} eyebrow="Frameworks" title="One loop. Two disciplines." lead="ProdSecOps and ProdSecApps guide delivery as continuous lifecycles. They are complementary operating frameworks, not separate software products and not certification labels." actions={<><AnchorBtn href="#prodsecops">ProdSecOps</AnchorBtn><AnchorBtn href="#prodsecapps" variant="ghost">ProdSecApps</AnchorBtn></>}>
        <div className="glass glass--marks"><FrameworkMark kind="ops" size={250} labels /><FrameworkMark kind="apps" size={250} labels /></div>
      </PageHero>
      <section className="band" aria-labelledby="fw-title"><div className="wrap"><SectionHead eyebrow="ProdSecOps and ProdSecApps" title="Infrastructure and application governance." id="fw-title" />
        <div className="fw">
          <article id="prodsecops" className="fw__card fw__card--ops tilt reveal" data-tilt="4"><FrameworkMark kind="ops" size={340} labels /><p className="fw__tag">ProdSecOps <span>/ infrastructure security</span></p><h3>Security action aligned to production reality.</h3><p>Govern infrastructure operations within the customer's ISO/IEC 27001 information security management context: critical services, maintenance windows, monitoring, rollback and recovery, with one prioritised backlog, explicit ownership and evidence-based closure.</p><p className="card__ev"><b>Definition of done</b>Technical closure confirmed. Service health verified. Monitoring validated. Evidence preserved. Residual risk reviewed. Recovery checked where relevant.</p><Link className="textlink" to="/resources/sample-change-decision">View a sample change decision <Icon name="arrow" size={15} /></Link></article>
          <article id="prodsecapps" className="fw__card fw__card--apps tilt reveal" data-tilt="4" style={{ "--i": 1 }}><FrameworkMark kind="apps" size={340} labels /><p className="fw__tag">ProdSecApps <span>/ application security governance</span></p><h3>Govern application trust across the enterprise.</h3><p>Define who owns each web, mobile, API, SaaS and business application, what security it requires, and what evidence is needed to release, operate, recover or retire it. Informed by ISO/IEC 27034 concepts. Application owners retain engineering and release authority.</p><p className="card__ev"><b>Proof object</b>A release gate or application risk treatment record. ISO/IEC 27034-informed governance describes an approach, not an endorsement or certification.</p><Link className="textlink" to="/solutions/application-trust">Explore Application Trust <Icon name="arrow" size={15} /></Link></article>
        </div></div></section>
      <section id="framework-detail" className="band" aria-labelledby="fd-title"><div className="wrap">
          <SectionHead eyebrow="How the frameworks work" title="Operating practice and scope, side by side." id="fd-title" lead="ProdSecOps integrates infrastructure administration, technical support, vulnerability remediation, SIEM monitoring, incident response, change, risk, backup, recovery and operational evidence through one production-aware framework. ProdSecApps governs applications the organization develops, commissions, purchases, subscribes to, integrates, inherits, outsources, operates as legacy technology or retires." />
          <h3 className="subhead subhead--left">The ProdSecOps lifecycle</h3>
          <FlowChain items={PRODSECOPS_CYCLE} label="ProdSecOps lifecycle" />
          <SpecTable title="ProdSecOps operational scope" cols={["Domain", "Operational scope"]} rows={PRODSECOPS_DOMAINS} />
          <SpecTable title="How ProdSecOps works in practice" cols={["Practice", "Operational rule"]} rows={PRODSECOPS_PRACTICES} />
          <KeyCall label="Definition of done" text="Technical closure confirmed. Service health verified. Monitoring validated. Evidence preserved. Residual risk reviewed. Recovery checked where relevant." />
          <SpecTable title="ProdSecApps operational scope" cols={["Domain", "Operational scope"]} rows={PRODSECAPPS_DOMAINS} />
          <p className="note reveal">Application Security Governance is a separately commissionable Specialist Solution delivered through ProdSecApps. New work uses agreed CI/CD controls and release criteria; existing applications use owned remediation from supported static, dynamic and software composition analysis findings. Engineering retains code and regression testing, and the designated application owner retains release authority.</p>
        </div></section>
        <section className="band band--cloud" aria-labelledby="mk-title"><div className="wrap"><SectionHead eyebrow="Brand system" title="Same infinity loop, a colour theme for each framework." id="mk-title" lead="Both marks use one lifecycle loop so the two disciplines read as a family. Blue carries ProdSecOps; violet carries ProdSecApps. The same component and static SVGs are ready for prodsecops.com and prodsecapps.com." />
        <div className="mgrid">{["ops", "apps"].map((k) => (<div key={k} className={`mgrid__tile mgrid__tile--${k} reveal`}><FrameworkMark kind={k} size={300} labels /><p>{FW[k].words.join(" · ")}</p></div>))}{["ops", "apps"].map((k) => (<div key={k + "l"} className="mgrid__tile mgrid__tile--light reveal"><FrameworkMark kind={k} size={300} labels /><p>On light backgrounds</p></div>))}</div>
        <ul className="frail frail--page">{FRAMEWORK_RAIL.map((f) => (<li key={f.t}><Link to={f.to}><Tile icon={f.icon} mark={f.mark} sm size={20} /><span><b>{f.t}</b>{f.d}</span></Link></li>))}</ul></div></section>
      <CtaBand />
    </>
  );
}
