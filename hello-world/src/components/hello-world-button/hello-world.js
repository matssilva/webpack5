import './styles.scss';

class HelloWorldButton {
    btnText = 'Press me'

    render() {
        const btn = document.createElement('button');
        btn.innerHTML = this.btnText;
        btn.classList.add('hello-world-btn');
        const body = document.querySelector('body');
        btn.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'You press me';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        body.appendChild(btn);
    }
}
export default HelloWorldButton;