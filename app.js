var x=3;
var y=4.3;

console.log(x);
console.log(y);

var name="Preethi";
console.log(name);

var noval=null;
console.log(noval);

var z;
console.log(z);

console.log(x+name);

console.log(x+y);

function random(){
 z=Math.random();  
 document.getElementById("random").innerHTML=z;
}

function round(){
    z=Math.round(y);
    document.getElementById("round").innerHTML=z;
}

function ceil(){
    z=Math.ceil(y);
    document.getElementById("ceil").innerHTML=z;
}

function floor(){
    z=Math.floor(y);
    document.getElementById("floor").innerHTML=z;
}

function pow(){
    z=Math.pow(5,2);
    document.getElementById("pow").innerHTML=z;  
}

function sqrt(){
    z=Math.sqrt(225);
    document.getElementById("sqrt").innerHTML=z;  
}

function PI(){
  z=Math.PI;
  document.getElementById("PI").innerHTML=z;   
}
















