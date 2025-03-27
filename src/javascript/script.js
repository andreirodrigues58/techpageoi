// Função para formatar o número de telefone 
function formatarTelefone(input) {
    // Remove tudo que não for número
    var telefone = input.value.replace(/\D/g, '');

    // Adiciona a formatação com parênteses e traço
    if (telefone.length <= 2) {
        telefone = telefone.replace(/^(\d{2})/, '($1)');
    } else if (telefone.length <= 5) {
        telefone = telefone.replace(/^(\d{2})(\d{1})/, '($1) $2');
    } else if (telefone.length <= 10) {
        telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})/, '($1) $2$3-');
    } else {
        telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2$3-$4');
    }

    // Atualiza o campo de telefone com a formatação
    input.value = telefone;
}

// Função de validação do formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário se a validação falhar

    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var ingresso = document.getElementById("ingresso").value;

    // Verifica se todos os campos estão preenchidos
    if (nome === "" || email === "" || telefone === "" || ingresso === "") {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
    }

    // Expressão regular para validar o email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Expressão regular para validar o telefone
    var telefoneRegex = /\(\d{2}\)\s\d{5}-\d{4}/;
    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.");
        return;
    }

    // Se tudo estiver correto, redireciona para a página de pagamento
    window.location.href = 'pagamento.html';
}

// Função para ativar/desativar o menu mobile
document.getElementById("mobile_btn").addEventListener("click", function() {
    var mobileMenu = document.getElementById("mobile_menu");
    mobileMenu.classList.toggle("active"); // Alterna a classe 'active' para exibir ou esconder o menu
});
