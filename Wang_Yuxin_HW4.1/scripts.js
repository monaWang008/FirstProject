//Fizz Buzz

for(let i = 0; i <= 100; i++) {
	if ((i%7 == 0) && (i%11 == 0)) {
		console.log("FizzBuzz");
	} else if (i%7 == 0){
		console.log("Fizz");
	} else if (i%11 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
