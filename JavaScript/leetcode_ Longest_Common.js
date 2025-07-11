/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 1. Caso especial: se não houver palavras, não há prefixo comum.
    if (strs.length === 0) {
        return ""; // Retorna uma string vazia
    }

    // 2. Consideramos a primeira palavra como nosso "prefixo" inicial.
    // Vamos comparar todas as outras palavras com ela.
    const firstWord = strs[0];

    // 3. Vamos percorrer cada letra da primeira palavra (nosso "candidato" a prefixo).
    // 'i' representa a posição da letra que estamos verificando (0 para a primeira letra, 1 para a segunda, e assim por diante).
    for (let i = 0; i < firstWord.length; i++) {
        // 'currentChar' guarda a letra da primeira palavra na posição 'i'.
        const currentChar = firstWord[i];

        // 4. Agora, para CADA letra da primeira palavra,
        // vamos comparar com a letra correspondente em TODAS as outras palavras.
        // 'j' representa a posição da palavra que estamos comparando no array 'strs'.
        // Começamos de 'j = 1' porque 'strs[0]' (a primeira palavra) já é a nossa referência.
        for (let j = 1; j < strs.length; j++) {
            const otherWord = strs[j]; // Pega a palavra atual para comparar

            // 5. Condições para parar e retornar o prefixo encontrado até agora:
            // a) Se a 'otherWord' (a palavra que estamos comparando) é mais curta que a posição 'i'.
            //    Isso significa que ela não tem uma letra na posição que estamos verificando.
            //    Ex: firstWord = "flower", otherWord = "flo". Quando i=3 ('w'), 'flo' não tem 4 letras.
            // OU
            // b) Se a letra na posição 'i' da 'otherWord' é diferente da 'currentChar' (letra da firstWord).
            //    Ex: firstWord = "flower", otherWord = "flight". Quando i=2 ('o' vs 'i').
            if (i >= otherWord.length || otherWord[i] !== currentChar) {
                // Se qualquer uma dessas condições for verdadeira, significa que o prefixo comum
                // termina NA POSIÇÃO ANTERIOR a 'i'.
                // Então, retornamos a parte da 'firstWord' que vai do começo (0) até a posição 'i' (exclusiva).
                // Por exemplo, se 'i' for 2, retorna as letras nas posições 0 e 1.
                return firstWord.substring(0, i);
            }
        }
    }

    // 6. Se chegarmos até aqui, significa que a primeira palavra inteira é um prefixo comum
    // a todas as outras palavras (porque não encontramos nenhuma diferença ou palavra mais curta).
    // Então, a própria 'firstWord' é o prefixo comum mais longo.
    return firstWord;
};
