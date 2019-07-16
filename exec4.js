var gerar = window.document.getElementById("gerar");
gerar.addEventListener("click", Tabuada);
function Tabuada() {
    var valor =window.document.getElementById("valor1");
    var select = window.document.getElementById("select1");
    var resultado;
    if (valor.value.length == 0) {
        window.alert("Por favor digite um número");
    }
    else {
        select.innerHTML ="";
        valor = Number(valor.value);
        for (var i = 1; i <= 10; i++) {
            var option = window.document.createElement("option");
            option.setAttribute("value",`v${i}`);
            resultado = valor * i;
            option.innerHTML = `${valor} X ${i} = ${resultado}`
            select.appendChild(option);
        }
    }
}
