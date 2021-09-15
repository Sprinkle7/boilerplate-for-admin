const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    apiPath: 'http://192.168.100.37:3000/api',
    domain: 'domainName',
  },
  production: {
    apiPath: 'http://95.179.140.4:4000',
    domain: 'domainName',
  },
};
module.exports = config[env];
