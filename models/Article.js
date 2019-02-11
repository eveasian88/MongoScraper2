var mongoose = require("mongoose");

// save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    link: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: {
        type: String,
        required: false,
        unique: false,
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;