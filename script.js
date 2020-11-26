console.log("20 11 25 Conditionals Lecture"); // checking files are linked

// defining variables
let userName = prompt("Name");
console.log(`Name : ${userName}`);
let userAge = prompt("Age");
console.log(`Age : ${userAge}`);

// compare user age to 21
if(userAge == 21){
    alert(`${userName} entered 21!`);
}
console.log(`User age is 21 : ${userAge == 21}`);

// compare user age strictly
if(userAge === "21"){
    alert(`${userName} entered the string 21!`);
}
console.log(`User age is string 21 : ${userAge === "21"}`);

userAge = parseInt(userAge); // convert from string to integer

if(userAge === 21){
    alert(`${userName} entered the integer 21!`);
}
console.log(`User age is int 21 : ${userAge === 21}`);

// comparing age with else statement
if(userAge == 21){
    alert(`${userName} entered 21`);
} else {
    alert(`${userName} did not enter 21`);
}
if(userAge != 21){
    alert(`${userName} did not enter 21`);
} else {
    alert(`${userName} entered 21`);
}

// comparing age using else ifs
if(userAge > 21){
    alert(`${userAge} is greater than 21`);
} else if(userAge == 21){
    alert(`${userAge} is 21`);
} else {
    alert(`${userAge} is less than 21`);
}

// comparing names using else ifs
if(userName == "Autumn"){
    alert("You are the instructor");
} else if(userName == "Erin"){
    alert("You are the director");
} else if(userName == "Tiarra"){
    alert("You are a student");
} else {
    alert("You are not Erin, Autumn, or Tiarra");
}

// compare names using OR 
if (userName == "Autumn" || userName == "Erin") {
    alert("You are either the instructor or director");
} else {
    alert("You are not the instructor or director");
}

// comparing names using or and else if
if(userName == "Autumn" || userName == "Erin"){
    alert("You are on the Part Time Program team");
} else if(userName == "Tiarra"){
    alert("You are a part time student");
} else {
    alert("you are not a part of the part time program");
}

// comparing name and age
if(userName == "Autumn" && userAge > 21){
    alert("You are the instructor and your are over 21");
} else {
    alert("You not the instructor and/or not over 21");
}