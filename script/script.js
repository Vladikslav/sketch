import { getMobileNav } from "./navigation.js";
import { getContent } from "./content.js";
import { getSlider } from "./slider.js";
const onLoadDocumnet = () => {
    getMobileNav();
    getContent();
    getSlider();
};
document.addEventListener('load', onLoadDocumnet());
