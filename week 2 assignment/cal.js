
//code for calculator 
function cal(num) {
    document.form.input.value=document.form.input.value+num
}
function clr() {
    document.form.input.value="";
}
function equal() {
    var v=document.form.input.value;
    if(v){
        document.form.input.value=eval(v)
        return;
    }
}
function sqrt(){
    var v=document.form.input.value;
    let y=Math.sqrt(v)
    document.form.input.value=y.toFixed(3)
    return;
}
function abs() {
    var v = document.form.input.value;
    let y = Math.abs(v)
    document.form.input.value= y
    return false;

}

//  for forlm validation

    

   
function validate() {
 var name = document.forms["myform"]["name"].value;
 if(name==""){
 alert("Please enter the name");
 return false;
 }
 var email = document.forms["myform"]["email"].value;
 if(email==""){
 alert("Please enter the email");
 return false;
 }else{
 var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
 var x=re.test(email);
 if(x){
 }else{
 alert("please enter a valid email-id");
 return false;
 } 
 } 
 var mobile = document.forms["myform"]["mobile"].value;
 if(mobile==""){
 alert("Please enter the phone number");
 return false;
 }else{
 if(isNaN(mobile) || mobile.length < 10 ){
 alert("Phone number is not valid");
 

 return false;
 }
 } 
 
}
  
//anagram checker
function verify(){
    var l = document.getElementById('verify').value;
    
if (l == "") {
    alert("String can't be blank");
    return false;
}
    for(let i=0;i<l.length;i=i+1){
        if(l[i]!==l[l.length-i-1]){
            alert(l+"  is not a  palindrome");
            return false;
        }
        else{
              alert(l+"  is  a palindrome");
            return false;
        }
    }

}
function ana2(){
    var s1 = document.getElementById('ana1').value;
    var s2= document.getElementById('ana2').value;
    if (s1 == "") {
    alert("String can't be blank");
    return false;
}
    if (s2 == "") {
    alert("String can't be blank");
    return false;
}
    var sortStr1 = s1.split('').sort().join('');
var sortStr2 = s2.split('').sort().join('');
    if(sortStr1 === sortStr2){
        alert(" They are Anagram");
        return false;
    }
    else{
        alert("Not  an anagram");
        return false;
    }
    
}


//game task 4
/*function random1(){
    var a = Math.floor(Math.random() *999) ;
    document.getElementById("value1").value = a;
    return a;
}

function random2(){
    var b = Math.floor(Math.random() * 999 );
    document.getElementById("value2").value = b;
    return b;
}
function winner(a,b){

    var map = new Map();

    map.set(0,'Human');
    map.set(1,'Cockroach');
    map.set(2,'Nuclear Bomb');

    j = a % 3;
    k = b % 3;

    if (j == 0 && k == 0 || j == 1 && k == 1 ||  j == 2 && k == 2){
        document.getElementById("get2").innerHTML = map.get(0)+" Vs "+map.get(0);
        document.getElementById("get1").value = "Tie";
        return "Winner : Tie";
    }
    else if (j == 0 && k == 1 || j== 1 && k == 2  || j== 1 && k == 0) {
        document.getElementById("get2").innerHTML = map.get(0)+" Vs "+map.get(1);
        document.getElementById("get1").value = "Human";
        return "Winner : Human";
    }
    else if (j == 0 && k == 2 || j == 2 && k == 0 || j == 2 && k == 1) {
        document.getElementById("get2").innerHTML = map.get(0)+" Vs "+map.get(2);
        document.getElementById("get1").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else 
    {
        document.getElementById("get2").innerHTML = map.get(1)+" Vs "+map.get(2);
        document.getElementById("get1").value = "Cockroach";
        return "Winner : Cockroach";
    }
   /* else if (j== 1 && k == 0) {
        document.getElementById("get2").innerHTML = map.get(1)+" Vs "+map.get(0);
        document.getElementById("get1").value = "Human";
        return "Winner : Human"; 
    }
    else if (j == 1 && k == 1) {
        document.getElementById("get2").innerHTML = map.get(1)+" Vs "+map.get(1);
        document.getElementById("get1").value = "Tie";
        return "Winner : Tie";
    }
  /*  else if (j== 1 && k == 2) {
        document.getElementById("get2").innerHTML = map.get(1)+" Vs "+map.get(2);
        document.getElementById("get1").value = "Human";
        return "Winner : Human"; 
   } 
    
    else if (j == 2 && k == 0) {
        document.getElementById("get2").innerHTML = map.get(2)+" Vs "+map.get(0);
        document.getElementById("get1").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else if (j == 2 && k == 1) {
        document.getElementById("get2").innerHTML = map.get(2)+" Vs "+map.get(1);
        document.getElementById("get1").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else (j == 2 && k == 2) 
    {
        document.getElementById("get2").innerHTML = map.get(2)+" Vs "+map.get(2);
        document.getElementById("get1").value = "Tie";
        return "Winner : Tie";
    }
    */
   function game(){
	var a=Math.floor(Math.random()*999);
	var b=Math.floor(Math.random()*999);
	var list=["Human","Cockroach","Nuclear-Bomb"];
	var p=a%3;
	var q=b%3;
	var obj1=list[p];     
	var obj2=list[q];
	var winner="";
	if(obj1=="Cockroach"){
		if(obj2=="Human"){
			winner="Human";
		}
		else if(obj2=="Nuclear-Bomb"){
			winner="Cockroach";
		}
		else{
			winner="Tie";
		}
		}
	if(obj1=="Human"){
		if(obj2=="Cockroach"){
			winner="Human";
		}
		else if(obj2=="Nuclear-Bomb"){
			winner="Nuclear-Bomb";
		}
		else{
			winner="Tie";
		}
	}
	if(obj1=="Nuclear-Bomb"){
		if(obj2=="Human"){
			winner="Nuclear-Bomb"; 
		}
		else if(obj2=="Cockroach"){
			winner="Cockroach";
		}
		else{
			winner="Tie";
		}
	}
	document.getElementById("Object1").innerHTML="Object-1 is "+obj1;
	document.getElementById("Object2").innerHTML="Object-2 is "+obj2;
	document.getElementById("text1").value=a;
	document.getElementById("text2").value=b;
	return winner;
}


  
  