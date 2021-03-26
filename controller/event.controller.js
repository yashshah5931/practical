let EventService = require("../service/event.service");

module.exports = {
  //For event create
  async eventCreate(req, res) {
    try {
      let createEvent = EventService.eventCreate(req, res);
      if (createEvent) {
        //response on success event add
        return responseHandler(res, 200, {}, "Event created succesfully", 1);
      } else {
        //response on missng variable
        return responseHandler(res, 200, {}, "Something is missing", 0);
      }
    } catch (error) {
      //for server error
      return responseHandler(res, 500, {}, "Internal server error", 0);
    }
  },

  //For listng of events
  async listEvent(req, res) {
    try {
      let listEvent = await EventService.listEvent(req, res);
      return responseHandler(res, 200, listEvent, "Event listed", 1);
    } catch (error) {
      //for server error
      return responseHandler(res, 500, {}, "Internal server error", 0);
    }
  },

  //for view event
  async viewEventById(req, res) {
    try {
      let viewEvent = await EventService.viewEventById(req, res);
      return responseHandler(res, 200, viewEvent, "Event viewed", 1);
    } catch (error) {
      //for server error
      return responseHandler(res, 500, {}, "Internal server error", 0);
    }
  },

  //for update event
  async updateEvent(req, res) {
    try {
      let updateEvent = await EventService.updateEvent(req, res);
      if (updateEvent === 1) {
        return responseHandler(res, 200, {}, "Event updated", 1);
      } else {
        return responseHandler(res, 200, {}, "Event not updated", 0);
      }
    } catch (error) {
      //for server error
      return responseHandler(res, 500, {}, "Internal server error", 0);
    }
  },
};
