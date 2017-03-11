const UserController = require("../controllers/users");
const LinkController = require("../controllers/links");

module.exports = (app) => {
  app.post('/users', UserController.create);
  app.post('/links', LinkController.create);
};
