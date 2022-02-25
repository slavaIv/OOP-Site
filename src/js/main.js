import MainSlider from "./modules/sliders/slider-main";
import MainSlider2 from "./modules/sliders/slider-main2";
import Video from "./modules/video";
import showPanel from "./modules/showPanel";
import Form from "./modules/forms";
import ShowInfo from "./modules/showInfo";


window.addEventListener('DOMContentLoaded', () => {

    const panel = new showPanel('.officerold');
    panel.render();

    const panel2 = new showPanel('.officernew');
    panel2.render();

    const panel3 = new ShowInfo('.module__info-show', '.msg');
    panel3.show();

    const slider = new MainSlider({page: '.page', btns: '.page .next'});
    slider.render();



    const slider2 = new MainSlider2({
        page: '.showup__content-slider', 
        next: '.showup__next', 
        prev: '.showup__prev', 
        activeClass: 'card-active', 
        animate: true, 
        autoplay: false,
        arrowBlank: true
    });

    slider2.render();

    const slider3 = new MainSlider2({
        page: '.modules__content-slider', 
        next: '.modules__info-btns .slick-next', 
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true, 
        autoplay: true,
        arrowBlank: true
    });

    slider3.render();

    const slider4 = new MainSlider2({
        page: '.feed__slider', 
        next: '.feed__slider .slick-next', 
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
        animate: false, 
        autoplay: false,
        arrowBlank: true
    });

    slider4.render();


    const sliderModules = new MainSlider({page: '.moduleapp', btns: '.moduleapp .next'});
    sliderModules.render();

    const video = new Video(".showup .play", '.overlay');
    video.init();

    const video2 = new Video(".module__video-item .play", '.overlay');
    video2.init();

    new Form('.form').init();

})