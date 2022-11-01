'use strict';
// Callback function
// function first() {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }

// function second() {
//     console.log(2);
// }
// first()
// second()

// function edu(subject, callback) {
//     console.log(`i wanna teach ${subject}`);
//     callback();
// }
// // edu("Javascript", function() {
// //     console.log("That's great");
// // });;
// function done() {
//     console.log("That's great");
// }
// edu("Javascript", done)

function first(cb) {
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);

}

function second() {
    console.log(2);
}
first(second)
    // object is for javascript
const thief = {
    jacket: "black",
    height: 1.7,
    colors: {
        hair: "gray",
        style: "curly"
    },
    howOut: function() {
        console.log("Fast with help doors");
    },
}
console.log(thief.height);
thief.howOut();
// const hair = thief.colors.hair
// const style = thief.colors.style
// console.log(hair);
// console.log(style);
const { hair, style } = thief.colors;
console.log(hair);
console.log(style);
// delete function to remove
// delete thief.jacket
// console.log(thief);
// len property is not defined in object inside of len is keys() and with len()
// console.log(Object.keys(thief).length);

// let count = 0


// for (let key in thief) {
//     count++;
//     // if (typeof thief[key] === "object") {
//     //     for (let i in thief[key]) {
//     //         console.log(`Property ${i} has value ${thief[key][i]}`);
//     //     }
//     // } else {
//     //     console.log(`Property ${key} has value ${thief[key]}`);
//     // }

// }
// console.log(count);
// for of arraybilan ishlaydi agar object bilan ishlasak for in bo'ladi