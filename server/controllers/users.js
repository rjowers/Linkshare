const Users = require("../models").users;

module.exports = {
   create (req, res) {
    Users.create({
      user: req.body.user,
      password: req.body.password,
      

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   }
 };
