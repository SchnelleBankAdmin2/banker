import { createStore } from 'vuex';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth} from 'firebase/auth'
import { router } from '../main'


const store = createStore ( {
    state: {
        user:null,
        authIsReady:false,
        userData: {name:'test user', image:{url:'', alt:''}, 'current-balance':0, }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        CLEAR_USER(state) {
            state.user=null
        },
        setAuthIsReady(state, payload){
            state.authIsReady=payload
        },
        setUserData(state, payload) {
            state.userData = payload
        }
    },
    actions: {
        async login({ commit }, details) {
            const { email, password } = details
            try {
                await signInWithEmailAndPassword(auth, email, password)
            }
            catch (error){
                switch (error.code) {
                    case 'auth/user-not-found': alert("user not found")
                        break
                    case 'auth/wrong-password': alert('wrong password')
                        break
                    default: alert("Something went wrong")
                
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            console.log(auth.currentUser)
            router.push('/dashboard/index')
        },
        
        async register({ commit }, details) {
            const { email, password } = details
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            }
            catch (error){
                switch (error.code) {
                    case 'auth/email-already-in-use': alert("Email already in use")
                        break
                    case 'auth/invalid-email': alert('invalid email')
                        break
                    case 'auth/operation-not-allowed': alert('Operation not allowed')
                        break
                    case 'auth/weak-password': alert('Weak Password')
                        break
                    default: alert("Something went wrong")
                
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/dashboard/index')
         },


        
        async logout({ commit }) {
            await signOut(auth)
            commit('CLEAR_USER')
            router.push('/login')
        },
        
        fetchUser({ commit }) {
            auth.onAuthStateChanged(async user => {
                if (user === null) {
                    commit ('CLEAR_USER')
                    if (router.isReady() && router.currentRoute.value.path.includes('/dashboard')) {
                        router.push('/login')
                    }
                }
                else {
                    commit('SET_USER', user)
                    if (router.isReady() && router.currentRoute.value.path === '/login') {
                        router.push('/dashboard')
                    }
                }
            })
        },

        loaduserInfo({commit}, user){
            commit('setUserData', user)
        },
        clearData(){
            sessionStorage.removeItem('amount')
            sessionStorage.removeItem('receipient')
            router.push('/dashboard/index')
                }
        
    },
    modules:{}
})



export {store}