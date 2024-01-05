<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
            // selectedRegion: 'Kanto',  // Imposta una regione predefinita
            selectedOption: null,
            options: [
                {
                    label: 'prima gen',
                    value: 'option1'
                },
                {
                    label: 'seconda gen',
                    value: 'option2'
                },
                {
                    label: 'terza gen',
                    value: 'option3'
                },
            ]
        }
    },
    methods: {
        search() {
            this.$emit('performSearch', this.store.searchVal)

        },
        handleOptionChange() {
            console.log('Selected option:', this.selectedOption)
        },
        // filterPokemonByRegion() {
        //     // Utilizza il metodo filter per ottenere solo i Pokémon della regione selezionata
        //     this.store.filteredPokemon = this.store.pokemonList.filter(pokemon => pokemon.region === this.store.selectedRegion);
        //     console.log(this.store.selectedRegion,this.store.filteredPokemon)
        // },
        selectReg(){
            this.$emit('setRegion',this.store.selectedRegion)
        }


    }

}

</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="wrapper">

                        <img class="logo" src="../../public/pokemon_121114.png" alt="">
                        <h1>Pokedex</h1>
                    </div>
                    <!-- <select name="gen" id="gen" @v-model="selectedOption" @change="handleOptionChange">
                    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option> -->
                    <!-- <option value="2">Seconda gen</option>
                    <option value="3">Terza gen</option>
                    <option value="4">Quarta gen</option>
                    <option value="5">Quinta gen</option> -->
                    <!-- </select> -->
                    <select @mouseleave="selectReg" v-model="store.selectedRegion" @change="filterPokemonByRegion">
                        <option value="Kanto">Kanto</option>
                        <option value="Johto">Johto</option>
                        <option value="Hoenn">Hoenn</option>
                        <option value="Sinnoh">Sinnoh</option>
                        <option value="Unima">Unima</option>
                        <!-- Aggiungi opzioni per le altre regioni disponibili -->
                    </select>
                    <input @keyup.enter="search" type="text" v-model.trim="store.searchVal" placeholder="Cerca Pokemon">

                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: red;
}

.logo {
    width: 60px;
}

.wrapper {
    display: flex;
    align-items: center;
    margin: 20px 0;

}

.col {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>