let months = [
  { name: "Jan", days: 31 },
  { name: "Feb", days: 28 },
  { name: "Mar", days: 31 },
  { name: "Apr", days: 30 },
  { name: "May", days: 31 },
  { name: "Jun", days: 30 },
  { name: "Jul", days: 31 },
  { name: "Aug", days: 30 },
  { name: "Sep", days: 31 },
  { name: "Oct", days: 30 },
  { name: "Nov", days: 31 },
  { name: "Dec", days: 30 },
];

let day = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

let januar = [];
let februar = [];

let month = 12;
let firstDay = 0;

for (let j = 0; j < month; j++) {
  switch (j) {
    case 1:
      firstDay = 5;
      for (let i = 0; i < months[j].days; i++) {
        switch (i % 7) {
          case 0:
            console.log(i + "Montag");
            januar.push(i)
            break;
          case 1:
            console.log(i + "Dienstag");
            januar.push(i)
            break;
          case 2:
            console.log(i + "Mittwoch");
            januar.push(i)
            break;
          case 3:
            console.log(i + "Donnerstag");
            januar.push(i)
            break;
          case 4:
            console.log(i + "Freitag");
            januar.push(i)
            break;
          case 5:
            console.log(i + "Samstag");
            januar.push(i)
            break;
          case 6:
            console.log(i + "Sonntag");
            januar.push(i)
            januar.push("\n")            
            break;
        }
      }
      console.log(januar.join(" ") + "\n");
      break;
    case 2:
        firstDay = 5;
      for (let i = 0; i < months[j].days; i++) {
        switch (i % 7) {
          case 0:
            console.log(i + "Montag");
            februar.push(i)
            break;
          case 1:
            console.log(i + "Dienstag");
            februar.push(i)
            break;
          case 2:
            console.log(i + "Mittwoch");
            februar.push(i)
            break;
          case 3:
            console.log(i + "Donnerstag");
            februar.push(i)
            break;
          case 4:
            console.log(i + "Freitag");
            februar.push(i)
            break;
          case 5:
            console.log(i + "Samstag");
            februar.push(i)
            
            break;
          case 6:
            console.log(i + "Sonntag");
            februar.push(i)            
            februar.push("\n")            
            break;
        }
      }
      console.log(februar.join(" ") + "\n");
      firstDay = 1;
      break;
    case 3:
      firstDay = 2;
      break;
    case 4:
      firstDay = 3;
      break;
    case 5:
      firstDay = 4;
      break;
    case 6:
      firstDay = 5;
      break;
    case 7:
      firstDay = 6;
      break;
    case 8:
      firstDay = 0;
      break;
    case 9:
      firstDay = 1;
      break;
    case 10:
      firstDay = 2;
      break;
    case 11:
      firstDay = 3;
      break;
    case 12:
      firstDay = 4;
      break;
  }
}
