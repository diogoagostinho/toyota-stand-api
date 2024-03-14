import mongoose from "mongoose";

const VehiclesSchema = new mongoose.Schema({
  name: String,
  image: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: Number,
  link: String,
  nameId: String,
});

export const VehiclesModel = mongoose.model("allvehicles", VehiclesSchema);
