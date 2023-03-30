<script setup>
const list = [
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Company',
    to: '/company',
  },
  {
    title: 'Marketplace',
    to: '/marketplace',
  },
  {
    title: 'Features',
    to: '/features',
  },
  {
    title: 'Team',
    to: '/team',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
];
</script>

<template>
  <header class="header flex justify-center border-b border-gray-200 bg-white shadow-sm">
    <nav class="container flex items-center justify-between px-4 py-2.5 lg:max-w-screen-xl">
      <div>
        <router-link
          to="/"
          class="text-xl font-bold"
        >
          STORE
        </router-link>
      </div>
      <div>
        <ul class="flex gap-5 font-medium">
          <li
            v-for="(li, idx) in list"
            :key="idx"
          >
            <router-link
              :to="li.to"
              class="duration-500 hover:text-gray-300"
            >
              {{ li.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-3">
        <router-link
          to="/"
          class="rounded py-1 px-2 duration-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Log in
        </router-link>
        <router-link
          to="/"
          class="rounded border border-blue-500 bg-transparent py-1 px-2 text-blue-500 duration-500 hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Get started
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  color: #3b82f6;
}
</style>
