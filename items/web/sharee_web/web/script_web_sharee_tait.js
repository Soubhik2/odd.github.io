let Switch = localStorage.getItem("Switch");

switch(Switch){
	case "1": p1();
		break;
		
	case "2": p2();
		break;
		
	case "3": p3(); 
		break;
		
	case "4": p4();
		break;
		
	case "5": p5();
		break;
		
	case "6": p6(); 
		break;
		
	case "7": p7();
		break;
		
	case "8": p8();
		break;
}

function p1(){
	document.getElementById("Img-1").src = "Sharee/p1.jpg";
	document.getElementById("text1").innerHTML = "price Rs:- 1490 ";
	document.getElementById("text2").innerHTML = "Sharee 1";
}

function p2(){
	document.getElementById("Img-1").src = "Sharee/p2.jpg";
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 2";	
}

function p3(){
	document.getElementById("Img-1").src = "Sharee/p3.jpg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 3";
}

function p4(){
	document.getElementById("Img-1").src = "Sharee/p4.jpg";
	document.getElementById("text1").innerHTML = "price Rs:- 1490 ";
	document.getElementById("text2").innerHTML = "Sharee 1";
}

function p5(){
	document.getElementById("Img-1").src = "Sharee/p5.jpg";
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 2";	
}

function p6(){
	document.getElementById("Img-1").src = "Sharee/p6.jpg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 3";
}

function p7(){
	document.getElementById("Img-1").src = "Sharee/p7.jpg";
	document.getElementById("text1").innerHTML = "price Rs:- 1490 ";
	document.getElementById("text2").innerHTML = "Sharee 1";
}

function p8(){
	document.getElementById("Img-1").src = "Sharee/p8.jpg";
	document.getElementById("text1").innerHTML = "price Rs:- 870 ";
	document.getElementById("text2").innerHTML = "Sharee 2";	
}


function buttonF(){
	switch(Switch){
		case "1": b1();
			break;
		
		case "2": b2();
			break;
		
		case "3": b3(); 
			break;
		
		case "4": b4();
			break;
		
		case "5": b5();
			break;
		
		case "6": b6(); 
			break;
		
		case "7": b7();
			break;
			
		case "8": b8();
			break;
	}
}

function b1(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1N8Uqu5zjHHtH0t3Q14c4bTP_EDgsML9I/view?usp=sharing";
}

function b2(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1mop9ThM3MM6zKHaC_zEvUm-MyP4ukSN4/view?usp=sharing";
}

function b3(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1YV_eV9F0_2cDZKplKg_2TYn28poD4L2e/view?usp=sharing";
}

function b4(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1wfJsCyIHuviUaI9LzJrD3ji4sQoLni8Y/view?usp=sharing";
}

function b5(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1W5KshZpX3cWfe24TsbEHTtGxp_TfEcWp/view?usp=sharing";	
}

function b6(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1PEvfnaAYzbeH4a7FGzL-BrC4L0EDfL6i/view?usp=sharing";
}

function b7(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1TM7dAglaiwNfXDhzxVXW4X9gY3Qb1J2_/view?usp=sharing";
}

function b8(){
	window.location.href = "https://wa.me/919123816216/?text=https://drive.google.com/file/d/1-1BNiC9lIRtAfr9QzWx9rXiPpcSzMyE0/view?usp=sharing";	
}