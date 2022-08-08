document.getElementById("fto").src = "imagens/GaleryInicial/Ft"+0+".png";
document.getElementById("b"+0).style.background = "#4064c9";
document.getElementById("b"+0).style.height = "35px";
document.getElementById("b"+0).style.width = "35px";
var atual = 0;
var st = false;
function troca(ima){
    if(ima != atual){
        document.getElementById("b"+atual).style.background = "rgb(95, 95, 95)";
        document.getElementById("b"+atual).style.width = "25px";
        document.getElementById("b"+atual).style.height = "25px";
        document.getElementById("fto").src ="imagens/GaleryInicial/Ft"+ima+".png"
        document.getElementById("b"+ima).style.background = "#4064c9";
        document.getElementById("b"+ima).style.height = "35px";
        document.getElementById("b"+ima).style.width = "35px";

        atual = ima;

        if(st == true){
            st = false;
            document.getElementById("fto").style.transform ="rotate(5deg) scale(1)";
            
        }else{
            document.getElementById("fto").style.transform ="rotate(-5deg)";
            st=true;}
    }
}