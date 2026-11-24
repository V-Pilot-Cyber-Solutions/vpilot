import { Link } from "react-router-dom";
import {
  ArrowRight, CloudCog, Code2, DatabaseBackup, Radar, ServerCog,
  ShieldCheck, UsersRound
} from "lucide-react";

const services = [
  [UsersRound, "Workspace Administration & IT Support", "Identity, endpoint and secure-browser administration, software support, encryption, user assistance and operating evidence.", "WORKFORCE OPERATIONS"],
  [ServerCog, "Security Configuration Management", "Approved baselines, benchmark hardening, configuration drift, governed exceptions and verified configuration closure.", "CONFIGURATION ASSURANCE"],
  [ShieldCheck, "Vulnerability Remediation Operations", "Validate applicability, prioritise exposure, coordinate treatment or compensating controls, retest and preserve closure evidence.", "INFRASTRUCTURE REMEDIATION"],
  [Code2, "Application Security Governance", "Govern architecture, threat modelling, SAST, DAST, SCA, API security, CI/CD gates, remediation ownership and secure release.", "PRODSECAPPS • ISO/IEC 27034 INFORMED"],
  [Radar, "SIEM & Detection Operations", "Telemetry health, risk-based monitoring profiles, detection engineering, triage, investigation and SLA-based escalation.", "OPERATIONAL INTELLIGENCE"],
  [CloudCog, "Incident Response & Investigation", "Approved playbooks, simulation, authority checks, containment, evidence, restoration and post-incident learning.", "RESPONSE ASSURANCE"],
  [DatabaseBackup, "Cyber Resilience & Recovery", "BIA-led continuity, remediation-linked restore testing, BCP/DR exercises, dependency validation and recovery evidence.", "RECOVERY ASSURANCE"],
];

export default function ServicePortfolio() {
  return (
    <section className="service-portfolio">
      <div className="service-portfolio__grid">
        {services.map(([Icon, title, copy, tag], index) => (
          <article className={`service-card service-card--${index + 1}`} key={title}>
            <div className="service-card__icon"><Icon /></div>
            <div className="service-card__body">
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>{tag}</small>
            </div>
            <Link to={`/services?service=${encodeURIComponent(title)}`}>Explore service <ArrowRight /></Link>
          </article>
        ))}
      </div>
      <div className="service-portfolio__relationship">
        <span>One service</span><ArrowRight />
        <span>Shared operating context</span><ArrowRight />
        <span>Integrated evidence</span><ArrowRight />
        <span>Measurable outcomes</span>
      </div>
    </section>
  );
}
