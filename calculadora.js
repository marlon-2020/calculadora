var numero = document.getElementsByClassName("numero")
var tela = document.getElementsByClassName("tela")
var operacao = document.getElementsByClassName("operacao")
var calculo_um = ""
var calculo_dois = ""
var flag = false
var flag_resultado = false
var resultado = 0
console.log(numero)


for(let i=0;i<numero.length;i++){
    numero[i].addEventListener("click", ()=>{
        if(flag==false && tela[0].value.length<10){
            if(i==0){
                calculo_um+=7
                tela[0].value=calculo_um
            }
            if(i==1){
                calculo_um+=8
                tela[0].value=calculo_um
            }
            if(i==2){
                calculo_um+=9
                tela[0].value=calculo_um
            }
            if(i==3){
                calculo_um+=4
                tela[0].value=calculo_um
            }
            if(i==4){
                calculo_um+=5
                tela[0].value=calculo_um
            }
            if(i==5){
                calculo_um+=6
                tela[0].value=calculo_um
            }
            if(i==6){
                calculo_um+=1
                tela[0].value=calculo_um
            }
            if(i==7){
                calculo_um+=2
                tela[0].value=calculo_um
            }
            if(i==8){
                calculo_um+=3
                tela[0].value=calculo_um
            }
            if(i==10){
                calculo_um+=0
                tela[0].value=calculo_um
            }
        }
    })
}
for (let i = 0; i < operacao.length-1; i++) {
    operacao[i].addEventListener("click", ()=>{
        if(tela[1].value.length<1){
            flag = true
            if(i==0){
                tela[1].value="+"
            }
            if(i==1){
                tela[1].value="-"
            }
            if(i==2){
                tela[1].value="/"
            }
            if(i==3){
                tela[1].value="x"
            }
        }
    })
    
}
for(let i=0;i<numero.length;i++){
    numero[i].addEventListener("click", ()=>{
        if(flag==true && tela[1].value.length==1 && tela[2].value.length<10 && flag_resultado==false){
            if(i==0){
                calculo_dois+=7
                tela[2].value=calculo_dois
            }
            if(i==1){
                calculo_dois+=8
                tela[2].value=calculo_dois
            }
            if(i==2){
                calculo_dois+=9
                tela[2].value=calculo_dois
            }
            if(i==3){
                calculo_dois+=4
                tela[2].value=calculo_dois
            }
            if(i==4){
                calculo_dois+=5
                tela[2].value=calculo_dois
            }
            if(i==5){
                calculo_dois+=6
                tela[2].value=calculo_dois
            }
            if(i==6){
                calculo_dois+=1
                tela[2].value=calculo_dois
            }
            if(i==7){
                calculo_dois+=2
                tela[2].value=calculo_dois
            }
            if(i==8){
                calculo_dois+=3
                tela[2].value=calculo_dois
            }
            if(i==10){
                calculo_dois+=0
                tela[2].value=calculo_dois
            }
        }
    })
}
operacao[4].addEventListener("click",()=>{
    if(tela[1].value=="+" && flag_resultado==false){
        flag_resultado=true
        resultado=`RES = ${Number(tela[0].value)+Number(tela[2].value)}`
        tela[0].value=resultado
        tela[1].value=""
        tela[2].value=""
    }
    if(tela[1].value=="-" && flag_resultado==false){
        flag_resultado=true
        resultado=`RES = ${Number(tela[0].value)-Number(tela[2].value)}`
        tela[0].value=resultado
        tela[1].value=""
        tela[2].value=""
    }
    if(tela[1].value=="/" && flag_resultado==false){
        flag_resultado=true
        resultado=`${Number(tela[0].value)/Number(tela[2].value)}`
        if(resultado != "NaN"){
            tela[0].value="RES = "+resultado

        }else{
            tela[0].value="Error"
        }
        tela[1].value=""
        tela[2].value=""
    }
    if(tela[1].value=="x" && flag_resultado==false){
        flag_resultado=true
        resultado=`RES =  ${Number(tela[0].value)*Number(tela[2].value)}`
        if(Number(tela[0].value)*Number(tela[2].value)>99999999999999){
            tela[0].value="RES = 99999999999999+"
        }else{
            tela[0].value=resultado
        }
        tela[1].value=""
        tela[2].value=""
    }
})
numero[11].addEventListener("click",()=>{
    flag=false
    flag_resultado=false
    tela[0].value=""
    tela[1].value=""
    tela[2].value=""
    calculo_um=""
    calculo_dois=""
    resultado=0
})