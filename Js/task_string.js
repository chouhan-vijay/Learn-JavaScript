// console.log("This is Task of string")


// var string1 = "vijay sourabh rajat vijay sd sourabh khan"

// var l = string1.match(/viay/g);
// document.write(l);


const string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip enim ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu enim fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let string2 = "enim";
let srt = string1.split();

// for (let i in srt ){
//     document.write(srt.length)


// let a = string1.length;
// let b = string2.length;
// if (a>=b){
//     document.write("First String is longer then second");
// }

// if (string1 !== "enim"){
// for (let i = 1; i !== a; i++) {
//     const  a = string1.match(/enim/g)
//     document.write(a)

// }
// }
// else{
//     document.write("-1")
// }

const st = function (arr, val) {
    return arr.reduce((acc, ele) => {
        return (val === ele ? acc +1: acc)
    }, 0)
}
document.write(st(srt, string2));