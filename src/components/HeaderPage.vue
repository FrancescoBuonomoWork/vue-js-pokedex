<script>
import { store } from '../store'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        search(){
            this.$emit('performSearch',this.store.searchVal)
            this.$emit('spriteSearch')
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
                <input @keyup.enter="search" type="text" v-model.trim="store.searchVal" placeholder="Cerca Pokemon">
            </div>
        </div>
    </div>
 </header>
</template>

<style lang="scss" scoped>
header{
    background-color: red;
}
.logo{
    width: 60px;
}
.wrapper {
    display: flex;
    align-items: center;
    margin: 20px 0;

}
.col{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>