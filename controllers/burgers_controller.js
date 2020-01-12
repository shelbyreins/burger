var express = require ("express");

var router = express.Router();

var burger  = require("../models/burger");

router.get("/", function (req,res){
    
    burger.selectAll(function(dbResults){
        res.render("index", {dbResultBurger: dbResults })
    })
});

router.post("/api/burger", function(req, res){
    burger.insertOne(["burger_name", "devoured"],[res.body.burger_name,],
    function(dbResults){
       res.status(200);
    })
})

module.exports = router;