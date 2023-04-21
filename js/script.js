const forms = document.querySelectorAll('.right form > section');
const steps = document.querySelectorAll('.left ul .step h1');
const cards = document.querySelectorAll('.card h3');

const goBack = document.querySelector('#back-step');
const goNext = document.querySelector('#next-step');

function mudaFormulario(valor) {
  forms.forEach(valorForm => {
    valorForm.style.display = valorForm === forms[valor] ? 'flex' : 'none';
  })
}

function mudaStep(valor) {
  steps.forEach(valorStep => {
    valorStep.style.color = valorStep === steps[valor] ? '#000' : '#fff';
    valorStep.style.backgroundColor = valorStep === steps[valor] ? '#fff' : 'transparent';
  })
}

const ball = document.querySelector('.selector');
function alteraPlano() {
  ball.style.justifyContent = ball.style.justifyContent === 'left' ? 'right' : 'left';
  if (ball.style.justifyContent === 'right') {
    cards[0].innerHTML = `$90/yr`
    const p0 = document.createElement('p');
    p0.innerHTML = `Two months free`;
    cards[0].appendChild(p0);

    cards[1].innerHTML = `$120/yr`
    const p1 = document.createElement('p');
    p1.innerHTML = `Two months free`;
    cards[1].appendChild(p1);

    cards[2].innerHTML = `$150/yr`
    const p2 = document.createElement('p');
    p2.innerHTML = `Two months free`;
    cards[2].appendChild(p2);
  } else {
    cards[0].innerHTML = `$9/mo`
    cards[1].innerHTML = `$12/mo`
    cards[2].innerHTML = `$15/mo`
  }
}

function validaPrimeiroPasso() {
  let flag = true;
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const number = document.querySelector('#number');

  const paragrafo = document.querySelectorAll('.error')

  const arrayDeVerificacao = [name, email, number];
  arrayDeVerificacao.forEach((valor, indice) => {
    paragrafo[indice].innerHTML = '';
    if (valor.value === '') {
      paragrafo[indice].innerHTML = 'The field is required';
      flag = false;
    }
  })
  return flag;
}

function criaConclusao() {
  const plano = document.querySelector('#plano');
  const planoElement = document.querySelector('.card input[type="radio"]:checked + label h1');
  plano.innerHTML = planoElement.textContent;

  const preco = document.querySelector('#preco');
  const precoElement = document.querySelector('.card input[type="radio"]:checked + label h3');
  preco.innerHTML = precoElement.textContent.replace(/[^0-9]/g, "");

  const adicionais = document.querySelectorAll('input[type="checkbox"]:checked + label > .wraper > h2');
  const exibir = document.querySelector('#adicional');
  const adicionaisPreco = document.querySelectorAll('input[type="checkbox"]:checked + label > p')
  const exibirPreco = document.querySelector('#adicionalPreco');
  exibir.innerHTML = '';
  exibirPreco.innerHTML = '';
  adicionais.forEach((valor,indice) => {
    exibir.innerHTML += `${valor.textContent}</br>`;
    exibirPreco.innerHTML += `${adicionaisPreco[indice].textContent}</br>`;
  })
  
  // .replace(/[^0-9]/g, "")
}

let formExibido = 0;
document.addEventListener('click', e => {
  if (e.target.id === 'next-step') {
    if (validaPrimeiroPasso()) {
      formExibido++;
      if (formExibido > 3) formExibido = 3;
      goBack.style.display = formExibido > 0 ? 'flex' : 'none';
      goNext.innerHTML = formExibido === 3 ? 'Confirm' : 'Next Step';

      mudaFormulario(formExibido);
      mudaStep(formExibido);

      if(formExibido === 3) criaConclusao();
    }
 
  };

  if (e.target.id === 'back-step') {
    formExibido--;
    if (formExibido < 0) formExibido = 0;
    goBack.style.display = formExibido > 0 ? 'flex' : 'none';
    goNext.innerHTML = formExibido === 3 ? 'Confirm' : 'Next Step';

    mudaFormulario(formExibido);
    mudaStep(formExibido);
  };

  if (e.target.id === 'ball') {
    alteraPlano();
  }

})