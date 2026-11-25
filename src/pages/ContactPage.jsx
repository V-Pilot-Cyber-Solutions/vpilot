/* PAGE: Contact (/contact)
   Styles: styles/contact.css
   Content: data/contact.js, data/navigation.js (INTERESTS) */
import "../styles/contact.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { AnchorBtn, Btn, SectionHead } from "../components/atoms";
import { Emblem3D, Tile } from "../components/brand";
import { CONTACT_BRING, CONTACT_PATHS, CONTACT_STEPS } from "../data/contact";
import { ENGAGEMENT_CHOICES, ENVIRONMENTS, INTERESTS } from "../data/navigation";
import { GRC } from "../data/services";
import { ADDRESS, CONTACT_EMAIL, FORM_ENDPOINT, MAP_LINK, MAP_SRC, PHONE, PHONE_HREF } from "../lib/config";
import { Link, contactTo, enc, useRouter } from "../lib/router";

/* ==========================================================================
   CONTACT FORM
   ========================================================================== */
function BriefingForm() {
  const { search } = useRouter();
  const wanted = useMemo(() => new URLSearchParams(search).get("interest") || "Executive briefing", [search]);
  const [interest, setInterest] = useState(wanted);
  const [form, setForm] = useState({ email: "", org: "", role: "", env: ENVIRONMENTS[ENVIRONMENTS.length - 1], model: ENGAGEMENT_CHOICES[0], priority: "" });
  const [state, setState] = useState("idle");
  const [errors, setErrors] = useState({});
  useEffect(() => setInterest(wanted), [wanted]);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const options = INTERESTS.includes(interest) ? INTERESTS : [interest, ...INTERESTS];
  const submit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid work email address.";
    if (!form.org.trim()) err.org = "Enter your organisation.";
    if (!form.role.trim()) err.role = "Enter your role.";
    if (!form.priority.trim()) err.priority = "Briefly describe the control gap, migration or recovery priority.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const payload = { ...form, interest };
    if (FORM_ENDPOINT) {
      try {
        setState("sending");
        const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
        setState(r.ok ? "sent" : "error");
      } catch { setState("error"); }
    } else {
      const body = enc(`Work email: ${payload.email}\nOrganisation: ${payload.org}\nRole: ${payload.role}\nArea of interest: ${payload.interest}\nEnvironment: ${payload.env}\nEngagement model: ${payload.model}\n\nBusiness priority:\n${payload.priority}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${enc("Enquiry: " + payload.interest)}&body=${body}`;
      setState("draft");
    }
  };
  if (state === "sent") return (<div className="brief__done" role="status"><Icon name="check" size={28} /><p>We received your request. We will use the details you provided to route it to the appropriate team.</p></div>);
  if (state === "draft") return (<div className="brief__done" role="status"><Icon name="mail" size={28} /><p>We opened an email draft addressed to {CONTACT_EMAIL}. Your request is not submitted until you send it from your email app. If no draft opened, write to {CONTACT_EMAIL} directly.</p></div>);
  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form__row"><label>Work email<input type="email" autoComplete="email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} />{errors.email && <em>{errors.email}</em>}</label><label>Organisation<input type="text" autoComplete="organization" value={form.org} onChange={set("org")} aria-invalid={!!errors.org} />{errors.org && <em>{errors.org}</em>}</label></div>
      <div className="form__row"><label>Role<input type="text" autoComplete="organization-title" value={form.role} onChange={set("role")} aria-invalid={!!errors.role} />{errors.role && <em>{errors.role}</em>}</label><label>Area of interest<select value={interest} onChange={(e) => setInterest(e.target.value)}>{options.map((i) => (<option key={i}>{i}</option>))}</select></label></div>
      <div className="form__row"><label>Your environment<select value={form.env} onChange={set("env")}>{ENVIRONMENTS.map((x) => (<option key={x}>{x}</option>))}</select></label><label>How would you like to work with us?<select value={form.model} onChange={set("model")}>{ENGAGEMENT_CHOICES.map((x) => (<option key={x}>{x}</option>))}</select></label></div>
      <label>Control gap, planned migration or recovery priority<textarea rows="4" value={form.priority} onChange={set("priority")} aria-invalid={!!errors.priority} placeholder="What would you like V Pilot to run, and what would your team still approve?" />{errors.priority && <em>{errors.priority}</em>}</label>
      {state === "error" && <p className="form__err" role="alert">We could not send your request. Please try again.</p>}
      <div className="form__foot"><button className="btn btn--solid" type="submit" disabled={state === "sending"}><span>{state === "sending" ? "Sending…" : "Prepare my briefing request"}</span><Icon name="arrow" size={16} /></button>
        <p className="hint">Privacy: we use these details only to respond to your request. <Link to="/privacy">Privacy information</Link>. Please do not upload sensitive files or send active incident evidence.</p></div>
    </form>
  );
}
function MapCard() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="mapc">
      {loaded ? (<iframe title="V Pilot headquarters map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={MAP_SRC} />) : (
        <div className="mapc__ph"><div className="mapc__grid" aria-hidden="true" /><span className="mapc__pin" aria-hidden="true"><Icon name="pin" size={34} /><i /></span>
          <div className="mapc__card"><b>PulseBay 64, Puducherry</b><span>Subbiah Salai, opposite Railway Station</span><div className="mapc__act"><button type="button" className="btn btn--solid btn--sm" onClick={() => setLoaded(true)}><span>Load interactive map</span><Icon name="arrow" size={14} /></button><a className="btn btn--outline btn--sm" href={MAP_LINK} target="_blank" rel="noopener noreferrer"><span>Open in Google Maps</span><Icon name="external" size={14} /></a></div><small>The map loads from Google only when you choose to load it.</small></div></div>
      )}
    </div>
  );
}
export function ContactPage() {
  return (
    <>
      <PageHero art="contours" crumbs={[["Contact"]]} eyebrow="Contact V Pilot" title="Start with the security outcome your business needs." lead="Connect with V Pilot to discuss accountable managed cybersecurity operations, PUDICA Autonomy, NativeTrust Endpoint, GRC as a Service, service assurance or a defined operating gap."
        actions={<><AnchorBtn href="#briefing-form">Schedule an Executive Briefing</AnchorBtn><a className="btn btn--ghost" href={PHONE_HREF}><span>Call V Pilot</span><Icon name="phone" size={16} /></a></>}>
        <div className="glass glass--tag"><Emblem3D kind="vpilot" size={160} label="V Pilot emblem" /><p className="glass__v">We pilot the work. You keep the decisions.</p></div>
      </PageHero>
      <section className="band" aria-labelledby="route-title"><div className="wrap"><SectionHead eyebrow="Choose a conversation" title="Route your enquiry to the right team." id="route-title" lead="Choose the closest starting point. V Pilot will confirm scope, authority and the appropriate next step." />
        <ul className="cpaths">{CONTACT_PATHS.map(([t, d, key, ic], k) => (<li key={t} className="cpath tilt reveal" data-tilt="6" style={{ "--i": k }}><Tile icon={ic} /><h3>{t}</h3><p>{d}</p><Link className="textlink" to={`${contactTo(key)}#briefing-form`}>Start conversation <Icon name="arrow" size={15} /></Link></li>))}</ul></div></section>
      <section id="briefing-form" className="band band--cloud" aria-labelledby="contact-title"><div className="wrap brief">
        <div className="brief__copy reveal">
          <h2 id="contact-title">Tell us the business priority.</h2>
          <p>We use the details you provide to route your request to the appropriate team. Business enquiries are acknowledged during Indian business hours.</p>
          <ol className="nsteps--mini">{CONTACT_STEPS.map((s, k) => (<li key={s.t}><span>{k + 1}</span><div><b>{s.t}</b><p>{s.d}</p></div></li>))}</ol>
          <h3 className="brief__h">What to bring</h3><ul className="brief__bring">{CONTACT_BRING.map((b) => (<li key={b}><Icon name="check" size={16} />{b}</li>))}</ul>
        </div>
        <div className="reveal" style={{ "--i": 1 }}><BriefingForm /></div>
      </div></section>
      <section className="band" aria-labelledby="hq-title"><div className="wrap"><SectionHead eyebrow="Headquarters" title="V Pilot Cyber Solutions LLP" id="hq-title" />
        <div className="hq"><article className="hq__card tilt reveal" data-tilt="4">
          <div className="hq__row"><Icon name="pin" size={20} /><p>{ADDRESS.slice(1).map((l, k) => (<Fragment key={l}>{k > 0 && <br />}{l}</Fragment>))}</p></div>
          <div className="hq__row"><Icon name="mail" size={20} /><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
          <div className="hq__row"><Icon name="phone" size={20} /><a href={PHONE_HREF}>{PHONE}</a></div>
          <div className="hq__row"><Icon name="clock" size={20} /><p>Business enquiries are acknowledged during Indian business hours.</p></div>
          <div className="hq__links"><a className="textlink" href={MAP_LINK} target="_blank" rel="noopener noreferrer">Get directions <Icon name="external" size={14} /></a><Link className="textlink" to="/support">Customer support <Icon name="arrow" size={14} /></Link></div></article>
          <div className="reveal" style={{ "--i": 1 }}><MapCard /></div></div></div></section>
      <section className="vsp-trust" aria-labelledby="before-title"><div className="wrap vsp-trust__in"><div><p className="eyebrow">Before you send</p><h2 id="before-title">Keep sensitive details out of general enquiries.</h2><p>Do not submit passwords, secrets, vulnerability proof, customer data or regulated personal data through general email or this form. Use the Security Disclosure route for suspected vulnerabilities and the customer support route for contracted incidents.</p></div><div className="vsp-trust__btns"><Btn to="/security-disclosure" variant="cyan">Security Disclosure</Btn><Btn to="/support" variant="ghost">Customer Support</Btn></div></div></section>
    </>
  );
}
