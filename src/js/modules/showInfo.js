export default class ShowInfo {
    constructor(container) {
        this.container = document.querySelectorAll(container);
    }

    show() {
        this.container.forEach(btn => btn.addEventListener('click', () => {
            const message = btn.nextElementSibling;
            message.classList.toggle('msg');
            message.style.marginTop = '20px';
        }));
    }
}