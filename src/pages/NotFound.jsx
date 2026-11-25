/* PAGE: 404
   Styles: styles/shared.css
   Content: - */
import { PageHero } from "../components/PageHero";
import { Btn } from "../components/atoms";

export function NotFound() { return (<PageHero art="contours" compact eyebrow="404" title="We could not find that page." lead="The page may have moved. Start from the home page or choose a service." actions={<><Btn to="/" variant="cyan">Go to the home page</Btn><Btn to="/services" variant="ghost">Browse services</Btn></>} />); }
