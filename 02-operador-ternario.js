let media = 5, resultado
if (media >= 6) {
    resultado = 'APROVADO'
} else {
    resultado = 'REPROVADO'
}
console.log(media, '=>', resultado)

// usando operador ternario 
resultado = media >= 6 ? 'APROVADO' : 'REPROVADO'
//o dois pontos quer diser o senão
console.log(media, '=>', resultado)