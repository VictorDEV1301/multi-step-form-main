const forms = document.querySelectorAll('.right form');
const steps = document.querySelectorAll('.left ul .step h1');
const cards = document.querySelectorAll('.card h3');

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

function alteraPlano() {
  const ball = document.querySelector('.selector');
  ball.style.justifyContent = ball.style.justifyContent === 'left' ? 'right' : 'left';
  if (ball.style.justifyContent === 'right') {
    cards[0].innerHTML = `$90/yr`
    const p0 = document.createElement('p');
    p0.innerHTML = `2 months free`;
    cards[0].appendChild(p0);

    cards[1].innerHTML = `$120/yr`
    const p1 = document.createElement('p');
    p1.innerHTML = `2 months free`;
    cards[1].appendChild(p1);

    cards[2].innerHTML = `$150/yr`
    const p2 = document.createElement('p');
    p2.innerHTML = `2 months free`;
    cards[2].appendChild(p2);
  } else {
    cards[0].innerHTML = `$9/mo`
    cards[1].innerHTML = `$12/mo`
    cards[2].innerHTML = `$15/mo`
  }
}

let formExibido = 0;
document.addEventListener('click', e => {
  if (e.target.id === 'next-step') {
    formExibido++;
    if (formExibido > 3) formExibido = 3;

    mudaFormulario(formExibido);
    mudaStep(formExibido);
  };

  if (e.target.id === 'back-step') {
    formExibido--;
    if (formExibido < 0) formExibido = 0;

    mudaFormulario(formExibido);
    mudaStep(formExibido);
  };

  if (e.target.id === 'ball') {
    alteraPlano();
  }

})