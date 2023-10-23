// Lógica inicial:
// 1 - Coletar o valor do textarea
// 2 - Identificar o valor do input de cifragem ou descifragem
// 3 - Ao clicar no botão, realizar lógica de cifragem
// 4 - Retornar e substituir o valor final para o textarea

// Considerações:
// Na tabela ASCII: A = 65
// A lógica deverá ser de capturar o valor do caractere, somar o valor de cifragem que seria o descloamento e % do valor máximo

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let cifrarBtn = document.getElementById('idCifrarBtn');
cifrarBtn.addEventListener('click', function(event) {

    let texto = document.getElementById("idText").value.toUpperCase();
    let cifragem = parseInt(document.getElementById('idCifra').value);
    let resultado = '';

    //Adicionando uma condição para converter um caractere alfabético para um valor numérico.
    if (/[A-Z]/.test(cifragem)) {
        cifragem = cifragem.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    } else if (/[0-9]/.test(cifragem)) {
        cifragem = parseInt(cifragem);
    } else {
        alert("A cifra deve ser um número ou um caractere alfabético.");
    }

    for (let i = 0; i < texto.length; i++) {
        //Adquirindo o valor de indice de cada letra do texto
        let letra = texto.charCodeAt(i) - 65;

        //Identificando se no texto há um espaço vazio ou ç
        if (letra === ' ') {
            resultado = `${resultado} `;  
        } 
        else if (letra === 'ç') {
            resultado = `${resultado}ç`;
        }
        // Agora no else, após identificarmos a possibilidade de espaço vazio e ç, realizamos a lógica principal 
        else {
                let letraComDeslocamento = (letra + cifragem) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
                letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
                resultado += letras[letraComDeslocamento]; 
        }
    }
    document.getElementById("idOut").value = resultado;
});