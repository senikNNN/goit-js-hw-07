const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
    form.reset();
  }
});
