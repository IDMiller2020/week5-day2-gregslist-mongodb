import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import CarSchema from "../models/Car"
import HouseSchema from "../models/House"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema)
  Houses = mongoose.model("house", HouseSchema)
}

export const dbContext = new DbContext();
