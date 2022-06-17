<template>
  <div class="min-h-screen w-screen bg-black">
    <section
      class="w-full releative h-screen max-w-3xl flex flex-col mx-auto md:border-x-2 border-black bg-gradient-to-t to-cyan-200 from-gray-300"
    >
      <home-header>
        <div
          v-if="!ChatsFriendsToggle"
          class="hover:shadow-md mt-3 rounded-xl h-10 w-full flex bg-cyan-50 px-2 hover:border"
        >
          <img src="@/assets/search.svg" alt="" class="w-6" />
          <input
            type="text"
            placeholder="Search..."
            class="w-full rounded-r-xl bg-cyan-50 focus:outline-none ml-2"
          />
        </div>
      </home-header>
      <div class="overflow-auto grow">
        <all-chats v-if="ChatsFriendsToggle" />
        <all-friends v-if="!ChatsFriendsToggle" />
      </div>
      <home-navbar
        :ToggleChatFriends="ChatsFriendsToggle"
        @chat-or-friends="chatsOrFriends"
      />
    </section>
  </div>
</template>

<script>
import AllChats from "@/components/AllChats.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import AllFriends from "@/components/AllFriends.vue";
import HomeNavbar from "@/components/HomeNavbar.vue";
export default {
  components: { AllChats, HomeHeader, AllFriends, HomeNavbar },
  data() {
    return {
      ChatsFriendsToggle: false,
    };
  },
  methods: {
    chatsOrFriends(toggle) {
      this.ChatsFriendsToggle = toggle;
    },
  },
};
</script>

<style lang="scss" scoped></style>
