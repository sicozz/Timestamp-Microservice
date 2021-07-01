import express from 'express';
import timestamp from "./api/timestamp.route.js";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use("/api", timestamp);

app.use("*", (req, res) => {
    res.status(400).json({ error: "Not found" })
})

var listener = app.listen(port, () => {
  console.log('listening on port ' + listener.address().port);
});
