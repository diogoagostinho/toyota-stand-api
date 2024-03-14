import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { CarModel } from "./models/Cars.js";
import { SuvModel } from "./models/Suvs.js";
import { AlternativeModel } from "./models/Alternatives.js";
import { TruckModel } from "./models/Trucks.js";
import { GrModel } from "./models/Grs.js";
import { VehiclesModel } from "./models/AllVehicles.js";
import { VehicleSpecModel } from "./models/VehicleSpecs.js";

export const handler = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const uri = process.env.MONGODB_CONNECTION;
  mongoose.connect(uri);

  app.get("/testar", (req, res) => {
    res.json("TESTE!");
  });

  // GET A-Z
  app.get("/vehicles/all", (req, res) => {
    VehiclesModel.find()
      .sort({ name: 1 })
      .then((vehicles) => res.json(vehicles))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/cars", (req, res) => {
    CarModel.find()
      .sort({ name: 1 })
      .then((cars) => res.json(cars))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/trucks", (req, res) => {
    TruckModel.find()
      .sort({ name: 1 })
      .then((trucks) => res.json(trucks))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/suvs", (req, res) => {
    SuvModel.find()
      .sort({ name: 1 })
      .then((suvs) => res.json(suvs))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/alternatives", (req, res) => {
    AlternativeModel.find()
      .sort({ name: 1 })
      .then((alternatives) => res.json(alternatives))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/grs", (req, res) => {
    GrModel.find()
      .sort({ name: 1 })
      .then((grs) => res.json(grs))
      .catch((err) => res.json(err));
  });

  // GET Highest Price
  app.get("/vehicles/all/highprice", (req, res) => {
    VehiclesModel.find()
      .sort({ price: -1 })
      .then((vehicles) => res.json(vehicles))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/cars/highprice", (req, res) => {
    CarModel.find()
      .sort({ price: -1 })
      .then((cars) => res.json(cars))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/trucks/highprice", (req, res) => {
    TruckModel.find()
      .sort({ price: -1 })
      .then((trucks) => res.json(trucks))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/suvs/highprice", (req, res) => {
    SuvModel.find()
      .sort({ price: -1 })
      .then((suvs) => res.json(suvs))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/alternatives/highprice", (req, res) => {
    AlternativeModel.find()
      .sort({ price: -1 })
      .then((alternatives) => res.json(alternatives))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/grs/highprice", (req, res) => {
    GrModel.find()
      .sort({ price: -1 })
      .then((grs) => res.json(grs))
      .catch((err) => res.json(err));
  });

  // GET Lowest Price
  app.get("/vehicles/all/lowprice", (req, res) => {
    VehiclesModel.find()
      .sort({ price: 1 })
      .then((vehicles) => res.json(vehicles))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/cars/lowprice", (req, res) => {
    CarModel.find()
      .sort({ price: 1 })
      .then((cars) => res.json(cars))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/trucks/lowprice", (req, res) => {
    TruckModel.find()
      .sort({ price: 1 })
      .then((trucks) => res.json(trucks))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/suvs/lowprice", (req, res) => {
    SuvModel.find()
      .sort({ price: 1 })
      .then((suvs) => res.json(suvs))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/alternatives/lowprice", (req, res) => {
    AlternativeModel.find()
      .sort({ price: 1 })
      .then((alternatives) => res.json(alternatives))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/grs/lowprice", (req, res) => {
    GrModel.find()
      .sort({ price: 1 })
      .then((grs) => res.json(grs))
      .catch((err) => res.json(err));
  });

  // GET Horsepower
  app.get("/vehicles/all/horsepower", (req, res) => {
    VehiclesModel.find()
      .sort({ horsepower: -1 })
      .then((vehicles) => res.json(vehicles))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/cars/horsepower", (req, res) => {
    CarModel.find()
      .sort({ horsepower: -1 })
      .then((cars) => res.json(cars))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/trucks/horsepower", (req, res) => {
    TruckModel.find()
      .sort({ horsepower: -1 })
      .then((trucks) => res.json(trucks))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/suvs/horsepower", (req, res) => {
    SuvModel.find()
      .sort({ horsepower: -1 })
      .then((suvs) => res.json(suvs))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/alternatives/horsepower", (req, res) => {
    AlternativeModel.find()
      .sort({ horsepower: -1 })
      .then((alternatives) => res.json(alternatives))
      .catch((err) => res.json(err));
  });
  app.get("/vehicles/grs/horsepower", (req, res) => {
    GrModel.find()
      .sort({ horsepower: -1 })
      .then((grs) => res.json(grs))
      .catch((err) => res.json(err));
  });

  app.get("/vehicles/:id", (req, res) => {
    const carId = req.params.id;
    VehicleSpecModel.find({ nameId: carId })
      .then((specs) => res.json(specs))
      .catch((err) => res.json(err));
  });

  app.listen(process.env.PORT || 5160, () => {
    console.log("Server running...");
  });
};

handler();
