<template>
  <div>
    <h2 class="text-indigo-500 text-2xl font-medium">{{ title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Test header",
  },
});
</script>
