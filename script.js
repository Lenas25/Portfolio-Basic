    const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    btn = body.querySelector('.toggle');

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('close');
  });