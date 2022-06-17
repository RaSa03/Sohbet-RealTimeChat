<template>
  <div class="flex flex-col items-center px-3 mb-5 bg-gray-600 text-cyan-50">
    <div class="flex justify-between items-center py-4 w-full">
      <div
        class="w-11 h-11 bg-black border-2 border-cyan-500 rounded-full"
      ></div>
      <div class="flex items-center">
        <span class="font-bold">S</span>
        <div class="w-5 bg-cyan-300 rounded-full flex mx-1">
          <img class="" src="@/assets/logoHome.svg" alt="" />
        </div>
        <span class="font-bold">HBET</span>
      </div>
    </div>
  </div>
  <div class="flex px-3"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style scoped></style>
