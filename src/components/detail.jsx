import "../styles/service-detail.css";
import { Icon } from "./Icon";
import { Status } from "./atoms";
import { useSequence } from "../hooks/index";

/* Sample record (the per-service evaluation visual) */
export function SampleRecord({ rec, id }) {
  return (
    <article id={id} className="srec reveal" aria-label={`${rec.title}, illustrative`}>
      <header className="srec__head"><span>{rec.title}</span><span className="tag">Illustrative</span></header>
      {rec.kind === "timeline" ? (
        <ol className="srec__tl">{rec.rows.map(([a, b, c], k) => (<li key={a} style={{ "--i": k }}><b>{a}</b><span>{b}</span>{c && <Status tone={c[1]}>{c[0]}</Status>}</li>))}</ol>
      ) : (
        <div className="srec__scroll"><table><thead><tr>{rec.cols.map((c) => (<th key={c} scope="col">{c}</th>))}</tr></thead>
          <tbody>{rec.rows.map((r, k) => (<tr key={k} style={{ "--i": k }}>{r.map((cell, j) => (<td key={j} data-label={rec.cols[j]}>{Array.isArray(cell) ? <Status tone={cell[1]}>{cell[0]}</Status> : cell}</td>))}</tr>))}</tbody></table></div>
      )}
      <footer className="srec__foot">Illustrative example. Figures show the format of the operating record and do not represent a customer result. Statuses are shown in words as well as colour.</footer>
    </article>
  );
}
export function ThreeCols({ operates, decides, separately, labels = ["V Pilot operates", "Your team decides", "Scoped separately"] }) {
  const cols = [["op", labels[0], operates, "gear"], ["dec", labels[1], decides, "gate"], ["sep", labels[2], separately, "layers"]];
  return (
    <div className="tcols">{cols.map(([k, t, list, ic], i) => (<article key={k} className={`tcol tcol--${k} tilt reveal`} data-tilt="4" style={{ "--i": i }}><h3><Icon name={ic} size={18} />{t}</h3><ul>{list.map((x) => (<li key={x}>{x}</li>))}</ul></article>))}</div>
  );
}
function Faq({ items }) {
  return (
    <div className="faq">{items.map(([q, a]) => (<details key={q} className="faq__item reveal"><summary><span>{q}</span><Icon name="chevron" size={18} /></summary><p>{a}</p></details>))}</div>
  );
}
/* FlowChain: an animated stage sequence that highlights each step in turn (pauses off-screen, on hover and for reduced motion). */
export function FlowChain({ items, label = "Workflow stages" }) {
  const { i, setI, bind } = useSequence(items.length, [1300]);
  return (
    <div className="fchain reveal" {...bind}>
      <ol aria-label={label}>{items.map((t, k) => (
        <li key={t} className={k === i ? "is-active" : k < i ? "is-past" : ""}>
          <button type="button" onClick={() => setI(k)} aria-pressed={k === i}><span className="fchain__n">{k + 1}</span>{t}</button>
        </li>
      ))}</ol>
      <i className="fchain__bar" aria-hidden="true"><b style={{ width: `${((i + 1) / items.length) * 100}%` }} /></i>
    </div>
  );
}
export function SpecTable({ title, cols, rows }) {
  return (
    <div className="spec">
      {title && <h3 className="spec__t reveal">{title}</h3>}
      <div className="cmp cmp--spec reveal">
        <table>
          <caption className="sr-only">{title}</caption>
          <thead><tr>{cols.map((c) => (<th key={c} scope="col">{c}</th>))}</tr></thead>
          <tbody>{rows.map((r, k) => (<tr key={k} style={{ "--i": k }}><th scope="row">{r[0]}</th>{r.slice(1).map((c, j) => (<td key={j} data-label={cols[j + 1]}>{c}</td>))}</tr>))}</tbody>
        </table>
      </div>
    </div>
  );
}
export function KeyCall({ label, text }) {
  return (<aside className="keycall reveal"><Icon name="shieldcheck" size={22} /><div><p className="keycall__k">{label}</p><p>{text}</p></div></aside>);
}
export function CheckList({ title, items }) {
  return (
    <div className="chk reveal">
      {title && <p className="chk__t">{title}</p>}
      <ul>{items.map((x, k) => (<li key={x} style={{ "--i": k }}><Icon name="check" size={16} /><span>{x}</span></li>))}</ul>
    </div>
  );
}
export function ParaGrid({ items }) {
  return (<ul className="pgrid">{items.map(([h, t], k) => (<li key={h} className="pgrid__card tilt reveal" data-tilt="4" style={{ "--i": k }}><h3>{h}</h3><p>{t}</p></li>))}</ul>);
}
export function UseCases({ cases, label = "Use case" }) {
  return (
    <ul className="ucases">{cases.map(([sit, resp, ben], i) => (<li key={sit} className="ucase tilt reveal" data-tilt="4" style={{ "--i": i % 3 }}><span className="ucase__n">{label} {i + 1}</span><p className="ucase__sit">{sit}</p><p><b>V Pilot response</b>{resp}</p><p className="ucase__ben"><b>Benefit</b>{ben}</p></li>))}</ul>
  );
}
export function Steps({ items }) { return (<ol className="tsteps">{items.map((s, i) => (<li key={s.t} className="tstep reveal" style={{ "--i": i }}><span className="tstep__n">{i + 1}</span><div><h3>{s.t}</h3><p>{s.d}</p></div></li>))}</ol>); }
