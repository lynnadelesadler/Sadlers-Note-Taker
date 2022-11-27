const router = require("express").Router();
//Requires test note
const notes = require("../db/db");
// const uuid  = require("uuid");
const { v4: uuidv4 } = require('uuid');
//Joins Paths
const path = require("path");
//reads and writes file
const fs = require("fs");


// GET request for ALL notes
router.get("/notes", (req, res) => {
      // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
    res.json(notes)
});

//function for saving notes, posts data to db.json file
router.post("/notes", (req, res) => {
//   const { title, text } = req.body;
// if (req.body) {
//   const newNote = {
//     title,
//     text,
//     note_id: uuidv4(),
//   };
//   var retrieveNotes = fs.readFile('./db/db.json');
//   JSON.parse(retrieveNotes);
//   // notes(newNote, './db/db.json'); 
//   retrieveNotes.push(newNote);
//   // writeToFile(newNote, retrieveNotes);
//   console.log(retrieveNotes);

// }
    let request = req.body;
    req.body.id = uuidv4();
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes));
      // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
})


module.exports = router;