let option;
const vagas = [];
let index
do {

    option = parseFloat(prompt("Escolha uma opção:\n1. Listar vagas.\n2. Criar vaga.\n3. Visualizar vaga.\n4. Inscrever candidato.\n5. Excluir vaga.\n6. Sair"));
    switch (option) {
        case 1:
            console.log("Listando vagas...");
            listarVagas();
            break;
        case 2:
            console.log("Criando vaga...");
            criarVaga();

            break;
        case 3:
            console.log("Visualizando vaga...");
            index = parseInt(prompt("Digite o número da vaga que deseja visualizar:")) - 1;
            visualizarVaga(index);
            break;
        case 4:
            console.log("Inscrevendo candidato...");
            index = parseInt(prompt("Digite o número da vaga que deseja inscrever o candidato:")) - 1;
            inscreverCandidato(index);
            break;
        case 5:
            console.log("Excluindo vaga...");
            index = parseInt(prompt("Digite o número da vaga que deseja excluir:")) - 1;
            excluirVaga(index);
            break;
        case 6:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (option !== 6);


// Função para listar vagas
function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        return textoFinal + `Número da vaga: ${indice + 1}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}\n Inscrições: ${vaga.inscricoes.length}\n-----------------------------------------------\n`;
    }, "");
    if (vagasEmTexto === "") {
        alert("Nenhuma vaga disponível.");
    } else {
        alert(vagasEmTexto);
    }
}

// Função para criar uma vaga
function criarVaga() {
    let vaga = {
        nome: "",
        descricao: "",
        dataLimite: "",
        inscricoes: []
    };
    vaga.nome = prompt("Digite o nome da vaga:");
    vaga.descricao = prompt("Digite a descrição da vaga:");
    vaga.dataLimite = prompt("Digite a data limite para inscrição (DD/MM/AAAA):");
    const confirmacao = confirm(`Você deseja criar uma nova vaga?\nnome: ${vaga.nome}\ndescrição: ${vaga.descricao}\ndata limite: ${vaga.dataLimite}`);
    if (!confirmacao) {
        alert("Operação cancelada.");
        return;
    } else {
        vagas.push(vaga);
        console.log("Vaga criada com sucesso!");
        console.log("Vagas disponíveis:", vagas);
    }

}
// Função para visualizar uma vaga
function visualizarVaga(index) {
    if (index < 0 || index >= vagas.length) {
        alert("Índice inválido. Não foi possível visualizar a vaga.");
        return;
    }
    let vaga = vagas[index];
    alert(`Visualizando vaga: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}\nInscrições: ${vaga.inscricoes.length}\nCandidatos inscritos: ${vaga.inscricoes.join(", ")}`);
}
// Função para inscrever candidato
function inscreverCandidato(index) {
    if (index < 0 || index >= vagas.length) {
        alert("Índice inválido. Não foi possível inscrever o candidato.");
        return;
    }
    let vaga = vagas[index];
    let nomeCandidato = prompt("Digite o nome do candidato:");

    if (!nomeCandidato) {
        alert("Nome do candidato não pode ser vazio.");
        return;
    }
    const confirmacao = confirm(`Você deseja inscrever o candidato ${nomeCandidato} na vaga ${vaga.nome}?`);
    if (!confirmacao) {
        alert("Operação cancelada.");
        return;
    } else {
        if (vaga.inscricoes.includes(nomeCandidato)) {
            alert("Candidato já inscrito nesta vaga.");
        } else {
            vaga.inscricoes.push(nomeCandidato);
            alert("Candidato inscrito com sucesso!");
            return;
        }
    }

}
// Função para excluir uma vaga
function excluirVaga(index) {
    if (index < 0 || index >= vagas.length) {
        alert("Índice inválido. Não foi possível excluir a vaga.");
        return;
    }
    const confirmacao = confirm(`Você deseja excluir a vaga ${vagas[index].nome}?`);
    if (!confirmacao) {
        alert("Operação cancelada.");
        return;
    } else {
        vagas.splice(index, 1);
        alert("Vaga excluída com sucesso!");
    }
}