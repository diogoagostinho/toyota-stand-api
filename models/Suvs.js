import mongoose from "mongoose";

const SuvSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: Number,
  link: String,
  nameId: String,
});

export const SuvModel = mongoose.model("suvs", SuvSchema);
