import mongoose from "mongoose";

const TruckSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: Number,
  link: String,
  nameId: String,
});

export const TruckModel = mongoose.model("trucks", TruckSchema);
