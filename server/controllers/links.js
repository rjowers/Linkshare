const Links= require("../models").links;


module.exports = {
  create (req, res) {
    Links.create({
      title: req.body.title,
      link: req.body.link,
    })
      .then(links => res.status(201).send(links))
      .catch(error => res.status(400).send(error));
  },

  findLinks (req, res) {
        Links.findAll({
            order: [ ['createdAt', 'DESC'] ]
        })
            .then(links => res.status(201).send(links))
            .catch(error => res.status(400).send(error));
    },
};
