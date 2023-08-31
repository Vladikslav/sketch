import { getMobileNav } from "./navigation.js";
import { getContent } from "./content.js";
const onLoadDocumnet = () => {
    getMobileNav();
    getContent();
};
document.addEventListener('load', onLoadDocumnet());
