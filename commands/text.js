let message = "$command argument argument2"; 
const simple = message.slice(1).split(" "); 
const simpleCommand = simple.shift().toLowerCase(); 

console.log(message); 
console.log(simple); 
console.log(simpleCommand); 