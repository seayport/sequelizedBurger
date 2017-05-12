var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(dbburger) {
    var hbsObject = {
      burgers: dbburger
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/", function (req, res) {
    db.Burger.create({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }).then(function() {
        // res.json(dbBurger);
        res.redirect("/");
    });

});

router.put("/:id", function(req, res) {
    db.burger.update({
    devoured: req.body.devoured
  }, {
      where: {
          id: req.params.id
      }
  }).then(function() {
       res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
