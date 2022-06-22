const options = {
    name: 'test',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();
 

const {border, bg} = options.colors;
console.log(border)

console.log(Object.keys(options).length);


// delete options.name;
// console.log(options.colors.border);

// for (let key in options) {

//     if (typeof(options[key]) === 'object') {

//         for (let i in options[key]) {

//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     }
//     else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }
