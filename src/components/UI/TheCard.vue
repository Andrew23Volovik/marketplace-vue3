<script setup>
import { computed, toRaw } from 'vue';
import { capitalizeFirstLetter, createChips, createShortDetails } from '@/helpers/helper';
import { useRouter } from 'vue-router';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const router = useRouter();
const openProduct = (title) => {
  const str = title.split(' ').join('-');
  router.push({
    name: 'Product',
    params: {
      id: str,
    },
    query: {
      id: props.product.id,
    },
  });
};

const src = computed(() => {
  const path = new URL('@/assets/images/', import.meta.url);
  return `${path}/${props.product.photo}`;
});

const chips = computed(() => createChips(toRaw(props.product)));
const shortDetails = computed(() => createShortDetails(toRaw(props.product)));
</script>

<template>
  <div
    class="flex cursor-pointer items-center gap-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm duration-500 hover:shadow-inner"
  >
    <img
      class="h-96 w-full object-contain md:h-auto md:w-48"
      :src="src"
      :alt="product.title"
      @click="openProduct(product.title)"
    />
    <div class="flex flex-col gap-2">
      <h2
        class="text-xl font-bold"
        @click="openProduct(product.title)"
      >
        {{ product.title }}
      </h2>
      <div>
        <ul class="flex flex-wrap gap-2">
          <template
            v-for="(chip, idx) in chips"
            :key="idx"
          >
            <li
              class="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800 duration-500 hover:bg-gray-500 hover:text-white"
            >
              {{ chip }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <ul class="flex flex-col flex-wrap">
          <template
            v-for="(detail, key, idx) in shortDetails"
            :key="idx"
          >
            <li class="font-normal text-gray-800">
              <span class="text-sm font-light text-gray-600">{{ capitalizeFirstLetter(key) }}: </span>
              <span class="text-sm font-normal">{{ detail }}</span>
            </li>
          </template>
        </ul>
      </div>
      <div class="flex justify-between">
        <button
          type="button"
          class="rounded border border-blue-500 bg-transparent py-1 px-2 text-blue-500 duration-500 hover:border-transparent hover:bg-blue-500 hover:text-white"
          @click="openProduct(product.title)"
        >
          Show details
        </button>
        <h2 class="self-end text-2xl font-bold">$ {{ product.price }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
