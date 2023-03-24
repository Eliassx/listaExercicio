const medicineName = document.getElementById('medicine');
let medicinePrice = document.getElementById('price');
let resultPrice;

function converter() {
    resultPrice = Math.round(medicinePrice.value * 2);

    document.getElementById('result-title').innerHTML = `Promoção da ${medicineName.value}`
    document.getElementById('result-price').innerHTML = `Leve 2 por apenas R$ ${resultPrice}`
};