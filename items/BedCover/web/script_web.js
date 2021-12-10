let Switch = localStorage.getItem("Switch");

switch(Switch){
	case "1": p1();
		break;
		
	case "2": p2();
		break;
		
	case "3": p3(); 
		break;
}

function p1(){
	document.getElementById("Img-1").src = "BedCover/p1.png";
	document.getElementById("text1").innerHTML = "price Rs:- 1490 ";
	document.getElementById("text2").innerHTML = "Sharee 1";
}

function p2(){
	document.getElementById("Img-1").src = "BedCover/p1.png";
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 2";	
}

function p3(){
	document.getElementById("Img-1").src = "BedCover/p1.png"; 
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 3";
}

function buttonF(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1WQB7uDHj78IK9tApC0srpfone70Mz8MI/view?usp=sharing";
}
