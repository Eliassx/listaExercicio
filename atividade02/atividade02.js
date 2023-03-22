const carName = document.getElementById('text');
let carPrice = document.getElementById('price');

let carProhibited;
let carPortion;
function converter() {
    parseFloat(carProhibited = carPrice.value * 0.5);
    parseFloat(carPortion = carProhibited / 12);

    document.getElementById('result-car').innerHTML = ` Veículo: ${carName.value}`;
    document.getElementById('result-price').innerHTML = `Entrada de R$ ${carProhibited}`;
    document.getElementById('result-portion').innerHTML = `12x de R$ ${carPortion.toFixed(2)}`
}