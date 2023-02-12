import express from "express";
import Coach from "../models/coachModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {
      await Coach.remove({});
      const createdCoaches = await Coach.insertMany(data.coaches);
      await User.remove({});
      const createdUsers = await User.insertMany(data.users);
      res.send({createdCoaches, createdUsers});
});

export default seedRouter;