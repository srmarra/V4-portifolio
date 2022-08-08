var Bp = [document.getElementById("Bpro1"), document.getElementById("Bpro2"), document.getElementById("Bpro3"), document.getElementById("Bpro4")];

function desabilitar(){
    for(var i=0;i<Bp.length;i++){
        Bp[i].style.display = "none";
    }
}
desabilitar();
Bp[0].style.display = "block";

function Habilitar(Qual){
    desabilitar();
    Bp[Qual].style.display= "block";
}