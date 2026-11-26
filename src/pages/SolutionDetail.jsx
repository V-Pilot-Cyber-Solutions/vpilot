/* PAGE: Solution detail pages (/solutions/:slug)
   Styles: styles/service-detail.css
   Content: data/solutions.js */
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { ServiceCard } from "../components/ServiceCards";
import { Btn, Eyebrow, SectionHead } from "../components/atoms";
import { FrameworkMark, Tile } from "../components/brand";
import { Steps } from "../components/detail";
import { bySlug } from "../data/services";
import { contactTo } from "../lib/router";

/* Other solutions */
export function SolutionDetail({ item }) {
  const related = (item.related || []).map(bySlug).filter(Boolean);
  return (
    <>
      <PageHero art="mountains" crumbs={[["Solutions", "/products#solutions"], [item.name]]} eyebrow="Solution" title={item.name} lead={item.lead} actions={<><Btn to={contactTo(item.interest)} variant="cyan">Discuss this solution</Btn><Btn to="/services#how-to-engage" variant="ghost">Compare engagement options</Btn></>}>
        <div className="glass">{item.framework ? <FrameworkMark kind={item.framework} size={230} labels /> : <Tile icon={item.icon} dark size={30} />}<p className="glass__k">At a glance</p><p className="glass__v">{item.short}</p></div>
      </PageHero>
      <section className="band" aria-labelledby="d-body"><div className="wrap split"><header className="section-head reveal"><Eyebrow>Overview</Eyebrow><h2 id="d-body">{item.short}</h2></header><div className="prose__body reveal" style={{ "--i": 1 }}>{item.body.map((p) => (<p key={p}>{p}</p>))}</div></div></section>
      <section className="band band--cloud" aria-labelledby="d-points"><div className="wrap"><SectionHead eyebrow="In practice" title={item.pointsTitle} id="d-points" />
        {item.slug === "secure-business-transformation" ? <Steps items={item.points} /> : (<ul className="points">{item.points.map((p, k) => (<li key={p.t} className="point tilt reveal" data-tilt="5" style={{ "--i": k % 3 }}><Tile icon={p.icon} sm size={22} /><h3>{p.t}</h3><p>{p.d}</p></li>))}</ul>)}</div></section>
      {related.length > 0 && (<section className="band" aria-labelledby="d-rel"><div className="wrap"><SectionHead eyebrow="Related" title="Services behind this solution." id="d-rel" /><ul className="cards">{related.map((s, k) => (<ServiceCard key={s.slug} s={s} i={k} />))}</ul></div></section>)}
      <CtaBand title={`Discuss ${item.name}.`} lead="Tell us the business priority. We will discuss what V Pilot would run, what your team would approve and what evidence would show progress." primary={["Book an Executive Briefing", contactTo(item.interest)]} secondary={["Browse all solutions", "/products#solutions"]} />
    </>
  );
}
