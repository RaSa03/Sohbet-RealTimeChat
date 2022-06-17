<template>
  <form @submit.prevent action="" class="flex flex-col w-72 h-80">
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
      class="mb-2 bg-gray-900 text-cyan-300 rounded-lg h-12 hover:bg-gray-800"
    >
      Log In
    </button>
    <div class="text-gray-400 mb-2 text-center">or</div>
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
