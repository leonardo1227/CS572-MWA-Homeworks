//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1

const item = {
    "name": "Biscuits",
    "type": "Regulras",
    "category": "food",
    "price": 2.0
};

function applyCoupon(category){
    return(discount) => {
        return(item) => {
            item.price -= item.price*discount;
            return item;
        };
    };
 }


let result = applyCoupon("food")(0.1)(item).price;
console.log(result);
