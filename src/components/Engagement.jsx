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
      <p><b>Delivery option.</b> Assurance-led: the customer runs the controls and V Pilot reviews the evidence.</p>
      <p><b>Workflow options.</b> Platform-enabled and autonomous operations are workflow options within any engagement, not separate responsibility tiers. Choose how much responsibility to delegate, not a fixed user-count tier.</p>
    </div>
  );
}
