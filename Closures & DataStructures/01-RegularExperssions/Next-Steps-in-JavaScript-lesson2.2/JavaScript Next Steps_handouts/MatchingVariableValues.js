// Matching Variable Values
var something = "cats";
var somethingMatches = new RegExp(something);
var source = "The kittens have mittens";

var result = somethingMatches.test(source);

console.log(result); // false - no cats in string source.

var source2 = "The cats have hats";
var result2 = somethingMatches.test(source2);
console.log(result2);// true - matches on cats