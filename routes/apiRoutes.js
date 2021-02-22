const router = require("express").Router();
const workout = require("../models/workout.js");

router.put("/api/workouts/:id", ({ body }, res) => {
  console.log(body);
  workout
    .create(body)
    .then(({ _id }) =>
      workout.findOneAndUpdate({_id: req.params.id}, { $push: { workout: _id } }, { new: true })
    )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts/", ({ body }, res) => {
  workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout.find({})
  .then((dbworkout) => {
    res.json(dbworkout);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
})

router.get("/api/workouts", (req, res) => {
  workout
    .find({})
    // .limit(1)  //it looks like the front end expects all the work outs and then only returns json[json.length - 1]
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
