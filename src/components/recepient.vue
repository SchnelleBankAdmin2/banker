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
        <Header title="Empfängerdetails und Informationen" />
        <form
          action=""
          @submit.prevent="submitReceipient()"
          class="mt-10 flex flex-col gap-5"
        >
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="country" title="Wo ist die Bank Ihres Empfängers??" />
            <country-select
              v-model="receipient.country"
              :country="receipient.country"
              topCountry="DE"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="Account-type" title="Recepient Account Details" />
            <div class="flex gap-2 items-center">
              <input
                type="radio"
                name="Individual"
                value="Individuell"
                id="individual"
                v-model="receipient.accontType"
              />
              <Formlabel forLabel="individual" title="Individuell" />
            </div>
            <div class="flex gap-2 items-center">
              <input
                type="radio"
                name="Business"
                value="Geschäft"
                id="business"
                v-model="receipient.accontType"
              />
              <Formlabel forLabel="business" title="Geschäft" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="name" title="Geben Sie den ersten und Nachnamen ein" />

            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Geben Sie den vollständigen Namen ein"
              required
              v-model="receipient.fullname"
              class="tex-sm font-normal text-gray-700 p-2 border border-gray-900 w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="routing" title="Geben Sie die Routing -Nummer ein" />
            <input
              type="number"
              name="name"
              id="fullname"
              placeholder="Geben Sie eine rezeptionelle Routing -Nummer ein"
              required
              v-model="receipient.routingNumber"
              class="tex-sm font-normal text-gray-700 p-2 border border-gray-900 w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="swiftcode" title="Geben Sie den Swift -Code ein" />

            <input
              type="text"
              name="swift"
              id="swift"
              placeholder="Geben Sie die Bank Swift Code ein"
              required
              v-model="receipient.swiftCode"
              class="tex-sm font-normal text-gray-700 p-2 border border-gray-900 w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Formlabel forLabel="address" title="Geben Sie die Empfängeradresse ein" />

            <input
              type="text"
              name="address"
              id="address"
              placeholder="Adresse eingeben"
              required
              v-model="receipient.address"
              class="tex-sm font-normal text-gray-700 p-2 border border-gray-900 w-full"
            />
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
import { reactive, onMounted } from "vue";
import PrimaryButton from "./PrimaryButton.vue";
import SecondaryButton from "./SecondaryButton.vue";
import { useRouter } from "vue-router";
import { router } from "../main";
import { useStore } from "vuex";
const receipient = reactive({
  country: "DE",
  accontType: "individual",
  fullname: "",
  routingNumber: "",
  swiftCode: "",
  address: "",
});

const store = useStore();

const submitReceipient = () => {
  sessionStorage.setItem("receipient", JSON.stringify(receipient));
  //alert(JSON.stringify(receipient));
  router.push("/dashboard/amount");
};

onMounted(() => {
  if (!sessionStorage.getItem("receipient")) return;
  receipient.country = JSON.parse(sessionStorage.getItem("receipient")).country;
  receipient.accontType = JSON.parse(sessionStorage.getItem("receipient")).accontType;
  receipient.fullname = JSON.parse(sessionStorage.getItem("receipient")).fullname;
  receipient.routingNumber = JSON.parse(
    sessionStorage.getItem("receipient")
  ).routingNumber;
  receipient.swiftCode = JSON.parse(sessionStorage.getItem("receipient")).swiftCode;
  receipient.address = JSON.parse(sessionStorage.getItem("receipient")).address;
});
</script>
