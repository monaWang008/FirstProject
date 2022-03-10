let today = new Date(); //assigment operator
let timeNow = today.getHours(); //camel case

if(timeNow <= 12) {
    document.write("Good Morning");
} else if(timeNow > 12) {
	document.write(today);
	document.write("<br>");
} else if(timeNow > 13) {
	document.write("Good Evening")
}

let name = "Mona";
let number = 12;
let bool = true;


let cars = ["Benz", "BMW", "Audi"]
let mixed = ["Benz", "BMW", "Audi",12,true,987];
 


// document.write(cars[1]);
for(let i=0;i<cars.length;i++) {
    document.write(cars[i]+"<br>")
}



let person = {
	firstName:"Mona", 
	LastName: "Wang", 
	brithDate:"05/11/1994"
} //object array

document.write(person.lastName+"<br>");

let one = 1;
let five = 5;
let twenty = 20;

document.write(twenty%5);
document.write("<br>");


if ((one>five)&&(five < twenty)) {  // and
	document.write("AND"+"<br>");
}

if ((five>one)||(five<one)) {
	document.write("OR"+"<br>")
}


if(twenty != 20) {  // value & type are the same
	document.write("correct");
}

let i=0;
while(i<cars.length) {
	document.write(cars[i]+"<br>");
	i++
}

let a=0;
do{
	 document.write(cars[i]+"<br>");
	 a++
} 
while(a<cars.length);


function printOne() {
	let answer = 5*45*3/2
	document.write(answer);
}

printOne();


//  Fizz Buzz
//  if number == 7 write Fizz
//  if number == 11 write Buzz
//  count from 0 - 100 
for(let i = 0;i<=100;i++){
	if(i==7){
		console.log("Fizz");
	} else if(i%11) {
		console.log("Buzz");
	} else {
		console.log(i)
	}
}





