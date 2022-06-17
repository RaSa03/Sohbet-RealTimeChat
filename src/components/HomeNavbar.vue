<template>
  <div class="h-20 w-full flex justify-around items-center">
    <button
      @click="toggleChat"
      class="w-10"
      type="button"
      :disabled="ToggleChatFriends"
    >
      <img src="@/assets/chat.svg" alt="" v-if="!ToggleChatFriends" />
      <img src="@/assets/selectedChat.svg" alt="" v-if="ToggleChatFriends" />
    </button>
    <button
      @click="toggleFriends"
      type="button"
      :disabled="!ToggleChatFriends"
      class="w-10"
    >
      <img v-if="ToggleChatFriends" src="@/assets/people.svg" alt="" />
      <img v-if="!ToggleChatFriends" src="@/assets/selectedPeople.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    ToggleChatFriends: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleChat() {
      this.$emit("chat-or-friends", true);
    },
    toggleFriends() {
      this.$emit("chat-or-friends", false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
