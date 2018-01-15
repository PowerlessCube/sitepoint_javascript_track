// Using the String Replace Method
var source = "The kittens have mittens"; 
console.log(source.replace("it", "IT")); // "The kITtens have mittens"

var itMatches = /it/;
console.log(source.replace(itMatches, "IT")); // "The kITtens have mittens"

// Global Replacements
var itMatchesGlobal = /it/g
console.log(source.replace(itMatchesGlobal, "IT")); // "The kITtens have mITtens"

// Same, just using constructor Regex
var itAlsoMatchesGlobal = new RegExp("it", "g");
console.log(source.replace(itAlsoMatchesGlobal, "IT")); // "The kITtens have mITtens"

/* More Flexible Matching With Quantifiers
Replacing gets even more versatile once you 
learn a few more metacharacters, such as the quatifiers + and * */
var plusMatch = /12+3/;
console.log(plusMatch.test("123")); // true
console.log(plusMatch.test("122222223")); // true
console.log(plusMatch.test("13")); // false - no 2s.

// ( matches zero or more of the preceding element)
var splatMatch = /12*3/;
console.log(splatMatch.test("123")); // true
console.log(splatMatch.test("122222223")); // true
console.log(splatMatch.test("13")); // true

/* Your First Character Class: Whitespace */
var whiteSpace = /\s+/g;
var source = "The   kittens have    mittens";
console.log(source.replace(whiteSpace, " ")); // "The kittens have mittens"

// Escape characters - common gotchyas
var source = "The     kittens     have    mittens";
var errorWhiteSpace = new RegExp("\s+", "g");
console.log(source.replace(errorWhiteSpace, " ")); // "The     kitten      have    mitten "
/* It got rid the 's'? unecessary escaping*/

var alsoWhiteSpace = new RegExp("\\s+", "g");
console.log(source.replace(alsoWhiteSpace, " ")); // "The kittens have mittens"