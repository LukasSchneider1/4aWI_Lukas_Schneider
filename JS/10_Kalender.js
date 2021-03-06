let conf = {

  offset: 3,

  month: [
      { name: "Jan", days: 31 },
      { name: "Feb", days: 28 },
      { name: "Mar", days: 31 },
      { name: "Apr", days: 30 },
      { name: "Mai", days: 31 },
      { name: "Jun", days: 30 },
      { name: "Jul", days: 31 },
      { name: "Aug", days: 31 },
      { name: "Sep", days: 30 },
      { name: "Okt", days: 31 },
      { name: "Nov", days: 30 },
      { name: "Dez", days: 31 }
  ],

}

function weekDay() {
  console.log("");
  console.log(" | MO | DI | MI | DO | FR | SA | SO | ");
}

function getDayFormatted(dayNr) {
  if (dayNr < 10) {
      dayNr = (" " + dayNr)
  }
  return dayNr;
}

function printMonth(offset) {
  for (i = 0; i < conf.month.length; i++) {
      weekDay();
      let days = conf.month[i].days;
      let row = " | ";
      let j = 1;
      let day = 1;

      if (j != offset) {
          do {
              row += ("   | ");
              j++;
          }
          while (j < offset);
      }

      for (j; j < (days + offset - 1); j++) {
          if ((day + offset) % 7 == 0 || (day + offset) % 7 == 1) {
              row += ("WE" + " | ")
          }
          else {
              row += (getDayFormatted(day) + " | ")
          }

          if (j % 7 == 0) {
              console.log(row)
              row = (" | ")
          }
          day++;
      }

      if ((day + offset) % 7 == 0 || (day + offset) % 7 == 1) {
          row += ("WE" + " | ")
      }
      else {
          row += (getDayFormatted(day) + " | ")
      }
      console.log(row)
      if ((day + offset) % 7 == 0) {
          offset = 7;
      }
      else {
          offset = ((day + offset) % 7);
      }
      day = 1;

  }
}

printMonth(conf.offset);