var burger = require("../models/burger.js");

console.log("controller is working")

var express = require("express");

var router = express.Router();

//Get all burgers
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject, "it is working here");
        res.render("index", burgerObject);
    });

});

//Add new burger
router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.insert(
        [
            req.body.name
        ],
        function (result) {
            res.json({ id: result.insertId });
        });
});

//Change 'devoured' status
router.put("/api/burgers/:id", function (req, res) {
    var burgerId = req.params.id;

    burger.update(
        burgerId, function (result) {
            if (result.changedRows == 0) {
                //If no changes were made 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        }
    )
})

module.exports = router;