import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicScrollNavigator() {
    const { pathname, hash } = useLocation();

    // 1. Scroll to requested hash on load or navigation
    useEffect(() => {
        if (hash) {
            const targetId = hash.replace("#", "");
            const target = document.getElementById(targetId);
            if (target) {
                setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    // 2. Dynamically update URL hash when scrolling past sections
    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const newHash = `#${entry.target.id}`;
                    if (window.location.hash !== newHash) {
                        window.history.replaceState(null, "", `${pathname}${newHash}`);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: "-120px 0px -70% 0px",
            threshold: 0,
        });

        const sections = document.querySelectorAll("section[id], div[id$='-top']");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}