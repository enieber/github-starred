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
                properties: {
                  id: { type: "number" },
                  name: { type: "string" },
                  description: { type: "string" },
                  url: { type: "string" },
                  language: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  },
];
module.exports = routes;
