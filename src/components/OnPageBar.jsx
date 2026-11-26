import "../styles/pudica.css";
import { useEffect, useState } from "react";
import { Link, useRouter } from "../lib/router";

export function OnPageBar({ items }) {
  const { path } = useRouter();
  const [active, setActive] = useState(items[0][0]);
  useEffect(() => {
    const els = items.map(([id]) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver((entries) => {
      const v = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (v) setActive(v.target.id);
    }, { rootMargin: "-22% 0px -62% 0px", threshold: 0 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="onpage" aria-label="On this page">
      <div className="wrap onpage__in">
        <span className="onpage__k">On this page</span>
        <ul>{items.map(([id, label]) => (<li key={id}><Link to={`${path}#${id}`} className={active === id ? "is-active" : ""} aria-current={active === id ? "location" : undefined}>{label}</Link></li>))}</ul>
      </div>
    </nav>
  );
}
