

//Function

/*function myFunction() {
  document.getElementById("change").innerHTML = "Hello World";
  document.getElementById("change").style.color = "red";
}
  */

//Function

/*function myFunction(a,b){
    
    document.write(a+b)
    
    document.write(a-b)
    ==
    document.write(a*b)

    document.write(a/b)

}

myFunction(10,6) */





/*var data = '123456789';
var user = '123456789';

if (data == user) {
  document.write("Login Successful");
} else {
  document.write("Password Wrong");
}
  */



function digitalClock(){

  var d = new Date();

  var h = d.getHours();

  var m = d.getMinutes();

  var s = d.getSeconds();

  var ampm = h >= 12 ? "(PM)" : "(AM)";
   
  if (h>12){
    h = h-12
  }

  if (h < 10) {
  h = "0" + h;
}

 if (m < 10) {
  m = "0" + m;
}

if (s < 10) {
  s = "0" + s;
}

 
  document.getElementById("display").innerHTML=h+":"+m+":"+s+ ampm;
}

setInterval(digitalClock,1000)

