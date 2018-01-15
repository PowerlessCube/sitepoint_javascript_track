// function for checking phone number is formatted correctly.
var phoneFormatted = function(submission) {
    var counter;
    var current;
    var submissionLength = submission.length;
    var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var separator = "-"
    if (typeof submission !== "string" || submissionLength !== 8) {
      return false;
    }
    for (counter = 0; counter < submissionLength; counter++) {
      current = submission[counter];
      if (numberArray.indexOf(current) === -1) {
        if (counter !== 3) {
          return false;
        } else if (current !== separator) {
          return false
        }
      }
    }
    return true;
  };
  console.log(phoneFormatted('1234567'));// false
  console.log(phoneFormatted('123-4567')); // true
  
  // Same function just using regex syntax
  var phoneFormattedRegex = function (submission) {
    return /^\d{3}-\d{4}$/.test(submission);
  }
  
  console.log(phoneFormattedRegex('1234567')); // false
  console.log(phoneFormattedRegex('123-4567')); // true