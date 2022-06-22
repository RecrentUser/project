let obj = {
    name: "Nikita",
    age: 18,
    house: {
        city1: "Moscow",
        city2: "Protva"
    },
    job: function() {
        console.log("SPK");
    }
};

// obj.job();
// console.log(Object.keys(obj).length);
const {city1, city2} = obj.house;
console.log(city2);