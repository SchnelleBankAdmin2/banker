<template>
  <div>
    <div class="px-4 mt-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Favoritinnen
      </h2>
      <ul
        role="list"
        class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"
      >
        <li
          class="relative col-span-1 flex shadow-sm rounded-md"
          v-for="project in projects"
          :key="project.name"
        >
          <div
            class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md"
          >
            {{ project.initials }}
          </div>
          <div
            class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
          >
            <div class="flex-1 px-4 py-2 text-sm truncate">
              <a href="#" class="text-gray-900 font-medium hover:text-gray-600">
                {{ project.name }}
              </a>
              <p class="text-gray-500">
                {{ project.amount }} Transaktionen{{ project.amount > 1 ? "s" : "" }}
              </p>
            </div>
            <div class="flex-shrink-0 pr-2">
              <button
                type="button"
                @click="dropdown(project)"
                class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-none focus:ring-offset-2 focus:ring-purple-500"
                id="pinned-project-options-menu-0-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Offene Optionen</span>
                <!-- Heroicon name: solid/dots-vertical -->
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
              </button>

              <!--
              Dropdown menu, show/hide based on menu state.
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <div
                class="z-50 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                v-if="project.dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="pinned-project-options-menu-0-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="pinned-project-options-menu-0-item-0"
                    >Aussicht</a
                  >
                </div>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="pinned-project-options-menu-0-item-1"
                    >Von festgepinkelt entfernt</a
                  >
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm hidden"
                    role="menuitem"
                    tabindex="-1"
                    id="pinned-project-options-menu-0-item-2"
                    >Teilen</a
                  >
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- More items... -->
      </ul>
    </div>
    <Banner :promo="promo" />
    <div class="hidden sm:block mt-5 lg:mt-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    EDB
                  </th>
                  <th
                    class="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block"
                  >
                    status
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
                      <a href="#" class="group inline-flex space-x-2 truncate text-sm">
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
                    <span class="text-gray-900 font-medium" v-if="transaction.deposits"
                      >{{ Number(transaction.deposits).toLocaleString() }}
                    </span>
                    <span class="text-gray-900 font-medium" v-if="transaction.withdrawals"
                      >-{{ Number(transaction.withdrawals).toLocaleString() }}
                    </span>
                    EUR
                  </td>
                  <td
                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                  >
                    <span class="text-gray-900 font-medium"
                      >{{ Number(transaction["ending-daily-balance"]).toLocaleString() }}
                    </span>

                    EUR
                  </td>
                  <td
                    class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block"
                  >
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 capitalize"
                      v-if="transaction.status === 'aa29dba5b281dad6cb86d30ac88dcaf1'"
                    >
                      Ausstehend
                    </span>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize"
                      v-if="transaction.status === '8cc6a5bfdb1911e2b7455a6d6ae9cdd3'"
                    >
                      Erfolg
                    </span>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 capitalize"
                      v-if="transaction.status === '25b9400f28d3c7535ae89b48cd43698b'"
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
              <div class="flex-1 flex justify-between sm:justify-end">
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
</template>

<script setup>
import Banner from "./banner.vue";
import moment from "moment";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

const transactions = ref();

const promo = reactive({
  title: " Holen Sie sich noch heute eine Goldvisa -Karte",
  caption:
    "Machen Sie mit unserer neuen Goldvisa -Karte Abzüge und Transaktionen von überall auf der Welt",
  img:
    "https://images.unsplash.com/photo-1645518044910-8223215a9909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhhcHB5JTIwYmFua2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=100",
});

const projects = ref([
  {
    name: "Liesel Maier",
    amount: 12,
    dropdown: false,
    initials: "LM",
  },
  {
    name: "Cheine Roth",
    amount: 23,
    dropdown: false,
    initials: "CR",
  },
  {
    name: "Ckatrina Vogt",
    amount: 17,
    dropdown: false,
    initials: "CV",
  },
  {
    name: "Deutsche Bahn",
    amount: 14,
    dropdown: false,
    initials: "DB",
  },
]);

const dropdown = (x) => {
  projects.value.forEach((element) => {
    element == x ? (element.dropdown = !element.dropdown) : (element.dropdown = false);
  });
};

onMounted(async () => {
  const { data } = await axios.get("https://banking-fa21.onrender.com//transactions");
  transactions.value = [...data.items];
  console.log(data);
});
</script>
