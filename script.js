buttonCalcular.onclick=function(){
    var media=parseFloat(nota1.value.replace(',','.'))+parseFloat(nota2.value.replace(',','.'))+parseFloat(nota3.value.replace(',','.'));
    var mediaGeral=media/3;
    alert(mediaGeral);   

}