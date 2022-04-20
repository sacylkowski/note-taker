const path = require("path");
const fs = require("fs");
const router = require("express").Router();
const uuid = require("uuid");

// router.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../db/db.json"));
// });

router.get("/notes", (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
        if (err) {
            res.send(404);
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


// router.delete("/api/notes/:id", (req, res) => {

// });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

module.exports = router;