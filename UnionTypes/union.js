"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = "lalala";
score = 23;
var Darshan = { name: "darshan", id: 23 };
Darshan = { username: "Darshan@flame", id: 2323 };
getDbId(33);
getDbId("hello");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toFixed();
    }
}
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
// const data2:string[] |number[]=[1,2,3,"4"]   here in this case we can have either string array or a number array we cant have both mixed at ones
var data2 = ["hello", "batman", 23, 24];
var seatallotment;
seatallotment = "middle";
