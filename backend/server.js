import data from "./data.js";
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";
import coachRouter from "./routes/coachRoutes.js";


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
app.use('/api/seed', seedRouter);


// app.get('/api/coaches', (req, res) => {
//     res.send(data.coaches)
// });

app.use('/api/coaches', coachRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});