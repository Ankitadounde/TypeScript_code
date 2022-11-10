var employee = {
    firstName: "Ankita",
    company: "Infosys",
    dept: "IT",
    id: 205665
};
console.log(employee);
console.log("****** Object De-structuring*******");
var fn = employee.firstName, sn = employee.company, tn = employee.dept, kn = employee.id;
console.log("".concat(fn, ",").concat(sn, ",").concat(tn, ",").concat(kn));
// console.log("*********Traverse an object using  loop**************");
// for (const key in employee) {
//         console.log(`${key}:${employee[key]}`);
//     }
console.log("*********raverse an object using for in loop*************");
for (var key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        var element = employee[key];
        console.log("".concat(key, ":").concat(employee[key]));
    }
}
