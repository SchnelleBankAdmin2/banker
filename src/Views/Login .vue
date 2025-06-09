<template>
  <div>
    <div class="w-full grid grid-cols-2 lg:grid-cols-6">
      <div class="hidden lg:block col-span-4 overflow-hidden min-h-screen relative">
        <div
          class="w-full h-full absolute inset-0 bg-gradient-to-br from-black p-10 flex flex-col justify-center pl-[100px]"
        >
          <img src="../assets/shnell2.png" class="h-9 w-fit" alt="" />
          <p class="text-lg font-semibold text-white mt-10">
            Einfache Bankgeschäfte, gleiche großartige Erfahrung
          </p>
          <div class="mt-5 flex flex-row gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-indigo-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p class="text-sm font-normal text-gray-200 max-w-lg">
              Geben Sie Ihren E -Mail- und Überprüfungscode ein, das sich bei Ihrem
              anmelden, SCHNELLEBANK -ANGEBNISSE.
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=100"
          class="w-full h-full object-cover object-center"
          alt="banking"
        />
      </div>
      <section class="col-span-2 py-24 md:py-32 bg-white">
        <div class="container px-4 mx-auto">
          <div class="max-w-sm mx-auto">
            <div class="mb-6 text-center">
              <a class="inline-block mb-6" href="#"> </a>
              <h3 class="mb-4 text-2xl md:text-3xl font-bold">Willkommen zurück!</h3>
            </div>
            <keep-alive>
              <form action="submit" @submit.prevent="enterPassword()" v-if="!next">
                <div class="mb-6">
                  <label class="block mb-2 text-coolGray-800 text-sm font-medium" for=""
                    >E-Mail-Addresse</label
                  >
                  <input
                    class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    type="email"
                    required
                    autocomplete
                    placeholder="example@email.com"
                    v-model="user.email"
                  />
                </div>

                <button
                  type="submit"
                  class="inline-flex items-center space-x-2 justify-center py-3 px-7 mb-6 w-full text-base relative text-indigo-50 font-medium text-center leading-6 bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                >
                  <span class="absolute w-fit left-4 top-3 opacity-50"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                  <span>nächste</span>
                  <span v-if="loading"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 animate-spin text-indigo-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </keep-alive>
            <form action="submit" @submit.prevent="login()" v-if="next">
              <button
                @click.prevent="next = false"
                class="px-2 py-2 border rounded-md border-slate-200 text-slate-500 mb-5 hover:bg-indigo-50"
              >
                <span class="sr-only">der Rücken</span
                ><span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <div class="mb-4">
                <label
                  class="block mb-2 text-coolGray-800 text-sm font-medium"
                  for="password"
                  >Bestätigungscode eingeben</label
                >
                <input
                  class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                  v-model="user.password"
                />
              </div>
              <div class="flex flex-wrap items-center justify-between mb-6">
                <div class="w-full md:w-auto mt-1">
                  <button
                    class="inline-block text-xs font-medium text-indigo-500 hover:text-indigo-600"
                    @click.prevent="openModal"
                  >
                    Bestätigungscode nochmal versenden
                  </button>
                </div>
              </div>
              <button
                type="submit"
                class="inline-block py-3 px-7 mb-6 w-full text-base text-indigo-50 font-medium text-center leading-6 bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm relative"
                href="#"
              >
                Einloggen
                <span class="absolute w-fit left-4 top-3 opacity-50"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
              </button>
            </form>
            <p class="text-center">
              <span class="text-xs font-medium">Haben Sie kein Konto?</span>
              <a
                class="ml-2 inline-block text-xs font-medium text-indigo-500 hover:text-indigo-600 hover:underline"
                href="#"
                >Besuchen Sie Ihre nächste Bankfiliale</a
              >
            </p>
          </div>
        </div>
      </section>
      <div v-if="open">
        <div
          class="bg-black bg-opacity-90 fixed top-0 left-0 w-full min-h-screen h-full flex items-center justify-center px-4 py-5"
        >
          <div
            class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 md:py-[60px] md:px-[70px] text-center"
          >
            <h3 class="font-bold text-dark text-xl sm:text-2xl pb-2">
              Bestätigungs-E-Mail gesendet
            </h3>
            <span class="inline-block bg-indigo h-1 w-[90px] mx-auto rounded mb-6"></span>
            <p class="text-base text-body-color leading-relaxed mb-10">
              Habe immer noch keine Post bekommen. Wenden Sie sich an unsere Hotline, um
              Unterstützung zu erhalten, oder besuchen Sie die nächstgelegene Bankfiliale,
              um Unterstützung zu erhalten
            </p>
            <div class="flex flex-wrap -mx-3">
              <div class="w-1/2 px-3">
                <button
                  class="block text-center w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                  @click.prevent="closeModal()"
                >
                  Absagen
                </button>
              </div>
              <div class="w-1/2 px-3">
                <button
                  class="block text-center w-full p-3 text-base font-medium rounded-lg bg-indigo-500 text-white border border-indigo-500 hover:bg-opacity-90 transition"
                >
                  Details anzeigen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { auth } from "../firebase";
import { ref, reactive, onMounted } from "vue";
import { router } from "../main";

const user = reactive({ email: "", password: "" });

const next = ref(false);

const loading = ref(false);

const store = useStore();
const login = () => {
  console.log(user);
  store.dispatch("login", user);
};

const enterPassword = () => {
  loading.value = true;
  setTimeout(() => {
    next.value = true;
    loading.value = false;
  }, 3000);
};

onMounted(() => {
  if (!auth.currentUser) return;
  router.push("/dashboard/index");
  console.log("hello");
  return;
});

const open = ref(false);

const openModal = () => {
  open.value = true;
};
const closeModal = () => {
  open.value = false;
};
</script>
