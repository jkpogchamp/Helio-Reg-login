const send = document.querySelector('form');
const body = document.querySelector('body');
const pop = document.createElement('div');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const confirmPsw = document.getElementById('confirm_psw');

function validateEmail() {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(email.value)) {
    return;
  } else {
    alert('You have entered an invalid e-mail adress');
  }
}

function validatePsw() {
  if (psw.value != confirmPsw.value) {
    confirmPsw.setCustomValidity(`Passwords don't match`);
  } else if (psw.value.toString().length < 8) {
    psw.setCustomValidity('Password should be at least 8 characters');
  } else {
    confirmPsw.setCustomValidity('');
  }
}

email.onchange = validateEmail;
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
