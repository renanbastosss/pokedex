const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(element => {
    element.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = element.id
        
        const cartaoPokemonParaAbrir = document.getElementById(`cartao-${idPokemonSelecionado}`)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.querySelector(`#${idPokemonSelecionado}`)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})
