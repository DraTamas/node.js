const db = require("../config/db");

const TermekModel = {

  getAll: (callback) => {
    db.query("SELECT * FROM termekek", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM termekek WHERE id = ?", [id], callback);
  },

  create: (termek, callback) => {
    db.query("INSERT INTO termekek SET ?", termek, callback);
  },

  update: (id, termek, callback) => {
    db.query("UPDATE termekek SET ? WHERE id = ?", [termek, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM termekek WHERE id = ?", [id], callback);
  }

};

module.exports = TermekModel;