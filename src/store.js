import { reactive } from "vue";

export const store = reactive({
    searchVal: '',
    pokemon: {},
    pokemonList: [],
    selectedRegion: 'Kanto',  // Imposta una regione predefinita
    filteredPokemon: [],
})