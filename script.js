// Seleciona todos os botões de próxima etapa
const botoesProximo = document.querySelectorAll('.btn-proximo');

// Adiciona o evento de clique para alternar entre os passos
botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        const passoAtual = document.querySelector('.ativo'); // Obtém o passo atual
        const idProximoPasso = 'passo-' + this.getAttribute('data-proximo'); // ID do próximo passo

        passoAtual.classList.remove('ativo'); // Remove a classe "ativo" do passo atual
        const proximoPasso = document.getElementById(idProximoPasso); // Obtém o próximo passo
        proximoPasso.classList.add('ativo'); // Adiciona a classe "ativo" ao próximo passo
    });
});
