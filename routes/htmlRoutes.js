const router = require("express").Router();
const path = require("path");

router.get("/", () => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/index", () => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", () => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", () => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});