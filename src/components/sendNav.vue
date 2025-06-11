<template>
  <div>
    <div class="w-full py-6 shadow-sm shadow-indigo-200">
      <div class="max-w-screen-xl mx-auto flex items-center justify-between gap-8">
        <div class="flex items-center w-fit gap-2">
          <img src="../assets/favicon.png" class="h-8 w-auto" alt="" />
          <a href="https://www.schnelle-bank.com" class="text-lg font-bold text-black">Group BPCE</a>
        </div>
        <div class="w-3/5"><Progress /></div>

        <div class="w-fit flex gap-2 items-center">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img :src="store.state.userData.image.url" alt="" />
          </div>
          <div class="pl-2 border-l-2 border-gray-200">
            <RouterLink to="/dashboard/index">{{ store.state.userData.name }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Progress from "./progress.vue";
import { useStore } from "vuex";
const store = useStore();
</script>
