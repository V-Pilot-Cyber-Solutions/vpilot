import { useRef } from "react";
import { useParallax } from "../hooks/index";
import { Link } from "../lib/router";
import { Home } from "../pages/HomePage";

export function PageHero({ crumbs = [], eyebrow, title, lead, actions, art = "contours", children, compact }) {
  const bg = useRef(null);
  useParallax(bg, 0.06);
  return (
    <section className={`phero phero--${art} ${compact ? "phero--compact" : ""}`} aria-labelledby="page-title">
      <div className="phero__bg" ref={bg} aria-hidden="true" /><div className="phero__shade" aria-hidden="true" />
      <div className="wrap phero__in">
        {crumbs.length > 0 && (<nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li>{crumbs.map(([l, t], i) => (<li key={l} aria-current={i === crumbs.length - 1 && !t ? "page" : undefined}>{t ? <Link to={t}>{l}</Link> : <span>{l}</span>}</li>))}</ol></nav>)}
        <div className="phero__grid">
          <div className="phero__copy">
            {eyebrow && <p className="phero__eyebrow">{eyebrow}</p>}
            <h1 id="page-title">{title}</h1>
            {lead && <div className="phero__lead">{lead}</div>}
            {actions && <div className="phero__cta">{actions}</div>}
          </div>
          {children && <div className="phero__aside">{children}</div>}
        </div>
      </div>
    </section>
  );
}
