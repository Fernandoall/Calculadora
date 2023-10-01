function soma(){
    const number = +document.getElementById('number').value;
    const number1 = +document.getElementById('number1').value;
    const resultado = document.getElementById('paragrafo');
    let soma = somando(number, number1)

    resultado.innerHTML = (`O produto de ${number} + ${number1} é igual a: ${soma}`)
}

function somando(number, number1){
    return number + number1;
}

function subtrai(){
    const numberSub = +document.getElementById('numberSub').value;
    const number1Sub = +document.getElementById('number1Sub').value;
    const resultado1 = document.getElementById('paragrafo1');
    let subtrai = subtraindo(numberSub, number1Sub);

    resultado1.innerHTML = (`O produto de ${numberSub} - ${number1Sub} é igual a: ${subtrai}`)
}

function subtraindo(numberSub, number1Sub){
    return numberSub - number1Sub;
}

function multiplica(){
    const numberMult = document.getElementById('numberMult').value;
    const number1Mult = document.getElementById('number1Mult').value;
    const resultado2 = document.getElementById('paragrafo2');
    let multiplica = multiplicando(numberMult, number1Mult);

    resultado2.innerHTML = (`O produto de ${numberMult} * ${number1Mult} é igual a: ${multiplica}`)
}

function multiplicando(numberMult, number1Mult){
    return numberMult * number1Mult;
}

function dividi(){
    const numberDiv = document.getElementById('numberDiv').value;
    const number1Div = document.getElementById('number1Div').value;
    const resultado3 = document.getElementById('paragrafo3');
    let divisao = dividindo(numberDiv, number1Div);

    resultado3.innerHTML = (`O produto de ${numberDiv} / ${number1Div} é igual a: ${divisao}`)
}

function dividindo(numberDiv, number1Div){
    return numberDiv / number1Div;
}