export default class Slider{
    constructor({page = null, btns = null, next = null, prev = null, activeClass = '', animate = false, autoplay = false, arrowBlank = false} = {}) {
        this.page = document.querySelector(page);
        try{this.slides = this.page.children;} catch(e) {};
        // this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev= document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.arrowBlank = arrowBlank;


        this.slideIndex = 1;
    }
}