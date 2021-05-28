require('dotenv').config();

const port = process.env.SERVER_PORT || 80

const server = require("./app")({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.listen(port, '0.0.0.0',(err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
