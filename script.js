// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÃO AO ROLAR A PÁGINA (Scroll Animation)
    // Seleciona os elementos que vão ganhar animação
    const elementsToAnimate = document.querySelectorAll('.card, .curso-item, .sobre-texto, .valores-box');
    
    // Configura o observador para detectar quando o elemento aparece na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    });

    // Aplica o estilo inicial e inicia a observação
    elementsToAnimate.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.6s ease-out";
        observer.observe(element);
    });


    // 2. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    const form = document.querySelector('.contato-form form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o recarregamento da página

            // Captura os dados digitados
            const nome = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const mensagem = form.querySelector('textarea').value;

            // Simulação de envio bem-sucedido
            if (nome && email && mensagem) {
                alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso para o Colégio Dario Velozo.`);
                form.reset(); // Limpa os campos do formulário
            } else {
                alert('Por favor, preencha todos os campos antes de enviar.');
            }
        });
    }


    // 3. FECHAMENTO AUTOMÁTICO DO MENU MOBILE
    // No celular, fecha o menu após clicar em uma das seções
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('nav ul');
            // Caso você decida adicionar uma classe 'active' futuramente para abrir/fechar o menu:
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

});
