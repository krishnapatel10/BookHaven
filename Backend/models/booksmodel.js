import mongoose, { mongo } from "mongoose";

let bookschema = new mongoose.Schema({
  title: {
    type: String,
  },
  authors: {
    type: String,
  },
  categories: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  description: {
    type: String,
  },
  published_year: {
    type: Number,
  },
  average_rating: {
    type: Number,
  },

  num_pages: {
    type: Number,
  },

  ratings_count: {
    type: Number,
  },
});


export default mongoose.model("books",bookschema)