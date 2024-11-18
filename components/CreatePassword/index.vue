<script setup>
import { ref } from 'vue';

const newPassword = ref('');
const confirmPassword = ref('');
const errors = ref({ newPassword: '', confirmPassword: '' });

const validateForm = () => {
  errors.value.newPassword = '';
  errors.value.confirmPassword = '';

  if (!newPassword.value) {
    errors.value.newPassword = 'New Password is required.';
  } else if (newPassword.value.length < 8) {
    errors.value.newPassword = 'Password must be at least 8 characters.';
  }

  if (!confirmPassword.value) {
    errors.value.confirmPassword = 'Confirm Password is required.';
  } else if (newPassword.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Passwords do not match.';
  }

  if (!errors.value.newPassword && !errors.value.confirmPassword) {
    handleSubmit();
  }
};

const handleSubmit = () => {
  console.log('Submitting:', {
    newPassword: newPassword.value,
    confirmPassword: confirmPassword.value,
  });
};
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-[568px] min-w-[490px]">
      <h2 class="text-2xl font-semibold text-center text-gray-900 mb-4">
        RESET PASSWORD
      </h2>
      <form @submit.prevent="validateForm">
        <div class="mb-4">
          <label for="new-password" class="block text-gray-700 text-sm font-normal mb-1">
            New Password
          </label>
          <input
            id="new-password"
            v-model="newPassword"
            type="password"
            placeholder="Enter here"
            class="w-full px-4 py-2 border border-gray-300 bg-gray-100 font-normal rounded focus:ring-2 text-base focus:ring-indigo-500 focus:outline-none"
          />
          <p v-if="errors.newPassword" class="text-red-500 text-sm mt-1">
            {{ errors.newPassword }}
          </p>
        </div>

        <div class="mb-4">
          <label for="confirm-password" class="block text-gray-700 text-sm font-normal mb-1">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            placeholder="Enter here"
            class="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded font-normal focus:ring-2 text-base focus:ring-indigo-500 focus:outline-none"
          />
          <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-lg duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  </div>
</template>
