const UserController = require("../controllers/users");
const LinkController = require("../controllers/links");
const CommentController = require("../controllers/comments");

module.exports = (app) => {
  app.post('/users', UserController.create);
  app.post('/links', LinkController.create);
  app.post('/comments', CommentController.create);
};
