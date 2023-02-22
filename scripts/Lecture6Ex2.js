window.location.reload(); 

let x = 4; 						// global
var y;						    // global declared but undefined

const PI = 3.1415;				// global constant

function foo(){
	
	var y = 17;					// declared and assigned locally
	{
		let x = 'hello';		// declared and assigned locally
		console.log( x + ' ' + y + ', ' + PI );
		var y = 'Bob';			// declared and assigned locally
		a = PI;					// undeclared therefore global (hoisted)
	}
	
	console.log( x + ' ' + y);

}

foo();

console.log( x + ' ' + y + ', ' + a);