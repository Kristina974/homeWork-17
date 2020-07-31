 'use strict';
 
class Hamburger {
    constructor(...args) {
        this.arr = args;
    };

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };

    static SIZE_BIG = {
        price: 100,
        calories: 40
    };

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    };

    static STUFFING_SALATE = {
        price: 20,
        calories: 5
    };

    static STUFFING_POTATOES = {
        price: 15,
        calories: 10
    };

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    };

    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    };

    addTopping(...args) {
        args.forEach((item) => {
            this.arr.push(item);
        });
    };

    calculatePrice() {
        return this.arr.reduce((sum, curr) => {
           return sum + curr.price;
        }, 0)
    };

    calculateCalories() {
        return this.arr.reduce((sum, curr) => {
            return sum + curr.calories;
        }, 0)
    };
};

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());

// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log('Price with sauce: ' + hamburger.calculatePrice());