function calcular() {
    var valor = parseFloat(document.getElementById("Valor").value.replace(',', '.'));
    var juros = parseFloat(document.getElementById("Juros").value.replace(',', '.'));
    var meses = parseInt(document.getElementById("Meses").value);

    var resultado = 0;

    resultado =  valor * Math.pow((1 + (juros/100)), meses);

    document.getElementById("resultado").value = resultado.toFixed(2);
}

function limpar(){
    document.getElementById("Valor").value = '';
    document.getElementById("Juros").value = '';
    document.getElementById("Meses").value = '';  
    document.getElementById("resultado").value = '';  
}

function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}