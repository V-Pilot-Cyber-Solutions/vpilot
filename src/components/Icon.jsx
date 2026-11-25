

/* ==========================================================================
   ICONS, EMBLEMS, FRAMEWORK MARKS
   ========================================================================== */
const ICONS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />, external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  chevron: <path d="m6 9 6 6 6-6" />, up: <path d="m6 15 6-6 6 6" />, menu: <path d="M4 7h16M4 12h16M4 17h16" />, close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />, clock: (<><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>), open: (<><circle cx="12" cy="12" r="8.5" /><path d="M8.5 12h7" /></>),
  dot: <circle cx="12" cy="12" r="3" fill="currentColor" />, printer: (<><path d="M7 9V3.5h10V9" /><rect x="4" y="9" width="16" height="8" rx="2" /><path d="M7 14h10v6.5H7z" /></>),
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  database: (<><ellipse cx="12" cy="5.5" rx="7" ry="3" /><path d="M5 5.5v13c0 1.7 3.1 3 7 3s7-1.3 7-3v-13M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></>),
  flask: <path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3M7.5 15h9" />,
  shield: <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z" />, shieldcheck: (<><path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>),
  gate: (<><path d="M12 2.5 21.5 12 12 21.5 2.5 12z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>), chart: <path d="M4 20h16M6.5 20v-6M12 20V6M17.5 20v-9" />,
  gear: (<><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="6.6" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" /></>),
  users: (<><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M17.5 14.2c2.3.3 4 2.2 4 4.8" /></>),
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></>), alert: (<><path d="M12 3.5 2.5 20h19z" /><path d="M12 10v4.5M12 17.5v.01" /></>),
  restore: (<><path d="M4 12a8 8 0 1 0 2.6-5.9L4 8.5" /><path d="M4 4v4.5h4.5M12 8v4.5l3 1.8" /></>), key: (<><circle cx="8" cy="12" r="3.5" /><path d="M11.5 12H21M17 12v3M20 12v2.5" /></>),
  laptop: (<><rect x="5" y="5" width="14" height="10" rx="1.5" /><path d="M3 19h18" /></>), browser: (<><rect x="3" y="4.5" width="18" height="15" rx="2" /><path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" /></>),
  headset: (<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19c0 1.5-2 2.5-5 2.5" /></>),
  building: <path d="M4 21V5l8-2v18M12 8l8 2v11M3 21h18M8 9h.01M8 13h.01M8 17h.01M16 14h.01M16 18h.01" />, lock: (<><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></>),
  layers: (<><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></>), code: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  eye: (<><path d="M2 12s3.7-6.5 10-6.5S22 12 22 12s-3.7 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="2.8" /></>), mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>),
  clipboard: (<><rect x="6" y="4.5" width="12" height="16.5" rx="2" /><path d="M9 4.5h6v2H9zM9.5 12h5M9.5 16h5" /></>), cloud: <path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z" />,
  refresh: <path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" />, sliders: (<><path d="M4 7h10M18 7h2M4 12h4M12 12h8M4 17h12M20 17h0" /><circle cx="16" cy="7" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="17" r="2" /></>),
  nodes: (<><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="18" r="2.2" /><circle cx="19" cy="18" r="2.2" /><path d="M11 7l-5 9M13 7l5 9M7.2 18h9.6" /></>),
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" />, pin: (<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></>),
};
export const Icon = ({ name, size = 18, className }) => (<svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{ICONS[name] || null}</svg>);
