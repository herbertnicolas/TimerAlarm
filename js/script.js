let display = document.getElementById('display');

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let start = document.getElementById('start');

let tictac;
let horaAtual;
let minutoAtual;
let segundoAtual;

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
                    segundoAtual=59;                  
                }
                if(horaAtual && minutoAtual && segundoAtual == 0){
                    clearInterval(tictac);
                    document.getElementById("somAlarme").play();
                    alert("The time is over.");
                }
            }else{
                minutoAtual--;
                segundoAtual = 59;
            }
        }
        //repetindo display para atualizar a cada segundo
        display.childNodes[1].innerHTML = horaAtual + ":" + minutoAtual + ":" + segundoAtual;
    },1000);
});
