/*
var str1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip enim ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu enim fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var str2 = "do"
// var str2 = prompt();
// var str2 = window.prompt("Enter only string: ")

const a = "First String is longer then second";
function s_len_cheker(str1, str2) {
    if (str1.length > str2.length) {
        return a
    } else {
        return -1
    }
}
var string1 = s_len_cheker(str1, str2);
document.write(string1);

function s_finder(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let counts =s1.split(s2).length - 1;
    if (counts == 0) {
        document.write("<br>");
        return -1   
    }
    else {
        return `${counts} times ${s2} present in String 1`;
    }
}
let string2 = s_finder(str1, str2);
document.write(string2);
*/

let str1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip enim ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu enim fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var str2 = "enim";
document.write("<b>First String:</b> " + str1 + "<br>");
document.write("<b>Second String:</b> " + str2 + "<br>");
document.write("<b>Results:</b><br>");
const a = "<br>First string is greater then second <br><br>";
function str_len_check(str1, str2) {
    let counts = str1.split(str2).length - 1;
    if (str1.length > str2.length) {
        return a;
    }
    else if (counts === 0) {
        return -1 + " You entered string is not present in existing string";
    }
    else {
        return `<b>${counts}</b> times <b>${s2}</b> present in String First`;
    }
}
// document.write(str_len_check(str1, str2));
function str_find_any(s1, s2) {
}
let string2 = str_find_any(str1, str2);
document.write(string2);


