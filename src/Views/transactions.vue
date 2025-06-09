<template>
  <div>
    <Navigation><TransactionComp /></Navigation>
  </div>
</template>

<script setup>
import Navigation from "../components/navigation.vue";
import TransactionComp from "../components/transactionComp.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import { store } from "../store";
import axios from "axios";

onBeforeMount(() => {
  store.dispatch("fetchUser");
});


</script>
