const restaurantPrice = document.getElementById('price');
const cosumptionWeight = document.getElementById('weight');
let transform;
let result;

function converter() {
    parseFloat(transform = cosumptionWeight.value / 1000);
    parseFloat(result = transform * restaurantPrice.value);

    document.getElementById('result-price').innerHTML = `Valor a pagar: R$ ${result.toFixed(2)}`
}