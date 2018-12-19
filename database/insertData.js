function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateRandomDates(numberOfDates) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var numbOfDaysInMonthExc = 0;

  var randomDates = [];

  function getRandomDateAccordingToMonth(daysInMonth) {
    var randomDay = getRandomIntInclusive(daysInMonth, numbOfDaysInMonthExc);
        var randomYear = getRandomIntInclusive(yyyy, (yyyy + 3));

        if(randomYear === yyyy) {
          var randomMonth = getRandomIntInclusive(mm , 13);
        } else {
          var randomMonth = getRandomIntInclusive(1, 13);
        }
        var date = new Date(randomYear, randomMonth, randomDay);
        randomDates.push(date);
  }

  for(var i = 0; i < numberOfDates; i++) {
      if(mm === 2) {
        numbOfDaysInMonth = 29;
        getRandomDateAccordingToMonth(numbOfDaysInMonth);

      } else if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
        numbOfDaysInMonth = 31;
        getRandomDateAccordingToMonth(numbOfDaysInMonth);
      } else {
        numbOfDaysInMonth = 32;
        getRandomDateAccordingToMonth(numbOfDaysInMonth);

      }
  }

  return randomDates;

}



function insertDummyData(numberOfDocs) {
  var dataArray = [];
  for(var i = 0; i < numberOfDocs; i++) {
      var dataObj = {};
      var numbOfRandomDates = getRandomIntInclusive(0, 100);
      dataObj.unavailability = generateRandomDates(numbOfRandomDates);
      var guestCount = getRandomIntInclusive(0, 9);
      dataObj.guestCount = guestCount;
      var view = getRandomIntInclusive(0, 200);
      dataObj.view = view;
      var rating = getRandomIntInclusive(0, 6);
      dataObj.rating = rating;
      var rating_count = getRandomIntInclusive(0, 300);
      dataObj.rating_count = rating_count;

      dataArray.push(dataObj);
  }
  return dataArray;
}
