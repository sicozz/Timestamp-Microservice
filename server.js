var express = require('express');
//const timestamp = require("./api/timestamp.router.js")
var cors = require('cors');
var dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8000;
var app = express();

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.json())

app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
//app.use("/api", timestamp)
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.use("*", (req, res) => {
    res.status(400).json({ error: "Not found" })
})

var listener = app.listen(port, () => {
  console.log('listening on port ' + listener.address().port);
});
