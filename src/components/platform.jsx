import { useState } from "react";
import { Icon } from "./Icon";
import { StepRail } from "./StepRail";
import { Status } from "./atoms";
import { Tile } from "./brand";
import { AUTONOMY, LAYERS, RECORD, STAGES, STAGE_DELAYS, SUMMARY_FIELDS, TOOL_SOURCES, TOOL_STEPS, WORKSTREAMS } from "../data/platform";
import { useSequence } from "../hooks/index";

/* HOME · Work with the tools you already have */
export function IntakeFlow({ steps = TOOL_STEPS, note }) {
  return (
    <div className="intake">
      <p className="intake__k">Supported outputs from the tools you already have</p>
      <ul className="intake__src">{TOOL_SOURCES.map(([ic, t], k) => (<li key={t} style={{ "--k": k }}><Icon name={ic} size={15} />{t}</li>))}</ul>
      <StepRail items={steps} dark gateLabel="Approval gate" />
      <p className="intake__note">{note || (<><b>Works with supported tools and validated outputs, not any tool.</b> During scoping we confirm which sources have supported integrations, which can be imported, and which need expert review or manual intake. Receiving a report does not grant permission to change the source system.</>)}</p>
    </div>
  );
}
/* PUDICA */
export function ArchFlow() {
  const { i, setI, bind } = useSequence(STAGES.length, STAGE_DELAYS);
  const STATUS = { 2: ["Validated in isolation", "verified"], 3: ["Awaiting approval", "pending"], 4: ["Lifecycle end state: Verified in production", "end"] };
  return (
    <div className="arch" {...bind}>
      <p className="arch__legend"><span className="tag tag--cyan">Lifecycle view</span> How every eligible change moves. The sample record below is one change still in progress.</p>
      <ol className="arch__row" style={{ "--a": i }}>
        {STAGES.map((s, k) => (
          <li key={s.sys} className={`anode ${k === i ? "is-active" : ""} ${k < i ? "is-past" : ""} ${s.gate ? "is-gate" : ""} ${s.sandbox ? "is-sandbox" : ""}`}>
            {s.sandbox && <span className="anode__box" aria-hidden="true">Isolated environment, separate from production</span>}
            <button type="button" onClick={() => setI(k)} aria-pressed={k === i}>
              <span className="anode__head"><span className="anode__n">{k + 1}</span><span className="anode__ico"><Icon name={s.icon} size={s.gate ? 28 : 24} /></span></span>
              <span className="anode__t">{s.verb}</span><span className="anode__d">{s.short}</span>
              {STATUS[k] && <span className={`anode__status anode__status--${STATUS[k][1]}`}>{STATUS[k][0]}</span>}
            </button>
          </li>
        ))}
      </ol>
      <div className="arch__loop" aria-hidden="true"><i className="anim" /><span>Verified evidence and remaining risk return to GoldenVault</span></div>
      <p className="arch__loop-note">Verified evidence and remaining risk return to GoldenVault.</p>
      <p className="arch__rule"><b>SenseScan acquires → GoldenVault versions the observed state → isolated validation tests the change → customer-approved authority governs execution → production checks verify the outcome.</b> A passing lab test supports the decision; it is not permission to deploy.</p>
    </div>
  );
}
export function RecordCard() {
  return (
    <article className="record reveal" aria-label="Illustrative gateway decision record, still open">
      <header className="record__head"><span>Gateway decision record</span><span className="record__flags"><Status tone="verified">Validated in isolation</Status><Status tone="pending">Awaiting approval</Status><Status tone="open">Production verification due</Status><span className="tag">Illustrative</span></span></header>
      <dl>{RECORD.map((r, i) => (<div key={r.label} className={`record__row record__row--${r.tone}`} style={{ "--i": i }}><dt>{r.label}<Status tone={r.tone}>{r.status}</Status></dt><dd>{r.text}</dd></div>))}</dl>
      <footer className="record__foot">Illustrative example. Figures show the format of the operating record and do not represent a customer result. The record stays open until production verification is confirmed.</footer>
    </article>
  );
}
export function PipelineTabs() {
  const [stage, setStage] = useState(0);
  const cur = STAGES[stage];
  return (
    <div className="pipe-wrap">
      <div className="pipe" role="tablist" aria-label="Validation pipeline"><span className="pipe__rail" aria-hidden="true"><i style={{ "--s": stage }} /></span>
        {STAGES.map((p, i) => (<button key={p.sys} role="tab" id={`tab-${i}`} aria-selected={stage === i} aria-controls="pipe-panel" tabIndex={stage === i ? 0 : -1} className={`pipe__step ${stage === i ? "is-active" : ""} ${i < stage ? "is-past" : ""} ${p.gate ? "is-gate" : ""}`} onClick={() => setStage(i)}
          onKeyDown={(e) => { if (e.key === "ArrowRight") setStage((stage + 1) % STAGES.length); if (e.key === "ArrowLeft") setStage((stage + STAGES.length - 1) % STAGES.length); }}><span className="pipe__dot" /><span className="pipe__v">{p.v}</span><span className="pipe__k">{p.sys}</span></button>))}
      </div>
      <div id="pipe-panel" role="tabpanel" aria-labelledby={`tab-${stage}`} className="pipe__panel" key={stage}><p className="pipe__ptitle">{cur.verb}</p><p>{cur.text}</p><ul>{cur.items.map((x) => (<li key={x}>{x}</li>))}</ul></div>
    </div>
  );
}
export function Layers() { return (<ol className="layers">{LAYERS.map((l, i) => (<li key={l} className="reveal" style={{ "--i": i }}><span>L{i + 1}</span>{l}</li>))}</ol>); }
export function Ladder() {
  const [level, setLevel] = useState(4);
  const cur = AUTONOMY[level];
  return (
    <div className="ladderwrap">
      <div className="ladder" role="group" aria-label="Autonomy levels">{AUTONOMY.map((x, i) => (<button key={x.a} type="button" className={`rung ${i <= level ? "is-on" : ""} ${i === level ? "is-sel" : ""}`} style={{ "--i": i }} aria-pressed={i === level} onClick={() => setLevel(i)}><b>{x.a}</b><span>{x.n}</span></button>))}</div>
      <p className="ladder__detail" aria-live="polite" key={level}><b>{cur.a} · {cur.n}.</b> {cur.d}</p>
    </div>
  );
}
export function SummaryCard() {
  return (<aside className="summary reveal" aria-label="Sample executive assurance summary"><header><span>Executive assurance summary</span><span className="tag">Illustrative sample</span></header><dl>{SUMMARY_FIELDS.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl></aside>);
}
export function WorkstreamExplorer() {
  const [i, setI] = useState(0);
  const w = WORKSTREAMS[i];
  return (
    <div className="wsx">
      <div className="wsx__tabs" role="tablist" aria-label="Integrated Security Operations Management workstreams">{WORKSTREAMS.map((x, k) => (<button key={x.name} role="tab" id={`ws-${k}`} aria-selected={k === i} aria-controls="ws-panel" tabIndex={k === i ? 0 : -1} className={k === i ? "is-on" : ""} onClick={() => setI(k)} onKeyDown={(e) => { if (e.key === "ArrowDown" || e.key === "ArrowRight") setI((i + 1) % WORKSTREAMS.length); if (e.key === "ArrowUp" || e.key === "ArrowLeft") setI((i + WORKSTREAMS.length - 1) % WORKSTREAMS.length); }}><Tile icon={x.icon} sm size={20} dark /><span>{x.name}</span></button>))}</div>
      <div id="ws-panel" role="tabpanel" aria-labelledby={`ws-${i}`} className="wsx__panel" key={i}>
        <h3>{w.name}</h3><p className="wsx__promise">{w.promise}</p>
        <div className="wsx__cols"><div><p className="wsx__k">What the buyer can evaluate</p><p>{w.buyer}</p></div><div><p className="wsx__k">Evidence the customer receives</p><p>{w.evidence}</p></div></div>
        <div className="wsx__uses"><p className="wsx__k">Two illustrative uses</p><ul>{w.uses.map((u) => (<li key={u}>{u}</li>))}</ul></div>
      </div>
    </div>
  );
}
