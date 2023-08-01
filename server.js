const app = require("./app");
const env = require("./utils/config");
const logger = require("./utils/logger")

const { host, port } = env;

app.listen(port, logger.info(`🚀 listening to requests on ${host}:${port}`));
