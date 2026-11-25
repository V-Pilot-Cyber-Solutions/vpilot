import { Icon } from "./Icon";
import { Link } from "../lib/router";

/* ==========================================================================
   ATOMS
   ========================================================================== */
const TONE_ICON = { verified: "check", pending: "clock", open: "open", neutral: "dot" };
export const Status = ({ tone, children }) => (<span className={`status status--${tone}`}><Icon name={TONE_ICON[tone]} size={14} />{children}</span>);
export const Eyebrow = ({ n, children, className = "" }) => (<p className={`eyebrow ${className}`}>{n && <span className="eyebrow__n">{n}</span>}{children}</p>);
export const SectionHead = ({ n, eyebrow, title, lead, id, center }) => (
  <header className={`section-head reveal ${center ? "is-center" : ""}`}><Eyebrow n={n}>{eyebrow}</Eyebrow><h2 id={id}>{title}</h2>{lead && <p className="lead">{lead}</p>}</header>
);
export const Btn = ({ to, variant = "solid", size, icon = "arrow", className = "", children, ...rest }) => {
  const ext = /^https?:/.test(to);
  return (<Link to={to} className={`btn btn--${variant} ${size ? `btn--${size}` : ""} ${className}`} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}><span>{children}</span>{icon && <Icon name={ext ? "external" : icon} size={16} />}</Link>);
};
export const AnchorBtn = ({ href, variant = "cyan", children }) => (<a className={`btn btn--${variant}`} href={href}><span>{children}</span><Icon name="arrow" size={16} /></a>);
