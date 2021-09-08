
// var str1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip enim ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu enim fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// var str2 = "do";
// // var str2 = window.prompt("Enter only string: ")

// const a = "First String is longer then second";
// function s_len_cheker(str1, str2) {
//     if (str1.length > str2.length) {
//         return a
//     } else {
//         return -1
//     }
// }
// var string1 = s_len_cheker(str1, str2);
// // document.write(string1);

// // console.log(counts);
// function s_finder(s1, s2) {
//     let counts = str1.split(" ").length - 1;
//     let counts1 = consts.split(str2).length - 1;
//     if (counts1 === 0 && counts == str2) {

//         document.write("<br>");
//         return -1
//     }
//     else {
//         return `${counts} times ${s2} present in String 1`;
//     }
// }
// let string2 = s_finder(str1, str2);
// document.write(string2);


// let arr = ["hello", "world", "hello world", "helo", "hello", "worlds", "old", "Hello", "World"];
// document.write("<b> Existing Array: </b>" + arr + "<br><br>")
// function unique(arr) {
//     return Array.from(new Set(arr));
// }
// document.write("<b>Unique array:</b> " + unique(arr) + "<br><br>");
// arr.sort((a, b) => {

//     if (a > b) {
//         return -1;
//     } if (a < b) {
//         return 1;
//     }
//     return 0;
// });
// document.write("<b>Sort array:</b> " + arr);



import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let arr = [
  "hello",
  "world",
  "hello world",
  "helo",
  "hello",
  "worlds",
  "old",
  "Hello",
  "World"
];
document.write("<b> Existing Array: </b>" + arr + "<br><br>");
function unique(arr) {
  arr = arr.toLowerCase();
  return Array.from(new Set(arr));
}
document.write("<b>Unique array:</b> " + unique(arr) + "<br><br>");
arr.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});
document.write("<b>Sort array:</b> " + arr);
