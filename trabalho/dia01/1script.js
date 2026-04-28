function mostrarTabelaJogos() {
    const container = document.getElementById('tabela-jogos');
    const img = document.createElement('img');

    img.src = 'img/Tabela_Jogos.png';
    img.alt = 'Tabela de Jogos Copa 2026';

    container.innerHTML = '';
    container.appendChild(img);
}

function revelarPerfil() {
    const container = document.getElementById('perfil-container');

    container.innerHTML = `
        <img src="img/_vinicius_junior.png"
             alt="Vinícius Júnior"
             style="max-width:100%; border-radius:8px; display:block; margin-bottom:15px;">
        <p><strong>Nome:</strong> Vinícius José Paixão de Oliveira Júnior</p>
        <p><strong>Data:</strong> 12/07/2000 (25 anos)</p>
        <p><strong>Altura:</strong> 1,76 m</p>
        <p><strong>Posição:</strong> Ponta-esquerda / Atacante</p>
        <p><strong>Rank:</strong> 9,5</p>
    `;
}
