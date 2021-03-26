const Event = require("../models/index").Event;
//for day diffrence function

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);

  return date;
};

module.exports = {
  //for get the days
  async getDates(start_date, end_date, day) {
    var dateArray = new Array();
    var current_date = new Date(start_date);
    var end_date = new Date(end_date);

    while (current_date <= end_date) {
      dateArray.push(current_date.toDateString());
      current_date = current_date.addDays(day);
    }

    return dateArray;
  },

  //for creating event
  async eventCreate(req, res) {
    try {
      let { title, start_date, end_date, recurrence, duration } = req.body;
      let eventCreate = await Event.create({
        title: title,
        start_date: start_date,
        end_date: end_date,
        recurrence: recurrence,
        duration: duration,
      });
      return eventCreate;
    } catch (error) {
      throw error;
    }
  },

  //list all event
  async listEvent(req, res) {
    try {
      listEvent = await Event.findAll();
      return listEvent;
    } catch (error) {
      throw error;
    }
  },

  //for view event by id
  async viewEventById(req, res) {
    try {
      viewEvent = await Event.findOne({
        where: {
          event_id: req.params.id,
        },
      });
      if (viewEvent.recurrence === "every" && viewEvent.duration === "day") {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          1
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (viewEvent.recurrence === "every" && viewEvent.duration === "month") {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          30
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (viewEvent.recurrence === "every" && viewEvent.duration === "week") {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          7
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (viewEvent.recurrence === "every" && viewEvent.duration === "year") {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          365
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every other" &&
        viewEvent.duration === "day"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          2
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every other" &&
        viewEvent.duration === "week"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          2 * 7
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every other" &&
        viewEvent.duration === "month"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          2 * 30
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every other" &&
        viewEvent.duration === "year"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          2 * 365
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every third" &&
        viewEvent.duration === "day"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every third" &&
        viewEvent.duration === "week"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3 * 7
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every third" &&
        viewEvent.duration === "month"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3 * 30
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every third" &&
        viewEvent.duration === "year"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3 * 365
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every fourth" &&
        viewEvent.duration === "day"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          4
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every fourth" &&
        viewEvent.duration === "week"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3 * 7
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every fourth" &&
        viewEvent.duration === "month"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3 * 30
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }
      if (
        viewEvent.recurrence === "every fourth" &&
        viewEvent.duration === "year"
      ) {
        let data = await this.getDates(
          viewEvent.start_date,
          viewEvent.end_date,
          3 * 365
        );
        viewEvent.dataValues.dates = data;
        return viewEvent;
      }

      return viewEvent;
    } catch (error) {
      throw error;
    }
  },

  //for update event
  async updateEvent(req, res) {
    try {
      let { title, start_date, end_date, recurrence, duration } = req.body;

      viewEvent = await Event.update(
        {
          title: title,
          start_date: start_date,
          end_date: end_date,
          recurrence: recurrence,
          duration: duration,
        },
        {
          where: {
            event_id: req.params.id,
          },
        }
      );
      if (viewEvent) {
        return 1;
      } else {
        return 0;
      }
    } catch (error) {
      throw error;
    }
  },
};
