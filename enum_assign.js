console.log("***************Level*************");
var level;
(function (level) {
    level[level["Low"] = 0] = "Low";
    level[level["Medium"] = 1] = "Medium";
    level[level["High"] = 2] = "High";
})(level || (level = {}));
console.log(level.Low);
console.log(level.Medium);
console.log(level.High);
console.log(level);
