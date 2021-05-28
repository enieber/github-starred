const fastify = require("fastify");
const githubRouters = require("./github/routers");

function build(opts = { logger: true }) {
  const app = fastify(opts);

  githubRouters.forEach((route, index) => {
    app.route(route);
  });

  return app;
}

module.exports = build;
