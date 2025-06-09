<template>
  <div class="w-full">
    <section class="max-w-screen-lg mx-auto bg-coolGray-50 py-4 overflow-hidden relative">
      <div class="container px-4 mx-auto">
        <div class="relative py-8 px-8 bg-slate-900 rounded-md overflow-hidden">
          <div class="relative z-20 flex flex-wrap items-center -m-3">
            <div class="w-full md:w-1/2 p-3">
              <h2 class="mb-4 text-2xl font-bold text-white tracking-tighter">
                {{ props.promo.title }}
              </h2>
              <p class="font-semibold text-slate-300">
                {{ props.promo.caption }}
              </p>
              <p class="font-normal text-xs italic mt-2 text-slate-300">
                Geschäftsbedingungen gelten
              </p>
            </div>
            <div class="w-full md:w-1/2 p-3">
              <button @click="window.open('https://schnelle-bank.com/')"
                class="block md:ml-auto px-7 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md"
              >
                Jetzt anrufen
              </button>
            </div>
          </div>
          <div class="w-full h-full absolute inset-0 opacity-30">
            <img
              :src="props.promo.img"
              class="w-full h-full object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  promo: Object,
});
</script>
