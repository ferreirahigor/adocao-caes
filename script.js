// ouça o evento de envio do formulário
document.getElementById("contact-form").addEventListener("submit", function (event) {
    // pare o envio do formulário
    event.preventDefault();

    // obtenha os campos de entrada do formulário
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    // verifique se os campos são válidos
    if (nameInput.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity()) {
        // enviar o formulário aqui
        alert("Sua mensagem foi enviada com sucesso! Em breve iremos contactá-lo!");
    } else {
        // exibir mensagens de erro aqui
        alert("Por favor, preencha todos os campos corretamente.");
    }
});


// informações sobre os cães
const maisInformacoesButtons = document.querySelectorAll('.mais-informacoes');

maisInformacoesButtons.forEach(function (button) {
    const informacoesAdicionais = button.nextElementSibling;

    button.addEventListener('click', function () {
        if (informacoesAdicionais.style.display === 'none') {
            informacoesAdicionais.style.display = 'block';
            button.textContent = 'Menos informações';
        } else {
            informacoesAdicionais.style.display = 'none';
            button.textContent = 'Mais informações';
        }
    });
});
