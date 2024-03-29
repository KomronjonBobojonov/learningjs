var input1 = document.createElement("textarea");
input1.value = 13;
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = 21;
document.body.appendChild(input2);

var button = document.createElement("button");
button.innerHTML = "COMBINE!";
document.body.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "5px";
result.style.borderColor = "green";
document.body.appendChild(result);

button.addEventListener("click", function() {
		result.innerHTML = Number(input1.value) + Number(input2.value);
	}
);

// ЗАДАЧА: при сложении должно быть 3, а не 12. Нужно также понять, почему 12, а не 3.
// TODO: summation should result in 3, not 12. You must understand why it's 12 and not 3.

//Решение: так как input принимает текст, я создал 2 переменные 
//к каждой из них и взял их в скобки обозначив их Number так как число. Затем сложил 2 числа. 
//Solution: Since the input accepts text, I created 2 variables
//to each of them and took them in brackets denoting their number as a number. Then 2 numbers are added.