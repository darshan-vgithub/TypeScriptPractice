"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Darshan",
    email: "darshanv487@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = {
    name: "darshan",
    isActive: false,
    email: "darshanv487@gmail.com",
};
createUser(newUser);
function createCourse() {
    return { name: "darshan", age: 23, work: "Developer" };
}
