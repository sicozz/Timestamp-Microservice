import TimeFuncs from "../funcs/timestamp.js";

export default class TimeCtrl {
  static apiGetConvertion(req, res, next) {
    const dateString = req.params.date || null;
    const timestamp = TimeFuncs.convert(dateString);

    if (timestamp.error) {
      res.status(400).json(timestamp);
    } else {
      res.json(timestamp);
    }
  }
}
