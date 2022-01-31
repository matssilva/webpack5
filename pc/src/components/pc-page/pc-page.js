import PcImage from '../pc-image/pc-image';
import Heading from '../heading/heading';
import _ from 'lodash';

class PcPage {
    render() {
        const pc = new PcImage();
        const heading = new Heading();

        pc.render();
        heading.render(_.upperFirst('pc image'));
    }
}

export default PcPage;