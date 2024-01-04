<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

import { store } from './store';
import axios from 'axios';


export default {
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      store,
      
    }
  },
  methods: {
    defaultApi(){
      axios.get('https://pokeapi.co/api/v2/pokemon/') //?offset=40&limit=20
      .then((res)=> {
        console.log(res.data.results)
        this.store.pokemonList = res.data.results
      })
    },
    searchApi() {
      axios.get('https://pokeapi.co/api/v2/pokemon/'+ this.store.searchVal)
      .then((res) => {
        console.log(res.data)
        this.store.pokemon = res.data
        
      })
      
    },

  },
  created(){
      this.defaultApi()
    
  },
  computed:{
   
  }

}

</script>

<template>
  <HeaderPage @perform-search="searchApi" @spriteSearch="spritesAPI"/>
  <!-- <img src="{{ sprite }}" alt=""> -->
  <!-- <img :src="sprite" alt=""> -->
  
  <MainPage/>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
