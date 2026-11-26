import { Icon } from "./Icon";
import { Tile } from "./brand";
import { ENGAGEMENT } from "../data/services";

/* Engagement + misc */
export function EngagementCards() {
  return (<ul className="eng">{ENGAGEMENT.map((x, i) => (<li key={x.name} className="eng__card tilt reveal" data-tilt="6" style={{ "--i": i }}><Tile icon={x.icon} emblem={x.emblem} /><span className="eng__n">{String(i + 1).padStart(2, "0")}</span><h3>{x.name}</h3><p>{x.text}</p></li>))}</ul>);
}
export function DeliveryOptions() {
  return (
    <div className="delivery reveal">
      <p><b>Managed support can begin before eligible workflows are ready for policy-governed execution.</b></p>
      <p><b>Name every responsibility.</b> The agreement identifies which team performs each activity, who approves it, who handles exceptions and what proves completion.</p>
      <p><b>Workflow options.</b> Platform-enabled and autonomous operations are workflow options within any engagement, not separate responsibility tiers. Choose how much responsibility to delegate, not a fixed user-count tier.</p>
    </div>
  );
}
export function DeliveryChoices() {
  return (
    <ul className="cards cards--2 dchoices">
      <li className="card tilt reveal" data-tilt="4"><p className="card__group"><Icon name="headset" size={16} />V Pilot Remote Support</p><h3>Your team operates. V Pilot provides guidance.</h3><p className="card__scope">Get help onboarding PUDICA Autonomy, troubleshooting supported workflows and planning rollout. <b>Your team runs the workflows and executes production changes.</b></p><p className="card__ev"><b>Not included</b>Production execution or ongoing operations by V Pilot.</p></li>
      <li className="card tilt reveal" data-tilt="4" style={{ "--i": 1 }}><p className="card__group"><Icon name="gear" size={16} />Managed Operations</p><h3>Delegate agreed work. Keep control of material decisions.</h3><p className="card__scope">V Pilot performs the activities assigned to it, verifies the results and escalates decisions outside its authority. <b>Co-Managed Operations</b> shares named responsibilities with your team. <b>Fully Managed Operations</b> delegates day-to-day delivery within the contracted scope.</p><p className="card__ev"><b>You retain</b>Material approvals and formal risk acceptance.</p></li>
    </ul>
  );
}
export function FourQuestions() {
  const qs = [["What am I buying?", "A named service, solution or platform subscription, with its scope in writing."], ["Who runs it?", "Your team, V Pilot or both, by named responsibility."], ["What do I still approve?", "Material changes and formal risk acceptance."], ["What evidence will I receive?", "Records that show what was verified, what remains open and what decision is due."]];
  return (<ul className="fourq">{qs.map(([q, a], k) => (<li key={q} className="fourq__card tilt reveal" data-tilt="4" style={{ "--i": k }}><span className="fourq__n">{k + 1}</span><b>{q}</b><span>{a}</span></li>))}</ul>);
}
