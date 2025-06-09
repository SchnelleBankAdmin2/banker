<template>
  <div>
    <label :for="forLabel" class="text-sm font-medium text-gray-700 mb-2">{{
      title
    }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  forLabel: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Enter label",
  },
});
</script>
