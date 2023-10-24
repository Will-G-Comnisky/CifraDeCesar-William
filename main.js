let cifrarBtn = document.getElementById('idCifrarBtn');
cifrarBtn.addEventListener('click', function() {

    // Mapear as letras do alfabeto para seus valores numéricos
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alfabetoArray = alfabeto.split(''); // .split para cada caractere da string 'alfabeto' estar em um array

    // Adquirindo campos da tela
    let texto = document.getElementById("idText").value.toUpperCase();
    let cifragem = document.getElementById('idCifra').value; 
    // como cifragem pode ser numero ou letra, não será adicionado parseInt ou Number


    // Se a cifragem for uma letra, converte para número
    if (/^[a-zA-Z]$/.test(cifragem)) {
        cifragem = alfabetoArray.indexOf(cifragem.toUpperCase()) + 1; 
        // percorre o array e adiciona +1 ao indice da letra, visto que a = 0 antes disso, e queremos a = 1
    } else {
        cifragem = parseInt(cifragem);
    }

    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        // Declarando uma variável para guardar o valor de acordo com a tabela ASCII
        let textoASCII = texto.charCodeAt(i);

        if (textoASCII < 65 || textoASCII > 90) { // Necessário prever os casos que o que foi digitado é ' ' ou 'ç', a qual nesse caso retornará o próprio caractere
            resultado += texto[i] // 
        } else if (textoASCII >= 65 && textoASCII <= 90) { //Na tabela ASCII, entre 65 e 90 que está contido o alfabeto em letras maiusculas
            let novoTexto = textoASCII + cifragem;
                if (novoTexto > 90) {
                novoTexto = novoTexto - 26; // Para reiniciar a contagem em A após Z
                }
            resultado += String.fromCharCode(novoTexto);
        } else {
            resultado += String.fromCharCode(textoASCII);
        }
    }
    document.getElementById("idOutCifrado").innerText = resultado;

})


let descifrarBtn = document.getElementById('idDescifrarBtn');
descifrarBtn.addEventListener('click', function() {

        const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const alfabetoArray = alfabeto.split(''); 
    
        let texto = document.getElementById("idText").value.toUpperCase();
        let cifragem = document.getElementById('idCifra').value; 
    
    
        if (/^[a-zA-Z]$/.test(cifragem)) {
            cifragem = alfabetoArray.indexOf(cifragem.toUpperCase()) + 1; 
        } else {
            cifragem = parseInt(cifragem);
        }
    
        let resultado = '';
    
        for (let i = 0; i < texto.length; i++) {

            let textoASCII = texto.charCodeAt(i);
    
            if (textoASCII < 65 || textoASCII > 90) { 
                resultado += texto[i] 
            } else if (textoASCII >= 65 && textoASCII <= 90) { 
                let novoTexto = textoASCII - cifragem; // Como é para descifrar, subtraimos aqui
                    if (novoTexto < 65) { // Invés de 90, o valor aqui é 65, e novoTexto MENOR que 65.
                    novoTexto = novoTexto + 26; // Somamos 26. invés de subtrair
                    }
                resultado += String.fromCharCode(novoTexto);
            } else {
                resultado += String.fromCharCode(textoASCII);
            }
        }
        document.getElementById("idOutDescifrado").innerText = resultado;

})