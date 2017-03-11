const Comments= require("../models").comments;


module.exports = {
  create (req, res) {
    Comments.create({
      comment: req.body.comment,
    })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },
};
