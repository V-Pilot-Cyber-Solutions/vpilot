import { Icon } from "./Icon";
import { ADOPTION } from "../data/platform";
import { useSequence } from "../hooks/index";

/* ==========================================================================
   Generic animated step rail (adoption, intake, onboarding, getting started)
   ========================================================================== */
export function StepRail({ items, delays, id, dark, gateLabel = "Customer decision gate" }) {
  const { i, setI, bind } = useSequence(items.length, delays || items.map((s) => (s.gate ? 3200 : 2100)));
  return (
    <div id={id} className={`steprail ${dark ? "steprail--dark" : ""}`} {...bind}>
      <ol className="steprail__row" style={{ "--n": items.length, "--a": i }}>
        {items.map((s, k) => (
          <li key={s.t} className={`rstep ${k === i ? "is-active" : ""} ${k < i ? "is-past" : ""} ${s.gate ? "is-gate" : ""}`}>
            <button type="button" onClick={() => setI(k)} aria-pressed={k === i}>
              <span className="rstep__n">{k + 1}</span>
              <span className="rstep__ico"><Icon name={s.icon} size={s.gate ? 26 : 24} /></span>
              <span><b>{s.t}</b>{s.d}</span>
              {s.out && <span className="rstep__out"><b>Deliverable</b>{s.out}</span>}
              {s.gate && gateLabel && <em className="rstep__gate">{gateLabel}</em>}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export const AdoptionJourney = ({ id = "readiness" }) => <StepRail id={id} items={ADOPTION} />;
