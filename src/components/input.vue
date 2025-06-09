<template>
  <div>
    <input
      :type="inputtype"
      :name="name"
      id="fullname"
      :placeholder="placeholder"
      :required="requiredinfo"
      class="tex-sm font-normal text-gray-700 p-2 border border-gray-900 w-full"
      @change="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  inputtype: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  requiredinfo: {
    type: Boolean,
    default: true,
  },
  modelValue: String,
});
</script>
