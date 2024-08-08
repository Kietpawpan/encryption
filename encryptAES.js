/* Copyright (c) 2024 by Monte Kietpawpan
 * encrypt.js | v1.0.7 August 8, 2024 
 * MIT License */


function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
}



function c(){
var a = sha3_512(document.getElementById('1').value);
var plaintext = document.getElementById('n').value;
var encrypted = CryptoJS.AES.encrypt(plaintext, a);
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
document.getElementById('n').value ="";
document.getElementById('1').value ="";

}



