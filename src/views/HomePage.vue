<template>
  <div class="min-h-screen w-screen bg-black">
    <section
      class="w-full releative h-screen max-w-3xl flex flex-col mx-auto md:border-x-2 border-black bg-gradient-to-t to-cyan-200 from-gray-300"
    >
      <header class="flex flex-col items-center px-3 mb-5">
        <div class="flex justify-between items-center py-4 w-full">
          <div
            class="w-11 h-11 bg-black border-2 border-cyan-500 rounded-full"
          ></div>
          <div class="flex items-center">
            <span class="font-bold">S</span>
            <div class="w-5 bg-black rounded-full flex mx-1">
              <img class="" src="@/assets/logoHome.svg" alt="" />
            </div>
            <span class="font-bold">HBET</span>
          </div>
        </div>
        <div class="rounded-xl h-10 w-full flex bg-cyan-50 px-2 hover:border">
          <img src="@/assets/search-svgrepo-com.svg" alt="" class="w-6" />
          <input
            type="text"
            placeholder="Search"
            class="w-full rounded-r-xl bg-cyan-50 focus:outline-none ml-2"
          />
        </div>
      </header>
      <div class="overflow-auto grow">
        <div class="px-3 pb-5 flex overflow-auto shrink-0 snap-center">
          <div
            class="min-w-min h-20 flex flex-col justify-between shrink-0 mr-3 items-center"
          >
            <div class="rounded-full w-14 h-14 bg-gray-200 opacity-70 flex">
              <img
                class="w-5 mx-auto"
                src="@/assets/plus-svgrepo-com.svg"
                alt=""
              />
            </div>
            <span class="text-xs">Your story</span>
          </div>
          <div
            class="min-w-min h-20 flex flex-col justify-between shrink-0 mr-3 items-center"
          >
            <div
              class="border-2 rounded-full w-14 h-14 bg-black flex border-fuchsia-500"
            ></div>
            <span class="text-xs">friendHistory</span>
          </div>
        </div>
        <div class="px-3">
          <div class="flex items-center my-6 shrink-0">
            <div
              class="rounded-full w-14 h-14 mr-3 border-2 border-sky-600 overflow-hidden flex shrink-0"
            >
              <img src="" alt="hz co bylo" />
            </div>
            <div class="grow">
              <div class="text-xl font-bold">Friend_1</div>
              <div class="flex opacity-70 text-s w-full">
                <div>me:</div>
                <div class="mr-auto ml-2">MessageMessage</div>
                <div class="ml-2">17:10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="h-20 w-full flex justify-around items-center">
        <div class="w-10">
          <img src="@/assets/chat-svgrepo-com.svg" alt="" />
          Chats
        </div>
        <div class="w-10">
          <img src="@/assets/people-svgrepo-com.svg" alt="" />
          Friends
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
