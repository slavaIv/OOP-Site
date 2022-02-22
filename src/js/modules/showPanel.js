export default class showPanel {
    constructor(container) {
        this.container = document.querySelector(container);
        try{this.slides = this.container.querySelectorAll('.officer__card-item');} catch(e) {};
        this.counter = 0;
    }

    hide() {
        try{
            this.slides.forEach((element, index, arr) => {
                if(index !== arr.length - 1) {
                    element.style.display = 'none';
                }
            });
        }
        catch(e){}
    }

    addPanel() {
        try{
            this.container.querySelector('.plus').addEventListener('click', () => {
                this.show(this.counter);
                this.counter ++;
            });
        }
        catch(e){}
    }

    show(number) {
        this.slides.forEach((element, index, arr) => {
            arr[number].style.display = 'flex';
            if(number === this.slides.length - 2) {
                arr[this.slides.length - 1].style.display = 'none';
            }
        });
    }

    render() {
        this.hide();
        this.addPanel();
    }
}