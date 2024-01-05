<script>
import { store } from '../store';
import CardShow from './CardShow.vue';
    export default {
    components: {
        CardShow,
      
    },
    data() {
        return {
          store

        }
    },
    methods: {
       
    }
}
</script>

<template>

    <section class="main-sec">
        <div class="container">
            

                <ul class="grid" v-if="store.searchVal === ''">
                   
                        <li class="card-default"  v-for="(pok,i) in store.pokemonList">
                            <h1>{{ pok.name }}</h1>
                            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`" alt="">
                        </li>
                   <!-- utilizzo indice + 1 per recuperare l id del pokemon  -->
                </ul>
            <div v-else class="card-container">
                <CardShow  :item="store.pokemon"/>
            </div>
                
            
            
            
        </div>
        
    </section>

     <!-- <div v-for="pok in this.store.pokemon" class="card">
            //     <ul>
            //         <li>{{ pok.name }}</li>
            //         <li> {{ pok.type }}</li>
            //     </ul>
            // </div>
            //  <ul>
            //     <li>{{ this.store.pokemon.name }}</li>
            //     <li>{{ store.pokemon.id }}</li>
            //     <li>{{ store.pokemon.types[0].type.name }} {{ store.pokemon.types[1].type.name }}</li>
                
            // </ul> -->
</template>

<style lang="scss" scoped>

.card-default{
    border: 2px solid black;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
</style>