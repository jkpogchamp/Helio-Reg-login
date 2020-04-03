const send = document.querySelector('form');
const body = document.querySelector('body');
const pop = document.createElement('div');
body.appendChild(pop);

send.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/login', {
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
      if (response.message) {
        pop.textContent = response.message;
        return;
      }
      localStorage.setItem('token', response.jwt);
      window.location.href = '/home';
    });
});