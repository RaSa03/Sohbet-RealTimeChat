<template>
  <div class="bg-black flex flex-col items-center min-h-screen">
    <div class="rounded-lg flex flex-col items-center">
      <div class="mx-auto w-72 border-3 border-black">
        <img src="@/assets/logo.png" alt="" class="w-full" />
      </div>
      <div class="text-cyan-100 text-2xl text-center">
        Log in with your email
      </div>
      <div>
        <login-form v-if="toggleCreateLogin">
          <button
            @click="toggleCreateLogin = false"
            class="text-cyan-300 rounded-lg h-12 hover:bg-gray-800"
          >
            Create a New Account
          </button>
        </login-form>
        <create-account-form v-if="!toggleCreateLogin">
          <button
            @click="toggleCreateLogin = true"
            class="text-cyan-500 h-12 hover:bg-gray-800 rounded-lg"
          >
            Log In
          </button>
        </create-account-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import CreateAccountForm from "@/components/CreateAccountForm.vue";
export default {
  components: { LoginForm, CreateAccountForm },
  data() {
    return {
      toggleCreateLogin: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
