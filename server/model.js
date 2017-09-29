var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;

// db.collection.insert({title: 'Ali Sells Jersey House And Moves to Chicago', date: '1974-07-18T00:00:00Z', url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'});