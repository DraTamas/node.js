const TermekModel = require("../models/TermekModel");

exports.getAllTermek = (req, res) => {
  TermekModel.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getTermekById = (req, res) => {
  const id = req.params.id;

  TermekModel.getById(id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createTermek = (req, res) => {
  const newTermek = req.body;

  TermekModel.create(newTermek, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Termék létrehozva!", id: result.insertId });
  });
};

exports.updateTermek = (req, res) => {
  const id = req.params.id;
  const updatedTermek = req.body;

  TermekModel.update(id, updatedTermek, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Termék frissítve!" });
  });
};

exports.deleteTermek = (req, res) => {
  const id = req.params.id;

  TermekModel.delete(id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Termék törölve!" });
  });
};
