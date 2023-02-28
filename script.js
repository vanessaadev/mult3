function verifica() {
    let num = document.getElementById('numero').value;
    let numInt = Number(num);

    //condição
    if (numInt%2 == 0) {
        alert("é par");
    } else {
        alert("é ímpar");
    }
}