const Users = require("../models").users;
const bcrypt = require('bcryptjs');

module.exports = {
   create (req, res) {
     var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    Users.create({
      user: req.body.user,
      password: req.body.password,
      salt: salt

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   }
 };
