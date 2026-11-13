import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import "./vpilot-premium-megamenu.css";

export default function UniversalMegaMenu({ config, onClose }) {
    if (!config) return null;

    return (
        <section className="vpmm-universal" aria-label={`${config.title} navigation`}>
            <div className="vpmm-universal__intro">
                <span>{config.eyebrow}</span>
                <h2>{config.title}</h2>
                <p>{config.description}</p>
                <Link className="vpmm-universal__primary" to={config.mainLink} onClick={onClose}>
                    {config.mainLinkLabel} <ArrowRight />
                </Link>
            </div>

            <div className="vpmm-universal__groups">
                {config.groups.map((group) => (
                    <section key={group.title}>
                        {group.to ? (
                            <Link className="vpmm-universal__group-title" to={group.to} onClick={onClose}>
                                {group.title} <ChevronRight />
                            </Link>
                        ) : (
                            <h3 className="vpmm-universal__group-title">{group.title}</h3>
                        )}

                        <div className="vpmm-universal__links">
                            {group.links.map(([label, to]) => (
                                <Link className="vpmm-universal__item" key={label} to={to} onClick={onClose}>
                                    <span>{label}</span> <ArrowRight />
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {config.featured && (
                <aside className="vpmm-universal__featured">
                    <div className="vpmm-universal__visual" aria-hidden="true">
                        {config.featured.visual}
                    </div>
                    <span>{config.featured.eyebrow}</span>
                    <h3>{config.featured.title}</h3>
                    <p>{config.featured.description}</p>
                    <Link className="vpmm-universal__featured-link" to={config.featured.link} onClick={onClose}>
                        {config.featured.linkLabel} <ArrowRight />
                    </Link>
                </aside>
            )}
        </section>
    );
}