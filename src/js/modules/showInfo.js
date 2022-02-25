export default class ShowInfo {
    constructor(container, msg) {
        this.container = document.querySelector(container);
        this.message = document.querySelector(msg);
    }

    show() {
        this.container.addEventListener('click', () => {
            this.message.classList.toggle('msg');
            this.message.style.marginTop = '20px';
        });
    }
}