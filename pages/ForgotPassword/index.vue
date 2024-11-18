<script setup>

const CredentialStore = useCredentialStore();

definePageMeta({
  name : 'forgot-password',
  layout: 'adminpage'
});

</script>

<template>
  <div v-if="!CredentialStore.showOtp">
    <ForgotPass />
    
  </div>
  <div v-else >
    <OtpPage />
  </div>
</template>