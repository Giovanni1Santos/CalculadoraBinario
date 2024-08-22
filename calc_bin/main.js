const calcular = document.getElementById('calcular');


function bin(){
    let decimal = document.getElementById('decimal').value;
    const resultado = document.getElementById('resultado');
    if (decimal !== '') {
        decimal = Number(decimal);
        let binario = '';
        while (decimal > 0) {
            binario = (decimal % 2) + binario;
            decimal = Math.floor(decimal / 2);
        }
        resultado.textContent = binario; 
       
    }else {
        alert ('É obrigatório o preenchimento do campo decimal!'); 
    }
}
calcular.addEventListener('click', bin);