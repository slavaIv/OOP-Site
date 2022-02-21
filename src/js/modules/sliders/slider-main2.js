import { setInterval } from "core-js";
import Slider from "./slider"


export default class MainSlider2 extends Slider {
    constructor(page, next, prev, activeClass, animate) {
        super(page, next, prev, activeClass, animate);

    }

    showSlides() {
        [...this.slides].forEach(slide => {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.classList.add(this.activeClass);
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);
        
        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextClick() {
        if(this.slides[1].tagName === 'BUTTON') {
            this.page.appendChild(this.slides[0]);
            this.page.appendChild(this.slides[0]);
        }
        this.page.appendChild(this.slides[0]);
        this.showSlides();
    }

    toggle() {
        this.next.addEventListener('click', () => {
            this.nextClick();
        });

        this.prev.addEventListener('click', () => {
            let active = (this.slides.length - 1);
            if(this.slides[this.slides.length - 1].tagName === 'BUTTON') {
                this.page.insertBefore(this.slides[active], this.slides[0]);
                this.page.insertBefore(this.slides[active], this.slides[0]);
            }
            this.page.insertBefore(this.slides[active], this.slides[0]);
            this.showSlides();
        });
    }

    render() {
        this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        if(this.autoplay) {
            setInterval(() => {
                this.nextClick();
            }, 5000);
        }

        this.toggle();
        this.showSlides();
    } 
}