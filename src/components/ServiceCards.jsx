import { Icon } from "./Icon";
import { Btn, SectionHead } from "./atoms";
import { Tile } from "./brand";
import { CARD_ORDER, GROUPS, GROUP_ANCHOR, GROUP_INTRO, byGroup, bySlug } from "../data/services";
import { Link } from "../lib/router";

/* ==========================================================================
   Service catalogue components
   ========================================================================== */
export const briefLink = (s) => `/services/${s}`;
export function ServiceCard({ s, i = 0 }) {
  const briefs = (s.briefs || []).map(bySlug);
  return (
    <li className={`card tilt reveal ${s.umbrella ? "card--umbrella" : ""}`} data-tilt="5" style={{ "--i": i % 3 }}>
      <p className="card__group"><Icon name={s.icon} size={16} />{s.eyebrow}</p>
      <h3>{s.name}</h3>
      <p className="card__scope">{s.blurb}</p>
      {briefs.length > 0 && (<ul className="card__briefs" aria-label="Briefs">{briefs.map((b) => (<li key={b.slug}><Link to={briefLink(b.slug)}><Icon name={b.icon} size={15} /><span><b>{b.name}</b>{b.blurb}</span></Link></li>))}</ul>)}
      <p className="card__ev"><b>Example evidence</b>{s.evidence}</p>
      <Link className="card__cta" to={briefLink(s.slug)}>{s.umbrella ? "Explore GRC as a Service" : briefs.length ? "Explore both briefs" : "Explore this service"} <Icon name="arrow" size={16} /></Link>
    </li>
  );
}
export function IndependencePanel() {
  return (
    <aside className="indep reveal" style={{ "--i": 2 }} aria-label="Independence statement">
      <p className="indep__k"><Icon name="shield" size={16} /> Independence</p>
      <h3>V Pilot supports readiness, control operation, evidence and corrective action.</h3>
      <p>Independent certification, attestation and formal audit conclusions remain separate. GRC as a Service coordinates evidence and priorities; it does not own a formal DPO's independent judgement, award certification or make an assessor's conclusions. Customer leadership retains risk acceptance.</p>
    </aside>
  );
}
export function RelatedManaged() {
  return (
    <aside className="relman reveal" aria-label="Related managed service">
      <Tile icon="key" sm size={22} />
      <div><p className="relman__k">Related managed service</p><h3>Managed Identity & Access Operations</h3><p>Can be added where identity administration is required. It is an operational service, not an independent review or a default inclusion in GRC as a Service.</p></div>
      <Link className="textlink" to="/services/managed-iam-operations">Explore the service <Icon name="arrow" size={15} /></Link>
    </aside>
  );
}
export function GroupSection({ g, band, extra, cta }) {
  const items = CARD_ORDER[g] ? CARD_ORDER[g].map(bySlug) : byGroup(g);
  const [title, lead] = GROUP_INTRO[g];
  return (
    <section id={GROUP_ANCHOR[g]} className={`band ${band || ""}`} aria-labelledby={`${g}-title`}>
      <div className="wrap">
        <SectionHead eyebrow={GROUPS[g]} title={title} id={`${g}-title`} lead={lead} />
        <ul className={`cards ${items.length === 2 || items.length === 4 ? "cards--2" : ""}`}>{items.map((s, i) => (<ServiceCard key={s.slug} s={s} i={i} />))}</ul>
        {extra}
        {cta && <div className="sect-cta reveal"><Btn to={cta[1]}>{cta[0]}</Btn></div>}
      </div>
    </section>
  );
}
