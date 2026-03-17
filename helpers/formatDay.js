// Tue Mar 17 2026 18:38:43 GMT+0100 (Central European Standard Time)
// Tuesday

export function formatDay(day) {
  switch (day) {
    case "Mon":
      return "Monday";
    case "Tue":
      return "Tuesday";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Fri":
      return "Friday";
    case "Sat":
      return "Saturday";
    case "Sun":
      return "Sunday";
    default:
      return "Not a day of the week";
  }
}
