/* Copyright (c) 2024 by Monte Kietpawpan
 * encrypt.js | v1.0.7 August 8, 2024 
 * MIT License */


function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
}



function enc(){ 
var aes = document.getElementById('t1').value="";
plaintext = document.getElementById('data1').value="";
var key0 = "monte988";
var key = sha3_512(sha3_512(key0));
var encrypted = CryptoJS.AES.encrypt(plaintext, key);
document.getElementById('t1').value= encrypted;
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
	

function clearAll(){
document.getElementById('t1').value ="";
document.getElementById('data1').value ="";
}



