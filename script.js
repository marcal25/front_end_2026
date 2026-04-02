const produto = {
    "123": {"nome": "Coca-cola Espumante", "preço": 9.99},
    "456": {"nome": "Um mamute pequenino", "preço": 8.99},
    "789": {"nome": "Vampiro Doidão", "preço": 4.69},
}
let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () =>{
    document.getElementById("cod").focus();
}

function addProduto(){
        const codValue = document.getElementById("cod");
        const qtdValue = document.getElementById("qtd");

        const codigo = codValue.value;
        const quantidade = qtdValue.value;

        if(!produto[codigo]){
            AlertItem();
            return;
        }

        const produtoBase = produto [codigo];
        const item = {
            nome: produtoBase.nome,
            preço: produtoBase.preco,
            quantidade: quantidade,
            subtotal: produtoBase.preço*quantidade
        };

        carrinho.push(item);
        audio.currentTime =0;
        audio.play();

        atualizarTela();
    }
function atualizarT
audio.play


