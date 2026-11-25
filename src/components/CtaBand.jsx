import { useRef } from "react";
import { Btn } from "./atoms";
import { useParallax } from "../hooks/index";
import { contactTo } from "../lib/router";

export function CtaBand({
  title = "Start with an operation you need to make more reliable.",
  lead = "Bring a control gap, a growing backlog, a planned change or a recovery concern. We'll discuss what V Pilot could run, what your team would still approve and what evidence would show progress.",
  primary = ["Book an Executive Briefing", contactTo("Executive briefing")], secondary = ["See How We Operate", "/#operating-model"], note,
}) {
  const bg = useRef(null);
  useParallax(bg, 0.07);
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__bg" ref={bg} aria-hidden="true" />
      <div className="wrap cta__in">
        <div className="reveal"><h2 id="cta-title">{title}</h2><p>{lead}</p>{note && <p className="cta__note">{note}</p>}</div>
        <div className="cta__btns reveal" style={{ "--i": 1 }}><Btn to={primary[1]} variant="cyan">{primary[0]}</Btn>{secondary && <Btn to={secondary[1]} variant="ghost">{secondary[0]}</Btn>}</div>
      </div>
    </section>
  );
}
