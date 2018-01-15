var actionTracker = function(choice) {
    var tracking = {};
    return {
      setAction: function(action) {
        if(action) {
          tracking[choice] = action;
        }
      },
      getAction: function() {
        return tracking[choice];
      }
    };
  };
  /* Each of these are taking up space in memory, 
  each of them have methods and they too, take up space */
  var redTracker = actionTracker('red');
  var blueTracker = actionTracker('blue');
  console.log(redTracker.getAction);
  console.log(blueTracker.getAction);
  /* Creating these values this way caused duplication in memory and it is 
  redundant */
  console.log(redTracker.getAction == blueTracker.getAction); // false, two seperate functions in memory.

  // It would be better to set up something that shares these methods, setup on the actionTracker prototype (more on that later)

//   Memory Not Freed Due To Closures
/* The outer function's scope is never cleaned form memory as lonf as it is being used by closures. */

var actionTracker = function(choice) {
    var tracking = {};
    return {
      setAction: function(action) {
        if(action) {
          tracking[choice] = action;
        }
      },
      getAction: function() {
        return tracking[choice];
      }
    };
  };
  
  var redTracker = actionTracker('red');
  redTracker.setAction('click');
  console.log(redTracker.getAction());
  redTracker = null;

  // setting it too null will help the js garbage collector know to 