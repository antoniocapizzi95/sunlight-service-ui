import localConfig from '../config.local';
import prodConfig from '../config.production';


let config = localConfig;
if (process.env.NODE_ENV === 'production') {
  config = prodConfig;
}

export default config;