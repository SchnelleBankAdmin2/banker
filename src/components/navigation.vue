<template>
  <div>
    <div>
      <div class="min-h-full">
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div
          class="fixed inset-0 flex z-40 lg:hidden"
          role="dialog"
          aria-modal="true "
          v-if="sidebar"
        >
          <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.
      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div class="fixed inset-0 bg-sky-600 bg-opacity-75" aria-hidden="true"></div>

          <!--
      Off-canvas menu, show/hide based on off-canvas menu state.
      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-sky-700">
            <!--
        Close button, show/hide based on off-canvas menu state.
        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                @click="sidebar = false"
                type="button"
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="../assets/logo-new.png"
                alt="schnellbank logo"
              />
            </div>
            <nav
              class="mt-5 flex-shrink-0 h-full divide-y divide-sky-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <!-- Current: "bg-slate-800 text-white", Default: "text-slate-100 hover:text-white hover:bg-slate-600" -->
                <router-link
                  to="/dashboard/index"
                  class="bg-slate-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  aria-current="page"
                >
                  <!-- Heroicon name: outline/home -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Heimat
                </router-link>

                <router-link
                  to="/dashboard/transactions"
                  class="text-slate-100 hover:text-white hover:bg-slate-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/scale -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                  Transaktionen
                </router-link>

                <button
                  @click="modal = true"
                  class="text-slate-100 w-full hover:text-white hover:bg-slate-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/credit-card -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Karten
                </button>

                <button
                  @click="modal = true"
                  class="text-slate-100 w-full hover:text-white hover:bg-slate-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/user-group -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Rechnungen bezahlen
                </button>

                <button
                  @click="modal = true"
                  class="text-slate-100 w-full hover:text-white hover:bg-slate-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/document-report -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Berichte
                </button>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <router-link
                    to="/dashboard/settings"
                    class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-slate-100 hover:text-white hover:bg-slate-600"
                  >
                    <!-- Heroicon name: outline/cog -->
                    <svg
                      class="mr-4 h-6 w-6 text-slate-200"
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    die Einstellungen
                  </router-link>

                  <a
                    href="#"
                    class="group hidden flex items-center px-2 py-2 text-base font-medium rounded-md text-slate-100 hover:text-white hover:bg-slate-600"
                  >
                    <!-- Heroicon name: outline/question-mark-circle -->
                    <svg
                      class="mr-4 h-6 w-6 text-slate-200"
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
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Help
                  </a>

                  <a
                    href="#"
                    class="group hidden flex items-center px-2 py-2 text-base font-medium rounded-md text-slate-100 hover:text-white hover:bg-slate-600"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <svg
                      class="mr-4 h-6 w-6 text-slate-200"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Privacy
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <lockodal />

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-grow bg-indigo-900 pt-5 pb-4 overflow-y-auto">
            <a href="https://schnelle-bank.com/" class="flex items-center flex-shrink-0 px-4">
              <img
                class="h-6 w-auto"
                src="../assets/logo-new.png"
                alt="schnellbank logo"
              />
            </a>
            <nav
              class="mt-5 flex-1 flex flex-col divide-y divide-slate-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <!-- Current: "bg-slate-800 text-white", Default: "text-slate-100 hover:text-white hover:bg-slate-600" -->
                <router-link
                  to="/dashboard/index"
                  class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  :class="
                    currentRoute === 'dashboard'
                      ? 'bg-indigo-800 text-white'
                      : 'text-slate-100 hover:text-white hover:bg-indigo-600'
                  "
                  aria-current="page"
                >
                  <!-- Heroicon name: outline/Heimat -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Heimat
                </router-link>

                <router-link
                  to="/dashboard/transactions"
                  class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  :class="
                    currentRoute === 'transactions'
                      ? 'bg-indigo-800 text-white'
                      : 'text-slate-100 hover:text-white hover:bg-indigo-600'
                  "
                >
                  <!-- Heroicon name: outline/scale -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                  Transaktionen
                </router-link>

                <button
                  @click="modal = true"
                  class="text-slate-100 w-full hover:text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/credit-card -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Karten
                </button>

                <button
                  @click="modal = true"
                  class="text-slate-100 w-full hover:text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/user-group -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Rechnungen bezahlen
                </button>

                <button
                  @click="modal = true"
                  class="text-slate-100 w-full hover:text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/document-report -->
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-slate-200"
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
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Berichte
                </button>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <router-link
                    to="/dashboard/settings"
                    class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                    :class="
                      currentRoute === 'settings'
                        ? 'bg-indigo-800 text-white'
                        : 'text-slate-100 hover:text-white hover:bg-indigo-600'
                    "
                  >
                    <!-- Heroicon name: outline/cog -->
                    <svg
                      class="mr-4 h-6 w-6 text-slate-200"
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    die Einstellungen
                  </router-link>

                  <a
                    href="#"
                    class="group hidden flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-slate-100 hover:text-white hover:bg-slate-600"
                  >
                    <!-- Heroicon name: outline/question-mark-circle -->
                    <svg
                      class="mr-4 h-6 w-6 text-slate-200"
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
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Help
                  </a>

                  <a
                    href="#"
                    class="group hidden flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-slate-100 hover:text-white hover:bg-slate-600"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <svg
                      class="mr-4 h-6 w-6 text-slate-200"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Privacy
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div class="lg:pl-64 flex flex-col flex-1">
          <div
            class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"
          >
            <button
              type="button"
              @click="sidebar = !sidebar"
              class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 lg:hidden"
            >
              <span class="sr-only">Open sidebar</span>
              <!-- Heroicon name: outline/menu-alt-1 -->
              <svg
                class="h-6 w-6"
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <!-- Search bar -->
            <div
              class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"
            >
              <div class="flex-1 flex">
                <form class="w-full flex md:ml-0" action="#" method="GET">
                  <label for="search-field" class="sr-only">Search</label>
                  <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <!-- Heroicon name: solid/search -->
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Suchtransaktionen"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                >
                  <span class="sr-only">View notifications</span>
                  <!-- Heroicon name: outline/bell -->
                  <svg
                    class="h-6 w-6"
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      @click="menuopen = !menuopen"
                      class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-slate-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <img
                        class="h-8 w-8 rounded-full"
                        :src="store.state.userData.image.url"
                        alt=""
                      />
                      <span class="hidden ml-3 text-gray-700 text-sm font-medium lg:block"
                        ><span class="sr-only">Open user menu for </span>
                        {{ store.state.userData.name }}</span
                      >
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg
                        class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

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
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    v-if="menuopen"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <!-- Active: "bg-gray-100", Not Active: "" -->

                    <router-link
                      to="/dashboard/settings"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                      >die Einstellungen</router-link
                    >
                    <button
                      @click="store.dispatch('logout')"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Ausloggen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
    <lock-modal v-if="modal" @closemodal="modal = false" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import LockModal from "./lockModal.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();

const menuopen = ref(false);
const sidebar = ref(false);
const modal = ref(false);
const currentRoute = computed(() => {
  return useRoute().name;
});
</script>
