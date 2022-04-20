const path = require("path");
const fs = require("fs");
const router = require("express").Router();

router.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", (err, data) => {
        if (err) {
            res.send(404);
        } else {
            let results = JSON.parse(data);
            res.json(results);
        }
    })
});

// router.post("/api/notes", (req, res) => {

//     if 
// });

// router.delete("/api/notes/:id", (req, res) => {

// });


// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

module.exports = router;