import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const jsxPath = path.join(root, "src", "pages", "FinalHomeNarrative.jsx");
const cssPath = path.join(root, "src", "pages", "vpilot-final-home.css");
const heroPath = path.join(root, "public", "assets", "vpilot-virtual-security-operations-hero.png");
const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
const backupRoot = path.join(process.env.USERPROFILE || root, "Documents", "V-Pilot-Source-Archive", `people-conversion-before-${stamp}`);

function fail(message) { throw new Error(message); }
function read(file) { if (!fs.existsSync(file)) fail(`Required file not found: ${file}`); return fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""); }
function write(file, text) { fs.writeFileSync(file, text.replace(/\r?\n/g, "\n"), "utf8"); }
function backup(file) { const target = path.join(backupRoot, path.relative(root, file)); fs.mkdirSync(path.dirname(target), { recursive: true }); fs.copyFileSync(file, target); }
function restore() { if (!fs.existsSync(backupRoot)) return; for (const entry of fs.readdirSync(backupRoot, { recursive: true })) { const from = path.join(backupRoot, entry); if (!fs.statSync(from).isFile()) continue; const to = path.join(root, entry); fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); } }

const replacement = `<section className="vpfh-people-premium" aria-labelledby="vpfh-people-title">
      <div className="vpfh-people-premium-top">
        <div className="vpfh-people-story">
          <span>OUR PEOPLE</span>
          <h2 id="vpfh-people-title">Expertise with Purpose.</h2>
          <p>Our people combine deep technical expertise, operational experience and a shared commitment to security assurance. The Virtual Pilot Operations Team works as a unified force to deliver measurable outcomes.</p>
          <Link to="/5pilot-operations">Meet the 5Pilot Teams <ArrowRight aria-hidden="true" /></Link>
        </div>

        <div className="vpfh-people-visual" aria-hidden="true">
          <div className="vpfh-people-manifesto"><span>DIFFERENT<br />EXPERTISE</span><b>ONE MISSION</b><small>A SAFER TOMORROW</small></div>
        </div>

        <div className="vpfh-global-presence">
          <span>OUR GLOBAL PRESENCE</span>
          <h2>Trusted Across Industries.</h2>
          <div className="vpfh-industry-icons">
            {industries.slice(0, 7).map((industry) => <div key={industry}><Building2 aria-hidden="true" /><b>{industry}</b></div>)}
          </div>
          <div className="vpfh-presence-proof">
            <article><strong>5</strong><span>Specialist<br />Pilot Teams</span></article>
            <article><strong>1</strong><span>Integrated<br />Platform</span></article>
            <article><strong>3</strong><span>Flexible<br />Engagement Models</span></article>
            <article><strong>24×7</strong><span>Operational<br />Readiness</span></article>
            <article><strong>∞</strong><span>Continuous<br />Improvement</span></article>
          </div>
        </div>
      </div>

      <div className="vpfh-conversion-premium">
        <div className="vpfh-conversion-message">
          <h2>A Security Partner That Stands Behind the Operation.</h2>
          <p>Let’s discuss how V Pilot can support your security priorities.</p>
        </div>
        <div className="vpfh-conversion-actions">
          <Link className="primary" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight aria-hidden="true" /></Link>
          <Link className="secondary" to="/contact">Contact Our Team</Link>
        </div>
        <div className="vpfh-conversion-principles"><span>STRONGER BUSINESSES</span><span>SAFER PEOPLE</span><span>MORE RESILIENT TOMORROW</span></div>
      </div>
    </section>`;

const css = String.raw`
/* V PILOT PEOPLE AND CONVERSION PREMIUM START */
.vpfh-people-premium{position:relative;overflow:hidden;color:#fff;background:#02152b;border-top:1px solid rgba(38,211,240,.35);border-bottom:1px solid rgba(38,211,240,.25)}
.vpfh-people-premium::after{position:absolute;right:-8%;bottom:-180px;left:-8%;height:330px;content:"";opacity:.72;background:repeating-radial-gradient(ellipse at 50% 100%,transparent 0 38px,rgba(27,181,247,.19) 39px 40px),linear-gradient(90deg,transparent 0 49.8%,rgba(24,192,244,.24) 50%,transparent 50.2%);transform:perspective(420px) rotateX(62deg);transform-origin:bottom;pointer-events:none}
.vpfh-people-premium-top{position:relative;z-index:2;display:grid;grid-template-columns:minmax(330px,1fr) minmax(360px,1fr) minmax(390px,1.15fr);min-height:310px}
.vpfh-people-premium-top>div{padding:34px clamp(30px,3.5vw,62px)}
.vpfh-people-story{display:flex;flex-direction:column;justify-content:center;background:linear-gradient(110deg,#03182f,rgba(3,35,65,.9))}
.vpfh-people-story>span,.vpfh-global-presence>span{color:#35d9f6;font-size:10px;font-weight:800;letter-spacing:.14em}
.vpfh-people-story h2,.vpfh-global-presence h2,.vpfh-conversion-message h2{margin:7px 0 12px;color:#fff;font-family:"Space Grotesk",Inter,sans-serif;letter-spacing:-.035em}.vpfh-people-story h2{font-size:clamp(1.9rem,2.5vw,2.8rem)}
.vpfh-people-story p{max-width:610px;margin:0;color:rgba(225,238,248,.86);font-size:12px;line-height:1.52}
.vpfh-people-story>a{display:flex;width:max-content;min-width:210px;min-height:46px;align-items:center;justify-content:center;gap:10px;margin-top:22px;padding:0 22px;border-radius:6px;color:#fff;background:linear-gradient(135deg,#0c91f3,#0871d1);box-shadow:0 12px 28px rgba(8,126,235,.25);font-size:12px;font-weight:800;text-decoration:none}
.vpfh-people-story>a svg{width:16px}
.vpfh-people-visual{position:relative;isolation:isolate;background-image:linear-gradient(90deg,rgba(3,24,47,.76),rgba(3,25,49,.15) 38%,rgba(3,25,49,.12) 66%,rgba(3,24,47,.78)),url("/assets/vpilot-virtual-security-operations-hero.png");background-position:center;background-size:cover;border-left:1px solid rgba(55,196,230,.23);border-right:1px solid rgba(55,196,230,.23)}
.vpfh-people-visual::after{position:absolute;inset:auto 0 0;height:48%;z-index:-1;content:"";background:linear-gradient(180deg,transparent,rgba(1,15,31,.92))}
.vpfh-people-manifesto{position:absolute;right:24px;top:62px;display:grid;gap:5px;padding-left:15px;border-left:1px solid #28d5ef;color:#d8edfa;font-size:9px;letter-spacing:.1em}.vpfh-people-manifesto b{color:#fff;font-size:10px}.vpfh-people-manifesto small{color:#8edbec;font-size:8px}
.vpfh-global-presence{background:linear-gradient(120deg,rgba(3,24,47,.96),rgba(4,46,82,.95))}.vpfh-global-presence h2{font-size:clamp(1.7rem,2.15vw,2.35rem)}
.vpfh-industry-icons{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-top:19px;padding-bottom:16px;border-bottom:1px solid rgba(44,202,234,.36)}
.vpfh-industry-icons div{display:grid;justify-items:center;text-align:center}.vpfh-industry-icons svg{width:21px;height:21px;color:#21d1ee}.vpfh-industry-icons b{margin-top:5px;color:#eaf6fc;font-size:7px;line-height:1.15}
.vpfh-presence-proof{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-top:15px}.vpfh-presence-proof article{text-align:center}.vpfh-presence-proof strong{display:block;color:#fff;font-size:21px;line-height:1}.vpfh-presence-proof span{display:block;margin-top:5px;color:#bcd3e3;font-size:7px;line-height:1.15}
.vpfh-conversion-premium{position:relative;z-index:3;display:grid;grid-template-columns:minmax(400px,1fr) auto minmax(210px,.45fr);gap:28px;align-items:center;min-height:118px;padding:23px max(40px,4vw);border-top:1px solid rgba(42,210,238,.42);background:linear-gradient(100deg,rgba(2,17,35,.98),rgba(4,52,91,.96) 58%,rgba(2,22,43,.98))}
.vpfh-conversion-message h2{margin:0 0 5px;font-size:clamp(1.55rem,2vw,2.15rem)}.vpfh-conversion-message p{margin:0;color:#bed4e4;font-size:11px}.vpfh-conversion-actions{display:flex;gap:10px}.vpfh-conversion-actions a{display:flex;min-height:44px;align-items:center;justify-content:center;gap:9px;padding:0 20px;border-radius:6px;color:#fff;font-size:11px;font-weight:750;text-decoration:none;white-space:nowrap}.vpfh-conversion-actions .primary{background:#087eeb}.vpfh-conversion-actions .secondary{border:1px solid #58c9ed;background:rgba(3,27,51,.65)}.vpfh-conversion-actions svg{width:15px}.vpfh-conversion-principles{display:grid;gap:4px;padding-left:20px;border-left:1px solid rgba(63,206,234,.38)}.vpfh-conversion-principles span{color:#51cde9;font-size:8px;letter-spacing:.12em}
/* Hide the superseded standalone conversion band after this combined section. */
.vpfh-people-premium + .vpfh-final{display:none!important}
@media(max-width:1150px){.vpfh-people-premium-top{grid-template-columns:1fr 1fr}.vpfh-global-presence{grid-column:1/-1}.vpfh-conversion-premium{grid-template-columns:1fr auto}.vpfh-conversion-principles{grid-column:1/-1;display:flex;gap:18px;padding-left:0;border-left:0}}
@media(max-width:720px){.vpfh-people-premium-top{grid-template-columns:1fr}.vpfh-global-presence{grid-column:auto}.vpfh-people-visual{min-height:300px}.vpfh-industry-icons{grid-template-columns:repeat(4,1fr);gap:14px}.vpfh-presence-proof{grid-template-columns:repeat(2,1fr);gap:15px}.vpfh-conversion-premium{grid-template-columns:1fr;padding:34px 24px}.vpfh-conversion-actions{display:grid}.vpfh-conversion-principles{display:grid}.vpfh-conversion-actions a{width:100%}}
/* V PILOT PEOPLE AND CONVERSION PREMIUM END */
`;

try {
  backup(jsxPath); backup(cssPath);
  let jsx = read(jsxPath);
  const peoplePattern = /<section className="vpfh-people">[\s\S]*?<\/section>/;
  if (!peoplePattern.test(jsx)) fail("The existing Expertise with Purpose section was not found.");
  jsx = jsx.replace(peoplePattern, replacement);
  write(jsxPath, jsx);

  let styles = read(cssPath);
  styles = styles.replace(/\/\* V PILOT PEOPLE AND CONVERSION PREMIUM START \*\/[\s\S]*?\/\* V PILOT PEOPLE AND CONVERSION PREMIUM END \*\//g, "");
  write(cssPath, `${styles.trimEnd()}\n${css}`);

  const updated = read(jsxPath);
  for (const token of ["vpfh-people-premium", "Expertise with Purpose.", "Trusted Across Industries.", "A Security Partner That Stands Behind the Operation.", "Schedule Executive Briefing"]) {
    if (!updated.includes(token)) fail(`Validation failed: ${token}`);
  }

  const build = spawnSync("cmd.exe", ["/d", "/s", "/c", "npm.cmd run build"], { cwd: root, stdio: "inherit", windowsHide: true });
  if (build.error) fail(`Build could not start: ${build.error.message}`);
  if (build.status !== 0) fail(`Production build exited with code ${build.status}.`);

  console.log("\nExpertise with Purpose and final conversion theme installed successfully.");
  console.log(`Backup: ${backupRoot}`);
} catch (error) {
  console.error(`\nPeople/conversion installation failed: ${error.message}`);
  console.error("Restoring previous homepage files...");
  restore();
  process.exit(1);
}
