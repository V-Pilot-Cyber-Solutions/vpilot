/* PAGE: Legacy scope chooser (/solutions/nativetrust, /services/it-infrastructure-security-operations)
   Styles: styles/cards.css
   Content: - */
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { Tile } from "../components/brand";
import { Link, contactTo } from "../lib/router";

export function ScopeChooser({ kind = "nativetrust" }) {
  const common = [
    ["laptop", "NativeTrust Endpoint", "Managed endpoint security: agreed Zero Trust controls across supported desktops, laptops, browsers and approved applications.", "/services/nativetrust-endpoint", "Explore NativeTrust Endpoint"],
    ["gear", "Managed Security Operations", "Delegate agreed identity, exposure, detection, response and recovery work, including named production systems where agreed.", kind === "it-infra" ? "/managed-security-operations#production-systems-support" : "/managed-security-operations", kind === "it-infra" ? "See the production systems scope note" : "Explore Managed Security Operations"],
  ];
  const third = kind === "it-infra"
    ? ["key", "Managed Identity & Access Operations", "Identity lifecycle, access reviews and privileged-access administration with their own approvals and evidence.", "/services/managed-iam-operations", "Explore the service"]
    : ["mail", "Contact V Pilot", "Tell us what you were looking for and we will point you to the right scope.", contactTo("Executive briefing"), "Contact V Pilot"];
  const opts = [...common, third];
  return (
    <>
      <PageHero art="contours" compact crumbs={[["Services", "/services"], ["Choose a scope"]]} eyebrow="This page has moved" title="Which scope fits the work you need?" lead="This page covered a broader offer that is now scoped more clearly. Choose the closest match, so each buying decision has its own owner, approvals and evidence." />
      <section className="band" aria-labelledby="chs-title"><div className="wrap"><h2 id="chs-title" className="sr-only">Choose a scope</h2>
        <ul className="sol sol--three">{opts.map(([ic, t, d, to, cta], k) => (<li key={t} className="sol__card tilt reveal" data-tilt="5" style={{ "--i": k }}><Tile icon={ic} /><h3>{t}</h3><p>{d}</p><Link className="textlink" to={to}>{cta} <Icon name="arrow" size={15} /></Link></li>))}</ul></div></section>
      <CtaBand />
    </>
  );
}
