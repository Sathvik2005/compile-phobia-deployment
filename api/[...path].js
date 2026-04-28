const app = require('../backend/server');

const stripApiPrefix = (url) => {
  const [pathname, query = ''] = url.split('?');
  let nextPath = pathname;

  if (pathname === '/api') {
    nextPath = '/';
  } else if (pathname.startsWith('/api/')) {
    nextPath = pathname.slice(4);
  }

  return query ? `${nextPath}?${query}` : nextPath;
};

module.exports = (req, res) => {
  req.url = stripApiPrefix(req.url);
  return app(req, res);
};

module.exports.default = module.exports;
