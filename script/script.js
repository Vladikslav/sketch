import { getMobileNav } from "./navigation.js";

const onLoadDocumnet = () => {
    getMobileNav();
};
document.addEventListener('load', onLoadDocumnet());
