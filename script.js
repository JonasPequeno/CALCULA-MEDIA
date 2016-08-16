buttonCalcular.onclick=function(){
    var media=parseFloat(nota1.value.replace(',','.'))+parseFloat(nota2.value.replace(',','.'))+parseFloat(nota3.value.replace(',','.'));
    var mediaGeral=media/3;
    if (mediaGeral<4){
        resultado.innerHTML="Reprovado! Sua média é "+mediaGeral;  
    }
    if (mediaGeral>=4 && mediaGeral<7){
        var falta=(50-6*mediaGeral)/4;
        resultado.innerHTML="Você está na final! Sua média é "+mediaGeral+" e precisará de "+falta+" na final";
    }
    if(mediaGeral>=7){
        resultado.innerHTML="Aprovado! Sua média é "+mediaGeral;
    }
       

}
buttonLimpar.onclick=function(){
    nota1.value="";
    nota2.value="";
    nota3.value="";
    
}
