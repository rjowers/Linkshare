const Comments= require("../models").comments;


module.exports = {
  create (req, res) {
    Comments.create({
      comment: req.body.comment,
    })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },

  findComment (req, res) {
  Comments.findById(req.params.id)
  .then(comments => res.status(200).send(comments))
  .catch(error => res.status(400).send(error));
},
};
