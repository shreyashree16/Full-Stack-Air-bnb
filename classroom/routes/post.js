const express = require("express");
const router = express.Router();


//Index
router.get("/", (req, res) =>{
    res.send("GET for posts");
});

//Show
router.get("/:id", (req, res) =>{
    res.send("GET for posts id");
});
//POST
router.post("/", (req, res) => {
    res.send("Post for post id");
});

//DELETE 
router.delete("/:id", (req, res) => {
    res.send("Delete for post id");
});

module.exports = router;