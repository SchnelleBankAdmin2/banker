<template>
  <div class="relative">
    <div class="min-h-screen absolute inset-0 bg-slate-100 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1537237858032-3ad1b513cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=100"
        class="w-full hidden h-full object-cover object-center blur-sm"
        alt=""
      />
    </div>
    <div class="w-full py-20">
      <div class="max-w-screen-sm mx-auto p-10 relative z-10 bg-white">
        <Header title="Geld schicken" />
        <form action="" @submit="submitReceipient()" class="mt-10 flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="account" title="From" />
            <P class="text-sm font-medium text-gray-500"
              >Tägliche Überprüfung - {{ store.state.userData["accout-number"] }}
              <span
                class="font-semibold"
                :class="
                  store.state.userData['current-balance'] >= amountdetails.amount
                    ? 'text-green-500'
                    : 'text-red-500'
                "
                >Kontostand -
                {{ formatter.format(store.state.userData["current-balance"]) }}</span
              ></P
            >
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="Betragsdetails" title="Betragsdetails" />
            <P class="text-sm font-medium text-gray-500"
              >Übertragungsgrenzen: täglich - {{ formatter.format("25000") }}, 30 Tage -
              {{ formatter.format("250000") }}
            </P>
            <div class="relative w-full">
              <input
                type="number"
                name="amount"
                min="500"
                id="fullname"
                required="true"
                v-model="amountdetails.amount"
                class="tex-sm font-normal text-gray-700 p-2 border border-gray-900 w-full pl-8"
              />
              <p class="text-lg font-semibold text-indigo-500 absolute left-2 top-2">€</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="fees" title="Honorare" />
            <P class="text-sm font-medium text-gray-500">{{ formatter.format(fee) }} </P>
          </div>

          <div class="flex flex-col gap-2">
            <Formlabel forLabel="memo" title="Memo (optional)" />
            <input
              type="text"
              name="memo"
              id="memo"
              placeholder="Enter memo"
              v-model="amountdetails.memo"
              class="text-sm font-normal text-gray-700 p-2 border border-gray-900 w-full"
            />
            <P class="text-sm font-medium text-gray-500"
              >Ihr Empfänger wird auch dieses Memo sehen
            </P>
          </div>

          <div class="h-px bg-gray-300"></div>
          <div class="flex items-center justify-end gap-3">
            <SecondaryButton @click.prevent="store.dispatch('clearData')"
              >Absagen</SecondaryButton
            >
            <PrimaryButton>Fortsetzen</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Formlabel from "./formlabel.vue";
import Header from "./header.vue";
import Input from "./input.vue";
import { reactive, computed, onMounted } from "vue";
import PrimaryButton from "./PrimaryButton.vue";
import SecondaryButton from "./SecondaryButton.vue";
import { router } from "../main";
import { useStore } from "vuex";
const amountdetails = reactive({
  amount: 0.0,
  memo: "",
});

const fee = computed(() => {
  return (3 / 100) * amountdetails.amount;
});

const store = useStore();

const submitReceipient = () => {
  sessionStorage.setItem("amount", JSON.stringify(amountdetails));
  router.push("/dashboard/review");
};

onMounted(() => {
  if (sessionStorage.getItem("receipient")) {
    if (!sessionStorage.getItem("amount")) {
      return;
    } else {
      amountdetails.amount = JSON.parse(sessionStorage.getItem("amount")).amount;
      amountdetails.memo = JSON.parse(sessionStorage.getItem("amount")).memo;
    }
  } else {
    router.push("/dashboard/send");
  }
});

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});
</script>
