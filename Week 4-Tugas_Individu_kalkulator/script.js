const input1 = document.getElementById('numb1');
const input2 = document.getElementById('numb2');
const hasil = document.getElementById('hasil');
const btn_tambah = document.getElementById('btn-tambah');
const btn_kurang = document.getElementById('btn-kurang');
const btn_kali = document.getElementById('btn-kali');
const btn_bagi = document.getElementById('btn-bagi');
const btn_modulo = document.getElementById('btn-modulo');

btn_tambah.addEventListener('click', function () {
    let num1 = numb1.value;
    let num2 = numb2.value;
    hasil.value = Number(num1) + Number(num2);
});

btn_kurang.addEventListener('click', function () {
    let num1 = numb1.value;
    let num2 = numb2.value;
    hasil.value = Number(num1) - Number(num2);
});

btn_kali.addEventListener('click', function () {
    let num1 = numb1.value;
    let num2 = numb2.value;
    hasil.value = Number(num1) * Number(num2);
});

btn_modulo.addEventListener('click', function () {
    let num1 = numb1.value;
    let num2 = numb2.value;
    hasil.value = Number(num1) % Number(num2);
});


btn_bagi.addEventListener('click', function () {
    let num1 = numb1.value;
    let num2 = numb2.value;
    hasil.value = Number(num1) / Number(num2);
});
