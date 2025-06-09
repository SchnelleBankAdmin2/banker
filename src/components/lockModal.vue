<template>
  <div>
    <div>
      <div
        class="bg-gray-500 bg-opacity-75 fixed z-50 top-0 left-0 w-full min-h-screen h-full flex items-center justify-center px-4 py-5"
      >
        <div
          class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 md:py-[60px] md:px-[70px] text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-12 h-12 text-red-500 mx-auto"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
              clip-rule="evenodd"
            />
          </svg>

          <h3 class="font-bold text-dark text-xl sm:text-2xl pb-2">
            Seite vom Benutzer gesperrt
          </h3>

          <p class="text-base text-body-color leading-relaxed mb-4">
            Geben Sie die Anwendungs -PIN ein, um die Sichtbarkeit der Seiten zu
            autorisieren
          </p>

          <div style="display: flex; flex-direction: row">
            <v-otp-input
              ref="otpInput"
              class="mx-auto"
              input-classes="otp-input p-2 rounded-md w-12 bg-white border text-gray-900 font-bold border-gray-200 mx-2 text-center"
              separator="    "
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              :conditionalClass="['one', 'two', 'three', 'four']"
              :placeholder="['*', '*', '*', '*']"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
          <button @click="clearInput()" class="hidden">Eingabe klare</button>

          <div class="flex flex-wrap -mx-3 mt-5">
            <div class="w-1/2 px-3">
              <button
                class="block text-center w-full px-3 py-2 text-sm font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                @click.prevent="$emit('closemodal')"
              >
                Absagen
              </button>
            </div>
            <div class="w-1/2 px-3">
              <button
                class="block text-center w-full px-3 py-2 text-sm font-medium rounded-lg bg-indigo-500 text-white border border-indigo-500 hover:bg-opacity-90 transition"
              >
                Freischalten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import { reactive, ref } from "vue";

const pin = reactive({ pin1: 0, pin2: 0, pin3: 0, pin4: 0 });
const otpInput = ref(null);

const handleOnComplete = (value) => {
  console.log("OTP completed: ", value);
};

const handleOnChange = (value) => {
  console.log("OTP changed: ", value);
};

const clearInput = () => {
  otpInput.value.clearInput();
};
</script>
