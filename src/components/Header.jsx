import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";
import UniversalMegaMenu from "./UniversalMegaMenu.jsx";
import "./vpilot-enterprise-header.css";

const navItems = [
    { key: "company", label: "Company", menu: true },
    { key: "platform", label: "Platform", menu: true },
    { key: "solutions", label: "Solutions", menu: true },
    { key: "services", label: "Services", menu: true },
    { key: "frameworks", label: "Frameworks", menu: true },
    { key: "resources", label: "Resources", menu: true },
];

const menuConfigs = {
    company: {
        eyebrow: "Company",
        title: "One Accountable Cybersecurity Operating Model",
        description: "V Pilot connects security leadership, specialist operations, validation, execution, and evidence through shared responsibility.",
        mainLink: "/company",
        mainLinkLabel: "Explore V Pilot",
        groups: [
            { title: "Company Overview", links: [["About V Pilot", "/company"], ["Purpose, Vision & Mission", "/company"], ["Our Story", "/company"], ["Leadership", "/company"]] },
            { title: "Why V Pilot", links: [["Our Difference", "/company"], ["Security Assurance", "/company"], ["Operating Principles", "/company"], ["Shared Responsibility", "/company"]] },
            { title: "5Pilot Operations", links: [["5Pilot Overview", "/company"], ["Compass Pilot", "/company"], ["Custodian Pilot", "/company"], ["Vigil Pilot", "/company"], ["ART Pilot", "/company"]] }
        ],
        featured: {
            visual: <img src="/assets/vpilot-shield-orbit-premium-v2.svg" alt="" />,
            eyebrow: "SECURITY ASSURANCE",
            title: "Built for Accountable Security Operations",
            description: "Governed responsibility, validated execution, trusted recovery, and evidence by design.",
            link: "/company",
            linkLabel: "Explore Security Assurance"
        }
    },
    platform: {
        eyebrow: "PUDICA PLATFORM",
        title: "One Operational System. Connected Security Outcomes.",
        description: "PUDICA unifies context, workflow, authority, automation, monitoring, recovery, compliance, and evidence.",
        mainLink: "/platform",
        mainLinkLabel: "Explore Platform",
        groups: [
            { title: "Platform Modules", links: [["NativeTrust Workspace", "/platform/nativetrust-workspace"], ["Autonomous Remediation", "/platform/autonomous-remediation"], ["Integrated SecOps", "/platform/integrated-security-operations"], ["Autonomous Resilience", "/platform/autonomous-resilience"]] },
            { title: "Platform Modules", links: [["Application Security", "/platform/application-security-governance"], ["GRC & Compliance", "/platform/grc-compliance"]] },
            { title: "Shared Operations", links: [["Asset Graph", "/platform/asset-graph"], ["Service Operations Hub", "/platform/service-operations-hub"], ["Risk & Control Register", "/platform/risk-control-register"], ["Evidence Vault", "/platform/evidence-vault"]] }
        ],
        featured: {
            visual: <img src="/assets/pudica-platform-orbit-shell-final.svg" alt="" />,
            eyebrow: "PUDICA PLATFORM",
            title: "One Platform. One Trusted Operating Record.",
            description: "Govern risk, workflows, approvals, response, recovery, compliance, and evidence.",
            link: "/platform",
            linkLabel: "Explore Platform Capabilities"
        }
    },
    solutions: {
        eyebrow: "ENTERPRISE SECURITY SOLUTIONS",
        title: "Connected Solutions for Real Business Risk",
        description: "Protect transformation, operate continuously, govern risk, respond decisively, and restore trusted operations.",
        mainLink: "/solutions",
        mainLinkLabel: "Explore All Solutions",
        groups: [
            { title: "Transform Securely", links: [["Business Transformation", "/solutions/secure-business-transformation"], ["NativeTrust Workspace", "/solutions/nativetrust-workspace"]] },
            { title: "Operate Securely", links: [["Integrated SecOps", "/solutions/integrated-security-operations"], ["Enterprise Risk", "/solutions/enterprise-risk-management"]] },
            { title: "Respond & Recover", links: [["Autonomous Incident Response", "/solutions/autonomous-incident-response"], ["Cyber Resilience", "/solutions/cyber-resilience-recovery"]] }
        ],
        featured: {
            visual: <img src="/assets/pudica-platform-orbit-shell-final.svg" alt="" />,
            eyebrow: "PUDICA SOLUTIONS",
            title: "One Platform. Connected Security Outcomes.",
            description: "Six integrated solution families share one asset model, workflow, risk register, and assurance record.",
            link: "/solutions",
            linkLabel: "Explore PUDICA Solutions"
        }
    },
    services: {
        eyebrow: "MANAGED CYBERSECURITY SERVICES",
        title: "Operate Security Continuously. Prove Every Outcome.",
        description: "Engage a focused activity, a managed domain, an Integrated Fleet, or Complete 5Pilot Operations.",
        mainLink: "/services",
        mainLinkLabel: "Explore All Services",
        groups: [
            { title: "Governance & Assurance", links: [["CISO as a Service", "/services/ciso-as-a-service"], ["ISO/IEC 27001 Readiness", "/services/iso-27001-certification-readiness"]] },
            { title: "Identity & Endpoint", links: [["Managed IAM", "/services/managed-iam"], ["Zero-Trust Endpoint Operations", "/services/zero-trust-endpoint-operations"]] },
            { title: "Exposure & Remediation", links: [["Vulnerability Remediation", "/services/managed-vulnerability-remediation"], ["ARC Remediation", "/services/arc-remediation"]] }
        ],
        featured: {
            visual: <img src="/assets/vpilot-shield-orbit-premium-v2.svg" alt="" />,
            eyebrow: "5PILOT OPERATIONS",
            title: "Specialist Teams. One Integrated Operation.",
            description: "Compass governs. Custodian administers. Vigil observes. ART validates. Phoenix responds.",
            link: "/company/5pilot-operations",
            linkLabel: "Meet the 5Pilot Teams"
        }
    },
    frameworks: {
        eyebrow: "V PILOT FRAMEWORKS",
        title: "Structure Security Operations. Prove Every Outcome.",
        description: "Apply repeatable frameworks for threat-informed analysis, independent validation, governed execution, and continuous assurance.",
        mainLink: "/frameworks",
        mainLinkLabel: "Explore Frameworks",
        groups: [
            { title: "Operating Frameworks", links: [["ProdSecOps", "/frameworks/prodsecops"], ["ProdSecApps", "/frameworks/prodsecapps"]] },
            { title: "Intelligence & Proving", links: [["5D Threat Intelligence", "/frameworks/5d-threat-intelligence"], ["SecLabs", "/frameworks/seclabs"]] },
            { title: "Governance", links: [["Shared Responsibility", "/frameworks/shared-responsibility"], ["Evidence by Design", "/frameworks/evidence-by-design"]] }
        ],
        featured: {
            visual: <img src="/assets/vpilot-approved-framework-compass.svg" alt="" />,
            eyebrow: "PRODSECOPS FRAMEWORK",
            title: "Protect What Runs the Business",
            description: "Connect business context, trusted state, threat intelligence, proving, authority, and recovery.",
            link: "/frameworks/prodsecops",
            linkLabel: "Explore ProdSecOps"
        }
    },
    resources: {
        eyebrow: "V PILOT RESOURCES",
        title: "Knowledge Designed for Operational Use",
        description: "Research, frameworks, technical guidance and practical tools for executive, operational, and technical audiences.",
        mainLink: "/resources",
        mainLinkLabel: "Explore the Resource Center",
        groups: [
            { title: "Insights & Research", links: [["Latest Insights", "/resources/insights"], ["Security Advisories", "/resources/security-advisories"]] },
            { title: "Guides & Frameworks", links: [["Framework Guides", "/resources/framework-guides"], ["Technical Guides", "/resources/technical-guides"]] },
            { title: "Documentation", links: [["PUDICA Documentation", "/docs/pudica"], ["Service Documentation", "/docs/services"]] }
        ],
        featured: {
            visual: <img src="/assets/pudica-platform-orbit-shell-final.svg" alt="" />,
            eyebrow: "FEATURED RESOURCE",
            title: "PUDICA Platform Overview",
            description: "One platform. Connected operations. Discover the integrated operational control plane.",
            link: "/contact",
            linkLabel: "Download Guide"
        }
    }
};

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();

    const closeAll = () => {
        setActiveMenu(null);
        setMobileOpen(false);
    };

    useEffect(() => closeAll(), [location.pathname]);

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") closeAll();
        };
        const onPointer = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onPointer);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("pointerdown", onPointer);
        };
    }, []);

    const toggleMenu = (key) => {
        setActiveMenu((current) => current === key ? null : key);
    };

    return (
        <header ref={headerRef} className="vph-header">
            <div className="vph-utility">
                <div className="vph-shell vph-utility-inner">
                    <nav aria-label="Utility navigation">
                        <Link to="/support">Customer Support</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
            </div>

            <div className="vph-primary">
                <div className="vph-shell vph-primary-inner">
                    <Link className="vph-logo" to="/" aria-label="V Pilot home" onClick={closeAll}>
                        <ApprovedVPilotBrand compact />
                    </Link>

                    <nav className={`vph-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
                        {navItems.map((item) => item.menu ? (
                            <button
                                key={item.key}
                                type="button"
                                className={activeMenu === item.key ? "is-active" : ""}
                                aria-expanded={activeMenu === item.key}
                                aria-controls={`vph-menu-${item.key}`}
                                onClick={() => toggleMenu(item.key)}
                            >
                                {item.label}<ChevronDown size={14} />
                            </button>
                        ) : (
                            <NavLink key={item.key} to={item.to} onClick={closeAll}>{item.label}</NavLink>
                        ))}

                        <div className="vph-mobile-actions">
                            <Link to="/support">Customer Support</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                            <Link className="vph-mobile-pudica" to="/platform">Explore PUDICA</Link>
                            <Link className="vph-mobile-briefing" to="/contact?intent=executive-briefing">Schedule Executive Briefing</Link>
                        </div>
                    </nav>

                    <div className="vph-actions">
                        <Link className="vph-pudica" to="/platform">Explore PUDICA</Link>
                        <Link className="vph-briefing" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight size={16} /></Link>
                    </div>

                    <button className="vph-menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
                </div>
            </div>

            {activeMenu && (
                <div className="vpm-mega-wrap" id={`vph-menu-${activeMenu}`}>
                    <UniversalMegaMenu
                        config={menuConfigs[activeMenu]}
                        onClose={closeAll}
                    />
                </div>
            )}
        </header>
    );
}