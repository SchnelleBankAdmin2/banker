<template>
  <div>
    <div
      x-transition
      class="bg-black bg-opacity-90 fixed top-0 left-0 w-full min-h-screen h-full flex items-center justify-center px-4 py-5 z-40"
    >
      <div
        class="w-full max-w-[770px] rounded-[0px] bg-white py-8 px-8 md:py-[60px] md:px-[70px] r"
      >
        <div class="mb-5 w-full flex justify-end">
          <button class="text-gray-700 p-2" @click="props.closeModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="w-full flex items-start space-x-10">
          <Steps class="border-r border-gray-200" :active="active" />
          <div class="flex-1">
            <div class="w-full" v-if="!loading">
              <keep-alive>
                <div id="step1" v-if="active == 1">
                  <h3 class="font-medium text-indigo-500 text-lg sm:text-xl pb-6">
                    Allgemeine Details
                  </h3>
                  <label for="account number" class="mb-1">Empfängerkontonummer</label>
                  <input
                    type="text"
                    class="w-full border-gray-200 mb-4"
                    v-model="transactionData.AccountNumber"
                  />
                  <label for="account number" class="mb-1">Empfängername auf Konto</label>
                  <input
                    type="text"
                    class="w-full border-gray-200 mb-4"
                    v-model="transactionData.AccountName"
                  />
                  <label for="account number" class="mb-1">Konto Typ</label>
                  <div class="w-full flex mt-1 mb-4">
                    <input
                      type="radio"
                      name="Savings"
                      id=""
                      value="savings"
                      aria-label="Checking"
                      v-model="transactionData.AccountType"
                    />
                    <label
                      for="savings"
                      class="text-xs font-normal text-gray-700 ml-1 mr-3"
                      >Ersparnisse</label
                    >
                    <input
                      type="radio"
                      name="Current"
                      id=""
                      value="current"
                      v-model="transactionData.AccountType"
                    />
                    <label
                      for="savings"
                      class="text-xs font-normal text-gray-700 ml-1 mr-3"
                      >Aktuell</label
                    >
                    <input
                      type="radio"
                      name="checkings"
                      id=""
                      value="checking"
                      v-model="transactionData.AccountType"
                    />
                    <label
                      for="savings"
                      class="text-xs font-normal text-gray-700 ml-1 mr-3"
                      >Überprüfung</label
                    >
                  </div>

                  <label for="account number" class="mb-1">SWIFT-Code</label>
                  <input
                    type="text"
                    class="w-full border-gray-200 mb-4"
                    v-model="transactionData.swiftCode"
                  />

                  <div class="flex flex-wrap -mx-3">
                    <div class="w-1/2 px-3">
                      <button
                        class="block text-center invisible w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                      >
                        Absagen
                      </button>
                    </div>
                    <div class="w-1/2 px-3">
                      <button
                        @click="countIncrease()"
                        :disabled="
                          !transactionData.AccountName ||
                          !transactionData.AccountNumber ||
                          !transactionData.swiftCode
                            ? true
                            : false
                        "
                        class="block text-center w-full p-3 text-base font-medium rounded-lg bg-indigo-500 text-white border border-primary hover:bg-opacity-90 transition"
                        :class="
                          !transactionData.AccountName ||
                          !transactionData.AccountNumber ||
                          !transactionData.swiftCode
                            ? 'opacity-60'
                            : 'opacity-100'
                        "
                      >
                        Nächste
                      </button>
                    </div>
                  </div>
                </div>
              </keep-alive>
              <KeepAlive>
                <div id="step2" class="w-full flex-1" v-if="active == 2">
                  <h3 class="font-medium text-indigo-500 text-lg sm:text-xl pb-2">
                    Transaktionsdetails
                  </h3>
                  <label for="amount" class="mb-1">Zu senden ausschicken</label>
                  <input
                    type="text"
                    class="w-full border-gray-200 mb-4"
                    v-model="transactionData.amount"
                  />
                  <div class="flex flex-wrap w-full -mx-3 mt-5">
                    <div class="w-1/2 px-3">
                      <button
                        @click="countdecrease()"
                        class="block text-center w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                      >
                        Der Rücken
                      </button>
                    </div>
                    <div class="w-1/2 px-3">
                      <button
                        @click="countIncrease()"
                        :disabled="!transactionData.amount ? true : false"
                        class="block text-center w-full p-3 text-base font-medium rounded-lg bg-indigo-500 text-white border border-primary hover:bg-opacity-90 transition"
                        :class="!transactionData.amount ? 'opacity-60' : 'opacity-100'"
                      >
                        Nächste
                      </button>
                    </div>
                  </div>
                </div>
              </KeepAlive>
              <div id="step3" v-if="active == 3">
                <h3 class="font-medium text-indigo-500 text-lg sm:text-xl pb-2">
                  Überprüfung
                </h3>
                <label for="account number" class="mb-1"
                  >Geben Sie 6 Ziffern ein, die an gesendet werden ***********234
                  bestätigen</label
                >
                <input
                  type="text"
                  class="w-full border-gray-200 mb-4 text-center"
                  placeholder="11-11-11"
                  v-model="transactionData.code"
                />
                <div class="flex flex-wrap -mx-3">
                  <div class="w-1/2 px-3">
                    <button
                      @click="countdecrease()"
                      class="block text-center w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                    >
                      Der Rücken
                    </button>
                  </div>
                  <div class="w-1/2 px-3">
                    <button
                      @click="countIncrease()"
                      :disabled="!transactionData.code ? true : false"
                      class="block text-center w-full p-3 text-base font-medium rounded-lg bg-indigo-500 text-white border border-primary hover:bg-opacity-90 transition"
                      :class="!transactionData.code ? 'opacity-60' : 'opacity-100'"
                    >
                      Vollständige Transaktion
                    </button>
                  </div>
                </div>
              </div>
              <div id="step4" v-if="active == 4">
                <div class="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-16 h-16 mx-auto text-green-500 animate-bounce"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3
                    class="font-medium text-indigo-500 text-center text-lg sm:text-xl pb-2"
                  >
                    Transaktionsprozess begann
                  </h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="w-full h-[200px] flex items-center justify-center" v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-20 h-20 text-indigo-600 animate-spin"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "@vue/reactivity";
import Steps from "./steps.vue";

const props = defineProps({
  closeModal: Function,
});
const loading = ref(false);

const transactionData = reactive({
  AccountNumber: "",
  AccountName: "",
  AccountType: "checking",
  swiftCode: "",
  amount: 0,
  code: "",
});
const countIncrease = () => {
  active.value++;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const countdecrease = () => {
  active.value--;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const active = ref(1);
</script>
