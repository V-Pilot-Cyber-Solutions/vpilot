/* PAGE: PUDICA Autonomy (/pudica-autonomy)
   Styles: styles/pudica.css, styles/platform.css
   Content: data/platform.js */
import "../styles/pudica.css";
import { useEffect, useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { AdoptionJourney } from "../components/StepRail";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Emblem, Emblem3D, Tile } from "../components/brand";
import { ArchFlow, Ladder, Layers, PipelineTabs, RecordCard, WorkstreamExplorer } from "../components/platform";
import { ACR_LINKS, DEPLOY_CARDS, PUDICA_SECTIONS, READINESS_ENV } from "../data/platform";
import { COMPARE_TO, asset } from "../lib/config";
import { Link, contactTo, useRouter } from "../lib/router";

function OnPageBar({ items }) {
  const { path } = useRouter();
  const [active, setActive] = useState(items[0][0]);
  useEffect(() => {
    const els = items.map(([id]) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver((entries) => {
      const v = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (v) setActive(v.target.id);
    }, { rootMargin: "-22% 0px -62% 0px", threshold: 0 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="onpage" aria-label="On this page">
      <div className="wrap onpage__in">
        <span className="onpage__k">On this page</span>
        <ul>{items.map(([id, label]) => (<li key={id}><Link to={`${path}#${id}`} className={active === id ? "is-active" : ""} aria-current={active === id ? "location" : undefined}>{label}</Link></li>))}</ul>
      </div>
    </nav>
  );
}
export function PudicaPage() {
  return (
    <>
      <PageHero art="mountains" crumbs={[["PUDICA Autonomy"]]} eyebrow="Flagship security operations platform" title="Automate security operations. Keep control of production change."
        lead="PUDICA Autonomy helps security and infrastructure teams move from a finding to a verified fix. Deploy quickly in supported cloud environments. Extend automation across hybrid infrastructure at the pace your operations can support. Its core module, Autonomous Remediations, covers configuration benchmark issues, software package vulnerabilities and application vulnerabilities."
        actions={<><Btn to={contactTo("PUDICA Autonomy demo")} variant="cyan">Request a PUDICA Demo</Btn><Btn to={COMPARE_TO} variant="ghost">Compare Operating Models</Btn></>}>
        <div className="glass glass--brand"><Emblem3D kind="pudica" size={180} label="PUDICA emblem" /><img src={asset("pudica-lockup.png")} alt="PUDICA" width="300" height="54" /><p className="glass__v">Validated in isolation. Approved by your authority. Verified in production.</p></div>
      </PageHero>
      <OnPageBar items={PUDICA_SECTIONS} />

      <section id="cloud-operations" className="band" aria-labelledby="co-title"><div className="wrap">
        <SectionHead eyebrow="Cloud Operations" title="Start quickly and scale approved workflows." id="co-title" lead="Connect a supported cloud environment, agree access and baseline policies, and start with one workflow your team can verify. For eligible, approved workflows, PUDICA can automate the steps from evidence intake and validation through authorised execution, production checks and reporting. Extend proven workflows to more workloads and accounts." />
        <ul className="cards cards--2">
          <li className="card tilt reveal" data-tilt="4"><p className="card__group"><Icon name="users" size={16} />Self-Managed Operations</p><h3>Your team runs the workflows.</h3><p className="card__scope">Self-Managed Operations means your team operates the workflows. It does not mean your team hosts PUDICA, which is delivered as SaaS.</p></li>
          <li className="card tilt reveal" data-tilt="4" style={{ "--i": 1 }}><p className="card__group"><Icon name="headset" size={16} />Virtual Support</p><h3>V Pilot assists remotely.</h3><p className="card__scope">Add V Pilot Virtual Support for onboarding, troubleshooting and rollout guidance. The agreement states whether V Pilot advises or performs named actions.</p></li>
        </ul>
        <div className="inline-links reveal"><AnchorBtn href="#deployment" variant="solid">See Cloud Deployment Options</AnchorBtn></div>
      </div></section>

      <section id="hybrid-operations" className="band band--cloud" aria-labelledby="ho-title"><div className="wrap">
        <SectionHead eyebrow="Hybrid Operations" title="Run the work today. Automate it as it becomes ready." id="ho-title" lead="When critical services span cloud and on-premises infrastructure, V Pilot can operate or co-manage the agreed scope while mapping dependencies and assessing automation readiness. Eligible changes are tested away from production, then executed only within approved authority and agreed change windows. An assigned operator handles work that isn't ready for automation. Your team retains material approvals and risk acceptance." />
        <div className="inline-links reveal"><Btn to={contactTo("Hybrid readiness assessment")}>Request a Hybrid Readiness Assessment</Btn><Link to={COMPARE_TO}>Compare Operating Models <Icon name="arrow" size={16} /></Link></div>
      </div></section>

      <section id="capabilities" className="band" aria-labelledby="cap-title"><div className="wrap">
        <SectionHead eyebrow="Capabilities" title="Integrated Security Operations Management." id="cap-title" lead="Six workstreams work from one evidence trail. Configuration & Identity Operations establishes baseline and access context. Autonomous Remediations, the core module, covers configuration benchmark issues, software-package vulnerabilities and application vulnerabilities. SIEM & Detection Operations tests signal coverage and routing. Autonomous Resilience supports eligible reconstruction and recovery validation. Autonomous Incident Management coordinates eligible, authorised response workflows. NativeTrust Endpoint extends the same discipline to the desktop, with V Pilot operating agreed device, browser and data controls." />
        <WorkstreamExplorer />
        <div className="evstrip reveal"><Emblem kind="pudica" size={52} className="evstrip__emb" /><div><h3>Shared evidence layer</h3><p>Operational and governance evidence runs across all six workstreams: decisions, control evidence, exception owners and residual risk stay linked to the work that created them.</p></div></div>
        <p className="note reveal"><b>NativeTrust Endpoint</b> is the sixth workstream. V Pilot operates it as a managed service. It is not a PUDICA subscription and can be commissioned on its own or alongside the platform.</p>
        <p className="note reveal"><b>What the taxonomy is.</b> The six-layer taxonomy, including OSE Kernel, describes the configuration benchmark foundation, not application security. Application owners retain engineering, testing and release authority.</p>
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
        <p className="note reveal">Supported integrations, such as Tenable, Qualys, Splunk or Microsoft Sentinel, are subject to supported scope and approved access.</p>
      </div></section>

      <section id="autonomy-readiness" className="band band--cloud" aria-labelledby="ar-title"><div className="wrap">
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
        <h3 className="subhead">Indicative planning windows</h3>
        <div className="rdy">{READINESS_ENV.map((r, k) => (<article key={r.env} className="rdy__card tilt reveal" data-tilt="4" style={{ "--i": k }}><p className="rdy__env">{r.env}</p><p className="rdy__win">{r.window}</p><p className="rdy__note">{r.note}</p><p><b>What V Pilot provides during onboarding</b>{r.does}</p></article>))}</div>
        <p className="note reveal">Planning estimates, not service commitments, and neither is a date for full autonomy. Access, configuration quality, integrations, test fidelity, recovery readiness and customer decisions determine which work can progress.</p>
        <p className="inline-links reveal"><Link to={contactTo("Autonomy readiness assessment")}>Assess autonomy readiness <Icon name="arrow" size={16} /></Link></p>
      </div></section>

      <section id="sample-change-decision" className="band" aria-labelledby="scd-title"><div className="wrap split split--record">
        <div>
          <SectionHead eyebrow="Sample Change Decision" title="See what an approver reviews before rollout." id="scd-title" lead="An illustrative gateway change shows the affected service, the evidence version, the isolated checks and the production acceptance criteria. Validated in isolation · Awaiting approval · Production verification due. The change has not been deployed." />
          <p className="exlabel"><Icon name="alert" size={15} /><span><b>Illustrative.</b> Validated in isolation means the approver has evidence to review. It does not mean the change has been deployed or verified in production.</span></p>
          <p className="inline-links reveal"><Link to="/resources/sample-change-decision">Open the standalone reference <Icon name="arrow" size={16} /></Link></p>
        </div>
        <RecordCard />
      </div></section>

      <section id="deployment" className="band band--cloud" aria-labelledby="dep-title"><div className="wrap">
        <SectionHead eyebrow="Deployment" title="Separate platform hosting from who runs the work." id="dep-title" lead="PUDICA Autonomy is delivered as SaaS. Eligible validation uses a customer-owned test bed. Self-Managed Operations means your team operates the workflows; it does not mean your team hosts PUDICA. Confirm supported systems, integrations, test-bed requirements and operator responsibilities during scoping." />
        <ul className="deploy">{DEPLOY_CARDS.map((c, k) => (<li key={c.t} className="deploycard tilt reveal" data-tilt="5" style={{ "--i": k }}><Tile icon={c.icon} /><h3>{c.t}</h3><p>{c.d}</p></li>))}</ul>
        <div className="inline-links reveal"><Link to={contactTo("Customer-hosted PUDICA requirements")}>Discuss customer-hosted requirements <Icon name="arrow" size={16} /></Link><Link to={COMPARE_TO}>Compare Operating Models <Icon name="arrow" size={16} /></Link></div>
      </div></section>

      <CtaBand title="See PUDICA Autonomy in your operating context." lead="Start with a demo, or compare the operating models to decide who should run the work." primary={["Request a PUDICA Demo", contactTo("PUDICA Autonomy demo")]} secondary={["Compare Operating Models", COMPARE_TO]} />
    </>
  );
}
