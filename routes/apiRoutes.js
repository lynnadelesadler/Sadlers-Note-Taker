const router = require("express").Router();
//Requires test note
const notes = require("../db/db");
//Joins Paths
const path = require("path");
//reads and writes file
const fs = require("fs");


router.get("/notes", (req, res) => {
    res.json(notes)
});
//function for saving notes, posts data to db.json file
router.post("/notes", (req, res) => {
    let request = req.body;
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
})


module.exports = router;