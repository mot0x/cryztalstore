// Prevent default for form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Obrigado! A sua mensagem foi enviada.");
  this.reset();
});
