import PcImage from '../pc-image/pc-image';
import Heading from '../heading/heading';
import _ from 'lodash';

class PcPage {
    render() {
        const pc = new PcImage();
        const heading = new Heading();

        pc.render();
        heading.render(_.upperFirst('pc image'));

        import('ImageCaptionApp/ImageCaption').then(module => {
            const ImageCaption = module.default;
            const imageCaption = new ImageCaption();
            imageCaption.render('Matheus');
        });
    }
}

export default PcPage;