const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt ="emoji festejando"/>`;
const imgReprovado = `<img src="./images/reprovado.png" alt ="emoji decepcionado"/>`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class = "resultado aprovado">Aprovado</span> `;
const spanReprovado = `<span class = "resultado reprovado">Reprovado</span> `;
const notaMinima = parseFloat(prompt("Digite a nota mínima : "));


let linhas = '';
form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMadiaFinal();

});

function adicionaLinha(){ 
const imputNomeAtividade = document.getElementById("nome-atividade");
const imputNotaAtividade = document.getElementById("nota-atividade");

if (atividades.includes(imputNomeAtividade.value)){
    alert(`A atividade: ${imputNomeAtividade.value} já foi inserida`);
} else {
    atividades.push(imputNomeAtividade.value);
notas.push(parseFloat(imputNotaAtividade.value));


let linha = '<tr>';
linha += `<td>${imputNomeAtividade.value}</td>`;
linha += `<td>${imputNotaAtividade.value}</td>`;
linha += `<td>${imputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`;
linha += `</tr>`;

linhas += linha;

}



imputNomeAtividade.value = " ";
imputNotaAtividade.value = " ";
}

function atualizaTabela(){
const corpoTabela = document.querySelector("tbody");
corpoTabela.innerHTML = linhas;
}
function atualizaMadiaFinal(){
    const mediaFinal = calculaMediaFinal ();
    document.getElementById(`media-final-valor`).innerHTML = mediaFinal;
    document.getElementById(`media-final-resultado`).innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;

    

}

function calculaMediaFinal (){
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length; 

} 