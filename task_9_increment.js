var input1 = document.createElement("input");
UL.value = 1;
UL.type = "number";
UL.max=1;
UL.min=0;
UL.style.maxWidth="2em";
BiTable.appendChild(UL);

var button = document.createElement("button");
button.innerHTML = "INCREMENT";
BiTable.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "1px";
document.body.appendChild(result);



var customIncrement = function(a) {
	// TODO: implement increment with the help of logical operators
	// ЗАДАЧА: реализовать инкремент с помощью логических операторов
	return a++;
}

button.addEventListener("click", function() {
		if ( (input1.value == "")) {
			input1.value = 0;
		}
		
		var ar1 = Number(input1.value);
		if ( ar1 == ar1 ) { // NaN is never equal to itself. So, (ar1 == ar1) is the same as (ar1 != NaN)
			result.innerHTML = customIncrement(ar1);
		} else {
			result.innerHTML = input1.value + input2.value;
		}
	}
);


// TODO: 
// ЗАДАЧА: 