import PcImage from './components/pc-image/pc-image';
import Heading from './components/heading/heading';
import _ from 'lodash';

const pc = new PcImage();
const heading = new Heading();

pc.render();
heading.render(_.upperFirst('pc image'));


import('PressMeApp/PressMeApp').then(module => {
    const PressMeAppModule = module.default;
    const pressMeApp = new PressMeAppModule();
    pressMeApp.render();
});