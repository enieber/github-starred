const controller = require("./controller");

const routes = [
  {
    method: "GET",
    url: "/api/starred/:username",
    handler: controller.getAllRepositories,
    schema: {
      params: {
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "username of gihub",
          },
        },
      },
      response: {
        400: {
          description: "fail request",
          type: "object",
          properties: {
            status: { type: "boolean" },
            message: { type: "string" },
          },
        },
        200: {
          description: "Successful response",
          type: "object",
          properties: {
            status: { type: "boolean" },
            starred: {
              type: "array",
              items: {
                type: "object",
              },
            },
          },
        },
      },
    },
  },
];
module.exports = routes;
