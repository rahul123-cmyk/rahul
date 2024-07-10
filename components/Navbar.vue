<template>
 
  <section class="sticky top-0 z-50 bg-white border-gray-200 ">
  <v-container>
  
   <nav class=" dark:bg-gray-900 dark:border-gray-700">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <div v-for="menu in menuStore.menus" :key="menu.id">
            <li v-if="menu.posts.length == 0">
              <NuxtLink
            v-if="index==0"
                to="/"
                class="block py-2 px-3  rounded md:bg-transparent md:dark:bg-transparent"
                aria-current="page"
                >{{ menu.name }}</NuxtLink
              >
              <NuxtLink
              v-else
                :to="`/${menu.url}`"
                class="block py-2 px-3 md:dark:bg-transparent"
                aria-current="page"
                >{{ menu.name }}</NuxtLink
              >
            </li>
            <li v-else>
              <button
                id="dropdownNavbarLink"
                :data-dropdown-toggle= "menu.id"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                {{ menu.name }}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                :id="menu.id"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                  
                    <NuxtLink v-for="submenu in menu.posts" :key="submenu.id"
                      :to="`/submenu/${submenu.slug}`"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >{{submenu.title}}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  </v-container>
  
  </section>
</template>

<!--<template>
  <nav class="bg-gray-800 shadow-md">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Desktop menu 
        <div class="">
          <div class="flex items-center gap-6 justify-center">
            <div v-for="(menu, index) in menuStore.menus" :key="menu.id">
              <!-- Home 
              <div v-if="menu.posts.length == 0">
                <NuxtLink
                  to="/"
                  v-if="index == 0"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >{{ menu.name }}</NuxtLink
                >

                <NuxtLink
                  v-else
                  :to="`/${menu.url}`"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >{{ menu.name }}</NuxtLink
                >
           </div> 

            <!-- Courses dropdown  
              <div class="relative group" v-else>
                <button
                  icon="mdi-earth"
                  class="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  aria-label="Courses"
                  aria-haspopup="true"
                >
                  {{ menu.name }}
                </button>
                <div
                  class="absolute z-10 mt-1 w-72 rounded-md shadow-lg bg-gray-800 hidden dropdown-menu"
                >
                  <div class="py-1">
                    <NuxtLink
                      :to="`/submenu/${submenu.slug}`"
                      v-for="submenu in menu.posts"
                      :key="submenu.id"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >{{ submenu.title }}</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
 </template> -->

<script setup>
import { useMenuStore } from "~/store/menu";
const menuStore = useMenuStore();
</script>

<style>
/* Ensure that dropdown is visible on hover */
.group:hover .dropdown-menu {
  display: block;
}
</style>
