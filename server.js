const express = require("express");
const bodyParser = require("body-parser");
const db = require("diskdb");
const app = express();
app.use(bodyParser.json());
const ins = db.connect("./librarydb", ["links"]);

app.get("/api/:what", function(req, res) {
	res.json(db.links.find({ [req.params.what]: true }));
});

app.post("/api/add", function(req, res) {
	res.json(db.links.save(req.body));
});

const port = 4000;
app.listen(port);
console.log("magic happens on port ", port)