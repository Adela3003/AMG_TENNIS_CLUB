import data from "./data.js";
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";
import coachRouter from "./routes/coachRoutes.js";
import userRouter from "./routes/userRoutes.js";


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then( ()=> {
     console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/seed', seedRouter);

// app.get('/api/coaches', (req, res) => {
//     res.send(data.coaches)
// });

app.use('/api/coaches', coachRouter);

app.use('/login', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});