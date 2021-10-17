

function clock(){ 
    let currentTime=new Date();

let hrs=currentTime.getHours();
let mins=currentTime.getMinutes();
let sec=currentTime.getSeconds();

document.getElementById("hours").innerHTML=hrs + ":";
document.getElementById("minutes").innerHTML=mins + ":";
document.getElementById("seconds").innerHTML=sec;


if(hrs<10){
    document.getElementById("hours").innerHTML= " 0 "+ hrs + ":";
};

if(mins<10){
    document.getElementById("minutes").innerHTML= " 0" + mins + ":";
};


if(sec<10){
    document.getElementById("seconds").innerHTML= " 0" + sec;

};

}


setInterval("clock()",500);
 










































































