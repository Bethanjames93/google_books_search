const router = require("express").Router();
const bookController = require("../../contollers/bookController");

router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

router 
    .route("/:id")
    .get(bookController.findById)
    .put(bookController.update);

modeule.exports = router;