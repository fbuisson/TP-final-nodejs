import { Types } from "mongoose";
import { IGenre } from "../types/IGenre";
import Genre from "../schema/genres";

export const getAllGenres = () => {
  try {
    return Genre.find().exec();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getGenreById = async (id: Types.ObjectId) => {
  try {
    const genre = await Genre.findById(id).exec();
    return genre;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addGenre = async (genre: IGenre) => {
  try {
    return Genre.create(genre);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateGenre = (id: Types.ObjectId, genre: IGenre) => {
  try {
    return Genre.updateOne({ _id: id }, genre).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteGenre = (id: Types.ObjectId) => {
  try {
    return Genre.deleteOne(id).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};
