import { defineStore } from 'pinia';

export  const useCredentialStore = defineStore('useCredentialStore', () => {
    const showOtp = ref(false);
    console.log(showOtp);

    return { showOtp };
});