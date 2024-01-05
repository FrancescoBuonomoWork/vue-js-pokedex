<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        props:{
            item : Object,
            required: true
        },
    
        components: {
      
        },
    data() {
        return {
          store,
        
        
    }
},
computed:{
      
       
    }
}
</script>

<template>
    <!-- <h2>TEXT</h2> -->
            <!-- <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`" alt="">
            <ul>
                <li>{{ item.name }}</li>
                <li>{{ item.id }}</li>
                <li v-for="t in item.types">{{ t.type.name}} </li>
            </ul>
            <ul>
                <li v-for="st in item.stats">{{st.stat.name }} = {{ st.base_stat }}</li>
            </ul> -->

            <!-- DOMANDA -->
            <!-- questo modo dell immagine non funziona quando la pagina viene ricaricata  -->
            <!-- <img :src=item.sprites.front_shiny alt="" > -->

            <div class="card">
                <div class="card-header">
                    <p >#{{ item.id }}</p>
                    <h2 class="card-title">{{ item.name }}</h2>
                </div>
                <figure class="card-img">
                    <img  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`" alt="">
                </figure>
                <div class="card-body">
                    <p v-for="t in item.types">{{ t.type.name}} </p>
                </div>
                <ul>
                    <li v-for="st in item.stats">{{st.stat.name }} = {{ st.base_stat }}</li>
                </ul>

            </div>

</template>

<style lang="scss" scoped>
.card{
    border: 2px solid black;
    border-radius: 20px;
    padding: 30px;
    width: 400px;
    .card-title{
        text-align: center;
    }
   .card-body{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;

   }
    
}
</style>