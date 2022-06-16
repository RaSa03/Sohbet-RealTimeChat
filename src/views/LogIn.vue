<template>
  <div class="bg-black flex flex-col items-center min-h-screen">
    <div class="rounded-lg flex flex-col items-center">
      <div
        class="bg-gradient-to-r from-cyan-200 to-cyan-500 mx-auto w-72 border-3 border-black"
      >
        <img src="@/assets/logo.svg" alt="" class="w-full" />
      </div>
      <div class="text-cyan-100 text-2xl text-center">
        Log in with your email
      </div>
      <div>
        <form action="" class="flex flex-col w-72 h-80">
          <input
            type="text"
            placeholder="Email"
            class="mt-6 bg-cyan-50 h-12 p-4 rounded-t-lg focus:outline-none focus:bg-cyan-100"
          />
          <input
            class="bg-cyan-50 h-12 p-4 rounded-b-lg focus:outline-none focus:bg-cyan-100 mb-6"
            type="password"
            placeholder="Password"
          />
          <button
            class="mb-6 bg-gray-900 text-cyan-300 rounded-lg h-12 hover:bg-gray-800"
          >
            Log In
          </button>
          <button
            class="bg-gray-900 text-cyan-300 rounded-lg h-12 hover:bg-gray-800"
          >
            Create New Account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
