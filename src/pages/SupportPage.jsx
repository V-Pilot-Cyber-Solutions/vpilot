/* PAGE: Customer support (/support)
   Styles: styles/cards.css
   Content: - */
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/atoms";
import { Tile } from "../components/brand";

export function SupportPage() {
  return (
    <>
      <PageHero art="contours" compact crumbs={[["Customer support"]]} eyebrow="Support" title="Customer support." lead="Existing customers should use the support channel published in their agreement." />
      <section className="band" aria-labelledby="sup-title"><div className="wrap split"><SectionHead eyebrow="Before you write" title="Choose the right channel." id="sup-title" lead="A general contact form is not an incident reporting channel." />
        <ul className="points points--stack">{[["alert", "Active incident or urgent issue", "Use the escalation route named in your agreement. Do not send active incident evidence, credentials or regulated data through the website."], ["key", "PUDICA users", "Sign in on pudica.io for product access."], ["mail", "New enquiry", "Use the contact page to book a briefing or consultation."]].map(([ic, t, d], i) => (<li key={t} className="point reveal" style={{ "--i": i }}><Tile icon={ic} sm size={22} /><h3>{t}</h3><p>{d}</p></li>))}</ul></div></section>
    </>
  );
}
