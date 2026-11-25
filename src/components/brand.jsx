import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "./Icon";
import { FW } from "../data/platform";
import { useInView, useReducedMotion, useTabVisible } from "../hooks/index";
import { asset } from "../lib/config";

const EMBLEM_FILE = { vpilot: "vpilot-emblem.png", pudica: "pudica-emblem.png" };
export function Emblem({ kind = "vpilot", size = 28, className = "" }) {
  return <img className={`emb emb--${kind} ${className}`} src={asset(EMBLEM_FILE[kind])} alt="" width={Math.round(size * (kind === "vpilot" ? 0.868 : 1.06))} height={size} aria-hidden="true" decoding="async" />;
}
/* ProdSecOps / ProdSecApps: one infinity-loop lifecycle mark, two colour themes. */
const LOOP = "M180,90 C215,35 300,35 300,90 C300,145 215,145 180,90 C145,35 60,35 60,90 C60,145 145,145 180,90 Z";
const LOOP_NODES = [[253, 49], [300, 90], [253, 131], [107, 49], [60, 90], [107, 131]];
const LOOP_LABELS = [[253, 30, "middle"], [318, 94, "start"], [253, 156, "middle"], [107, 30, "middle"], [42, 94, "end"], [107, 156, "middle"]];
export function FrameworkMark({ kind = "ops", size = 240, labels = false, className = "", title }) {
  const t = FW[kind];
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const ref = useRef(null);
  const inView = useInView(ref);
  const tab = useTabVisible();
  const reduced = useReducedMotion();
  const on = inView && tab && !reduced;
  useEffect(() => { const s = ref.current; if (!s || !s.pauseAnimations) return; if (on) s.unpauseAnimations(); else s.pauseAnimations(); }, [on]);
  const vb = labels ? "-34 0 428 196" : "40 24 280 124";
  const ratio = labels ? 196 / 428 : 124 / 280;
  return (
    <svg ref={ref} className={`fmark fmark--${kind} ${labels ? "fmark--lab" : ""} ${className}`} data-motion={on ? "on" : "off"} viewBox={vb} width={size} height={Math.round(size * ratio)} role="img" aria-label={title || `${t.short} lifecycle mark`}>
      <defs>
        <linearGradient id={`g${uid}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={t.m1} /><stop offset="1" stopColor={t.m2} /></linearGradient>
        <filter id={`f${uid}`} x="-20%" y="-30%" width="140%" height="160%"><feGaussianBlur stdDeviation="3.2" /></filter>
        <path id={`p${uid}`} d={LOOP} />
      </defs>
      <g>
        <path d={LOOP} fill="none" stroke={t.m1} strokeWidth="12" opacity=".35" filter={`url(#f${uid})`} />
        {[5, 4, 3, 2, 1].map((n) => (<path key={n} d={LOOP} fill="none" stroke={t.m1} strokeWidth="9" strokeLinejoin="round" opacity={0.18 + (5 - n) * 0.1} transform={`translate(${n * 1.6} ${n * 2})`} style={{ filter: "brightness(.55)" }} />))}
        <path d={LOOP} fill="none" stroke={`url(#g${uid})`} strokeWidth="9" strokeLinejoin="round" />
        <path d={LOOP} fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.6" transform="translate(-.6 -1.6)" />
        <path className="fmark__flow" d={LOOP} pathLength="100" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 91" />
        {LOOP_NODES.map(([x, y], k) => (<g key={k} className="fmark__node" style={{ "--k": k }}><circle cx={x} cy={y} r="6.5" fill="#fff" opacity=".95" /><circle cx={x} cy={y} r="3.6" fill={`url(#g${uid})`} /></g>))}
        {[0, 1].map((o) => (<circle key={o} r="3.6" fill="#fff" opacity=".95"><animateMotion dur={`${7 + o * 3}s`} begin={`${-o * 3.5}s`} repeatCount="indefinite"><mpath href={`#p${uid}`} /></animateMotion></circle>))}
      </g>
      {labels && LOOP_LABELS.map(([x, y, a], k) => (<text key={k} className="fmark__word" x={x} y={y} textAnchor={a} style={{ "--k": k }}>{t.words[k]}</text>))}
      {labels && <text className="fmark__name" x="180" y="190" textAnchor="middle" fill={t.m1}>{t.name}</text>}
    </svg>
  );
}
export function Tile({ icon, emblem, mark, size = 26, sm, dark }) {
  const kind = emblem ? "emb" : mark ? "mark" : "";
  return (
    <span className={`ico-badge ${sm ? "ico-badge--sm" : ""} ${dark ? "ico-badge--dark" : ""} ${kind ? `ico-badge--${kind}` : ""}`}>
      {emblem ? <Emblem kind={emblem} size={sm ? 28 : 38} /> : mark ? <FrameworkMark kind={mark} size={sm ? 40 : 54} /> : <Icon name={icon} size={size} />}
    </span>
  );
}
/* 3D emblem: stacked layers give thickness; it sways in perspective, rings orbit, and it leans to the pointer. */
export function Emblem3D({ kind = "vpilot", size = 280, label, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, "60px");
  const tab = useTabVisible();
  const reduced = useReducedMotion();
  const on = inView && tab && !reduced;
  const src = asset(EMBLEM_FILE[kind]);
  return (
    <div ref={ref} className={`e3d e3d--${kind} ${className}`} data-motion={on ? "on" : "off"} data-tilt="10" style={{ "--s": `${size}px` }} role="img" aria-label={label || (kind === "pudica" ? "PUDICA emblem" : "V Pilot emblem")}>
      <span className="e3d__floor" aria-hidden="true" /><span className="e3d__glow" aria-hidden="true" />
      <div className="e3d__lean" aria-hidden="true">
        <div className="e3d__stage">
          <span className="e3d__ring e3d__ring--a" /><span className="e3d__ring e3d__ring--b" />
          {[6, 5, 4, 3, 2, 1].map((n) => (<img key={n} className="e3d__layer" src={src} alt="" style={{ "--z": `${-n * 5}px`, "--b": 0.35 + (6 - n) * 0.06 }} decoding="async" />))}
          <img className="e3d__face" src={src} alt="" decoding="async" />
          <span className="e3d__orb e3d__orb--a" /><span className="e3d__orb e3d__orb--b" />
        </div>
      </div>
    </div>
  );
}
export function BrandLogo({ reduced, width, height, loading, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return (<span className="wordmark" role="img" aria-label="V Pilot Cyber Solutions LLP"><b>V Pilot</b><small>Cyber Solutions LLP</small></span>);
  return <img className={className} src={reduced ? asset("vpilot-logo-static.png") : asset("vpilot-logo-animated.svg")} alt="V Pilot Cyber Solutions LLP" width={width} height={height} loading={loading} decoding="async" onError={() => setFailed(true)} />;
}
