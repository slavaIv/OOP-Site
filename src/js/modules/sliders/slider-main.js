import Slider from "./slider"


export default class MainSlider extends Slider{
    constructor(page, btns, prevBtn) {
        super(page, btns);
        this.prev = document.querySelectorAll('.moduleapp .prev');
        this.hanson = document.querySelector('.hanson');
    }


    showSlides(number) {
        try{
            if(number > this.slides.length) {
                this.slideIndex = 1;
            }
            if(number < 1) {
                this.slideIndex = this.slides.length;
            }

            [...this.slides].forEach(slide => {
                slide.style.display = 'none';
            });

            try{
                if(this.slideIndex === 3) {
                    this.hanson.style.opacity = '0';
                    this.hanson.classList.add('animated');
                    setTimeout(() => {
                        this.hanson.style.opacity = '1';
                        this.hanson.classList.add('slideInUp');
                    }, 3000);
                }
            }
            catch(e){}

            this.slides[this.slideIndex - 1].style.display = 'block';
        }
        catch(e){}
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

        try{
            this.prev.forEach(prevBtn => {
                prevBtn.addEventListener('click', () => {
                    this.nextSlide(-1);
                });
            });
        }
        catch(e){}
    } 
}