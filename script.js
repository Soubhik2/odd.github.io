let Button = document.getElementById("Button1");

Button.addEventListener('click',chack);

function chack(){
	let num = document.getElementById("Text1").value;

	if(num%2 == 0)
	{
		document.getElementById("result").innerHTML = "Even";
	}
	else
	{
		document.getElementById("result").innerHTML = "Odd";
	}
}
