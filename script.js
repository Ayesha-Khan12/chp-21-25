// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in 
// a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name.");
// var lastName = prompt("Enter your last name.");

// document.write(`Your full name is ${firstName} ${lastName}`);

// 2. Write a program to take a user input about his favorite mobile phone model.
//  Find and display the length of user input in your browser

// var phoneModel = prompt("What is your favorite mobile phone model?");
// document.write(`My favourite phone is : ${phoneModel} <br>`);

// var lengthMobile = phoneModel.length;
// document.write(`Length of string ${lengthMobile}`);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var word = "Pakistani";
document.write(`String : ${word} <br>`);

var indexOf = word.indexOf("n");
document.write(`Index of 'n': ${indexOf} <br>`);

document.write("<hr>");


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var word = "Hello World";
document.write(`String: ${word} <br>`);

var lastIndex = word.lastIndexOf('l');
document.write(`Last index of 'l' is ${lastIndex}`);

document.write("<hr>")


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var word = "pakistani";
document.write(`String: ${word} <br>`);

var character = word.charAt(3);
document.write(`Character at index 3: ${character} <br>`);

document.write("<hr>")

// 6. Repeat Q1 using string concat() method.

var firstName = "Ayesha";
var lastName = "Khan";
var fullName = firstName.concat(" ", lastName); 
document.write(`Your full name is: ${fullName}`);

document.write("<hr>");

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hydrabad";
document.write(`City: ${city} <br>`);

var newCity = city.replace("Hydra", "Islam");
document.write(`After replacement: ${newCity} <br>`);
document.write("<hr>");

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//  var message = “Ali and Sami are best friends. They play cricket and football together.”;

var sentence = "Ali and Sami are best friends. They play cricket and football together.";
document.write(sentence + "<br>");

var replaceAll = sentence.replaceAll("and", "&");
document.write(replaceAll + "<br>");

document.write("<hr>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var number = "472";
document.write(`Value: ${number} <br>`);
var type = (typeof number);
document.write(`Type: ${type} <br>`);

var number = 472;
document.write(`Value: ${number} <br>`);
var type = (typeof number);
document.write(`Type: ${type} <br>`);
document.write("<hr>");


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var user = prompt("Please enter some text");
// document.write(`User input: ${user} <br>`);

// var capital = user.toUpperCase();
// document.write(`Upper case: ${capital}`);

// 11. Write a program that takes user input. Convert and show the input in title case.

// let user = prompt("Write any wordings here..");
// let output = user.toLowerCase().split(' ');
// for(i = 0; i < output.length; i++){
// output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);
// }
// document.write(output);
// document.write("<hr>");

// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var num = 35.36;
var convert = num.toString(); 
var remove = convert.replace(".", "");
document.write(remove);
document.write("<hr>");


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ .

// var user = prompt("Please enter your username");
// var specialSymbol = ["@", ".", ",", "!"];
// var isValid = true;

// for(i = 0; i < user.length; i++){
//     if(specialSymbol.includes(user[i])){
//         isValid = false;
//         break;
//     }
// }
// if (!isValid){
//     swal.fire({
// icon : 'error',
// title : 'Error',
// text : 'Please enter a valid username',
// confirmButtonText: 'OK'
//     });
//     }
//     else{
//         Swal.fire({
//             icon: 'success',
//             title: 'Success',
//             text: 'Username Valid.',
//             confirmButtonText: 'OK'
            
//         });
//     }

    // 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
    //  After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. 
    // Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:


// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Enter an item to search:").toLowerCase();

// found = false;

// for (i = 0; i < item.length; i++){
// if(item[i].toLowerCase() === user){
//     found = true;
//     break;
// }
// }

// if(found){
//     Swal.fire({
//         icon: 'success',  
//         title: 'Success', 
//         text: user + ' is available in the list.',  
//         confirmButtonText: 'OK'  
//       });
// }
// else{
//     Swal.fire({
//         icon: 'error',  
//         title: 'Error',  
//         text: user + ' is not available in the list.',  
//         confirmButtonText: 'OK' 
//       });
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers
//  b. It should not start with a number 
//  c. It must at least 6 characters long If the password does not meet above requirements,
//  prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var password = prompt("Enter your Password");
// var isValid = true;

// if(password.length < 6){
//     swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Password must be at least 6 characters long.',
//         confirmButtonText: 'OK'
//     })
// }

// else if(!isNaN(password[0])){
//     isValid = false;
//     swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Password can not begin with a number. Please enter a valid password',
//         confirmButtonText: 'OK'
//     })
// }
// else if(!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)){
//     isValid = false;
//     Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Password must contain both alphabets and numbers.',
//         confirmButtonText: 'OK'
//     });
// }
// if (isValid) {
//     Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: 'Your password is valid!',
//         confirmButtonText: 'OK'
//     });
// // }

// 16. Write a program to convert the following string to an array using string split method.
//  var university = “University of Karachi”;
//  Display the elements of array in your browser.

var uni = "University of Karachi";
var university = uni.split("");

for(let i = 0; i < university.length; i++){
    document.write(university[i] + "<br>");
}
document.write("<hr>");

// 17. Write a program to display the last character of a user input.

// var user = prompt("Enter some wordings here..");
// document.write(`User Input : ${user} </br>`);
// var output = user[user.length -1];
// document.write(`Last character of input: ${output}`);
// document.write("<hr>");

// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
document.write(`Text: ${sentence} <br>`);
var lowerSentence = sentence.toLowerCase();
var seprate = lowerSentence.split(" ");
var count = 0;

for(let i = 0; i < seprate.length; i++){
    if(seprate[i] === "the"){
        count++
    }
}

document.write(`There are ${count} occurence(s) of the word 'the'`);
document.write("<hr>");
