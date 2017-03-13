const UserController = require("../controllers/users");
const LinkController = require("../controllers/links");
const CommentController = require("../controllers/comments");
const Middleware = require('../middleware/middleware');

module.exports = (app) => {
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);
  app.post('/links', Middleware.authenticate, LinkController.create);
  app.get('/links', LinkController.findLinks);
  app.post('/comments', Middleware.authenticate, CommentController.create);
  app.get('/comments/:id', CommentController.findComment);
};
