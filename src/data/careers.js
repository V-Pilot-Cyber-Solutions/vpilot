

export const CAREER_ROLES = [
  { slug: "cloud-forensics-analyst", icon: "eye", t: "Cloud Forensics Analyst", tag: "Investigations", summary: "Preserve and analyse authorised cloud, identity and endpoint evidence, and state clearly what the evidence supports and where its limits are.",
    does: ["Collect and preserve authorised evidence with provenance and handling records", "Reconstruct timelines from cloud audit, identity and system logs", "Analyse Linux and Windows volatile-memory images and disk artefacts", "Write findings that separate observations, supported conclusions and limitations"],
    brings: ["Hands-on Linux and cloud audit-log analysis", "Familiarity with memory-forensics tooling such as Volatility", "Clear written reporting"] },
  { slug: "devsecops-engineer", icon: "code", t: "DevSecOps Engineer", tag: "Engineering", summary: "Turn application security requirements into pipeline checks, release criteria and owned remediation for the teams that build and run software.",
    does: ["Build and maintain security gates in CI/CD pipelines", "Integrate static, dynamic and dependency testing and route findings to owners", "Support release-decision records for Application Security Governance", "Automate evidence capture for approvals and exceptions"],
    brings: ["Practical CI/CD and container experience", "Scripting in Python, Bash or similar", "Working knowledge of application security testing"] },
  { slug: "pentest-engineer", icon: "search", t: "Pentest Engineer", tag: "Assurance", summary: "Plan and carry out authorised security testing of applications and cloud environments, and document findings so engineering teams can act on them.",
    does: ["Scope and run authorised web, API and cloud tests within agreed rules of engagement", "Validate findings and explain exploitability and business impact", "Write reproducible reports with remediation guidance", "Retest fixes and record closure"],
    brings: ["Web, API and cloud testing experience", "Strong written reporting", "Commitment to authorised, scoped testing only"] },
];
export const INTERNSHIP = {
  title: "Cloud Forensics & Application Security Governance Internship", length: "2 months",
  tracks: [
    { icon: "eye", t: "Cloud Forensics Investigations", d: "Evidence handling, timeline reconstruction, Linux live volatile-memory analysis and defensible reporting." },
    { icon: "code", t: "Application Security Governance training", d: "Security requirements, release criteria, testing evidence and owned engineering remediation." },
  ],
  weeks: [["Weeks 1-2", "Foundations", "Evidence handling, lab setup, testing methodology and how V Pilot scopes work."], ["Weeks 3-4", "Guided practice", "Supervised exercises on cloud logs, memory images and application test results."], ["Weeks 5-6", "Applied work", "Work a realistic scenario end to end in a lab environment."], ["Weeks 7-8", "Report and review", "Write findings, present decisions and receive a structured review."]],
};
export const CAREER_INTERESTS = ["Careers: Cloud Forensics Analyst", "Careers: DevSecOps Engineer", "Careers: Pentest Engineer", "Careers: Internship application"];
/* ==========================================================================
   CAREERS: open roles, internship and the hands-on challenge
   The challenge answers are never stored in this file, only salted SHA-256 hashes.
   All data in the puzzles is fictional and lab-only.
   ========================================================================== */
export const PUZZLE_SALT = "vpilot-careers-2026|";
export const PUZZLES = [
  { id: "A", icon: "code", t: "Challenge A: The release gate", track: "Application Security Governance track", hash: "8dd92e60fe9c0bc3db88b770fae59cb822a7679f214b38bdc07f8d6e604b89c3",
    story: "A release candidate is about to go through its gate. While testing the staging API you capture the response below. Something in the headers is not documentation. Work out what the release gate is really checking.",
    blocks: [{ title: "Captured staging response (fictional lab data)", lines: ["HTTP/1.1 200 OK", "Content-Type: application/json", "X-Build: 2026.11.3-rc2", "X-Debug-Trace: bGF5ZXItMjogWVhCd2NtOTJaWElnYm05MFpUb2dkR2hsSUdOdlpHVnVZVzFsSUdseklIUm9aU0IzYjNKa0lHOXVJSFJvWlNCemFHVmxkQ0IzYUc5elpTQlRTRUV0TVNCbGNYVmhiSE1nZEdobElHZGhkR1VnZG1Gc2RXVXVJRUZ1YzNkbGNpQm1iM0p0WVhRNklHTnZaR1Z1WVcxbExUeG1hWEp6ZENCemFYZ2dhR1Y0SUdOb1lYSmhZM1JsY25NZ2IyWWdVMGhCTFRJMU5paGpiMlJsYm1GdFpTaytMaUJUYUdWbGREb2dhR0Z5WW05eUlHWmhiR052YmlCamIySmhiSFFnZDJsc2JHOTNJRzVwYldKMWN5QnhkV0Z5ZEhvZ2JHRnVkR1Z5YmlCbGJXSmxjZz09", "", "{\"status\":\"ok\",\"release\":\"candidate\",\"gate\":\"e9d6da3056775d3c958f6e949b015041f8b0e8ad\"}"] }],
    tasks: ["Decode the X-Debug-Trace header. It has been encoded more than once.", "Use the decoded note to find the codename on the sheet that matches the gate hash.", "Compute whatever the note asks for and submit the answer in the format it gives."],
    hints: ["Not every header is documentation. Decode what looks like noise.", "After the first decode you will see another encoded block. Decode that too.", "sha1sum and sha256sum (or any hashing tool) will do the rest. Compare, do not guess."] },
  { id: "B", icon: "eye", t: "Challenge B: Memory lane", track: "Cloud Forensics track", hash: "e3f3f7cda0df72a0b4d4b3662933397104504eaee2fa5b6906910aae719661a5",
    story: "A cloud VM was snapshotted live (LiME) after unusual outbound traffic. You have excerpts from a Volatility 3 session. One process does not belong. Find it, read what its environment is hiding and recover the answer.",
    blocks: [
      { title: "linux.pslist (excerpt)", lines: ["$ vol -f vm-snap.lime linux.pslist.PsList", "  PID    PPID   UID    COMM", "  1      0      0      systemd", "  2      0      0      kthreadd", "  311    1      0      systemd-journal", "  402    1      0      sshd", "  655    1      33     nginx", "  656    655    33     nginx", "  702    1      0      cron", "  913    402    1000   bash", "  1288   1      0      containerd", "  2210   913    1000   vim", "  3105   2      0      kworker/0:1H", "  4417   1      33     kworker/u8:3", "  4430   4417   33     sh"] },
      { title: "linux.psaux (excerpt)", lines: ["$ vol -f vm-snap.lime linux.psaux.PsAux", "  PID    ARGS", "  655    nginx: master process /usr/sbin/nginx -g daemon on;", "  913    -bash", "  2210   vim /home/ops/notes.txt", "  3105   (no userland command line: kernel thread)", "  4417   /dev/shm/.k --cfg /tmp/.cfg", "  4430   sh -c id; uname -a"] },
      { title: "linux.envars (selected processes)", lines: ["$ vol -f vm-snap.lime linux.envars.Envars --pid 655 913 2210 4417", "  PID   COMM           KEY=VALUE", "  655   nginx          PIDFILE=/run/nginx.pid", "  913   bash           HISTFILE=/home/ops/.bash_history", "  2210  vim            NOTES=dmltIGJhY2t1cCBub3Rlcw==", "  4417  kworker/u8:3   HOME=/var/www", "  4417  kworker/u8:3   SESS=c2hhMTpjYTcwOTE4ZTUyNDZiYzkxYjQ3ZWNiNGVjNTg1MjkzYzU5M2M2NDEyO2tleT03ZjNh"] },
      { title: "Page-cache recovery: /tmp/wl.txt", lines: ["falcon cobalt harbor ember lantern willow nimbus quartz"] },
    ],
    tasks: ["Identify the process that does not belong and be ready to explain why.", "Decode what its environment holds. Not every encoded value is interesting.", "Recover the word behind the hash using the recovered wordlist.", "Submit the answer as pid-word-key, in lower case."],
    hints: ["Real kernel threads show PPID 2 and have no userland command line.", "Compare UID, PPID and the arguments of each suspicious entry.", "The environment value decodes to a hash and a key. The hash is SHA-1."] },
];
