<script setup>
import Navigation from "../components/navigation.vue";
import Dashindex from "../components/dashindex.vue";
import { onBeforeMount } from "vue";
import { store } from "../store";

onBeforeMount(() => {
  store.dispatch("fetchUser");
});
</script>

<template>
  <div>
    <Navigation>
      <Dashindex />
    </Navigation>
  </div>
</template>
