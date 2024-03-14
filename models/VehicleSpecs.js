import mongoose from "mongoose";

const VehicleSpecSchema = new mongoose.Schema({
  name: String,
  fuel: Array,
  description: String,
  price: String,
  horsepower: String,
  bannerImage: String,
  bigDesc: String,
  ctaImage1: String,
  ctaImage2: String,
  exteriorImage: String,
  interiorImage: String,
  smallDesc: String,
  modelImage: String,
  engine: String,
  performance: String,
  weight: String,
});

export const VehicleSpecModel = mongoose.model("carspecs", VehicleSpecSchema);
