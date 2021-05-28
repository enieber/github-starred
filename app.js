const fastify = require("fastify");

const plugins = require("./config/plugins");
const githubRouters = require("./github/routers");

function build(opts = { logger: true }) {
  const app = fastify(opts);
  plugins(app);

  githubRouters.forEach((route, index) => {
    app.route(route);
  });

  return app;
}

module.exports = build;
