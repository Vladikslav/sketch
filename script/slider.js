const getSlider = () => {
    $("#slider").owlCarousel({
        items: 1,
        dots: false
    });
    $("#slider2").owlCarousel({
        items: 1,
        dots: false
    });
    $("#slider3").owlCarousel({
        items: 1,
        dots: false
    });
};
export { getSlider };