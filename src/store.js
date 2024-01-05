import { reactive } from "vue";

export const store = reactive({
    searchVal: '',
    pokemon: {},
    pokemonList: [],
    selectedRegion: 'Tutti',  // Imposta una regione predefinita
    filteredPokemon: [],
    
})