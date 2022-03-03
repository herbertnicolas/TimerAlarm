var display = document.getElementById('display');

var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var start = document.getElementById('start');

var tictac;
var horaAtual;
var minutoAtual;
var segundoAtual;

for(var i = 0; i <= 24; i++){
    hours.innerHTML += '<option value="'+i+'">'+i+'</option>';
}

for(var i = 0; i <= 60; i++){
    minutes.innerHTML += '<option value="'+i+'">'+i+'</option>';
}

for(var i = 0; i <= 60; i++){
    seconds.innerHTML += '<option value="'+i+'">'+i+'</option>';
}

start.addEventListener('click', function(){ 
    horaAtual = hours.value;
    minutoAtual = minutes.value;
    segundoAtual = seconds.value;

    display.childNodes[1].innerHTML = horaAtual + ":" + minutoAtual + ":" + segundoAtual;

    tictac = setInterval(function(){
        segundoAtual--;
        
        /*if((horaAtual && minutoAtual && segundoAtual) == 0){
            break;
        }*/
        if(segundoAtual <= 0){
            if(minutoAtual <= 0){
                if(horaAtual > 0){
                    horaAtual--;
                    minutoAtual=59;
                }
                if(horaAtual == 0){
                    alert("The time is over.");
                    document.getElementById("somAlarme").play();
                    clearInterval(tictac);
                }
            }else{
                minutoAtual--;
                segundoAtual = 59;
            }
        }
    },1000);
});
