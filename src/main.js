import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "./index.css"
import Login from "./Views/Login .vue"
import Home from "./Views/Home.vue"
import dashboard from "./Views/dashboard.vue"
import transactions from './Views/transactions.vue'
import settings from './Views/settings.vue'
import notFound from './Views/404.vue'
import send from './Views/receipient.vue'
import amount from './Views/amount.vue'
import review from './Views/review.vue'
import complete from './Views/complete.vue'
import vueCountryRegionSelect from 'vue3-country-region-select'
import { store } from './store'




const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path:"/", name:"Home", component:Home
    },
    {
        path:"/login", name:"login", component:Login
    },
    {
        path:"/dashboard/index", name:"dashboard", component:dashboard
    },
    {
        path:"/dashboard/transactions", name:"transactions", component:transactions,  props: route => ({ query: route.query.filter })
    },
    {path:"/dashboard/settings", name:"settings", component:settings},
    {path:"/dashboard/send", name:"send", component:send},
    {path:"/dashboard/amount", name:"sendamount", component:amount},
    {path:"/dashboard/review", name:"review", component:review},
    {path:"/dashboard/complete", name:"complete", component:complete},
    { path: '/:pathMatch(.*)*', name: '404', component: notFound },
]
})


createApp(App).use(router, {mode:'history'}).use(store).use(vueCountryRegionSelect).mount('#app')

export {router}