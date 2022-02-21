export default class showPanel {
    constructor(container) {
        this.container = document.querySelector(container);
        this.slides = this.container.querySelectorAll('.officer__card-item');
        this.counter = 0;
    }

    hide() {
        this.slides.forEach((element, index, arr) => {
            if(index !== arr.length - 1) {
                element.style.display = 'none';
            }
        });
    }

    addPanel() {
        this.container.querySelector('.plus').addEventListener('click', () => {
            this.show(this.counter);
            this.counter ++;
        });
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