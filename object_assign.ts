var employee = {
    firstName :"Ankita",
    company : "Infosys",
    dept : "IT",
    id: 205665

}
console.log(employee);
console.log("****** Object De-structuring*******");

var {firstName:fn, company:sn,  dept:tn, id:kn}=employee;
console.log(`${fn},${sn},${tn},${kn}`);

// console.log("*********Traverse an object using  loop**************");
// for (const key in employee) {
   
//         console.log(`${key}:${employee[key]}`);
        
//     }
    console.log("*********raverse an object using for in loop*************");
    

for (const key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(`${key}:${employee[key]}`);
        
    }
}


