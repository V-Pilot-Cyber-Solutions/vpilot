/* PAGE: Careers and internship challenge (/company/careers)
   Styles: styles/careers.css
   Content: data/careers.js */
import "../styles/careers.css";
import { useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Tile } from "../components/brand";
import { CAREER_ROLES, INTERNSHIP, PUZZLES, PUZZLE_SALT } from "../data/careers";
import { Link, contactTo } from "../lib/router";

async function sha256Hex(text) {
  const buf = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function CodeBlock({ title, lines }) {
  const [copied, setCopied] = useState(false);
  const text = lines.join("\n");
  const copy = async () => { try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch (e) { /* clipboard unavailable */ } };
  return (
    <figure className="code">
      <figcaption><span>{title}</span><button type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button></figcaption>
      <pre tabIndex={0}><code>{text}</code></pre>
    </figure>
  );
}
function PuzzleChallenge() {
  const [tab, setTab] = useState("A");
  const [val, setVal] = useState({ A: "", B: "" });
  const [res, setRes] = useState({});
  const p = PUZZLES.find((x) => x.id === tab);
  const state = res[tab];
  const submit = async (e) => {
    e.preventDefault();
    const v = val[tab].trim().toLowerCase();
    if (!v) return;
    if (!(window.crypto && window.crypto.subtle)) { setRes((r) => ({ ...r, [tab]: "unsupported" })); return; }
    const h = await sha256Hex(`${PUZZLE_SALT}${tab}|${v}`);
    setRes((r) => ({ ...r, [tab]: h === p.hash ? "ok" : "no" }));
  };
  const solvedBoth = res.A === "ok" && res.B === "ok";
  return (
    <div className="puzzle reveal">
      <div className="puzzle__tabs" role="tablist" aria-label="Internship challenges">
        {PUZZLES.map((x) => (<button key={x.id} role="tab" id={`pz-${x.id}`} aria-selected={tab === x.id} aria-controls="pz-panel" className={tab === x.id ? "is-on" : ""} onClick={() => setTab(x.id)}><Icon name={x.icon} size={18} /><span><b>{x.t}</b><small>{x.track}</small></span>{res[x.id] === "ok" && <Icon name="check" size={16} className="puzzle__ok" />}</button>))}
      </div>
      <div id="pz-panel" role="tabpanel" aria-labelledby={`pz-${tab}`} className="puzzle__panel" key={tab}>
        <p className="puzzle__story">{p.story}</p>
        <div className="puzzle__blocks">{p.blocks.map((b) => (<CodeBlock key={b.title} title={b.title} lines={b.lines} />))}</div>
        <ol className="puzzle__tasks">{p.tasks.map((t) => (<li key={t}>{t}</li>))}</ol>
        <div className="puzzle__hints">{p.hints.map((h, k) => (<details key={h}><summary>Hint {k + 1}</summary><p>{h}</p></details>))}</div>
        <form className="puzzle__form" onSubmit={submit}>
          <label>Your answer<input type="text" value={val[tab]} onChange={(e) => setVal((v) => ({ ...v, [tab]: e.target.value }))} autoComplete="off" spellCheck="false" placeholder="Type the answer" /></label>
          <button type="submit" className="btn btn--solid"><span>Check answer</span><Icon name="arrow" size={16} /></button>
        </form>
        <div className="puzzle__res" role="status" aria-live="polite">
          {state === "ok" && <p className="puzzle__good"><Icon name="check" size={18} /> Correct. {solvedBoth ? "You have solved both challenges, which gives your application priority consideration." : "Send your answer with a short write-up of how you solved it."}</p>}
          {state === "no" && <p className="puzzle__bad"><Icon name="alert" size={18} /> Not yet. Re-read the artefacts, check your format and try again.</p>}
          {state === "unsupported" && <p className="puzzle__bad"><Icon name="alert" size={18} /> This browser cannot verify answers here. Use a current browser over HTTPS.</p>}
        </div>
      </div>
    </div>
  );
}
export function CareersPage() {
  return (
    <>
      <PageHero art="soc" crumbs={[["Company", "/company"], ["Careers"]]} eyebrow="Careers" title="Build secure operations with V Pilot."
        lead="We are hiring investigators, engineers and testers who like to prove things with evidence. Apply for a role, or earn a place on our two-month internship by cracking a hands-on puzzle."
        actions={<><AnchorBtn href="#roles">See open roles</AnchorBtn><AnchorBtn href="#internship-challenge" variant="ghost">Try the challenge</AnchorBtn></>} />

      <section id="roles" className="band" aria-labelledby="roles-title"><div className="wrap">
        <SectionHead eyebrow="Open roles" title="Three roles, one standard: evidence before opinion." id="roles-title" lead="Each role works within V Pilot's operating model: clear scope, clear authority and a record of what was done. Role details, location and terms are confirmed in conversation." />
        <ul className="roles">
          {CAREER_ROLES.map((r, k) => (
            <li key={r.slug} className="role tilt reveal" data-tilt="4" style={{ "--i": k }}>
              <header><Tile icon={r.icon} /><div><p className="role__tag">{r.tag}</p><h3>{r.t}</h3></div></header>
              <p>{r.summary}</p>
              <p className="role__k">What you will do</p>
              <ul>{r.does.map((x) => (<li key={x}>{x}</li>))}</ul>
              <p className="role__k">What helps</p>
              <ul>{r.brings.map((x) => (<li key={x}>{x}</li>))}</ul>
              <Btn to={contactTo(`Careers: ${r.t}`)} size="sm">Apply for this role</Btn>
            </li>
          ))}
        </ul>
      </div></section>

      <section id="internship" className="band band--cloud" aria-labelledby="intern-title"><div className="wrap">
        <SectionHead eyebrow="Internship · 2 months" title={INTERNSHIP.title} id="intern-title" lead="A hands-on programme for people who can work through a testing puzzle and a Linux live volatile-memory investigation. Interns who complete it successfully are considered first when we form delivery teams. That is a priority, not a guarantee of employment." />
        <ul className="tracks">{INTERNSHIP.tracks.map((t, k) => (<li key={t.t} className="track tilt reveal" data-tilt="5" style={{ "--i": k }}><Tile icon={t.icon} /><h3>{t.t}</h3><p>{t.d}</p></li>))}</ul>
        <ol className="weeks">{INTERNSHIP.weeks.map(([w, t, d], k) => (<li key={w} className="week reveal" style={{ "--i": k }}><span>{w}</span><h3>{t}</h3><p>{d}</p></li>))}</ol>
      </div></section>

      <section id="internship-challenge" className="band band--navy challenge" aria-labelledby="chal-title"><div className="wrap">
        <SectionHead eyebrow="Internship challenge" title="Crack the puzzle. Earn the place." id="chal-title" lead="Challenge A suits the Application Security Governance track. Challenge B suits the Cloud Forensics track. Solve both for priority consideration. Each answer is checked in your browser against a hash, so there is nothing to look up. You have to work it out." />
        <PuzzleChallenge />
        <div className="challenge__rules reveal">
          <h3>Ground rules</h3>
          <ul>
            <li><Icon name="shieldcheck" size={16} />Everything here is fictional lab data. No real systems, customers or malware are involved.</li>
            <li><Icon name="shieldcheck" size={16} />Do not test, scan or attack V Pilot systems to find answers. Suspected vulnerabilities go through <Link to="/security-disclosure">Security Disclosure</Link>.</li>
            <li><Icon name="shieldcheck" size={16} />Use any tools you like. We care about your reasoning, so keep notes for your write-up.</li>
          </ul>
          <div className="challenge__cta"><Btn to={contactTo("Careers: Internship application")} variant="cyan">Apply with your answers and write-up</Btn></div>
        </div>
      </div></section>

      <section className="band" aria-labelledby="car-title"><div className="wrap split">
        <SectionHead eyebrow="Our approach" title="People. Process. Technology. Higher resilience." id="car-title" lead="We work to the same operating model we ask our customers to adopt: clear roles, clear outcomes and clear ownership." />
        <div className="prose__body reveal" style={{ "--i": 1 }}><p>Do not see your role? Send a short note on your background and the area you want to work in, and we will keep it on file.</p><p><Btn to={contactTo("Careers enquiry")} variant="outline">Register your interest</Btn></p></div>
      </div></section>
      <CtaBand title="Join a team that shows its work." lead="Apply for a role, or take on the challenge and tell us how you solved it." primary={["Apply now", contactTo("Careers enquiry")]} secondary={["Try the challenge", "/company/careers#internship-challenge"]} />
    </>
  );
}
