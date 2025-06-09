<template>
  <div>
    <Navigation><Settingsbody /></Navigation>
  </div>
</template>

<script setup>
import Navigation from "../components/navigation.vue";
import Settingsbody from "../components/settingsbody.vue";
import { store } from "../store";
import { onBeforeMount, onMounted } from "vue";

onBeforeMount(() => {
  store.dispatch("fetchUser");
});

</script>
