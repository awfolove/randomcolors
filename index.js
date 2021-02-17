document.getElementById("button").onclick = function(){

var color ="#" + Math.round(Math.random() * 0xffffff).toString(16);

document.getElementById("square").style.backgroundColor = color;
       
document.getElementById("colorcode").innerHTML = color; 


var color2 ="#" + Math.round(Math.random() * 0xffffff).toString(16);

document.getElementById("square2").style.backgroundColor = color2;
       
document.getElementById("colorcode2").innerHTML = color2; 
    
var color3 ="#" + Math.round(Math.random() * 0xffffff).toString(16);

document.getElementById("square3").style.backgroundColor = color3;
       
document.getElementById("colorcode3").innerHTML = color3;     
    
    
    if(document.querySelector('input[name="radio1"]:checked').value == "1"){
        
        
        var color4 ="#" + (Math.round(Math.random() * 0x30 + 207)).toString(16) + (Math.round(Math.random() * 0x20 + 223)).toString(16) + (Math.round(Math.random() * 0x20 + 223)).toString(16);

document.getElementById("square").style.backgroundColor = color4;
       
document.getElementById("colorcode").innerHTML = color4; 


var color5 ="#" + (Math.round(Math.random() * 0x21 + 223)).toString(16) + (Math.round(Math.random() * 0x20 + 223)).toString(16) + (Math.round(Math.random() * 0x20 + 223)).toString(16);

document.getElementById("square2").style.backgroundColor = color5;
       
document.getElementById("colorcode2").innerHTML = color5; 
    
var color6 ="#" + (Math.round(Math.random() * 0x21 + 223)).toString(16) + (Math.round(Math.random() * 0x20 + 223)).toString(16) + (Math.round(Math.random() * 0x20 + 223)).toString(16);

document.getElementById("square3").style.backgroundColor = color6;
       
document.getElementById("colorcode3").innerHTML = color6;    
        
        
    };
    
    
    
    };


var checkedId;
for (var i =1; i<4; i++) {
    document.getElementById("radio"+i).onclick = (function (no) {
        return function() {
            var radio = document.getElementById("radio"+no);
            if (checkedId == radio.getAttribute("id")) {
                radio.checked = false;
                checkedId = null;
            } else {
                checkedId = radio.getAttribute("id");
            }
        }
    }(i));
}




