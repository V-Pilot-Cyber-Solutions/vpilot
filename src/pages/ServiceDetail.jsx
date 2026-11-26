/* PAGE: Every service page (/services/:slug), including NativeTrust Endpoint and the GRC as a Service category
   Styles: styles/service-detail.css
   Content: data/services.js (SERVICES, NT_ENDPOINT) */
import "../styles/service-detail.css";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { IndependencePanel, ServiceCard, briefLink } from "../components/ServiceCards";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Emblem, FrameworkMark, Tile } from "../components/brand";
import { CheckList, FlowChain, KeyCall, ParaGrid, SampleRecord, SpecTable, ThreeCols, UseCases } from "../components/detail";
import { GRC_AREAS, bySlug } from "../data/services";
import { Link, contactTo } from "../lib/router";
import { Hero } from "./HomePage";

/* ==========================================================================
   SERVICE DETAIL (one structure for every service)
   Hero > When this fits > What V Pilot delivers > How we work with your team > What it looks like in practice > Evidence and next step
   ========================================================================== */
export function ServiceDetail({ item }) {
  const parent = item.parent ? bySlug(item.parent) : null;
  const briefs = (item.briefs || []).map(bySlug);
  const interest = item.name;
  const crumbs = [["Services", "/services"], ...(parent ? [[parent.name, `/services/${parent.slug}`]] : item.areaOf ? [["GRC as a Service", "/services/grc-as-a-service"]] : []), [item.name]];
  return (
    <>
      <PageHero art="contours" crumbs={crumbs} eyebrow={item.eyebrow} title={item.name} lead={<><span className="phero__headline">{item.headline}</span>{item.scope}</>}
        actions={<><Btn to={contactTo(interest)} variant="cyan">{item.cta}</Btn><AnchorBtn href="#practice" variant="ghost">See an example record</AnchorBtn></>}>
        <div className="glass glass--ev">
          {item.framework ? <FrameworkMark kind={item.framework} size={220} labels /> : <Tile icon={item.icon} dark size={30} />}
          <p className="glass__k">Evidence you receive</p><p className="glass__v">{item.evidence}</p>
        </div>
      </PageHero>
      

      <section className="band" aria-labelledby="d-fit"><div className="wrap">
        <SectionHead n="2" eyebrow="When this fits" title="Recognise the situation." id="d-fit" />
        <ul className="fits">{item.fits.map((f, k) => (<li key={f} className="fit tilt reveal" data-tilt="4" style={{ "--i": k }}><span className="fit__n">{k + 1}</span><p>{f}</p></li>))}</ul>
      </div></section>

      <section className="band band--cloud" aria-labelledby="d-del"><div className="wrap">
        <SectionHead n="3" eyebrow="What V Pilot delivers" title="The work, and what counts as done." id="d-del" />
        <article className="dwide reveal"><Tile icon={item.icon} /><p>{item.delivers}</p></article>
        {briefs.length > 0 && (<div className="briefs"><p className="eyebrow reveal">Choose the brief that matches your need</p><ul>{briefs.map((b, k) => (<li key={b.slug} className="bfcard tilt reveal" data-tilt="5" style={{ "--i": k }}><Tile icon={b.icon} /><h3>{b.name}</h3><p className="bfcard__h">{b.headline}</p><p>{b.blurb}</p><Link className="textlink" to={briefLink(b.slug)}>Explore this brief <Icon name="arrow" size={15} /></Link></li>))}</ul></div>)}
        {item.pudica && (<aside className="pcall reveal"><Emblem kind="pudica" size={34} /><p>{item.pudica}</p></aside>)}
          {(item.flow || item.tables || item.bullets || item.paras || item.callouts) && (
            <div id="how-it-runs" className="run">
              <SectionHead eyebrow={item.runEyebrow || "How the work runs"} title={item.runTitle || "From request to verified closure."} id="d-run" lead={item.runLead} />
              {item.flow && <FlowChain items={item.flow} />}
              {item.bullets && <CheckList title={item.bulletsTitle} items={item.bullets} />}
              {item.paras && <ParaGrid items={item.paras} />}
              {(item.tables || []).map((t) => (<SpecTable key={t.title} {...t} />))}
              {(item.callouts || []).map((c) => (<KeyCall key={c.k} label={c.k} text={c.t} />))}
            </div>
          )}
      </div></section>

      <section className="band" aria-labelledby="d-how"><div className="wrap">
        <SectionHead n="4" eyebrow="How we work with your team" title="Who operates, who decides, what is scoped separately." id="d-how" />
        <ThreeCols operates={item.operates} decides={item.decides} separately={item.separately} />
      </div></section>

      <section id="practice" className="band band--cloud" aria-labelledby="d-prac"><div className="wrap">
        <SectionHead n="5" eyebrow="What it looks like in practice" title="One scenario, and the record behind it." id="d-prac" lead="Illustrative scenarios and a sample record, not customer case studies or promised results." />
        <div className="practice"><UseCases cases={item.cases} label="Scenario" /><SampleRecord rec={item.record} /></div>
      </div></section>

      {item.umbrella && (<section className="band" aria-labelledby="d-areas"><div className="wrap">
        <SectionHead eyebrow="The three packages" title="Commission any package independently, or combine them." id="d-areas" lead="Each package names its owners, evidence and decisions. Combine them under one review cadence so leadership sees readiness, risk and privacy in the same forum." />
        <ul className="cards">{GRC_AREAS.map((s, k) => (<ServiceCard key={s.slug} s={s} i={k} />))}</ul>
        <div className="gov2"><IndependencePanel /></div>
      </div></section>)}
      {item.perspectives && (<section className="band" aria-labelledby="d-persp"><div className="wrap">
        <SectionHead eyebrow="One capability, four perspectives" title="Described from each buyer's point of view." id="d-persp" lead="Identity operations appear in several places. It is one capability seen from different buyer perspectives, not duplicate offers." />
        <ul className="persp">{item.perspectives.map(([t, d], k) => (<li key={t} className="persp__card tilt reveal" data-tilt="4" style={{ "--i": k }}><b>{t}</b><p>{d}</p></li>))}</ul>
      </div></section>)}

      <section className="band" aria-labelledby="d-ev"><div className="wrap">
        <SectionHead n="6" eyebrow="Evidence and next step" title="What you receive, and what to bring." id="d-ev" />
        <div className="next">
          <article className="evcard evcard--big reveal"><p className="evcard__k"><Icon name="clipboard" size={16} /> You receive</p><p>{item.evidence}</p><p className="evcard__k evcard__k--b">Bring to the scoping conversation</p><ul className="bringlist">{item.bring.map((b) => (<li key={b}><Icon name="check" size={15} />{b}</li>))}</ul></article>
          <div className="next__side reveal" style={{ "--i": 1 }}>
            <Btn to={contactTo(interest)}>{item.cta}</Btn>
            {item.notice && <p className="notice"><Icon name="alert" size={16} />{item.notice}</p>}
            <p className="eyebrow">Related</p>
            <ul className="rel">{item.related.map(([to, label, why]) => (<li key={to}><Link to={to}><b>{label}</b><span>{why}</span></Link></li>))}</ul>
          </div>
        </div>
      </div></section>
      <CtaBand title={`Discuss ${item.name}.`} lead="Tell us the business priority. We will discuss what V Pilot would run, what your team would approve and what evidence would show progress." primary={[item.cta, contactTo(interest)]} secondary={["Browse all services", "/services"]} note={item.slug === "incident-readiness-response" ? "Existing customers with an active incident should use their contracted support channel, not the sales form." : undefined} />
    </>
  );
}
