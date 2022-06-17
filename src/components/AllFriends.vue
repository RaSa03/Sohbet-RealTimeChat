<template>
  <div class="px-3">
    <div
      class="hover:shadow-xl flex cursor-pointer items-center my-6 shrink-0 border-b-2 border-black rounded-full rounded-br-none"
    >
      <div
        class="bg-black rounded-full w-14 h-14 mr-3 border-2 border-sky-600 overflow-hidden flex shrink-0"
      >
        <img src="" alt="" />
      </div>
      <div @click="$router.push(`/chat/${1212}`)" class="grow">
        <div class="text-2xl font-bold">Friend_1212</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
