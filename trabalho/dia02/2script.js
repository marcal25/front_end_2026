const gruposOficiais = {
    D: { selecoes: ['Estados Unidos', 'Paraguai', 'Austrália', 'Turquia'], fato: 'EUA anfitriões. Turquia da repescagem.' },
    E: { selecoes: ['Alemanha', 'Equador', 'Costa do Marfim', 'Curaçao'], fato: 'Alemanha forte em grupos. Curaçao estreia.' },
    F: { selecoes: ['Holanda', 'Japão', 'Tunísia', 'Suécia'], fato: 'Holanda e Japão com bom histórico recente.' },
    G: { selecoes: ['Bélgica', 'Egito', 'Irã', 'Nova Zelândia'], fato: 'Bélgica cabeceira de chave. Nova Zelândia surpresa.' },
    H: { selecoes: ['Espanha', 'Cabo Verde', 'Arábia Saudita', 'Uruguai'], fato: 'Espanha atual campeã europeia.' }
};

function proximoGrupos() {
    const gruposExtras = document.getElementById('grupos-extras');
    gruposExtras.style.display = 'block';
    document.querySelector('.btn-proximo').style.display = 'none';

    ['D', 'E', 'F'].forEach(letra => criarGrupo(letra, gruposOficiais[letra]));
    document.getElementById('btn-mais').style.display = 'block';
}

function addMaisGrupos() {
    ['G', 'H'].forEach(letra => criarGrupo(letra, gruposOficiais[letra]));
    document.getElementById('btn-mais').style.display = 'none';
}

function criarGrupo(letra, dados) {
    const gruposExtras = document.getElementById('grupos-extras');
    const template = document.getElementById('grupo-a').cloneNode(true);
    template.id = `grupo-${letra.toLowerCase()}`;
   
    // Emoji do grupo
    const emojiMap = { D: '🅳️', E: '🅴️', F: '🅵️', G: '🅶️', H: '🅷️' };
    template.querySelector('h2').textContent = emojiMap[letra] + ' Grupo ' + letra;
   
    const selecoes = template.querySelectorAll('.selecao');
    dados.selecoes.forEach((nome, i) => selecoes[i].textContent = nome);
   
    template.querySelector('.fatos').textContent = dados.fato;
    gruposExtras.appendChild(template);
   
    template.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Copa 2026 carregada! Grupos oficiais FIFA 2025/26.');
});

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
        <img src="img/Lucas_Paqueta.webp"
             alt="Lucas Paqueta"
             style="max-width:100%; border-radius:8px; display:block; margin-bottom:15px;">
           `;
}

