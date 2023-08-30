const mobileNav = document.querySelector('.mobile-nav');
const mobileNavList = document.querySelector('.mobile-nav-list');
const onClickMobileNav = () => {
    mobileNavList.classList.remove('hidden');
};
const getMobileNav = () => {
    mobileNav.addEventListener('click', onClickMobileNav);
}
export { getMobileNav };
