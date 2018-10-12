//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 10

class BaseObject{
    width:number = 0;
    length:number = 0;
}

class Rectangle extends BaseObject{
    width=5;
    length=2;
    calcSize(){
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();
console.log(rectangle.calcSize());