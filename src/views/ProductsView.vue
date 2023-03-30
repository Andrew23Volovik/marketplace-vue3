<script setup>
import TheCard from '@/components/UI/TheCard.vue';
import TheSelect from '@/components/UI/TheSelect.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const products = computed(() => store.getters.getProducts);
</script>

<template>
  <TheSelect />
  <template v-if="products.length">
    <TheCard
      v-for="(product, idx) in products"
      :key="idx"
      :product="product"
    />
  </template>
</template>

<style scoped></style>
