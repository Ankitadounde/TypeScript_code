console.log("*******Given Array*********");
var array = ["J&J", "Pfizer", "Sputnik"];
console.log(array);
console.log("********Traversing Array************");
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log("*********Add Covaxin***********");
array.push("Covaxin");
console.log(array);
console.log("*********Destructuring Array***********");
var array = ["J&J", "Pfizer", "Sputnik", "Covaxin"];
var first = array[0], second = array[1], third = array[2], fourth = array[3];
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
