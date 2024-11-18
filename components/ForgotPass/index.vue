<script setup>
import dropDown from '~/assets/icons/dropdown.svg';

const CredentialStore = useCredentialStore();


const countries = [
  { name: 'UK', code: '+44' },
  { name: 'US', code: '+1' },
];

const selectedCountry = ref(countries[0].code);
const contactInput = ref('');

const handleForgotPassword = () => {
  CredentialStore.showOtp = true;
  console.log('Selected Country Code:', selectedCountry.value);
  console.log('Contact Input:', contactInput.value);
};
</script>

<template>
    <div class="bg-white rounded-xl shadow-md py-8 px-11  w-full max-w-[568px] min-w-[420px]">
      <h2 class="text-center text-xl font-semibold text-gray-900 mb-6">FORGOT PASSWORD</h2>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Email or Mobile Phone Number</label>
        <div class="flex">
          <div class="relative">
            <select v-model="selectedCountry"
              class="flex items-center text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-l-md border border-gray-300 cursor-pointer appearance-none">
              <option v-for="country in countries" :key="country.name" :value="country.code">
                {{ country.name }}
              </option>
            </select>
            <span class="absolute inset-y-0 right-1 flex items-center pointer-events-none text-gray-400">
              <img :src="dropDown" alt="dropdown" class="w-3 h-3">
            </span>
          </div>
          
          <input v-model="contactInput" type="text" :placeholder="selectedCountry"
            class="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border-t border-b border-r border-gray-300 rounded-r-md placeholder-gray-400 focus:outline-none" />
        </div>
      </div>

      <button @click="handleForgotPassword"
        class="w-full py-3 text-white bg-black rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
        CONTINUE
      </button>
    </div>
</template>
