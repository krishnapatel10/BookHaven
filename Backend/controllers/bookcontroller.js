import books from "../models/booksmodel.js";

let booksController = {
  async getallbook(req, res) {
    try {
      let data = await books.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async getbookbyid(req, res) {
    try {
      let data = await books.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "book not found.." });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async createbooks(req, res) {
    try {
      let data = new books({
        title: req.body.title,
        authors: req.body.authors,
        categories: req.body.categories,
        thumbnail: req.body.thumbnail,
        description: req.body.description,
        published_year: req.body.published_year,
      });

      let newbooks = await data.save();
      res.status(201).json(newbooks);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async updatebook(req, res) {
    try {
      let data = await books.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "book not found.." });
      }
      data.title = req.body.title || data.title;
      data.authors = req.body.authors || data.authors;
      data.categories = req.body.categories || data.categories;
      data.thumbnail = req.body.thumbnail || data.thumbnail;
      data.description = req.body.description || data.description;
      data.published_year = req.body.published_year || data.published_year;

      let newdata = await data.save();
      res.status(200).json(newdata);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async deletebook(req, res) {
    try {
      let data = await books.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "book not found.." });
      }
      await books.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "book deleted successfully.." });
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },

  //search controller
  async searchbook(req, res) {
    try {
      let data = await books.find({
        title: {
          $regex: req.query.title,
          $options: "i",
        },
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "internal server error",
        error,
      });
    }
  },

  //categories controller
  async categorybook(req, res) {
    try {
      let data = await books.find({
        categories: req.params.category,
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "internal server error",
        error,
      });
    }
  },
};
export default booksController;
