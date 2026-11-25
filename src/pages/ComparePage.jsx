/* PAGE: Compare Operating Models (/products/compare)
   Styles: styles/compare.css
   Content: data/compare.js */
import "../styles/compare.css";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { StepRail } from "../components/StepRail";
import { AnchorBtn, Btn, SectionHead, Status } from "../components/atoms";
import { CAP_COMPARE, CMP_COLS, CMP_ROWS, CMP_STATUS, PRICING_ROWS } from "../data/compare";
import { ADOPT_STAGES } from "../data/services";
import { contactTo } from "../lib/router";

function StatusWord({ word }) { return <Status tone={CMP_STATUS[word] || "neutral"}>{word}</Status>; }
export function ComparePage() {
  return (
    <>
      <PageHero art="contours" crumbs={[["Autonomy", "/pudica-autonomy"], ["Compare Operating Models"]]} eyebrow="Operating models" title="Choose who runs the work."
        lead="Start with your environment, then decide where validation must happen and who will operate the workflow. Cloud and hybrid describe where workloads run. A customer-owned test bed describes where eligible changes are validated. Neither decides who runs the operation."
        actions={<><AnchorBtn href="#compare-table">See the comparison</AnchorBtn><Btn to={contactTo("Compare operating models")} variant="ghost">Request a Scoped Quote</Btn></>} />
      <section id="compare-table" className="band" aria-labelledby="cmp-h"><div className="wrap">
        <SectionHead eyebrow="Responsibility" title="Who does the work on a normal day, and who acts when automation stops." id="cmp-h" />
        <div className="cmp cmp--5 reveal">
          <table>
            <caption className="sr-only">Cloud, hybrid and endpoint operating models compared</caption>
            <thead><tr><th scope="col">Decision</th>{CMP_COLS.map((c) => (<th key={c} scope="col">{c}</th>))}</tr></thead>
            <tbody>{CMP_ROWS.map(([k, ...cells], r) => (<tr key={k} style={{ "--i": r }}><th scope="row">{k}</th>{cells.map((c, i) => (<td key={i} data-label={CMP_COLS[i]}>{c}</td>))}</tr>))}</tbody>
          </table>
        </div>
        <p className="note reveal"><b>Self-Managed Operations</b> means your team runs the workflows. It does not mean your team hosts PUDICA. PUDICA Autonomy is delivered as SaaS, and eligible validation uses a customer-owned test bed. Confirm supported systems, integrations, test-bed requirements and operator responsibilities during scoping.</p>
      </div></section>
      <section id="capability-comparison" className="band band--cloud" aria-labelledby="capc-h"><div className="wrap">
        <SectionHead eyebrow="Capabilities" title="Compare the six workstreams separately." id="capc-h" lead="A support-model column is not a proxy for feature entitlement. Included is shown only when a capability is confirmed in the selected scope; Optional for a confirmed add-on; Scoped when requirements determine availability; Not included when the offer does not cover it." />
        <ul className="cmpleg reveal" aria-label="Status key">{Object.keys(CMP_STATUS).map((w) => (<li key={w}><StatusWord word={w} /></li>))}</ul>
        <div className="cmp cmp--cap reveal">
          <table>
            <caption className="sr-only">Workstream availability</caption>
            <thead><tr><th scope="col">Workstream</th><th scope="col">Status</th><th scope="col">Comparison</th></tr></thead>
            <tbody>{CAP_COMPARE.map(([k, st, d], r) => (<tr key={k} style={{ "--i": r }}><th scope="row">{k}</th><td data-label="Status"><StatusWord word={st} /></td><td data-label="Comparison">{d}</td></tr>))}</tbody>
          </table>
        </div>
        <p className="note reveal">Don't assume all six workstreams come with every subscription. NativeTrust Endpoint is not a PUDICA subscription. Incident Readiness &amp; Response remains a separately commissionable service without implying closed-loop incident automation.</p>
      </div></section>
      <section id="pricing" className="band" aria-labelledby="pr-h"><div className="wrap">
        <SectionHead eyebrow="Pricing and quotes" title="Know what drives the quote." id="pr-h" lead="We separate platform access, onboarding and ongoing operating responsibility so you can see what you're paying for and who runs each control. Billing units are published once approved, without unconfirmed prices or tier entitlements." />
        <div className="cmp cmp--price reveal">
          <table>
            <caption className="sr-only">What drives each quote</caption>
            <thead><tr><th scope="col">Quote line</th><th scope="col">Recommended basis</th><th scope="col">What the quote should show</th></tr></thead>
            <tbody>{PRICING_ROWS.map(([k, basis, shows], r) => (<tr key={k} style={{ "--i": r }}><th scope="row"><span className="cmp__line">{k}</span><Btn to={contactTo(`Scoped quote: ${k}`)} size="sm" variant="outline">Request a Scoped Quote</Btn></th><td data-label="Recommended basis">{basis}</td><td data-label="What the quote should show">{shows}</td></tr>))}</tbody>
          </table>
        </div>
        <p className="note reveal">Platform uptime, support response targets and contracted operational coverage are stated separately. If an agreement combines services, the platform fee appears once and each control shows which team operates it.</p>
      </div></section>
      <section id="adoption" className="band band--cloud" aria-labelledby="ado-h"><div className="wrap">
        <SectionHead eyebrow="Adoption" title="Assess → Launch → Operationalise → Scale." id="ado-h" lead="Enter at your current stage and see what you receive at the end of each one." />
        <StepRail items={ADOPT_STAGES} gateLabel="Go/no-go decision" />
        <p className="note reveal">Indicative planning windows are about one month for a bounded cloud scope and up to six months for complex hybrid infrastructure. They are not service commitments or dates for full autonomy.</p>
      </div></section>
      <CtaBand title="Decide who runs the work, and where validation happens." lead="Bring your environment, your test-bed constraints and the evidence your leadership needs. We'll confirm what fits and what your team retains." primary={["Request a Scoped Quote", contactTo("Compare operating models")]} secondary={["Explore PUDICA Autonomy", "/pudica-autonomy"]} />
    </>
  );
}
