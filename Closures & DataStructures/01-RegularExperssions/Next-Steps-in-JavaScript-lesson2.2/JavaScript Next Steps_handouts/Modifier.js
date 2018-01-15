// Ignoring Case With a Modifier
var itMatches = /it/;
var itMatchesInsensitive = /it/i; // matches both caps and lowercase
var itAlsoMatchesInsensitive = new RegExp("it", "i"); // second string passed as modifier
var source = "THE KITTENS HAVE MITTENS";

console.log(itMatches.test(source));
console.log(itMatchesInsensitive.test(source));
console.log(itAlsoMatchesInsensitive.test(source));