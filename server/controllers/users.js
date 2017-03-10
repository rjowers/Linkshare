const Users = require("../models").Users;

module.exports = {
   create (req, res) {
    Users.create({
      user: req.body.user,
      password: req.body.string,
    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   }
 };
