/* 
Associate Data With Functions
Object-orientated programming associates methods and properties
*/

var tracking = {};
function trackActions(item, choice) {
  if (choice) {
    tracking[item] = choice;
  }
  return tracking[item];
}

trackActions('red', 'click');
console.log(trackActions('red')); // 'click'
console.log(tracking.red); // 'click'

/* 
Use Closures for Privat Storage 
Closures can become private storage areas for data, accessible only to functions defined in the same scope as the data
*/

function actionTracker(choice) {
    var tracking = {};
    return function (action) {
      if (action) {
        tracking[choice] = action;
      }
      return tracking[choice];
    }
  }
  var redTracker = actionTracker("red");
  
  var blueTracker = actionTracker("blue");
  
  var secretTracker = actionTracker("secret");
  
  console.log(blueTracker());
  blueTracker("click");
  console.log(blueTracker());
  redTracker("touch");
  console.log(redTracker());

  /* You can only really access the values through functions that we call.  It's private storage for data. */


  function actionTracker(choice) {
    var tracking = {};
    return {
      setAction: function(action) {
        if (action) {
          tracking[choice] = action;
        }
      },
      getAction: function() {
        return tracking[choice];
      }
      
    };
    
  }
  
  var redTracker = actionTracker('red');
  redTracker.setAction('click');
  console.log(redTracker.getAction());
  
  