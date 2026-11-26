/* PAGE: PUDICA Autonomy (/pudica-autonomy)
   Styles: styles/pudica.css, styles/platform.css
   Content: data/platform.js (WORKSTREAMS, MILESTONES, DEPLOY_CARDS, AUTONOMY, GOLDENVAULT_ROWS) */
import "../styles/pudica.css";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { OnPageBar } from "../components/OnPageBar";
import { PageHero } from "../components/PageHero";
import { AdoptionJourney, StepRail } from "../components/StepRail";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Emblem, Emblem3D, Tile } from "../components/brand";
import { KeyCall, SpecTable } from "../components/detail";
import { ArchFlow, Ladder, Layers, PipelineTabs, RecordCard, WorkstreamExplorer } from "../components/platform";
import { ACR_LINKS, DEPLOY_CARDS, GOLDENVAULT_ROWS, MILESTONES, PUDICA_SECTIONS, VALIDATION_ROWS } from "../data/platform";
import { COMPARE_TO, asset } from "../lib/config";
import { Link, contactTo } from "../lib/router";

export function PudicaPage() {
  return (
    <>
      <PageHero art="mountains" crumbs={[["PUDICA Autonomy"]]} eyebrow="Flagship security operations platform" title="Automate security operations. Keep control of production change."
        lead="PUDICA Autonomy is V Pilot's flagship AI-assisted SaaS platform for policy-governed security operations automation. It helps security and infrastructure teams move from a finding to a verified fix across cloud and hybrid environments. Its core module, Autonomous Remediations, covers configuration benchmark issues, software package vulnerabilities and application vulnerabilities."
        actions={<><Btn to={contactTo("PUDICA Autonomy demo")} variant="cyan">Request a PUDICA Demo</Btn><Btn to={COMPARE_TO} variant="ghost">Compare Operating Models</Btn></>}>
        <div className="glass glass--brand"><Emblem3D kind="pudica" size={180} label="PUDICA emblem" /><img src={asset("pudica-lockup.png")} alt="PUDICA" width="300" height="54" /><p className="glass__v">Validated in isolation. Approved by your authority. Verified in production.</p></div>
      </PageHero>
      <OnPageBar items={PUDICA_SECTIONS} />

      <section id="cloud-operations" className="band" aria-labelledby="co-title"><div className="wrap">
        <SectionHead eyebrow="Cloud Operations" title="Start with one workflow. Scale approved workflows." id="co-title" lead="Connect a supported cloud environment, agree access and baseline policies, and start with one workflow your team can verify. For eligible, approved workflows, PUDICA can automate the steps from evidence intake and validation through authorised execution, production checks and reporting. Extend proven workflows to more workloads and accounts." />
        <ul className="cards cards--2">
          <li className="card tilt reveal" data-tilt="4"><p className="card__group"><Icon name="users" size={16} />Customer-Operated</p><h3>Your team runs the workflows.</h3><p className="card__scope">Customer-Operated describes who operates the workflows. It does not describe where PUDICA is hosted: PUDICA Autonomy is delivered as SaaS.</p></li>
          <li className="card tilt reveal" data-tilt="4" style={{ "--i": 1 }}><p className="card__group"><Icon name="headset" size={16} />V Pilot Remote Support</p><h3>Your team operates. V Pilot provides guidance.</h3><p className="card__scope">V Pilot Remote Support provides remote onboarding guidance, troubleshooting and rollout support. Your team operates the workflows and executes production changes. Remote Support does not include production execution or ongoing operations by V Pilot.</p></li>
        </ul>
        <div className="inline-links reveal"><AnchorBtn href="#deployment" variant="solid">See Cloud Deployment Options</AnchorBtn><Link to={COMPARE_TO}>Compare Operating Models <Icon name="arrow" size={16} /></Link></div>
      </div></section>

      <section id="hybrid-operations" className="band band--cloud" aria-labelledby="ho-title"><div className="wrap">
        <SectionHead eyebrow="Hybrid Operations" title="Run the work today. Automate it as it becomes ready." id="ho-title" lead="When critical services span cloud and on-premises infrastructure, V Pilot can operate or co-manage the agreed scope while mapping dependencies and assessing automation readiness. Co-Managed Operations shares named responsibilities with your team. Fully Managed Operations delegates day-to-day delivery within the contracted scope. Eligible changes are tested away from production, then executed only within approved authority and agreed change windows. An assigned operator handles work that isn't ready for automation. Your authorised owners retain material approvals and formal risk acceptance." />
        <div className="inline-links reveal"><Btn to={contactTo("Hybrid readiness assessment")}>Request a Hybrid Readiness Assessment</Btn><Link to={COMPARE_TO}>Compare Operating Models <Icon name="arrow" size={16} /></Link></div>
      </div></section>

      <section id="capabilities" className="band" aria-labelledby="cap-title"><div className="wrap">
        <SectionHead eyebrow="Capabilities" title="Integrated Security Operations Management." id="cap-title" lead="PUDICA Autonomy supports five platform workstreams with a shared evidence record. Configuration & Identity Operations establishes baseline and access context. Autonomous Remediations, the core module, covers configuration benchmark issues, software-package vulnerabilities and application vulnerabilities. SIEM & Detection Operations tests signal coverage and routing. Autonomous Resilience supports eligible reconstruction and recovery validation. Autonomous Incident Management coordinates eligible, authorised response workflows." />
        <WorkstreamExplorer />
        <div className="evstrip reveal"><Emblem kind="pudica" size={52} className="evstrip__emb" /><div><h3>Shared evidence record</h3><p>Operational and governance evidence is kept in one record across the five workstreams: decisions, control evidence, exception owners and residual risk stay linked to the work that created them. Shared evidence is not a sixth workstream.</p></div></div>
        <p className="note reveal"><b>Selected workstreams only.</b> The proposal lists the selected workstreams and their prerequisites. Not every workstream is included in every subscription.</p>
        <p className="note reveal"><b>NativeTrust Endpoint</b> is a separately commissionable Specialist Solution operated by V Pilot. It is not a PUDICA workstream, and it does not require PUDICA. It can be commissioned on its own or alongside the platform. <Link to="/services/nativetrust-endpoint">See NativeTrust Endpoint</Link>.</p>
        <p className="note reveal"><b>What the taxonomy is.</b> The six-layer taxonomy, including OSE Kernel, describes the configuration benchmark foundation, not application security. Application owners retain engineering, testing and release authority.</p>
        <p className="note reveal"><b>Governance rule.</b> PUDICA executes only within approved authority. Novel incidents, irreversible actions, material business decisions and formal risk acceptance remain human-accountable.</p>
        <div className="note reveal"><b>Commercial dependency.</b> The full Autonomous Incident Management package requires active subscriptions to Autonomous Remediations, SIEM &amp; Detection Operations and Autonomous Resilience, plus the agreed configuration and identity foundation. Otherwise, scope Incident Readiness &amp; Response as a specialist service without promising closed-loop automation.</div>
      </div></section>

      <section id="validation-architecture" className="band band--navy pudica pudica--page" aria-labelledby="va-title"><div className="wrap">
        <SectionHead eyebrow="Validation Architecture" title="Test the proposed change before it reaches production." id="va-title" lead="SenseScan acquires authorised configuration evidence. GoldenVault preserves the observed state separately from the approved baseline. Eligible changes are tested in a customer-owned test bed, informed by the SecLabs Knowledge Center. A passing test informs approval; it does not authorise rollout. Production checks determine whether the work can close." />
        <ArchFlow />
        <p className="inline-links reveal"><Link to="/#tools">How evidence from your existing tools starts the work <Icon name="arrow" size={16} /></Link></p>
        <div className="spacer" />
        <PipelineTabs />
      </div></section>

      <section className="band" aria-labelledby="acr-title"><div className="wrap">
        <SectionHead eyebrow="Change request and taxonomy" title="The change request defines what must be proven." id="acr-title" lead="The Autonomy Change Request (ACR) links the proposed treatment to everything the approver needs to see, including the rollback that must be shown to work." />
        <ul className="acr">{ACR_LINKS.map((a, k) => (<li key={a.t} className="acr__node tilt reveal" data-tilt="7" style={{ "--i": k }}><Tile icon={a.icon} /><h3>{a.t}</h3><p>{a.d}</p></li>))}</ul>
        <div className="split split--tax">
          <div><SectionHead eyebrow="Configuration taxonomy" title="Six layers, one configuration benchmark foundation." id="tax-title" lead="CaBC stores configuration as a versioned package or GoldenVault image, keeping the observed state separate from the approved baseline. SenseScan classifies authorised configuration evidence across these layers. They are not an application taxonomy." /></div>
          <Layers />
        </div>
        <ul className="points">{[["flask", "What can be tested", "Compatibility, expected detection signals, service impact, and rollback or restoration, where the relevant conditions can be reconstructed. Controlled defensive simulations only."], ["layers", "What the isolated environment represents", "A named GoldenVault version. Scope, results, fidelity and missing dependencies are recorded, including material differences from production."], ["chart", "What still belongs in staging or production", "Performance testing, end-to-end continuity and disaster recovery exercises, and the production checks after change."]].map(([ic, t, d], k) => (<li key={t} className="point tilt reveal" data-tilt="5" style={{ "--i": k }}><Tile icon={ic} sm size={22} /><h3>{t}</h3><p>{d}</p></li>))}</ul>
        <p className="note reveal">Supported scanner, SIEM and endpoint outputs can be integrated, imported or reviewed manually, as agreed. A report import is not a native integration.</p>
      </div></section>

      <section id="goldenvault-test-bed" className="band band--cloud" aria-labelledby="gv-title"><div className="wrap">
        <SectionHead eyebrow="GoldenVault and the test bed" title="Preserve the observed state. Prove the change in isolation." id="gv-title" lead="GoldenVault preserves versioned observed state separately from approved state, with playbooks, prior results and recovery blueprints. Eligible validation uses a customer-owned test bed, informed by the SecLabs Knowledge Center and the relevant GoldenVault version. Test-bed ownership does not mean the customer hosts the SaaS platform. A passing test informs approval; it does not authorise execution." />
        <SpecTable title="GoldenVault knowledge objects" cols={["Knowledge object", "Representative content"]} rows={GOLDENVAULT_ROWS} />
        <KeyCall label="GoldenVault signature" text="GoldenVault preserves both the observed and approved state." />
        <SpecTable title="What the customer-owned test bed validates" cols={["Validation area", "Technical purpose"]} rows={VALIDATION_ROWS} />
        <KeyCall label="Infrastructure boundary" text="Isolated validation in the customer-owned test bed complements staging, performance testing and recovery environments. It substitutes for a specified check only when equivalence is demonstrated and the customer approves. Required end-to-end continuity and disaster recovery exercises remain in place." />
      </div></section>

      <section id="autonomy-readiness" className="band" aria-labelledby="ar-title"><div className="wrap">
        <SectionHead eyebrow="Autonomy Readiness" title="Expand automation only when the workflow is ready." id="ar-title" lead="Start with observation and recommendations. Progress to human-approved execution, then to policy-governed execution only where repeatability, observability, recovery and human override have been demonstrated. The readiness levels are criteria, not a timetable." />
        <AdoptionJourney id="readiness-journey" />
        <div className="ladderbox reveal">
          <div>
            <p className="ladderbox__k">Levels a workflow can qualify for</p>
            <h3>A0 to A5 are not a timetable, and nothing progresses automatically.</h3>
            <p>Each workflow is assessed separately. Novel incidents, irreversible actions, material approvals and formal risk acceptance stay human-accountable.</p>
            <div className="guard guard--stack"><span className="guard__label">Guardrails</span><ul>{["Human override", "Segregation of duties", "Evidence", "Recovery readiness"].map((g) => (<li key={g}>{g}</li>))}</ul></div>
          </div>
          <Ladder />
        </div>
        <h3 className="subhead">Onboarding milestones</h3>
        <p className="lead lead--tight reveal">We agree onboarding milestones after discovery. Platform activation, environment connection, workflow validation and authorisation for production use are separate milestones.</p>
        <StepRail items={MILESTONES} gateLabel="Production authorisation" />
        <p className="note reveal">A pilot establishes which recurring workflows qualify. Report assisted, human-approved and policy-governed execution separately against the agreed scope; work that does not qualify stays with a named operator. Access, configuration quality, integrations, test fidelity, recovery readiness and customer decisions determine which work can progress.</p>
        <p className="inline-links reveal"><Link to={contactTo("Autonomy readiness assessment")}>Assess autonomy readiness <Icon name="arrow" size={16} /></Link></p>
      </div></section>

      <section id="sample-change-decision" className="band band--cloud" aria-labelledby="scd-title"><div className="wrap split split--record">
        <div>
          <SectionHead eyebrow="Sample Change Decision" title="See what an approver reviews before rollout." id="scd-title" lead="An illustrative gateway change shows the affected service, the evidence version, the isolated checks and the production acceptance criteria. Validated in isolation · Awaiting approval · Production verification due. The change has not been deployed." />
          <p className="exlabel"><Icon name="alert" size={15} /><span><b>Illustrative example.</b> Figures show the format of the operating record and do not represent a customer result. <b>Validated in isolation</b> means agreed checks were performed in the test bed and the results are available for the approval decision. It is not permission to deploy, verified production closure or a guarantee of production behaviour.</span></p>
          <p className="note reveal"><b>Verified in production</b> means agreed production checks showed the intended result within scope. It does not mean every related issue is closed: residual risk and untested dependencies are listed separately.</p>
          <p className="inline-links reveal"><Link to="/resources/sample-change-decision">Open the standalone reference <Icon name="arrow" size={16} /></Link></p>
        </div>
        <RecordCard />
      </div></section>

      <section id="deployment" className="band" aria-labelledby="dep-title"><div className="wrap">
        <SectionHead eyebrow="Deployment" title="Separate platform hosting from who runs the work." id="dep-title" lead="PUDICA Autonomy is delivered as SaaS. Eligible validation uses a customer-owned test bed, informed by the SecLabs Knowledge Center. The operating agreement names who runs the workflows. Platform hosting, the validation environment, test-bed provisioning and workflow operation are stated separately, and confirmed during scoping." />
        <ul className="deploy deploy--4">{DEPLOY_CARDS.map((c, k) => (<li key={c.t} className="deploycard tilt reveal" data-tilt="5" style={{ "--i": k }}><Tile icon={c.icon} /><h3>{c.t}</h3><p>{c.d}</p></li>))}</ul>
        <div className="inline-links reveal"><Link to={contactTo("Customer-hosted PUDICA requirements")}>Discuss customer-hosted requirements <Icon name="arrow" size={16} /></Link><Link to={COMPARE_TO}>Compare Operating Models <Icon name="arrow" size={16} /></Link></div>
      </div></section>

      <CtaBand title="See PUDICA Autonomy in your operating context." lead="Start with a demo, or compare the operating models to decide who should run the work." primary={["Request a PUDICA Demo", contactTo("PUDICA Autonomy demo")]} secondary={["Compare Operating Models", COMPARE_TO]} />
    </>
  );
}
