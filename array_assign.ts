
console.log("*******Given Array*********");

var array = ["J&J","Pfizer","Sputnik"]
console.log(array);


console.log("********Traversing Array************");
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
    
}
console.log("*********Add Covaxin***********");
array.push("Covaxin");
console.log(array);
console.log("*********Destructuring Array***********");
var array = ["J&J","Pfizer","Sputnik","Covaxin"]
let [first,second,third,fourth] = array;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);









