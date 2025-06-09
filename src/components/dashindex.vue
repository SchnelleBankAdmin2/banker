<script setup>
import { ref, reactive, onMounted, onBeforeMount, computed } from "vue";
import SendingMoney from "./sendingMoney.vue";
import { useStore } from "vuex";
import { router } from "../main";
import Banner from "./banner.vue";
import axios from "axios";
import moment from "moment";
import Userinfo from "./userinfo.vue";

const store = useStore();
const modal = ref(false);
const transactions = ref();
const slideOver = ref(false);

const closeSlide = () => {
  slideOver.value = false;
};

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

const closeModal = () => {
  modal.value = false;
};

const promo = reactive({
  title:
    " Holen Sie sich noch heute eine Premium -Lebensversicherung von uns.Sichern Sie sich noch heute Ihre Zukunft",
  caption: "Gehen Sie mit unseren UI -Ressourcen und -Lösungen global",
  img:
    "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=100",
});

onMounted(async () => {
  const { data } = await axios.get("https://banking-fa21.onrender.com/transactions");
  transactions.value = [...data.items];
});

onBeforeMount(async () => {
  const { data } = await axios.get("https://banking-fa21.onrender.com/userInfo");
  store.dispatch("loaduserInfo", data.items[0]);
});
</script>

<template>
  <div>
    <main class="flex-1 pb-8">
      <!-- Page header -->
      <div class="bg-white shadow">
        <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div
            class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
          >
            <SendingMoney :closeModal="closeModal" v-if="modal" />
            <div class="flex-1 min-w-0">
              <!-- Profile -->
              <div class="flex items-center">
                <img
                  class="hidden h-16 w-16 rounded-full sm:block"
                  :src="store.state.userData.image.url"
                  alt=""
                />
                <div>
                  <div class="flex items-center">
                    <img
                      class="h-16 w-16 rounded-full sm:hidden"
                      :src="store.state.userData.image.url"
                      alt=""
                    />
                    <h1
                      class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate"
                    >
                      hallo, {{ store.state.userData.name }}
                    </h1>
                  </div>

                  <dl class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt class="sr-only">kontonummer</dt>
                    <dd
                      class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      >
                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                        <path
                          fill-rule="evenodd"
                          d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      **************7754
                    </dd>
                    <dt class="sr-only">Gesellschaft</dt>
                    <dd
                      class="flex mt-3 sm:mt-0 items-center text-sm text-gray-500 font-medium capitalize sm:mr-6"
                    >
                      <!-- Heroicon name: solid/office-building -->
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {{ store.state.userData.company }}
                    </dd>
                    <dt class="sr-only">Kontostatus</dt>
                    <dd
                      class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize"
                    >
                      <!-- Heroicon name: solid/check-circle -->
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Verifiziertes Konto
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                @click="slideOver = true"
                class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Geld hinzufügen
              </button>
              <button
                type="button"
                @click="router.push('/dashboard/send')"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Geld schicken
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-lg leading-6 font-medium text-gray-900">Überblick</h2>
          <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Card -->

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/scale -->
                    <svg
                      class="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 truncate">
                        Kontostand
                      </dt>
                      <dd>
                        <div class="text-lg font-medium text-gray-900">
                          {{ formatter.format(store.state.userData["current-balance"]) }}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-5 py-3">
                <div class="text-sm">
                  <router-link
                    to="/dashboard/transactions?filter=all"
                    class="font-medium text-indigo-700 hover:text-indigo-900"
                  >
                    Alle ansehen
                  </router-link>
                </div>
              </div>
            </div>
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/scale -->

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 truncate">
                        Ausstehend
                      </dt>
                      <dd>
                        <div class="text-lg font-medium text-gray-900">
                          -{{ formatter.format(store.state.userData["pending"]) }}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-5 py-3">
                <div class="text-sm">
                  <router-link
                    to="/dashboard/transactions?filter=pending"
                    class="font-medium text-indigo-700 hover:text-indigo-900"
                  >
                    Alle ansehen
                  </router-link>
                </div>
              </div>
            </div>
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/scale -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 truncate">
                        Verarbeitet (letzte 30 Tage)
                      </dt>
                      <dd>
                        <div class="text-lg font-medium text-gray-900">
                          {{ formatter.format(store.state.userData["processed"]) }}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-5 py-3">
                <div class="text-sm">
                  <router-link
                    to="/dashboard/transactions?filter=success"
                    class="font-medium text-indigo-700 hover:text-indigo-900"
                  >
                    Alle ansehen
                  </router-link>
                </div>
              </div>
            </div>

            <!-- More items... -->
          </div>
        </div>
        <Banner :promo="promo" />
        <h2
          class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8"
        >
          Letzte Aktivität
        </h2>

        <!-- Activity list (smallest breakpoint only) -->
        <div class="shadow sm:hidden">
          <ul
            role="list"
            class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            <li v-for="transaction in transactions" :key="transaction._id">
              <a href="#" class="block px-4 py-4 bg-white hover:bg-gray-50">
                <span class="flex items-center space-x-4">
                  <span class="flex-1 flex space-x-2 truncate">
                    <!-- Heroicon name: solid/cash -->
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="flex flex-col text-gray-500 text-sm truncate">
                      <span class="truncate">{{ transaction.name }}</span>
                      <span
                        ><span
                          class="text-gray-900 font-medium"
                          v-if="transaction.deposits"
                          >{{ Number(transaction.deposits).toLocaleString() }}</span
                        >
                        <span
                          class="text-gray-900 font-medium"
                          v-if="transaction.withdrawals"
                          >-{{ Number(transaction.withdrawals).toLocaleString() }}</span
                        >
                        EUR</span
                      >
                      <time datetime="2020-07-11">{{
                        moment(transaction.date).format("MMM Do YY")
                      }}</time>
                    </span>
                  </span>
                  <!-- Heroicon name: solid/chevron-right -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </li>

            <!-- More transactions... -->
          </ul>

          <nav
            class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
            aria-label="Pagination"
          >
            <div class="flex-1 flex justify-between">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
              >
                Vorherige
              </a>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
              >
                Nächste
              </a>
            </div>
          </nav>
        </div>

        <!-- Activity table (small breakpoint and up) -->
        <div class="hidden sm:block">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col mt-2">
              <div
                class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Transaktion
                      </th>
                      <th
                        class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Menge
                      </th>
                      <th
                        class="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block"
                      >
                        Status
                      </th>
                      <th
                        class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Datum
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                      class="bg-white"
                      v-for="transaction in transactions"
                      :key="transaction._id"
                    >
                      <td
                        class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        <div class="flex">
                          <a
                            href="#"
                            class="group inline-flex space-x-2 truncate text-sm"
                          >
                            <!-- Heroicon name: solid/cash -->
                            <svg
                              class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <p class="text-gray-500 truncate group-hover:text-gray-900">
                              {{ transaction.name }}
                            </p>
                          </a>
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                      >
                        <span
                          class="text-gray-900 font-medium"
                          v-if="transaction.withdrawals"
                          >-{{ Number(transaction.withdrawals).toLocaleString() }}
                        </span>
                        <span
                          class="text-gray-900 font-medium"
                          v-if="transaction.deposits"
                          >{{ Number(transaction.deposits).toLocaleString() }}
                        </span>
                        EUR
                      </td>
                      <td
                        class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block"
                      >
                        <span
                          v-if="transaction.status === 'aa29dba5b281dad6cb86d30ac88dcaf1'"
                          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 capitalize"
                        >
                          Ausstehend
                        </span>
                        <span
                          v-if="transaction.status === '8cc6a5bfdb1911e2b7455a6d6ae9cdd3'"
                          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize"
                        >
                          Erfolg
                        </span>
                        <span
                          v-if="transaction.status === '25b9400f28d3c7535ae89b48cd43698b'"
                          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 capitalize"
                        >
                          Gescheitert
                        </span>
                      </td>
                      <td
                        class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                      >
                        <time datetime="2020-07-11">{{
                          moment(transaction.date).format("MMM Do YY")
                        }}</time>
                      </td>
                    </tr>

                    <!-- More transactions... -->
                  </tbody>
                </table>
                <!-- Pagination -->
                <nav
                  class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                  aria-label="Pagination"
                >
                  <div class="hidden sm:block">
                    <p class="text-sm text-gray-700">
                      Zeigen
                      <span class="font-medium">1</span>
                      zu
                      <span class="font-medium">10</span>
                      von
                      <span class="font-medium">20</span>
                      Ergebnisse
                    </p>
                  </div>
                  <div class="flex-1 flex justify-between sm:justify-end hidden">
                    <a
                      href="#"
                      class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Vorherige
                    </a>
                    <a
                      href="#"
                      class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Nächste
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Userinfo
        v-if="slideOver"
        @closeSlide="
          () => {
            slideOver = false;
          }
        "
      />
    </main>
  </div>
</template>
