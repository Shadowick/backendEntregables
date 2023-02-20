const carBrands = [];

let car1 = {name:'ford'};
let car2 = {name:'lexus'};
let car3 = {name:'maserati'};
let car4 = {name:'ford'};

carBrands.push(car1);
carBrands.push(car2);
carBrands.push(car3);
carBrands.push(car4);

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

console.log(containsObject(car4,carBrands))