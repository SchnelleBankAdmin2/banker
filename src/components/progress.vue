<template>
  <div class="w-full">
    <div class="w-full">
      <h4 class="sr-only">Status</h4>

      <div class="mt-3" aria-hidden="true">
        <div class="bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-1 bg-indigo-600 rounded-full"
            :style="`width: ${progress * 100}%`"
          ></div>
        </div>
        <div class="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-3">
          <div
            class=""
            :class="
              useRoute().name === 'send' || 'sendamount' || 'review' || 'complete'
                ? 'text-indigo-600'
                : ''
            "
          >
            Empfänger
          </div>
          <div
            class="text-center"
            :class="
              useRoute().name === 'sendamount' || 'review' || 'complete'
                ? 'text-indigo-600'
                : ''
            "
          >
            Menge
          </div>
          <div
            class="text-center"
            :class="useRoute().name === 'review' || 'complete' ? 'text-indigo-600' : ''"
          >
            Rezension
          </div>
          <div
            class="text-right"
            :class="useRoute().name === 'complete' ? 'text-indigo-600' : ''"
          >
            Vollständig
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const progress = ref(0);

onMounted(() => {
  switch (useRoute().name) {
    case "send":
      progress.value = 0.02;
      break;
    case "sendamount":
      progress.value = 0.375;
      break;
    case "review":
      progress.value = 0.65;
      break;
    case "complete":
      progress.value = 1;
      break;

    default:
      progress.value = 0;
      break;
  }
});
</script>
