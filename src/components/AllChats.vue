<template>
  <div>
    <friend-history />
    <div class="px-3">
      <div class="flex cursor-pointer items-center my-6 shrink-0">
        <div
          class="bg-black rounded-full w-14 h-14 mr-3 border-2 border-sky-600 overflow-hidden flex shrink-0"
        >
          <img src="" alt="" />
        </div>
        <div @click="$router.push(`/chat/${1212}`)" class="grow">
          <div class="text-xl font-bold">Friend_1212</div>
          <div class="flex opacity-70 text-s w-full">
            <div>me:</div>
            <div class="mr-auto ml-2">MessageMessage</div>
            <div class="ml-2">17:10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FriendHistory from "./FriendHistory.vue";
export default {
  components: { FriendHistory },
};
</script>

<style lang="scss" scoped></style>
