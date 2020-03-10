// const dotenv = require('dotenv');

// dotenv.config({ silent: true });
// module.exports = {
//   API_URL: process.env.REACT_APP_API_URL,
//   API_KEY: process.env.REACT_APP_API_KEY,
// };

interface CONFIG {
	API_URL: string;
	API_KEY: string;
}

const config: CONFIG = {
	API_URL: 'https://',
	API_KEY: '',
};

export default config;
