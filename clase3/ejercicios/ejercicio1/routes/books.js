const models = require("../model");

exports.list = (req, res) => {
    models.book
        .getAll()
        .then(books => res.json(books))
        .catch(err => res.status(500).json({ err }));
};

exports.get = (req, res) => {
    models.book
        .getById(req.params.id)
        // hasta no llamar a res.json la petición queda abierta
        // hasta que llamo a res.send o res.json, si no lo hago
        // devuelve timeout
        .then(book => res.json(book))
        .catch(err => res.status(500).json({ err }));
};

exports.create = (req, res) => {
    res.json(req.body);
};

exports.search = (req, res) => {
    models.book
        .search(req.params.keyword)
        .then(books => res.json(books))
        .catch(err => res.status(500).json({ err }));
};
