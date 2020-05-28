const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('********************');
    console.info(message);
    console.info('********************');
}


export default {
    port: env.port || 8080
};

// import config, { nodeEnv, logStars } from './config';

logStars("hello message");

// console.log(config, nodeEnv);