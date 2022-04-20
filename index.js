import ReactDom from 'react-dom';
import init from './src/init';

const run = () => {
  ReactDom.render(init(), document.getElementById('root'));
};

run();
