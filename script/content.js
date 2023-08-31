const getContent = () => {
    if (window.innerWidth <= 1200) {
        const advt = document.querySelector('.header-bottom-advt');
        const headerTitle = document.querySelector('.header-title > div');
        headerTitle.append(advt);
    }
}
export { getContent };
