const send = document.querySelector('form');
const body = document.querySelector('body');
const pop = document.createElement('div');
const psw = document.getElementById('psw');
const confirmPsw = document.getElementById('confirm_psw');

function validatePsw() {
  if (psw.value != confirmPsw.value) {
    confirmPsw.setCustomValidity(`Passwords don't match`);
  } else {
    confirmPsw.setCustomValidity('');
  }
}

psw.onchange = validatePsw;
confirmPsw.onkeyup = validatePsw;

body.appendChild(pop);

send.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/register', {
    method: 'POST',
    body: JSON.stringify({
      email: send.email.value,
      password: send.psw.value,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => {
      pop.textContent = response.message;
      if (response.message == 'Registration was succesful') {
        window.location.href = '/login';
      }
    });
});
