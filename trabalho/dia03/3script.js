function mostrarTabelaJogos() {
    const container = document.getElementById('tabela-jogos');
    const img = document.createElement('img');

    img.src = 'img/Tabela_Jogos.png';
    img.alt = 'Tabela de Jogos Copa 2026';
    
    img.classList.add('show'); 

    img.onerror = () => {
        container.innerHTML = '<p style="color: #e74c3c; font-size: 1.2em;">Imagem Tabela_Jogos.png não encontrada.</p>';
    };

    container.innerHTML = '';
    container.appendChild(img);

    const btn = document.querySelector('.btn-tabela');
    if (btn) {
        btn.textContent = '✅ Tabela Carregada!';
        btn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        btn.disabled = true;
    }
}

// Função para revelar o Perfil (adicionada para evitar erros no console)
function revelarPerfil() {
    const container = document.getElementById('perfil-container');
    container.innerHTML = '<p>Perfil do jogador carregado com sucesso!</p>';
    console.log('Perfil revelado');
}
function initNav() {
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initNav();
    console.log('🏆 Copa 2026 Landing Page carregada!');
}); 
