<script setup>
import { useStore } from 'vuex';
import { computed, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import { createChips, capitalizeFirstLetter, checkArray } from '@/helpers/helper';

defineProps({
  id: {
    type: String,
    required: true,
  },
});

const store = useStore();
const route = useRoute();

const currentProduct = computed(() => store.getters.getProductById(parseInt(route.query.id)));

const src = computed(() => {
  const path = new URL('@/assets/images/', import.meta.url);
  return `${path}/${currentProduct.value.photo}`;
});

const chips = createChips(currentProduct.value);
</script>

<template>
  <div
    class="col-span-2 flex flex-col items-center gap-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm duration-500 hover:shadow-inner"
  >
    <div class="flex gap-6">
      <img
        class="h-72 w-96 object-contain"
        :src="src"
        :alt="currentProduct.title"
      />
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold">
            {{ currentProduct.title }}
          </h2>
          <h2 class="text-2xl font-bold">$ {{ currentProduct.price }}</h2>
        </div>
        <div>
          <ul class="flex flex-wrap gap-2">
            <template
              v-for="(chip, idx) in chips"
              :key="idx"
            >
              <li
                class="rounded border bg-transparent px-3 py-1 font-medium text-gray-800 duration-500 hover:bg-blue-500 hover:text-white"
              >
                {{ chip }}
              </li>
            </template>
          </ul>
        </div>
        <p class="text-justify">
          {{ currentProduct.description }}
        </p>
      </div>
    </div>
    <div class="grid w-full grid-cols-2 gap-6">
      <div class="flex flex-col gap-4">
        <h2 class="text-xl font-medium text-gray-400">Screen</h2>
        <hr />
        <ul>
          <li
            v-for="(item, key, idx) in currentProduct.technicalDetails.screen"
            :key="idx"
            class="grid grid-cols-[150px_1fr_300px] items-baseline gap-3"
          >
            <span>{{ capitalizeFirstLetter(key) }}: </span>
            <hr />
            <span>{{ checkArray(toRaw(item)) }}</span>
          </li>
        </ul>
        <h2 class="text-xl font-medium text-gray-400">Connectors</h2>
        <hr />
        <ul>
          <li
            v-for="(item, key, idx) in currentProduct.technicalDetails.connectors"
            :key="idx"
            class="grid grid-cols-[150px_1fr_300px] items-baseline gap-3"
          >
            <span>{{ capitalizeFirstLetter(key) }}: </span>
            <hr />
            <span>{{ checkArray(toRaw(item)) }}</span>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="text-xl font-medium text-gray-400">Features</h2>
        <hr />
        <ul>
          <li
            v-for="(item, key, idx) in currentProduct.technicalDetails.features"
            :key="idx"
            class="grid grid-cols-[150px_1fr_300px] items-baseline gap-3"
          >
            <span>{{ capitalizeFirstLetter(key) }}: </span>
            <hr />
            <span>{{ checkArray(toRaw(item)) }}</span>
          </li>
        </ul>
        <h2 class="text-xl font-medium text-gray-400">General</h2>
        <hr />
        <ul>
          <li
            v-for="(item, key, idx) in currentProduct.technicalDetails.general"
            :key="idx"
            class="grid grid-cols-[150px_1fr_300px] items-baseline gap-3"
          >
            <span>{{ capitalizeFirstLetter(key) }}: </span>
            <hr />
            <span>{{ checkArray(toRaw(item)) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
