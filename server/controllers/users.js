const Users = require("../models").users;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require ('../config/secret');

module.exports = {
   create (req, res) {
     var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    Users.create({
      username: req.body.username,
      // password: req.body.password,
      password: hashedPass,
      email: req.body.email,
      salt: salt

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   },

   login (req, res) {
        Users.findOne({
          where: {
            email: req.body.email
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
              console.log('hello from inside input')
              var token = jwt.encode({ id: user.id, username: user.username }, appSecrets.secret);
              console.log(token)

              var json = {
              user: user,
              token: token
              };
              return res.status(200).send(json);
            } else {
              return res.status(401).send({ message: "No such email or wrong password." });
            }
          })
          .catch(error => res.status(400).send(error));
       }
     };



// $2a$10$ao9P//kaFvNXfk8ujwLwU.sDxnwZcMMHQzoVAgjRjtNRVR8GSlpse
// $2a$10$ao9P//kaFvNXfk8ujwLwU
