const router = require("express").Router();
const workout = require("../models/workout.js");

router.put("/api/workouts/:id", ({ body }, res) => {
  workout
    .create(body)
    .then(({ _id }) =>
      workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true })
    )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.post("/api/workout/bulk", ({ body }, res) => {
//   workout.insertMany(body)
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  workout
    .find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
