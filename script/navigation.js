const mobileNav = document.querySelector('.mobile-nav');
const mobileBurgerNav = mobileNav.querySelector('.burger-nav--js');
const mobileNavContainer = mobileNav.querySelector('.mobile-nav-container');
const mobileCloseNav = mobileNav.querySelector('.close-nav--js');
const onClickCloseNav = () => {
    mobileNavContainer.classList.add('hidden');
    mobileCloseNav.removeEventListener('click', onClickCloseNav);
}
const onClickMobileNav = () => {
    mobileNavContainer.classList.toggle('hidden');
    mobileCloseNav.addEventListener('click', onClickCloseNav);
};
const getMobileNav = () => {
    mobileBurgerNav.addEventListener('click', onClickMobileNav);
}
export { getMobileNav };
