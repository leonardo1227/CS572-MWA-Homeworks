"use strict";
//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 10
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    constructor() {
        super(...arguments);
        this.width = 5;
        this.length = 2;
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle();
console.log(rectangle.calcSize());
