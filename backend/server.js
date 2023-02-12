import data from "./data.js";
import express from 'express';

const app = express();

app.get('/api/coaches', (req, res) => {
    res.send(data.coaches)
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});