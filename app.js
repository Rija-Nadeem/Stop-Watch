var min=0;
var sec=0;
var msec=0;
var html_min= document.getElementById("min");
var html_sec= document.getElementById("sec");
var html_msec= document.getElementById("msec");
var btn=document.getElementById('start-btn');
// var m_ten=document.getElementById("m-ten");
// var m_unit=document.getElementById("m-unit");
// var s_ten=document.getElementById("s-ten");
// var s_unit=document.getElementById("s-unit");
// var ms_hundred=document.getElementById("ms-hundred");
// var ms_ten=document.getElementById("ms-ten");
// var ms_unit=document.getElementById("ms-unit");

var interval;

function time(){
    var milliseconds;
    var seconds;
    var minutes;
    msec++;
    if(msec<=9 && msec>=0){
        milliseconds= '0'+msec
    }else{
        milliseconds= msec
    }
    html_msec.innerText=milliseconds;
   if(msec==99){
       msec=0;
       sec++;
       if(sec<=9 && sec>=0){
        seconds= '0'+sec;
        }else{
            seconds= sec
        }
       html_sec.innerText= seconds;
   }else if(sec==59){
       sec=0;
       min++;
       if(min<=9 && min>=0){
        minutes= '0'+min
        }else{
            minutes= min
        }
       html_min.innerText= minutes;
   }

}
function start(){
    interval= setInterval(time, 10);
    btn.setAttribute('disabled',true);
    console.log(btn)
    
}
function pause(){
    clearInterval(interval);

    btn.removeAttribute('disabled');
    console.log(btn)
}
function reset(){
    min='00';
    sec='00';
    msec='00';
    html_min.innerText= min;
    html_sec.innerText= sec;
    html_msec.innerText= msec;
    clearInterval(interval);
    btn.removeAttribute('disabled');
    console.log(btn)
}