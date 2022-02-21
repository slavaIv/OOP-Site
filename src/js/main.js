import MainSlider from "./modules/sliders/slider-main"
import MainSlider2 from "./modules/sliders/slider-main2";
import Video from "./modules/video"
import showPanel from "./modules/showPanel"


window.addEventListener('DOMContentLoaded', () => {

    const panel = new showPanel('.officerold');
    panel.render();

    const panel2 = new showPanel('.officernew');
    panel2.render();

    const slider = new MainSlider({page: '.page', btns: '.next'});
    slider.render();

    const slider2 = new MainSlider2({
        page: '.showup__content-slider', 
        next: '.showup__next', 
        prev: '.showup__prev', 
        activeClass: 'card-active', 
        animate: true, 
        autoplay: false
    });

    slider2.render();

    const slider3 = new MainSlider2({
        page: '.modules__content-slider', 
        next: '.modules__info-btns .slick-next', 
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true, 
        autoplay: true
    });

    slider3.render();

    const slider4 = new MainSlider2({
        page: '.feed__slider', 
        next: '.feed__slider .slick-next', 
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
        animate: false, 
        autoplay: false
    });

    slider4.render();

    const video = new Video(".showup .play", '.overlay');
    
    video.init();
})