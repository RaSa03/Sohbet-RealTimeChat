<template>
  <form @submit.prevent class="flex flex-col w-72 h-80">
    <input
      type="text"
      placeholder="Email"
      class="mt-5 bg-cyan-50 h-12 p-4 rounded-lg focus:outline-none focus:bg-cyan-100"
    />
    <input
      type="password"
      placeholder="Password"
      class="mt-5 bg-cyan-50 h-12 p-4 rounded-t-lg focus:outline-none focus:bg-cyan-100"
    />
    <input
      class="bg-cyan-50 h-12 p-4 rounded-b-lg focus:outline-none focus:bg-cyan-100 mb-5"
      type="password"
      placeholder="Confirm Password"
    />
    <button
      class="mb-2 bg-gray-900 text-cyan-300 rounded-lg h-12 hover:bg-gray-800"
    >
      Create an Acount
    </button>
    <div class="text-gray-400 mb-2 text-center">Have an Account?</div>

    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
