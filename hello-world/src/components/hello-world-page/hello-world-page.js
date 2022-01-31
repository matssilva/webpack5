import HelloWorldBtn from '../hello-world-button/hello-world';
import Heading from '../heading/heading';
import _ from 'lodash';

class HelloWorldPage {
    render() {
        const btn = new HelloWorldBtn();
        const heading = new Heading();

        btn.render();
        heading.render(_.upperFirst('press me page'));
    }
}


export default HelloWorldPage;