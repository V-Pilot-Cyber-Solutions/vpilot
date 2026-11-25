/* PAGE: Home (/)
   Styles: styles/home.css
   Content: data/home.js, data/services.js (HOME_CATEGORIES) */
import "../styles/home.css";
import { Fragment, useRef } from "react";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { AdoptionJourney } from "../components/StepRail";
import { Btn, Eyebrow, SectionHead } from "../components/atoms";
import { Emblem, Emblem3D, Tile } from "../components/brand";
import { IntakeFlow, Ladder } from "../components/platform";
import { WHY_REASONS } from "../data/company";
import { BUY_PATHS, CYCLE, FLOW, FLOW_BRANCH, FLOW_DELAYS, FRAMEWORK_RAIL, GAP_PROOF, HANDOFFS, HOME_CATEGORIES, HOME_TOOL_STEPS, LANES, LANE_DELAYS, LANE_STEPS, VALUES } from "../data/home";
import { bySlug } from "../data/services";
import { useInView, useParallax, useSequence, useTabVisible } from "../hooks/index";
import { COMPARE_TO } from "../lib/config";
import { Link, contactTo } from "../lib/router";

/* ==========================================================================
   HOME · HERO (what customers can delegate; 3D Pilot emblem; value strip)
   ========================================================================== */
export function Hero({ reduced }) {
  const ref = useRef(null);
  const photo = useRef(null);
  const inView = useInView(ref, "80px");
  const tabVisible = useTabVisible();
  const on = !reduced && inView && tabVisible;
  useParallax(photo, 0.1);
  return (
    <section id="top" ref={ref} className="hero" data-motion={on ? "on" : "off"} aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true"><div className="hero__photo anim" ref={photo} /><div className="hero__tint" /><div className="hero__grid" /><div className="hero__glow anim" /><div className="hero__pass anim" /><div className="hero__shade" /></div>
      <div className="wrap hero__in">
        <div className="hero__copy">
          <p className="hero__kicker">Your cybersecurity operating partner</p>
          <h1 id="hero-title"><span className="hero__line">We Pilot Your</span><span className="hero__line hero__line--accent">Security Operations.</span></h1>
          <p className="hero__tagline">Delegate the work. Keep control of the decisions.</p>
                  <p className="hero__sub">V Pilot connects IT support, technical cyber operations, executive governance and recovery through one accountable operating model. Our specialists run the responsibilities you delegate, and show what was resolved, what remains exposed and who needs to act. Your leadership retains material approvals and formal risk acceptance.</p>
          <div className="hero__cta"><Btn to={contactTo("Executive briefing")} variant="cyan">Book an Executive Briefing</Btn><Btn to="/#paths" variant="ghost">Find Your Starting Point</Btn></div>
        </div>
        <div className="hero__art">
          <Emblem3D kind="vpilot" size={270} label="V Pilot emblem" />
          <ul className="hero__promise" aria-label="Operational promise">{["Every action owned.", "Every decision governed.", "Every outcome verified."].map((t, i) => (<li key={t} style={{ "--i": i }}><Icon name="check" size={16} />{t}</li>))}</ul>
        </div>
      </div>
      <div className="wrap hero__foot">
        <ul className="values">{VALUES.map((p, i) => (<li key={p.t} style={{ "--i": i }}><span className="values__ico"><Icon name={p.icon} size={26} /></span><span><b>{p.t}</b>{p.d}</span></li>))}</ul>
      </div>
    </section>
  );
}
/* HOME · Choose where to start */
/* HOME · Where to start (three paths + a short PUDICA entry) */
function BuyPaths() {
  return (
    <section id="paths" className="band band--cloud" aria-labelledby="paths-title">
      <div className="wrap">
        <SectionHead eyebrow="Where to start" title="What do you need to secure, and who should run the work?" id="paths-title" lead="Pick the closest starting point. Each one separates where your workloads run, where validation happens and who operates the workflows." />
        <ul className="bpaths">
          {BUY_PATHS.map((p, k) => (
            <li key={p.key} className={`bpath bpath--${p.key} tilt reveal`} data-tilt="5" style={{ "--i": k }}>
              <span className="bpath__n">{String(k + 1).padStart(2, "0")}</span>
              <Tile icon={p.icon} />
              <p className="bpath__tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p className="bpath__copy">{p.copy}</p>
              <p className="bpath__buy"><b>What you are buying</b>{p.buys}</p>
              <ul className="chips">{p.chips.map((c) => (<li key={c}>{c}</li>))}</ul>
              <Btn to={p.cta[1]} size="sm">{p.cta[0]}</Btn>
            </li>
          ))}
        </ul>
        <p className="note reveal">These are starting points, not mutually exclusive packages. NativeTrust Endpoint can be commissioned on its own or alongside PUDICA Autonomy.</p>
        <p className="inline-links reveal"><Link to={COMPARE_TO}>Compare Operating Models <Icon name="arrow" size={16} /></Link></p>
      </div>
    </section>
  );
}
/* HOME · How we operate: lanes, one-line operating cycle, framework links */
function CycleLine() {
  const { i, setI, bind } = useSequence(CYCLE.length, [1600]);
  return (
    <div id="cycle" className="cycleline reveal" {...bind}>
      <p className="cycleline__k">Operating cycle</p>
      <ol>{CYCLE.map((c, k) => (<li key={c.k} className={k === i ? "is-active" : k < i ? "is-past" : ""}><button type="button" onClick={() => setI(k)} aria-pressed={k === i}><Icon name={c.icon} size={16} />{c.k}</button></li>))}</ol>
      <p className="cycleline__t"><b>{CYCLE[i].k}.</b> {CYCLE[i].t}</p>
    </div>
  );
}
function FrameworkRail() {
  return (<ul className="frail">{FRAMEWORK_RAIL.map((f) => (<li key={f.t}><Link to={f.to}><Tile icon={f.icon} mark={f.mark} sm size={20} /><span><b>{f.t}</b>{f.d}</span></Link></li>))}</ul>);
}
function ResponsibilitySection() {
  return (
    <section id="operating-model" className="band" aria-labelledby="om-title">
      <div className="wrap">
        <SectionHead eyebrow="How we operate" title="V Pilot operates. Your leadership decides." id="om-title" lead="Before work begins, we agree which systems and controls V Pilot will run, who approves material changes and where issues escalate. Our specialists maintain the operating backlog and verify the work we can close. Your authorised owners retain material approvals and formal risk acceptance. PUDICA Autonomy supports eligible validation and execution within those boundaries." />
        <OperatingLanes />
        <CycleLine />
        <FrameworkRail />
        <p className="inline-links reveal"><Link to="/services#how-to-engage">Compare Specialist, Co-Managed and Fully Managed engagement <Icon name="arrow" size={16} /></Link></p>
      </div>
    </section>
  );
}
function ToolsHome() {
  return (
    <section id="tools" className="band band--navy pudica pudica--page" aria-labelledby="tools-home-title">
      <div className="wrap">
        <SectionHead eyebrow="Work with the tools you already have" title="Turn supported findings and alerts into work someone owns." id="tools-home-title" lead="A scanner finding, security alert, identity or endpoint event, application finding or backup report can start the work. We confirm what can be integrated, imported or reviewed manually. An operator connects the evidence to a service, assigns an owner and defines what will prove closure. Receiving evidence does not grant permission to change a system." />
        <IntakeFlow steps={HOME_TOOL_STEPS} note={<><b>Keeping your existing tools can work, but not every tool or output is supported.</b> Connector details and validation mechanics sit on the PUDICA page.</>} />
        <p className="inline-links reveal"><Link to="/pudica-autonomy#validation-architecture">See the Validation Architecture <Icon name="arrow" size={16} /></Link></p>
      </div>
    </section>
  );
}
function AutonomyReadinessHome() {
  return (
    <section id="autonomy-readiness" className="band" aria-labelledby="ar-home-title">
      <div className="wrap">
        <SectionHead eyebrow="Autonomy Readiness" title="Expand automation only when the workflow is ready." id="ar-home-title" lead="Start with observation and recommendations. Progress to human-approved execution, then to policy-governed execution only where repeatability, observability, recovery and human override have been demonstrated. The readiness levels are criteria, not a timetable." />
        <AdoptionJourney id="readiness-home" />
        <div className="ladderbox reveal">
          <div>
            <p className="ladderbox__k">Levels a workflow can qualify for</p>
            <h3>A0 to A5 are not a timetable, and nothing progresses automatically.</h3>
            <p>Each workflow is assessed separately. Novel incidents, irreversible actions, material approvals and formal risk acceptance stay human-accountable.</p>
            <div className="guard guard--stack"><span className="guard__label">Guardrails</span><ul>{["Human override", "Segregation of duties", "Evidence", "Recovery readiness"].map((g) => (<li key={g}>{g}</li>))}</ul></div>
          </div>
          <Ladder />
        </div>
        <p className="inline-links reveal"><Link to="/pudica-autonomy#autonomy-readiness">See the full readiness model and planning windows <Icon name="arrow" size={16} /></Link><Link to={contactTo("Autonomy readiness assessment")}>Assess autonomy readiness <Icon name="arrow" size={16} /></Link></p>
      </div>
    </section>
  );
}
function ServicesOverview() {
  return (
    <section id="services-overview" className="band band--cloud" aria-labelledby="svc-over-title">
      <div className="wrap">
        <SectionHead eyebrow="Services" title="Three ways to put V Pilot's specialists to work." id="svc-over-title" lead="Delegate ongoing operations, commission executive governance, or bring in specialists for a defined outcome. Each category has its own scope, owners and evidence. Open a service to see how it works and what you receive." />
        <ul className="svcats">
          {HOME_CATEGORIES.map((c, k) => (
            <li key={c.key} className={`svcat svcat--${c.key} tilt reveal`} data-tilt="4" style={{ "--i": k }}>
              <header><Tile icon={c.icon} emblem={c.emblem} /><div><p className="svcat__eyebrow">{c.eyebrow}</p><h3>{c.title}</h3></div></header>
              <p className="svcat__copy">{c.copy}</p>
              <p className="svcat__for"><Icon name="users" size={15} />{c.for}</p>
              <ul className="svcat__list">
                {c.slugs.map((slug) => { const it = bySlug(slug); return (<li key={slug}><Link to={`/services/${slug}`}><span><b>{it.name}</b><small>{it.blurb.split(". ")[0].replace(/\.$/, "")}.</small></span><Icon name="arrow" size={15} /></Link></li>); })}
              </ul>
              <p className="svcat__rec"><b>You receive</b>{c.receive}</p>
              <Btn to={c.cta[1]} size="sm">{c.cta[0]}</Btn>
            </li>
          ))}
        </ul>
        <p className="inline-links reveal"><Link to="/services#how-to-engage">Compare Specialist, Co-Managed and Fully Managed engagement <Icon name="arrow" size={16} /></Link><Link to="/services/managed-iam-operations">Managed Identity &amp; Access Operations (related service) <Icon name="arrow" size={16} /></Link></p>
      </div>
    </section>
  );
}
export function Home({ reduced }) {
  return (<><Hero reduced={reduced} /><BuyPaths /><CisoGap /><ResponsibilitySection /><ToolsHome /><AutonomyReadinessHome /><ServicesOverview /><CtaBand title="Bring us one operation you need to make more reliable." lead="Tell us where work is backing up, which system matters most and what your team wants to retain. We'll identify a sensible first step." secondary={null} /></>);
}
/* HOME · The operating gap: six steps, one worked example */
function FindingFlow() {
  const { i, setI, bind } = useSequence(FLOW.length, FLOW_DELAYS);
  const cur = FLOW[i];
  return (
    <div className="flow" {...bind}>
      <ol className="flow__row" style={{ "--n": FLOW.length, "--a": i }}>
        {FLOW.map((s, k) => (
          <li key={s.t} className={`fnode ${k === i ? "is-active" : ""} ${k < i ? "is-past" : ""} ${s.gate ? "is-gate" : ""}`}>
            <button type="button" onClick={() => setI(k)} aria-pressed={k === i}><span className="fnode__ico"><Icon name={s.icon} size={20} /></span><span className="fnode__n">{k + 1}</span><span className="fnode__t">{s.t}</span></button>
          </li>
        ))}
      </ol>
      <div className="flow__detail">
        <p className="flow__caption"><b>{i + 1}. {cur.t}.</b> {cur.d}</p>
        <p className="flow__example"><span>Worked example · a change that closes</span>{cur.ex}</p>
      </div>
      <p className={`flow__branch ${i >= 4 ? "is-on" : ""}`}><Icon name="restore" size={16} /><span>{FLOW_BRANCH}</span></p>
      <ol className="flow__trail" aria-label="The worked example so far">{FLOW.map((s, k) => (<li key={s.t} className={k <= i ? "is-on" : ""}><i /></li>))}</ol>
      <div className="flow__rail"><i className="anim" /><span><Icon name="clipboard" size={14} /> Evidence and executive reporting are outputs throughout the flow.</span></div>
    </div>
  );
}
function CisoGap() {
  return (
    <section id="gap" className="band band--cloud" aria-labelledby="gap-title">
      <div className="wrap">
        <header className="gap__head reveal">
          <Eyebrow>The operating gap</Eyebrow>
          <h2 id="gap-title">A finding is not a fix. A backup is not a recovery test.</h2>
          <p className="lead">Tools surface issues. Someone still has to confirm which service is affected, decide what can change and verify that the result holds in production. We agree who owns each step before work begins, so your team can tell verified closure from an issue that still needs an owner or a decision.</p>
        </header>
        <FindingFlow />
        <ul className="gapproof">{GAP_PROOF.map((p, k) => (<li key={p.t} className="gapproof__card tilt reveal" data-tilt="6" style={{ "--i": k }}><Tile icon={p.icon} /><p className="gapproof__k">{p.k}</p><h3>{p.t}</h3><p>{p.d}</p></li>))}</ul>
        <div className="whystrip reveal">
          <div className="whystrip__head"><Emblem kind="vpilot" size={30} /><div><p className="eyebrow">Why V Pilot?</p><h3>Someone has to run the work, and prove it.</h3></div></div>
          <ul>{WHY_REASONS.slice(0, 3).map((w) => (<li key={w.t}><Icon name={w.icon} size={18} /><span><b>{w.t}</b>{w.d}</span></li>))}</ul>
          <Link className="textlink" to="/company#why">More about V Pilot <Icon name="arrow" size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
/* HOME · How responsibility works (animated three-lane model) */
function Handoff({ id, step }) {
  const labels = HANDOFFS[id];
  const live = step.conn === id ? step.dir : null;
  return (<div className={`hand hand--${id}`}>{["fwd", "back"].map((d) => (<div key={d} className={`hand__arrow hand__arrow--${d} ${live === d ? "is-on" : ""}`}><span className="hand__label">{labels[d]}</span><span className="hand__line" aria-hidden="true"><i /></span></div>))}</div>);
}
function OperatingLanes() {
  const { i, setI, bind } = useSequence(LANE_STEPS.length, LANE_DELAYS);
  const step = LANE_STEPS[i];
  return (
    <div className="lanes" id="authority" {...bind}>
      <div className="lanes__row">
        {LANES.map((l, k) => (
          <Fragment key={l.key}>
            <article className={`lane lane--${l.key} ${step.lanes.includes(k) ? "is-active" : ""}`}>
              <span className="lane__step" aria-hidden="true">{k + 1}</span>
              <header><Tile icon={l.icon} emblem={l.emblem} /><div><p className="lane__who">{l.who}</p><p className="lane__verb">{l.verb}</p></div></header>
              <p>{l.text}</p>
              <ul className="lane__tags">{l.tags.map((t) => (<li key={t}>{t}</li>))}</ul>
              <p className="lane__out"><span>Output</span>{l.out}</p>
              {l.note && <p className="lane__note">{l.note}</p>}
            </article>
            {k < LANES.length - 1 && <Handoff id={k === 0 ? "a" : "b"} step={step} />}
          </Fragment>
        ))}
      </div>
      <div className="lanes__cap"><ol aria-label="Handoff sequence">{LANE_STEPS.map((s, k) => (<li key={k}><button type="button" className={k === i ? "is-on" : k < i ? "is-past" : ""} aria-label={`Step ${k + 1}: ${s.t}`} aria-pressed={k === i} onClick={() => setI(k)} /></li>))}</ol><p><b>{i + 1}.</b> {step.t}</p></div>
    </div>
  );
}
