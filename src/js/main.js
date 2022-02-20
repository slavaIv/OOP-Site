import MainSlider from "./modules/sliders/slider-main"
import MainSlider2 from "./modules/sliders/slider-main2";
import Video from "./modules/video"


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page', btns: '.next'});
    slider.render();

    const slider2 = new MainSlider2({page: '.showup__content-slider', next: '.showup__next', prev: '.showup__prev'});
    slider2.render();

    const video = new Video(".showup .play", '.overlay');
    video.init();
})