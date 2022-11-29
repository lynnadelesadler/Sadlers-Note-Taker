const router = require("express").Router();
//Requires test note
let notes = require("../db/db");
// const uuid  = require("uuid");
const { v4: uuidv4 } = require('uuid');
//Joins Paths
const path = require("path");
//reads and writes file
const fs = require("fs");


// GET request for retrieving ALL notes
router.get("/notes", (req, res) => {
      // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
    res.json(notes)
});

//function for saving notes, posts data to db.json file
router.post("/notes", (req, res) => {
    let request = req.body;
    // assign create id variable and generate using the uuid node.js
    req.body.id = uuidv4();
    // push new note to "../db/db"
    notes.push(request);
    // json the response to "../db/db"
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes));
      // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
  // Log the response body to the terminal
  console.info(req.body);
 

})
//function for deleting notes
// DELETE route that deletes any specific ID
router.delete("/notes/:id", (req, res) => {
  //identifies the id string in the request parameters
  const { id } = req.params;
  //The find() method returns the first element in the provided array that satisfies the provided testing function.
  let deletedNote = notes.find(notes => notes.id === id);
  if (deletedNote) {
    //The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
      notes = notes.filter(notes => notes.id != id)
      //end the response
      res.end()
      // status code 200 means all is OK
      res.status(200)
           // Log that a POST request was received
  console.info(`${req.method} request received to delete a note`);
  }
  //sends error if not working
  else {
      res.status(404)
  }
})

module.exports = router;