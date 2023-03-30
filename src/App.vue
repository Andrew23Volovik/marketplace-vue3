<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheMain from '@/components/TheMain.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
store.dispatch('requestGetProducts', route.query);
</script>

<template>
  <TheHeader />
  <TheMain />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Quicksand', sans-serif;
}

#app {
  display: grid;
  grid-template-areas:
    'header'
    'main';
  gap: 1.5rem;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}
</style>
