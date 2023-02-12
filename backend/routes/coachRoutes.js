import express from "express";
import Coach from "../models/coachModel.js";

const coachRouter = express.Router();

coachRouter.get('/', async(req, res) => {
    const coaches = await Coach.find();
    res.send(coaches);
});

export default coachRouter;
