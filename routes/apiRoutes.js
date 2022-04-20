const path = require("path");
const fs = require("fs");
const router = require("express").Router();
const uuid = require("uuid");

router.get("/notes", (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
        if (err) {
            res.send(500);
        } else {
            let results = JSON.parse(data);
            res.json(results);
        }
    })
});

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});


router.delete("/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const deletedNote = notes.filter((delNote) => delNote.id === req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(deletedNote));
    res.json(deletedNote);
});

module.exports = router;