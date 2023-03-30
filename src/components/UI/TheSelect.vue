<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const selected = ref('rating');
const options = [
  {
    value: 'rating',
    title: 'by rating',
    selected: true,
  },
  {
    value: 'lowest',
    title: 'lowest to highest price',
    selected: false,
  },
  {
    value: 'highest',
    title: 'highest to lowest price',
    selected: false,
  },
  {
    value: 'display_highest',
    title: 'highest to lowest display',
    selected: false,
  },
  {
    value: 'display_lowest',
    title: 'lowest to highest display',
    selected: false,
  },
];

const store = useStore();
const router = useRouter();
const route = useRoute();
const changeOption = (value) => {
  store.dispatch('requestGetProducts', { filter: value });
  router.push({ name: 'Products', query: { filter: value } });
};

onMounted(() => {
  if (Object.keys(route.query).length !== 0) {
    const path = route.query.filter;
    selected.value = path;
    store.dispatch('requestGetProducts', { filter: path });
  }
});
</script>

<template>
  <div class="col-span-2 w-52">
    <select
      v-model="selected"
      class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
      @change="changeOption($event.target.value)"
    >
      <option
        v-for="(option, idx) in options"
        :key="idx"
        :value="option.value"
        :selected="option.selected"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
