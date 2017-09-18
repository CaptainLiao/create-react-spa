import Loadable from 'react-loadable';
import Loading from './loading.js';

 let AsyncLoadable = function(component) {
  return Loadable({
    loader: () => component,
    loading: Loading,
    delay: 300
  })
}


export default AsyncLoadable;