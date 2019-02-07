var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

var PAGE_URL = "https://www.thoughtco.com/languages-4133094";

const noteController = {
    getAll: function (req, res) {
        db.Note.find({})
            .then(function (dbNote) {
                res.json(dbNote);
            }).catch(function (err) {
                res.json(err);
            })
    },
    getById: function (req, res) {
        const noteId = req.params.id;
        db.Note.find({ _id: noteId })
            .populate('notes')
            .then(function (dbNote) {
                res.json(dbNote);
            }).catch(function (err) {
                res.json(err);
            })
    },
    create: function (req, res) {
        db.Note.create(req.body)
            .then(function (dbNote) {
                res.json(dbNote)
            })
            .catch(function (err) {
                res.json(err);
            })
    },
    save: function (req, res) {
      const noteId = req.params.id
        db.Note.update(
          { _id: noteId },
          {
            $set: {
              saved: true
            }
          }
        )
        .then(function(dbNote){
          res.json(dbNote)
        })
        .catch(function(err){
          res.json(err);
        })
    },
    unsave: function (req, res) {
        console.log("unsave", unsave);
        const noteId = req.params.id
        console.log(noteId);
          db.Note.update(
            { _id: noteId },
            {
              $set: {
                saved: false
              }
            }
          )
          .then(function(dbNote){
            res.json(dbNote)
          })
          .catch(function(err){
            res.json(err);
          })
      },
    delete: function (req, res) {
        const noteId = req.params.id
        db.note.destroy(
            { _id: noteId },
            {
                $set: {
                    saved: true
                }
            }
        )
        .then(function(dbNote){
            res.json(dbNote)
        })
        .catch(function(err){
            res.json(err);
        })
    },
};

module.exports = noteController;