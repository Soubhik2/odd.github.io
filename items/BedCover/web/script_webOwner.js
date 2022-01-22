let Switch = document.getElementById("EditText1").value;
let fastname = document.getElementById("EditText1").value;

function buttonF1(){
	//document.getElementById("text1").innerHTML = document.getElementById("EditText1").value;
	switch(document.getElementById("EditText1").value){
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
		
	case "9": p9(); 
		break;
		
	case "10": p10();
		break;
		
	case "11": p11();
		break;
		
	case "12": p12(); 
		break;
		
	case "13": p13();
		break;
		
	case "14": p14();
		break;
		
	case "15": p15(); 
		break;
	case "16": p16();
		break;
		
	case "17": p17();
		break;
		
	case "18": p18(); 
		break;
		
	case "19": p19(); 
		break;
		
	case "20": p20(); 
		break;
		
	case "21": p21(); 
		break;
		
	case "22": p22(); 
		break;
		
	case "23": p23(); 
		break;
		
	case "24": p24(); 
		break;
		
	case "25": p25(); 
		break;
		
	case "18": p18(); 
		break;
}
}

function p1(){
	document.getElementById("Img-1").src = "BedCover/p1.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 540 ";
	document.getElementById("text2").innerHTML = " (pure cotton) 1 item Updated 5/1/22";
}

function p2(){
	document.getElementById("Img-1").src = "BedCover/p2.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 540 ";
	document.getElementById("text2").innerHTML = " (pure cotton) 1 item Updated 5/1/22";	
}

function p3(){
	document.getElementById("Img-1").src = "BedCover/p3.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 540 ";
	document.getElementById("text2").innerHTML = " (pure cotton) 1 item Updated 5/1/22 ";
}

function p4(){
	document.getElementById("Img-1").src = "BedCover/p4.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 540 ";
	document.getElementById("text2").innerHTML = " (pure cotton) 1 item Updated 5/1/22";
}

function p5(){
	document.getElementById("Img-1").src = "BedCover/p5.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 540 ";
	document.getElementById("text2").innerHTML = " (pure cotton) 1 item Updated 5/1/22";	
}
/*
function p6(){
	document.getElementById("Img-1").src = "BedCover/p6.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 560 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p7(){
	document.getElementById("Img-1").src = "BedCover/p7.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 560 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p8(){
	document.getElementById("Img-1").src = "BedCover/p8.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 660 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";	
}

function p9(){
	document.getElementById("Img-1").src = "BedCover/p9.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 660 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p10(){
	document.getElementById("Img-1").src = "Churidar/p10.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 660 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p11(){
	document.getElementById("Img-1").src = "Churidar/p11.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 660 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";	
}

function p12(){
	document.getElementById("Img-1").src = "Churidar/p12.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p13(){
	document.getElementById("Img-1").src = "Churidar/p13.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p14(){
	document.getElementById("Img-1").src = "Churidar/p14.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";	
}

function p15(){
	document.getElementById("Img-1").src = "Churidar/p15.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p16(){
	document.getElementById("Img-1").src = "Churidar/p16.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p17(){
	document.getElementById("Img-1").src = "Churidar/p17.jpeg";
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";	
}

function p18(){
	document.getElementById("Img-1").src = "Churidar/p18.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p19(){
	document.getElementById("Img-1").src = "Churidar/p19.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p20(){
	document.getElementById("Img-1").src = "Churidar/p20.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p21(){
	document.getElementById("Img-1").src = "Churidar/p21.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p22(){
	document.getElementById("Img-1").src = "Churidar/p22.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p23(){
	document.getElementById("Img-1").src = "Churidar/p23.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p24(){
	document.getElementById("Img-1").src = "Churidar/p24.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}

function p25(){
	document.getElementById("Img-1").src = "Churidar/p25.jpeg"; 
	document.getElementById("text1").innerHTML = "price Rs:- 460 ";
	document.getElementById("text2").innerHTML = "Churidar (pure cotton) 1 item Updated 5/1/22";
}*/
