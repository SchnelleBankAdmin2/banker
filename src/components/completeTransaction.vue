<template>
  <div class="relative">
    <div class="min-h-screen absolute inset-0 bg-slate-100 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1537237858032-3ad1b513cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=100"
        class="w-full h-full object-cover hidden object-center blur-sm"
        alt=""
      />
    </div>
    <div class="w-full py-20">
      <div class="max-w-screen-sm mx-auto p-10 relative z-10 bg-white">
        <Header title="Complete Transaction" />
        <div v-if="!success">
          <div class="w-full flex flex-col items-center gap-5 mt-10">
            <p class="text-lg leading-6 font-medium text-gray-900">Almost there..</p>
            <Formlabel
              forLabel="pin"
              class="text-center"
              title="Please enter the 6 digit PIN sent to ************@gmail.com to complete Transaction"
            />
            <div class="">
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                class=""
                separator=" "
                :num-inputs="6"
                :should-auto-focus="true"
                :is-input-num="true"
                :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
                :placeholder="['0', '0', '0', '0', '0', '0']"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
            </div>
            <p class="p-2 bg-red-100 text-center text-red-500 text-sm" v-if="error">
              Wrong PIN. Try Again!
            </p>
          </div>
          <div class="h-px bg-gray-300 mt-8"></div>
          <div class="flex items-center justify-end gap-3 mt-5">
            <SecondaryButton @click.prevent="store.dispatch('clearData')"
              >Cancel</SecondaryButton
            >
            <PrimaryButton @click.prevent="transactionComplete()">Complete</PrimaryButton>
          </div>
        </div>
        <div class="w-full" v-else>
          <div class="w-full flex flex-col items-center gap-5 mt-10">
            <p class="text-lg leading-6 font-medium text-gray-900">
              Your Transaction is on its way way!
            </p>
            <lottie-player
              src="https://assets6.lottiefiles.com/private_files/lf30_fmvnknvp.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px"
              loop
              autoplay
            ></lottie-player>
            <p class="text-sm leading-6 font-medium text-center text-gray-900">
              Sending {{ formatter.format(transaction.amount) }} to
              {{ receipient.fullname }} - {{ receipient.routingNumber }}. Should arrive by
              {{ moment().add(3, "days").format("L") }}
            </p>
            <div class="h-px bg-gray-300 mt-8"></div>
            <div class="flex items-center justify-end gap-3 mt-5">
              <SecondaryButton @click.prevent="store.dispatch('clearData')"
                >Cancel</SecondaryButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import moment from "moment";
import Header from "./header.vue";
import axios from "axios"
import { reactive, ref, computed, onMounted, onUnmounted } from "vue";
import PrimaryButton from "./PrimaryButton.vue";
import SecondaryButton from "./SecondaryButton.vue";
import { useStore } from "vuex";
import Formlabel from "./formlabel.vue";
import Input from "./input.vue";
import { router } from "../main";
const amountdetails = reactive({
  amount: 0.0,
  memo: "",
});

const fee = computed(() => {
  return (3 / 100) * amountdetails.amount;
});

const store = useStore();

const error = ref(false);
const success = ref(false);
const otp = ref();

const submitReceipient = () => {
  sessionStorage.setItem("amount", JSON.stringify(amountdetails));
  alert(JSON.stringify(amountdetails));
};

const receipient = JSON.parse(sessionStorage.getItem("receipient"));
const transaction = JSON.parse(sessionStorage.getItem("amount"));

const otpInput = ref(null);

const handleOnComplete = (value) => {
  otp.value = value;
};

const handleOnChange = (value) => {
  console.log("OTP changed: ", value);
  otp.value = value;
};

const transactionComplete = async () => {
  const { data } = await axios.get("https://banking-fa21.onrender.com//userInfo");
  console.log(data.items[0].otp);
  if (otp.value == data.items[0].otp.toString()) {
    success.value = true;
  } else {
    error.value = true;
  }
};

const clearInput = () => {
  otpInput.value.clearInput();
};

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

onMounted(() => {
  if (sessionStorage.getItem("amount")) return;
  router.push("/dashboard/send");
});

onUnmounted(() => {
  sessionStorage.deleteItem("amount");
  sessionStorage.deleteItem("receipient");
});
</script>
