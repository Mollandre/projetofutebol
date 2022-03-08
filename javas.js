


function Confirmar (){
    var cor1 = document.getElementById("time1")
    var cor2 = document.getElementById("time2")
    var displaytext1 = cor1.options[cor1.selectedIndex].text
    var displaytext2 = cor2.options[cor2.selectedIndex].text
    var placar1 = document.getElementById("tim1")
    var placar2 = document.getElementById("tim2")
    var lista = document.getElementById("time3")
    
    if(displaytext1 == displaytext2){
        alert('!!ERRO TIMES IGUAIS TENTE NOVAMENTE!!')
    }
    else if(placar1.value > 2 || placar2 > 2  ){
       alert ('erro')
    }
    else{
        var item = document.createElement("option")
        item.text = `${displaytext1} ${placar1.value} X ${placar2.value} ${displaytext2}`
        lista.appendChild(item)
    }

}


