var publicFunction = function() {
    var privateVariable = "something";
    var innerFunction = function() {
        return privateVariable;
    }
    return innerFunction;
  }
  
  // console.log(privateVaraible); // error
  
  var privateFunction = publicFunction();
  console.log(privateFunction());