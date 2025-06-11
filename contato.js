function enviarFormulario() {
  alert("Mensagem enviada com sucesso!");
}
const form = document.getElementById('form-contato');
const mensagem = document.getElementById('mensagem-enviada');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  mensagem.style.display = 'block'; 
  form.reset(); 
});
