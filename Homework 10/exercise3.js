//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 10
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.enumerable = function () {
        return true;
    };
    Person.prototype.configurable = function () {
        return true;
    };
    return Person;
}());
var person = new Person();
person.firstName = "Leonardo";
console.log(person.firstName);
