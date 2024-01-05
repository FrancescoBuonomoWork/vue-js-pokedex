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
      // n :{
      //   offset:0,
      //   limit:0,
      // }
      offset:0,
      limit:0,
      
    }
  },
  methods: {
    // defaultApi(){
    //   axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1024') //
    //   .then((res)=> {
    //     console.log(res.data.results)
    //     this.store.pokemonList = res.data.results
    //   })
    // },
    defaultApi(){
      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}`) //
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
    setGen(){
     if('Kanto'=== this.store.selectedRegion){
      this.offset = 0;
      this.limit = 150;
     
      
    } else if ('Johto' === this.store.selectedRegion){
      this.offset = 151;
      this.limit = 251
    }
    else if ('Hoenn' === this.store.selectedRegion){
      this.offset = 252;
      this.limit = 386
    } 
    console.log(this.offset, this.limit,this.store.selectedRegion)
    }

  },
  created(){
    this.defaultApi()
    
    
  },
  computed:{
   
  }

}

</script>

<template>
  <HeaderPage @perform-search="searchApi" @setRegion="setGen"/> 
  <MainPage/>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
