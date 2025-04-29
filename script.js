function aumentarFont(){
    document.body.style.fontSize =
    parseFloat(getComputedStyle(document.body).fontSize) + 5 + "px";
    
}
function aumentarFont(){
    document.querySelectorAll("*").forEach(function(el){
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual + 5) + "px"
    }    );
}
function diminuirFont(){
    document.body.style.fontSize =
    parseFloat(getComputedStyle(document.body).fontSize) - 5  + "px";
    
}
function diminuirFont(){
    document.querySelectorAll("*").forEach(function(el){
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual - 5) + "px"
    }    );
}function ativarContraste() {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    localStorage.setItem("contrasteAtivo", "true");
    document.body.style.backgroundColor = "black";
}

function desativarContraste() {
    document.body.style.filter = "none";
    localStorage.setItem("contrasteAtivo", "false");
    document.body.style.backgroundColor = "white";
}

window.addEventListener("load", function () {
    const contrasteAtivo = localStorage.getItem("contrasteAtivo");
    if (contrasteAtivo === "true") {
        ativarContraste();
    } else {
        desativarContraste();
    }
});


