
Init();
function Init(){
    statusdivI("result__button","none")
    document.getElementById("usertxt").value="";
}
function Encrypt() {
    const format = /[!-\/:-@[-`{-~]/;
    const acents = /[áéíóúÁÉÍÓÚüÜàèìòùÀÈÌÒÙ]/
    let text=ValueText("usertxt");
    if (text===""){
        styleError("Por favor, ingrese un texto para desencriptar")

    }else if (text!==text.toLowerCase()){
        styleError("Por favor, ingrese un texto en minúsculas")

    }else if (acents.test(text)){
        styleError("Por favor, ingrese un texto sin acentos")
        console.log(acents.test(text));

    }else if (format.test(text)){
        styleError("Por favor, ingrese un texto sin caracteres especiales")


    }else
    {
        document.getElementById("result__button").style.display="none";
        text= text.replace(/e/g,"enter");
        text= text.replace(/i/g,"imes");
        text= text.replace(/a/g,"ai");
        text= text.replace(/o/g,"ober");
        text= text.replace(/u/g,"ufat");
        styleSuccess("Texto Encriptado",text);
        statusdivI("result__button","block");
    }

}


function Decrypt() {
    const format = /[!-\/:-@[-`{-~]/;
    const acents = /[áéíóúÁÉÍÓÚüÜàèìòùÀÈÌÒÙ]/
    let text=ValueText("usertxt");
    if (text===""){
        styleError("Por favor, ingrese un texto para desencriptar")

    }else if (text!==text.toLowerCase()){
        styleError("Por favor, ingrese un texto en minúsculas")

    }else if (acents.test(text)){
        styleError("Por favor, ingrese un texto sin acentos")
        console.log(acents.test(text));

    }else if (format.test(text)){
        styleError("Por favor, ingrese un texto sin caracteres especiales")

    }else {
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");
        console.log(text);
        styleSuccess("Texto Desencriptado",text);
        statusdivI("result__button","block");
    }
}
function styleSuccess(message,text){
    statusdivI("result__im","none");
    AsignTextElement("result_title",message);
    AsignTextElement("resultText",text);
}
function styleError(message){
    statusdivI("result__im","block");
    AsignImageElement("result__img","../assets/warning.svg");
    AsignTextElement("result_title","Error");
    AsignTextElement("resultText",message);
}


function CopyText() {
    let text = document.getElementById("resultText").textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert("Texto copiado");
    } , function() {
        alert("Error al copiar el texto");
    });
}
function ValueText(elemento) {
    return document.getElementById(elemento).value;
}
function statusdivI(elemento,status) {
    document.getElementById(elemento).style.display = status;
}

function AsignImageElement(elemento,imagen) {
    let elementhtml=document.getElementById(elemento);
    elementhtml.src=imagen;
}
function AsignTextElement(elemento,texto) {
    let elementhtml=document.getElementById(elemento);
    elementhtml.innerHTML=texto;
}
