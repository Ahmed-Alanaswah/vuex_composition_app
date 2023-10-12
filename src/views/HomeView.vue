<template>
  <div class="home">
    <h1>this is main page</h1>
    <h1>counter is : {{ productsModule.counter }}</h1>
    <h1>getter is : {{ getters.multiblyCntr }}</h1>
    <!-- <button @click="store.commit('inc')">increase</button>
    <button @click="store.commit('dec')">decrease</button>  -->
    <button @click="store.dispatch('increase')">increase</button>
    <button @click="store.dispatch('decrease')">decrease</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const productsModule = store.state.productsModule;
const getters = store.getters;
console.log(store.getters);
</script>
