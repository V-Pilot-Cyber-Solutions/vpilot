/* PAGE: Company profile 2026 (/company/profile)
   Styles: styles/company.css
   Content: data/profile.js */
import "../styles/company.css";
import { CtaBand } from "../components/CtaBand";
import { OnPageBar } from "../components/OnPageBar";
import { PageHero } from "../components/PageHero";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { CheckList, FlowChain, KeyCall, SpecTable } from "../components/detail";
import { PROFILE_LAYERS, PROFILE_LIFECYCLE, PROFILE_MARKET, PROFILE_MEASURES, PROFILE_MISSION, PROFILE_PARTNERS, PROFILE_STAGES, PROFILE_STANDARDS } from "../data/profile";
import { GRC } from "../data/services";
import { contactTo } from "../lib/router";
import { BrandMap } from "./CompanyPage";

export function ProfilePage() {
  return (
    <>
      <PageHero art="soc" crumbs={[["Company", "/company"], ["Company profile 2026"]]} eyebrow="Company profile 2026" title="Integrated Cyber Operations, Governance & Assurance."
        lead={<><span className="phero__headline">We Pilot Your Security Operations. Delegate the work. Keep control of the decisions.</span>Choose Managed Security Operations for recurring security work, Specialist Solutions for a defined outcome or an ongoing technical responsibility, or GRC as a Service for governance, risk and compliance. We agree what we run, what your authorised owners approve and what evidence counts as completion.</>}
        actions={<><AnchorBtn href="#profile-direction">Read the profile</AnchorBtn><Btn to={contactTo("Executive briefing")} variant="ghost">Book an Executive Briefing</Btn></>} />
      <OnPageBar items={[["profile-view", "In one view"], ["profile-direction", "Direction"], ["profile-problem", "The problem"], ["profile-model", "Operating model"], ["profile-ecosystem", "Ecosystem"], ["profile-assurance", "Measures and standards"]]} />

      <section id="profile-view" className="band" aria-labelledby="pv-title"><div className="wrap">
        <SectionHead eyebrow="The company in one view" title="One accountable operating partner, with clear customer decision rights." id="pv-title" lead="V Pilot runs the agreed work. PUDICA Autonomy automates eligible workflows. Customer leaders retain material decisions." />
        <BrandMap id="profile-brands" />
        <KeyCall label="Enterprise proposition" text="V Pilot runs the agreed work. PUDICA Autonomy automates eligible workflows. Customer leaders retain material decisions." />
      </div></section>

      <section id="profile-direction" className="band band--cloud" aria-labelledby="pd-title"><div className="wrap">
        <SectionHead eyebrow="Corporate direction" title="Less complexity. Protection you can verify." id="pd-title" />
        <ul className="pgrid pgrid--2">
          <li className="pgrid__card tilt reveal" data-tilt="4"><h3>Purpose</h3><p>Enable organizations to operate securely, respond decisively, recover confidently and demonstrate assurance continuously.</p></li>
          <li className="pgrid__card tilt reveal" data-tilt="4" style={{ "--i": 1 }}><h3>Vision</h3><p>A future in which routine cybersecurity operations become progressively autonomous, material decisions remain accountable, and every production action is informed by risk, validated through evidence and supported by recovery readiness.</p></li>
        </ul>
        <CheckList title="Mission" items={PROFILE_MISSION} />
      </div></section>

      <section id="profile-problem" className="band" aria-labelledby="pp-title"><div className="wrap">
        <SectionHead eyebrow="Market problem" title="Security investment does not automatically create operational assurance." id="pp-title" lead="Organizations invest in cloud platforms, endpoint tools, scanners, monitoring, compliance programmes and specialist providers. The persistent weakness is not always tool capability. It is the gap between signal, decision, execution, verification and evidence." />
        <SpecTable title="Why an integrated operating model" cols={["Fragmented condition", "Operational consequence", "V Pilot response"]} rows={PROFILE_MARKET} />
      </div></section>

      <section id="profile-model" className="band band--cloud" aria-labelledby="pm-title"><div className="wrap">
        <SectionHead eyebrow="Operating model" title="From signal to verified outcome." id="pm-title" lead="Govern, Protect, Monitor, Respond and Recover describe the work we operate. The lifecycle below shows how an individual finding or request becomes an owned, authorized and verified outcome." />
        <FlowChain items={PROFILE_LIFECYCLE} label="Signal to verified outcome" />
        <SpecTable title="What happens at each stage" cols={["Stage", "Technical activity", "Required outcome"]} rows={PROFILE_STAGES} />
        <SpecTable title="Who operates, approves and assures" cols={["Layer", "Primary components", "Accountability"]} rows={PROFILE_LAYERS} />
        <KeyCall label="Architecture principle" text="Customer authority remains explicit. Technical execution remains controlled. Independent assurance remains independent." />
      </div></section>

      <section id="profile-ecosystem" className="band" aria-labelledby="pe-title"><div className="wrap">
        <SectionHead eyebrow="Shared responsibility" title="A governed partner ecosystem." id="pe-title" lead="One customer experience while preserving each party's professional and technical accountability." />
        <SpecTable title="Who keeps which responsibility" cols={["Party", "Retained responsibility", "V Pilot contribution"]} rows={PROFILE_PARTNERS} />
      </div></section>

      <section id="profile-assurance" className="band band--cloud" aria-labelledby="pa-title"><div className="wrap">
        <SectionHead eyebrow="Service assurance" title="Measures, evidence and outcomes." id="pa-title" lead="Operational value is demonstrated through traceable measures, not universal or unqualified claims." />
        <SpecTable title="Representative measures" cols={["Outcome area", "Representative measures"]} rows={PROFILE_MEASURES} />
        <KeyCall label="Claim discipline" text="Automation or optimization percentages apply only to eligible, measured activities in suitable environments. They are not universal workforce or infrastructure replacement promises." />
        <SpecTable title="Standards and technology alignment" cols={["Area", "Representative anchors"]} rows={PROFILE_STANDARDS} />
        <p className="note reveal">Representative anchors are used according to customer scope, licensing, jurisdiction and risk.</p>
      </div></section>

      <section className="band" aria-labelledby="pf-title"><div className="wrap split">
        <SectionHead eyebrow="Final statement" title="Accountability is the product of integration." id="pf-title" lead="V Pilot brings the service, platform, framework and governance layers together without obscuring ownership. One accountable company. One integrated risk context. Every material action owned, governed, evidenced and verified." />
        <div className="reveal" style={{ "--i": 1 }}>
          <KeyCall label="Prove one outcome first" text="Nominate an executive sponsor, a technical owner and one priority. Agree the permitted evidence, test boundary, approver, stop conditions and success criteria before work begins. Leadership receives results, known limitations and a recommendation to scale, refine or stop." />
          <p className="inline-links"><Btn to={contactTo("Proof-of-concept scoping discussion")} variant="cyan">Request a Proof-of-Concept Scoping Discussion</Btn></p>
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
