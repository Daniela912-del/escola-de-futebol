// index.js

// 1. Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecionando os elementos
    const formCadastro = document.querySelector('form');
    const botaoEnviar = document.getElementById('cadastrar');
    const linksMenu = document.querySelectorAll('nav ul li a');

    // 2. Validação Simples de Formulário
    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (nome === '' || email === '') {
            alert('Por favor, preencha todos os campos para o cadastro! ⚽');
        } else {
            console.log(`Novo cadastro: Nome: ${nome}, Email: ${email}`);
            alert(`Obrigada, ${nome}! Entraremos em contato em breve.`);
            formCadastro.reset(); // Limpa os campos
        }
    });

    // 3. Scroll Suave para os links internos
    linksMenu.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            
            // Verifica se o link é uma âncora (começa com #)
            if (targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Desconto da altura do header
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Seleciona o botão de inscrição da Home
const btnInscrever = document.querySelector('#home button');

// Seleciona a seção de cadastro
const secaoCadastro = document.querySelector('#cadastro');

btnInscrever.addEventListener('click', () => {
    // Faz a página deslizar até o formulário
    secaoCadastro.scrollIntoView({ 
        behavior: 'smooth', // Deslize suave
        block: 'start'      // Alinha ao topo da seção
    });
});