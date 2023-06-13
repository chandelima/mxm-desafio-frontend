const PROXY_CONFIG = [
  {
    context: ['/proxy'],
    target: 'https://h9146.mxmwebmanager.com.br',
    pathRewrite: {'^/proxy' : ''},
    secure: true
  }
];

module.exports = PROXY_CONFIG;
