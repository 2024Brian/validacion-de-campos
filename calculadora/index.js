function numero1() {
    dato1=document.getElementById("dato1").value
    dato1=Number.parseFloat(dato1)
}

function numero2(){
    dato2=document.getElementById("dato2").value
    dato2=Number.parseFloat(dato2)
    resultado=document.getElementById("resultado")
    
}

function resta(){
    const resultado= dato1-dato2
    document.getElementById('resultado').value = resultado;
}

function suma(){
    const resultado= dato1+dato2
    document.getElementById('resultado').value = resultado;
}

function multiplicacion(){
    const resultado= dato1*dato2
    document.getElementById('resultado').value = resultado;
}

function division(){
    const resultado= dato1/dato2
    document.getElementById('resultado').value = resultado;
}