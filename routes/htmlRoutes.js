const router = require("express").Router();
// defines variable for path to be used
const path = require("path");
// GET request route for  homepage index.html
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//  GET request route for page notes.html
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

module.exports = router;