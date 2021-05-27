const fastify = require("fastify")({ logger: true });

const githubRouters = require("./github/routers");

githubRouters.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
