export default class TimeFuncs {
  static convert(dateString) {
    let date;
    if (dateString === null) {
      date = new Date();
    } else if (!isNaN(dateString)) {
      date = new Date(Number(dateString));
    } else {
      date = new Date(dateString);
    }

    if (date == "Invalid Date") {
      return { error: "Invalid Date" };
    } else {
      const unix = date.getTime();
      const utc = date.toUTCString();
      return { unix, utc };
    }
  }
}
