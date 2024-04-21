"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    return num + 2;
    // return "hello"
};
addTwo(2);
// let getValue=(myval:number)=>{
// if(myval>5){
//     return true
// }
// else{
//     return "200 ok"
// }
// }
// the above code is a special case where it comes under the union type we will learn about it further 
var heros = ["thor", "loki", "odin", "hella", "spiderman", "captain", "ironman"];
heros.map(function (heros) {
    return "the marvel heros are ".concat(heros);
});
var getheors = function () {
    var heros = [
        "thor",
        "loki",
        "odin",
        "hella",
        "spiderman",
        "captain",
        "ironman",
    ];
    heros.map(function (heros) {
        return "the heros are ".concat(heros);
    });
};
getheors();
