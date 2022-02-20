import Slider from "./slider"


export default class MainSlider2 extends Slider {
    constructor(page, next, prev) {
        super(page, next, prev);

    }

    showSlides(number) {
        if(number > this.slides.length) {
            this.slideIndex = 1;
        }
        if(number < 1) {
            this.slideIndex = this.slides.length;
        }

        [...this.slides].forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('card-active');
            // slide.style.opacity = '0';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('card-active');
        // // this.slides[this.slideIndex - 1].classList.add('animated');
        // // this.slides[this.slideIndex - 1].classList.add('slideInUp');

    }

    nextSlide(number) {
        this.showSlides(this.slideIndex += number);
    }


    render() {
        this.next.addEventListener('click', () => {
            this.nextSlide(1);
        });

        this.prev.addEventListener('click', () => {
            this.nextSlide(-1);
        });

        this.showSlides(1);
    } 
}