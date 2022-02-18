export default class Slider{
    constructor(page, btns){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
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
        });
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    nextSlide(number) {
        this.showSlides(this.slideIndex += number);
    }


    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.nextSlide(1);
            });
        });
        this.showSlides[this.slideIndex];
    } 
}