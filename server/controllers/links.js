const Links= require("../models").links;


module.exports = {
  create (req, res) {
    Links.create({
      title: req.body.title,
      link: req.body.link,
    })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },
};
