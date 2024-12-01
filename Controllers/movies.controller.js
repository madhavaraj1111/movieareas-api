import Movie from "../models/movies.model.js";

export const MoviesRead = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ messaege: error.message });
  }
};

export const MovieDetail = async (req, res) => {
  try {
    const movieFind = await Movie.findOne({ _id: req.params.id });
    res.status(200).json(movieFind);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const MoviesCreate = async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      desc: req.body.desc,
    });
    newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const MoviesUpdate = async (req, res) => {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      { new: true }
    );

    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(500).json({ message: "Error while updating" });
  }
};

export const MoviesDelete = async (req, res) => {
  try {
    const deleteMovie = await Movie.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deleteMovie);
  } catch (error) {
    res.status(500).json({ message: "Error while deleting" });
  }
};
