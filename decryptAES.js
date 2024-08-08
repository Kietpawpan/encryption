/* Copyright (c) 2024 by Monte Kietpawpan
 * encrypt.js | v1.0.7 August 8, 2024 
 * MIT License */


function setH() {
$(document).on('input', 'textarea', function () {
        $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height
    }); 
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


function clearAll(){
document.getElementById('key2').value ="";
document.getElementById('data2').value ="";
document.getElementById('data3').value ="";
document.getElementById('3').innerHTML ="";
	
}



function copy3(){
  const element = document.querySelector("#data3");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.setSelectionRange(0, 0);
  var popup = document.getElementById("c3");
  popup.innerHTML ="<b><font color='RoyalBlue'>Copied!</font></b>";
  setTimeout(function () {
  popup.innerHTML ="<i class='fa fa-clone' onclick='copy2()'></i>";}, 1200);

}


