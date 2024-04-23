"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoise;
(function (SeatChoise) {
    SeatChoise["AISLE"] = "aisle";
    SeatChoise[SeatChoise["MIDDLE"] = 0] = "MIDDLE";
    SeatChoise[SeatChoise["WINDOW"] = 1] = "WINDOW";
    SeatChoise[SeatChoise["FOURTH"] = 2] = "FOURTH";
})(SeatChoise || (SeatChoise = {}));
var Aseat = SeatChoise.AISLE;
console.log(Aseat);
