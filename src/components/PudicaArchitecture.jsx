import { useRef } from "react";
import {
  ArrowRight, BrainCircuit, DatabaseBackup, FileCheck2, FlaskConical,
  KeyRound, Radar, RotateCcw, ServerCog, ShieldCheck, UsersRound, Wrench
} from "lucide-react";

export default function PudicaArchitecture() {
  const stage = useRef(null);
  const onMove = (event) => {
    const node = stage.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--rx", `${(-y * 1.5).toFixed(2)}deg`);
    node.style.setProperty("--ry", `${(x * 2).toFixed(2)}deg`);
    node.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    node.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const reset = () => {
    stage.current?.style.setProperty("--rx", "0deg");
    stage.current?.style.setProperty("--ry", "0deg");
  };

  const evidence = [
    [ServerCog, "Configuration state"],
    [Wrench, "Security findings"],
    [KeyRound, "Identity & privilege"],
    [Radar, "SIEM telemetry"],
    [DatabaseBackup, "Recovery state"],
  ];
  const stages = [
    [Radar, "SENSE SCAN", "Acquire context", "Forensic acquisition maps the real target across the six-layer technical taxonomy."],
    [DatabaseBackup, "GOLDENVAULT", "Preserve trusted state", "Versioned configuration, dependencies, monitoring profiles, playbooks and recovery blueprints."],
    [FlaskConical, "SECLABS", "Prove safely", "Isolated remediation, compatibility, detection, incident and recovery validation."],
    [ShieldCheck, "AUTHORITY", "Govern the decision", "Business risk, least privilege, segregation of duties, approval and human override."],
    [BrainCircuit, "PUDICA AUTONOMY", "Operate and learn", "Execute eligible workflows, verify service outcomes and update residual risk."],
  ];
  const outcomes = ["Remediation", "Monitoring", "Incident response", "Recovery", "Residual risk"];

  return (
    <div ref={stage} className="pudica-architecture" onPointerMove={onMove} onPointerLeave={reset}>
      <div className="pudica-architecture__grid" aria-hidden="true" />
      <header className="pudica-architecture__header">
        <img src="/assets/pudica-approved-lockup.png" alt="PUDICA Autonomy" />
        <div>
          <span>EVIDENCE-TO-ACTION ARCHITECTURE</span>
          <small>Acquire exact context. Prove safely. Act with authority. Learn from verified outcomes.</small>
        </div>
      </header>

      <section className="pudica-evidence">
        <b>AUTHORISED OPERATIONAL EVIDENCE</b>
        <div>{evidence.map(([Icon, label]) => <span key={label}><Icon />{label}</span>)}</div>
      </section>

      <div className="pudica-signal" aria-hidden="true"><i /><i /><i /></div>

      <section className="pudica-spine">
        {stages.map(([Icon, kicker, title, copy], index) => (
          <article key={title} style={{ "--stage": index }}>
            <Icon />
            <small>{kicker}</small>
            <h3>{title}</h3>
            <p>{copy}</p>
            {index < stages.length - 1 && <ArrowRight className="pudica-spine__arrow" />}
          </article>
        ))}
      </section>

      <section className="pudica-results">
        <div>
          <b>VERIFIED OPERATIONAL OUTCOMES</b>
          {outcomes.map((item) => <span key={item}>{item}</span>)}
        </div>
        <p>Verified outcomes update GoldenVault, monitoring profiles, incident playbooks, recovery blueprints and the organization-specific Autonomy Risk Profile.</p>
      </section>

      <footer className="pudica-guardrails">
        <span><ShieldCheck />Customer-approved authority</span>
        <span><UsersRound />Human override</span>
        <span><FileCheck2 />Evidence by design</span>
        <span><RotateCcw />Recoverability required</span>
      </footer>
    </div>
  );
}
