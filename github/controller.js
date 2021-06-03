const services = require("./services");

exports.getAllRepositories = async (request, reply) => {
  try {
    const username = request.params.username;
    if (!username) {
      return reply
        .code(400)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ status: false, error: `username is required` });
    }
    const starred = await services.star(username);
    const dataSend = { status: true, starred };
    return reply.code(200).send(dataSend);
  } catch (err) {
    return reply.code(500).send({ status: false, error: err.message });
  }
};
