const Users = require("../models").users;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require ('../config/secret');

module.exports = {
   create (req, res) {
     var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    Users.create({
      user: req.body.user,
      // password: req.body.password,
      password: hashedPass,
      salt: salt

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   },

   login (req, res) {
        Users.findOne({
          where: {
            user: req.body.user
          }
        })
          .then(user => {
            if (!user) {
              return res.status(401).send({ message: "No such email or wrong password." });
            }

            console.log(user.salt);
            var input = bcrypt.hashSync(req.body.password, user.salt);
            console.log(`hashed input: ${input}, stored password: ${user.password}`);
            if (input === user.password) {
              var token = jwt.encode({ id: user.id, name: user.name }, appSecrets.jwtSecret);
              return res.status(200).send(token);
            } else {
              return res.status(401).send({ message: "No such email or wrong password." });
            }
          })
          .catch(error => res.status(400).send(error));
       }
     };



// $2a$10$ao9P//kaFvNXfk8ujwLwU.sDxnwZcMMHQzoVAgjRjtNRVR8GSlpse
// $2a$10$ao9P//kaFvNXfk8ujwLwU
