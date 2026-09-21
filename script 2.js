const buttons = document.querySelectorAll('.gold');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent.includes('Join')) {
      alert('Soulaani waitlist coming next. This button is ready for the signup flow.');
    }
  });
});

document.querySelector('.menu')?.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
});
