const yesYes = document.getElementById('Trap'); 
const noNo = document.getElementById('Mulher');
const esperando = document.getElementById('espe');
const norm = document.getElementById('Normal');

function yesyes () {
    esperando.src = './img/yes.gif';
}

function nono () {
    esperando.src = './img/no.gif';
}

function none () {
    esperando.src = './img/esperando.gif'
}

yesYes.addEventListener('click', yesyes);
noNo.addEventListener('click', nono);
norm.addEventListener('click', none);

// Isto não é um projeto serio!
