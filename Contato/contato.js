var inputs = [document.getElementById("nome"),document.getElementById("email"),document.getElementById("assunto")];

var alerta = document.getElementById("Concluido");


function enviar(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value = "";
    }
    alerta.style.display = "block";
    alerta.style.bottom = "25px";
    setTimeout(enviado,3000);
}
function enviado(){alerta.style.bottom = "-100px";};
