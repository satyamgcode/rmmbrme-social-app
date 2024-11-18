<script setup>

import dropDown from '~/assets/icons/dropdown.svg'

const selectedLanguage = ref('English');
const selectedCountry = ref('UK');
const phoneNumber = ref('');
const password = ref('');
const rememberMe = ref(false);

const languages = ['English', 'Spanish', 'French'];
const countries = [
  { name: 'UK', code: '+44' },
  { name: 'US', code: '+1' },
];

const handleSubmit = () => {
  console.log('Phone/Email:', phoneNumber.value);
  console.log('Password:', password.value);
  console.log('Remember Me:', rememberMe.value);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-black w-full max-w-[568px] min-w-[420px]">
    <div class="bg-white p-10 rounded-xl shadow-md w-full">
      <h2 class="text-center text-2xl font-semibold text-gray-900 mb-6">ADMIN LOGIN</h2>

      <div class="flex justify-center mb-6">
        <div class="relative flex">
          <select v-model="selectedLanguage"
            class=" text-center bg-gray-100 font-medium text-sm text-gray-500 py-1 px-5 rounded-full border border-gray-200 cursor-pointer appearance-none">
            <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
          </select>
          <span class="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-400">
            <img :src="dropDown" alt="dropdown" class="ml-4">
          </span>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-normal text-black mb-1">Email or Mobile Phone Number</label>
        <div class="flex">
          <div class="relative">
            <select v-model="selectedCountry"
              class="flex max-w-24 text-sm items-center bg-gray-100 text-gray-700 px-4 py-3 rounded-l-md border border-gray-300 cursor-pointer appearance-none">
              <option v-for="country in countries" :key="country.name" :value="country.name">
                {{ country.name }}
              </option>
            </select>
            <span class="absolute inset-y-0 right-1 flex items-center pointer-events-none text-gray-400">
              <img :src="dropDown" alt="dropdown" class="ml-4">
            </span>
          </div>
          <input v-model="phoneNumber" type="text" placeholder="+44"
            class="w-full px-4 text-sm py-3 text-gray-700 bg-gray-100 border-t border-b border-r border-gray-300 rounded-r-md placeholder-gray-400 focus:outline-none" />
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-normal  text-black mb-1">Password</label>
        <input v-model="password" type="password" placeholder="Enter here"
          class="w-full px-4 py-3 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none" />
      </div>

      <div class="flex items-center mb-6">
        <input type="checkbox" v-model="rememberMe" id="rememberMe"
          class="w-4 h-4 mr-2 text-black border-gray-300 rounded focus:ring-black" />
        <label for="rememberMe" class="text-xs text-gray-700">Remember Me</label>
      </div>

      <button @click="handleSubmit"
        class="w-full py-3 mb-4 text-white bg-black rounded-full text-lg font-semibold hover:bg-gray-800">
        LOGIN
      </button>

      <div class="text-center">
        <NuxtLink to="/forgotpassword" class="text-lg text-gray-500 hover:underline">FORGOT PASSWORD</NuxtLink>
      </div>
    </div>
  </div>
</template>
