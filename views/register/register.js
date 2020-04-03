const send = document.querySelector('form');
const body = document.querySelector('body');
const pop = document.createElement('div');
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