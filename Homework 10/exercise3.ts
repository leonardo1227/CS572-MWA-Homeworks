//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 10

class Person{
    private _firstName:string="";

    get firstName(){
        return this._firstName;
    }

    set firstName(value:string){
        this._firstName = value.toUpperCase();
    }

    enumerable(){
        return true;
    }
    configurable(){
        return true;
    }
}

let person = new Person();
person.firstName = "Leonardo";
console.log(person.firstName);