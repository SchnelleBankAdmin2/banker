<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import axios from "axios";
const store = useStore();

onMounted(async () => {
  const { data } = await axios.get("https://banking-fa21.onrender.com//userInfo");
  store.dispatch("loaduserInfo", data.items[0]);
});
</script>

<template>
  <router-view></router-view>
</template>
