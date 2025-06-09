<template>
  <div class="relative">
    <div class="min-h-screen absolute inset-0 bg-slate-100 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1537237858032-3ad1b513cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=100"
        class="w-full h-full hidden object-cover object-center blur-sm"
        alt=""
      />
    </div>
    <div class="w-full py-20">
      <div class="max-w-screen-sm mx-auto p-10 relative z-10 bg-white">
        <Header title="Review Transaction" />
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 flex items-center justify-between">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Receipient Information
            </h3>
            <SecondaryButton @click="router.push('/dashboard/send')"
              >Edit</SecondaryButton
            >
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Bank Country</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ country.name }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Account Details</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ receipient.accontType }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Receipient Full name</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ receipient.fullname }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Routing Number</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ receipient.routingNumber }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Swift Code</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ receipient.swiftCode }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Address</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ receipient.address }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 flex items-center justify-between">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Transaction Information
            </h3>
            <SecondaryButton @click="router.push('/dashboard/amount')"
              >Edit</SecondaryButton
            >
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">From</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  Checking (Account Balance -
                  {{ formatter.format(store.state.userData["current-balance"]) }})
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Amount</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ formatter.format(amountinfo.amount) }}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Fees</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ formatter.format(amountinfo.amount * 0.03) }}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Total to be deducted</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ formatter.format(amountinfo.amount + amountinfo.amount * 0.03) }}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Send on</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ moment().format("L") }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">To be received</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ moment().add(3, "days").format("L") }}
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Memo</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ amountinfo.memo }}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="h-px bg-gray-300 mt-8"></div>
        <div class="flex items-center justify-end gap-3 mt-5">
          <SecondaryButton @click.prevent="store.dispatch('clearData')"
            >Cancel</SecondaryButton
          >
          <PrimaryButton @click.prevent="router.push('/dashboard/complete')"
            >Continue</PrimaryButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { countries } from "../assets/countries.json";
import moment from "moment";
import Header from "./header.vue";
import Input from "./input.vue";
import { reactive, ref, computed, onMounted } from "vue";
import PrimaryButton from "./PrimaryButton.vue";
import SecondaryButton from "./SecondaryButton.vue";
import { useStore } from "vuex";
import { router } from "../main";
const amountdetails = reactive({
  amount: 0.0,
  memo: "",
});

const fee = computed(() => {
  return (3 / 100) * amountdetails.amount;
});

const store = useStore();

const country = ref({});

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

const amountinfo = JSON.parse(sessionStorage.getItem("amount"));
const receipient = JSON.parse(sessionStorage.getItem("receipient"));

onMounted(() => {
  country.value = countries.find((e) => e.code === receipient.country);
  if (sessionStorage.getItem("amount")) return;
  router.push("/dashboard/send");
});
</script>
