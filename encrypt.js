/* Copyright (c) 2024 by Monte Kietpawpan
 * encrypt.js | v1.0.4 August 4, 2024 
 * MIT License */


function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
}

function getUTF8Length() {
  var s = document.getElementById('key1').value;
  var len = 0;
  for (var i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i);
    if (code <= 0x7f) {
      len += 1;
    } else if (code <= 0x7ff) {
      len += 2;
    } else if (code >= 0xd800 && code <= 0xdfff) {
      // Surrogate pair: These take 4 bytes in UTF-8 and 2 chars in UCS-2
      // (Assume next char is the other [valid] half and just skip it)
      len += 4; i++;
    } else if (code < 0xffff) {
      len += 3;
    } else {
      len += 4;
    }
  }
  return len;
}

/* https://stackoverflow.com/a/64802091 Default key length and aes options*/

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
var message = document.getElementById('data1').value;
var key = document.getElementById('key1').value;
var encrypted = CryptoJS.AES.encrypt(message, key);
document.getElementById('t1').value = encrypted;
document.getElementById('t1').style.height = document.getElementById('t1').scrollHeight + 'px'; 
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
}


function clearHash(){
document.getElementById('data5').value ="";
document.getElementById('data4').value ="";
}

function clearGuid(){
document.getElementById('data6').value ="";
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

  
 
