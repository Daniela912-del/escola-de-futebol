// 1. Centraliza tudo dentro do DOMContentLoaded para garantir que o HTML já carregou
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Seleção de Elementos ---
    const formCadastro = document.querySelector('form');
    const linksMenu = document.querySelectorAll('nav ul li a');
    const btnInscrever = document.querySelector('#home button');
    const secaoCadastro = document.querySelector('#cadastro');

    // --- 2. Validação de Formulário ---
    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            if (nome === '' || email === '') {
                alert('Por favor, preencha todos os campos para o cadastro! ⚽');
            } else {
                console.log(`Novo cadastro: Nome: ${nome}, Email: ${email}`);
                alert(`Obrigada, ${nome}! Entraremos em contato em breve.`);
                formCadastro.reset();
            }
        });
    }

    // --- 3. Scroll Suave (Links do Menu) ---
    linksMenu.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 4. Botão de Inscrição da Home ---
    // Movi para dentro do listener para evitar erro de "null"
    if (btnInscrever && secaoCadastro) {
        btnInscrever.addEventListener('click', () => {
            secaoCadastro.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});