<script setup>
const CredentialStore = useCredentialStore();

const showOtp = CredentialStore.showOtp;

const otp = ref(['', '', '', '']);

const handleInput = (index, event) => {
    const value = event.target.value;

    if (!/^\d*$/.test(value)) return;

    otp.value[index] = value;

    if (value && index < otp.value.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
    }
};
const handleKeydown = (index, event) => {
    if (event.key === "Backspace" && !otp.value[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
    }
};

const handleSubmit = () => {
    const otpCode = otp.value.join('');
    console.log("OTP Code Entered:", otpCode);
};

const resendOTP = () => {
    CredentialStore.showOtp = false;
    console.log("OTP Resent");
};
</script>

<template>
    <div class="flex items-center justify-center h-full max-h-96 min-h-96  bg-black w-full max-w-[568px] min-w-[490px]">
        <div class="bg-white p-10 rounded-xl shadow-md w-full">
            <h2 class="text-center text-2xl font-semibold text-gray-900 mb-6">ENTER CODE</h2>

            <label class="block text-sm font-normal text-gray-700 mb-4">Enter OTP Code here</label>

            <div class="flex justify-center gap-2 mb-6">
                <template v-for="(digit, index) in otp" :key="index">
                    <input :id="`otp-${index}`" v-model="otp[index]" type="text" maxlength="1"
                        @input="(e) => handleInput(index, e)" @keydown="(e) => handleKeydown(index, e)"
                        class="w-16 h-16 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring focus:ring-gray-300" />

                </template>
            </div>

            <button @click="handleSubmit"
                class="w-full py-3 mb-4 text-white bg-black rounded-full text-lg font-semibold hover:bg-gray-800">
                <NuxtLink to="/ResetPassword">CONTINUE</NuxtLink>
            </button>

            <div class="text-center">
                <p class="text-sm text-gray-500">
                    Didn’t receive a code?
                    <a @click="resendOTP" class="text-black font-medium cursor-pointer hover:underline">Resend</a>
                </p>
            </div>
        </div>
    </div>
</template>
