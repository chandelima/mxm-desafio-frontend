const PROXY_CONFIG = [
  {
    context: ['/proxy'],
    target: 'https://h9146.mxmwebmanager.com.br',
    pathRewrite: {'^/proxy' : ''}
  }
];

module.exports = PROXY_CONFIG;
