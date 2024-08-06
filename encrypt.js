/* Copyright (c) 2024 by Monte Kietpawpan
 * encrypt.js | v1.0.5 August 6, 2024 
 * MIT License */

/* CURSUR : https://codepen.io/bharat-gupta/pen/gZMOQO */
var cursor = true;
var speed = 300;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);

function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
}



function setHx() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
var key = document.getElementById('key1').value;
var b = getUTF8Length(key)*8;
var keyLength ="";
	if(b<16){keyLength='<font color="red"><i class="fa fa-warning "></i> < 16 byte long key!</font>';}
	else if(b<24){keyLength='<font color="green">16 byte long key</font>';}
	else if(b<32){keyLength='<font color="green">24 byte long key</font>';}
	else{keyLength='<font color="green">32 byte long key</font>';}

var aes ="";
	if(b<16){aes ='<font color="red"><i class="fa fa-unlock "></i> ENCRYPT</font>';}
	else if(b<24){aes='<i class="fa fa-lock "></i> AES-128';}
	else if(b<32){aes='<i class="fa fa-lock "></i> AES-192';}
	else{aes='<i class="fa fa-lock "></i> AES-256';}



document.getElementById('bit').innerHTML = keyLength;
document.getElementById('enc').innerHTML = aes;

}

function setPaste() {
   navigator.clipboard.readText()
	.then(text => {
        document.getElementById("data2").value=text;

});
}


function enc(){ /* crypto-js 4.2.0 */
document.getElementById("para").style.display = "block";
document.getElementById('t1').value="";
var plaintext = document.getElementById('data1').value;
var key = document.getElementById('key1').value;
var encrypted = CryptoJS.AES.encrypt(plaintext, key);
var load = document.getElementById('para');
/* document.getElementById('aes').scrollIntoView({behavior: 'smooth'});*/ 
var d =500;
var x = 300;
load.innerHTML ="_";

setTimeout(function () {
load.innerHTML ="";}, d);

setTimeout(function () {
load.innerHTML ="_";}, d+x);

setTimeout(function () {
load.innerHTML ="";}, 2*x+d);

setTimeout(function () {
load.innerHTML ="_";}, 3*x+d);

setTimeout(function () {
load.innerHTML ="Loading._";}, 4*x+d);

setTimeout(function () {
load.innerHTML ="Loading.";}, 5*x+d);

setTimeout(function () {
load.innerHTML ="Loading.._";}, 6*x+d);

setTimeout(function () {
load.innerHTML ="Loading..";}, 7*x+d);


setTimeout(function () {
load.innerHTML ="Loading.._";}, 8*x+d);

setTimeout(function () {
load.innerHTML ="Loading..._";}, 9*x+d);

setTimeout(function () {
load.innerHTML ="Loading...";}, 10*x+d);

setTimeout(function () {
load.innerHTML ="Loading...._";}, 11*x+d);

setTimeout(function () {
load.innerHTML ="Loading....";}, 12*x+d);

setTimeout(function () {
load.innerHTML ="Loading...._";}, 13*x+d);

setTimeout(function () {
load.innerHTML ="Loading....";}, 14*x+d);

setTimeout(function () {
load.innerHTML ="Loading...._";}, 15*x+d);


setTimeout(function () {
load.innerHTML ="Cipher block_";}, 16*x+d);

setTimeout(function () {
load.innerHTML = "Ready....";}, 17*x+d);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 CRYPTO-JS CBC_";}, d*10);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br><br> ENCRYPTION INPUTS Actual Key:  _";}, d*10+300);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key;}, d*10+600);


setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: _";}, d*12);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv;}, d*12+300);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: _";}, d*13);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: ";}, d*13+300);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: _";}, d*13+600);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt +"_";}, d*13+900);


setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0_";}, d*13+1200);


setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0 Encrypting_";}, d*15);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0 Encrypting ";}, d*15+300);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0 Encrypting_";}, d*15+600);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0 Encrypting";}, d*15+900);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0 Sucessfully encrypted.";}, d*15+1000);

setTimeout(function () {
load.innerHTML = "ADEVANCED ENCRYPTION STANDARD<br>ENCRYPT 72 v 1.0.0 Copyright &copy; 2024  MONTE KIETPAWPAN<br> ENCRYPTION INPUTS Actual Key:  " + encrypted.key + " iv: " + encrypted.iv +" salt: " + encrypted.salt + " AES-256 implementation with Crypto-js v 4.0.0 Sucessfully encrypted: " + encrypted + " <span id='cursor'>_</span>";}, d*15+1200);


setTimeout(function () {
document.getElementById('t1').value = encrypted;
document.getElementById('t1').style.height = document.getElementById('t1').scrollHeight + 'px';}, d*15+100); 

}


function dec(){
var encrypted = document.getElementById('data2').value;
var key = document.getElementById('key2').value;
var decrypted = CryptoJS.AES.decrypt(encrypted, key);
if(decrypted==""){
	document.getElementById('data3').value="";
	document.getElementById('3').innerHTML = "<center><font color='red'><i class='fa fa-exclamation-triangle '></i>	Incorrect private key or ciphertext!</font></center>";}
else{
	document.getElementById('data3').value = decrypted.toString(CryptoJS.enc.Utf8);
	document.getElementById('3').innerHTML ="<center><font color='RoyalBlue'><i class='fa fa-check-square '></i> Sucessfully decrypted!</font></center>";}
}

function hash(){
	let data = document.getElementById("data5").value;
	let hdata = sha3_512(data);
	document.getElementById("data4").value = hdata.toString();
	document.getElementById("data4").style.height = document.getElementById('data4').scrollHeight + 'px';
}



function copy1(){
  const element = document.querySelector("#t1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  var popup = document.getElementById("c2");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy1()'></i>";}, 1200);
 }
	
function copy2(){
  const element = document.querySelector("#data4");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  var popup = document.getElementById("c4");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy2()'></i>";}, 1200);

}

function copy3(){
  const element = document.querySelector("#data3");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  document.getElementById("3").innerHTML="";
  var popup = document.getElementById("c3");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy3()'></i>";}, 1200);

}

function copyPK(){
  const element = document.querySelector("#key1");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("c1");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copyPK()'></i>";}, 1200);
}



function copyGuid(){
  const element = document.querySelector("#data6");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  /* window.alert("Copied!"); */
  var popup = document.getElementById("r5");
  popup.classList.toggle("show");
 setTimeout(function() {
             popup.classList.toggle("hide");}, 1200);

}

function clearAll(){
document.getElementById('key1').value ="";
document.getElementById('key2').value ="";
document.getElementById('3').innerHTML ="";
document.getElementById('data1').value ="";
document.getElementById('t1').value ="";
document.getElementById('data2').value ="";
document.getElementById('data3').value ="";
document.getElementById('data4').value ="";
document.getElementById('data1').value ="";
document.getElementById('bit').innerHTML ="";
document.getElementById("message").style.display = "none";
document.getElementById('para').style.display = "none";
}


function guid(){
	function uuidv4() {
    	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    	.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    	});
	}
	const random_uuid = uuidv4();
	document.getElementById('data6').innerHTML = random_uuid;
}

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

/*http://stackoverflow.com/a/12206089/993683 
by @broofa)*/

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_password_val */
var myInput = document.getElementById("key1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var sp = document.getElementById("sp");

// When the user clicks on the password field, show the message box
myInput.oninput = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }


  // Validate numbers
  var numbers = /[0-9]/g; 
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


 // Validate special letters
    var spc = /[^a-zA-Z0-9]+/g;
    if(myInput.value.match(spc)) {  
    sp.classList.remove("invalid");
    sp.classList.add("valid");
  } else {
    sp.classList.remove("valid");
    sp.classList.add("invalid");
  }


}


