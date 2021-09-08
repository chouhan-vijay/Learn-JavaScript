console.log("We starting Array in JavaScript")

// Fach value using keys and also get key using values

// // let car = {Key1: "o1o1", Key2: "o1o2", Key3: "o1o3"}
// let car = {key1:" vijay", key2: " sourbh", key3: " ritik_glod"}
// document.getElementById("demo").innerHTML = `This first Key Value is ${Object.keys(car).find(key=> car[key]===' vijay')}`;


// let arr=Array.from("ABCDEFG")
// console.log(arr)


// a=[10,20,30,40]

// document.write(inde)

// const data_types = [" var", "let ", "const"];
// document.getElementById("demo").innerHTML = data_types.toString();

// const data_types = [" var", "let ", "const"];
// document.getElementById("demo").innerHTML = data_types.join(" * ");


// const data_types = ["var", "let", "const"];
// console.log(data_types.pop());
// console.log(data_types.shift());
// document.getElementById("demo").innerHTML = data_types.pop("var");

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;
function myFunction() {
    points.sort(function (a, b) { return a - b });
    document.getElementById("demo").innerHTML = points;
}