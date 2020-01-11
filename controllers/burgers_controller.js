var express = require ("express");

var router = express.Router();

var burger  = require("../models/burger");

router.get("/", function (req,res){
    console.log("HOME PAGE")
    burger.selectAll(function(dbResults){
        res.render("index", {dbResultBurger: dbResults })
    })
})

module.exports = router;