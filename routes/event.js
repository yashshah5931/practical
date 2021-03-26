var express = require("express");
var router = express.Router();
//require for controll req and res
const EventController = require("../controller/event.controller")


router.post("/create", EventController.eventCreate)//create event
router.get("/list", EventController.listEvent)//list event
router.get("/view/:id", EventController.viewEventById) //view event
router.put("/update/:id", EventController.updateEvent) //update event


 

module.exports = router;
