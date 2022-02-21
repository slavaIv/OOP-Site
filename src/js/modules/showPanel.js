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
            
            if(this.counter >= this.slides.length - 1) {
                this.counter = 0;
            }
            this.counter ++;
        });
        

    }

    show(number) {
        this.slides.forEach((element, index, arr) => {
            if(arr[number].style.display === 'none') {
                arr[number].style.display = 'flex';
            }
        })
    }

    render() {
        this.hide();
        this.addPanel();
    }
}