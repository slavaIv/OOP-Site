export default class Slider{
    constructor(page, btns){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;


        this.hanson = document.querySelector('.hanson');
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
            // slide.style.opacity = '0';
        });

        if(this.slideIndex === 3) {
            this.hanson.style.opacity = '0';
            this.hanson.classList.add('animated');
            setTimeout(() => {
                this.hanson.style.opacity = '1';
                this.hanson.classList.add('slideInUp');
            }, 3000);
        }

        this.slides[this.slideIndex - 1].style.display = 'block';
        // this.slides[this.slideIndex - 1].classList.add('animated');
        // this.slides[this.slideIndex - 1].classList.add('slideInUp');

    }

    nextSlide(number) {
        this.showSlides(this.slideIndex += number);
    }


    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.nextSlide(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
    } 
}