import Pc from './pc.jpeg';
import './styles.scss';

class PcImage {
    render() {
        const img = document.createElement('img');
        img.alt = 'PC Image';
        img.width = 300;
        img.src = Pc;
        img.classList.add('pc-image-style')
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default PcImage;