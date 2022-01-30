import HelloWorldBtn from './componentes/hello-world-button/hello-world';
import Heading from './componentes/heading/heading';
import _ from 'lodash';

const btn = new HelloWorldBtn();
const heading = new Heading();

btn.render();
heading.render(_.upperFirst('press me page'));


if (process.env.NODE_ENV === 'production') {
    console.log('production');
}
if (process.env.NODE_ENV === 'development') {
    console.log('development');
}