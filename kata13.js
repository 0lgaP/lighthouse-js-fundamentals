const talkingCalendar = function (date) {
  const splitDate = date.split("/")
  let year = splitDate[0];
  let month = parseInt((splitDate[1]), 10);
  let day = parseInt((splitDate[2]), 10);
  let monthNames = [ "zigazigAhh", "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ];
  let monthText = monthNames[month]
  let daySuffix = ""
  if ( day === 1 || day === 21 || day === 31){
    daySuffix = "st"
  } else if ( day === 2 || day === 22 ){
    daySuffix = "nd"
  } else if ( day === 3 || day === 23){
    daySuffix = "rd"
  } else {
    daySuffix = "th"
  }
  return (monthText + " " + day + daySuffix + "," + " " + year)
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));