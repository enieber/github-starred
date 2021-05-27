const controller = require("./controller");

const routes = [
  {
    method: "GET",
    url: "/api/starred/:username",
    handler: controller.getAllRepositories,
  },
];
module.exports = routes;
