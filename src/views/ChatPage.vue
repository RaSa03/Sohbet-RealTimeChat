<template>
  <div class="bg-gray-800">
    <section
      class="overflow-auto w-full relative bg-gradient-to-t bg-gray-800 h-screen max-w-3xl flex flex-col mx-auto"
    >
      <header
        class="fixed top-0 w-full flex items-center justify-between max-w-3xl rounded-b-full h-16 md:h-24 bg-cyan-100/95 px-8 md:px-12"
      >
        <div class="flex items-center">
          <button
            @click="$router.push('/home')"
            class="mr-3 w-8 h-8 md:w-12 md:h-12"
          >
            <img
              src="@/assets/back.svg"
              alt=""
              class="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
          <div class="">
            <span class="text-xl font-bold">Friend_{{ $route.params.id }}</span>
          </div>
        </div>
        <div class="flex items-center ml-2">
          <button class="w-7 h-7 md:w-12 md:h-12">
            <img
              src="@/assets/phone-call.svg"
              alt=""
              class="w-7 h-7 md:w-11 md:h-11"
            />
          </button>
          <button class="w-8 h-8 md:w-12 md:h-12 ml-4">
            <img
              src="@/assets/video.svg"
              alt=""
              class="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
        </div>
      </header>
      <div class="grow overflow-auto p-4 flex flex-col justify-end md:text-2xl">
        <div class="overflow-auto pt-24 flex flex-col">
          <div
            class="border border-black mr-12 md:mr-24 p-3 bg-white/95 rounded-3xl rounded-tl-none my-2 md:my-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptates!
          </div>
          <div
            class="text-end border border-cyan-900 ml-12 md:ml-24 p-3 bg-cyan-300 rounded-3xl rounded-tr-none my-2 md:my-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptates!
          </div>
        </div>
      </div>
      <div
        class="rounded-t-lg h-14 md:h-20 flex items-center p-2 bg-gradient-to-r from-violet-200 to-cyan-200"
      >
        <button class="w-8 h-8 md:w-12 md:h-12 mr-2">
          <img
            class="w-8 h-8 md:w-12 md:h-12"
            src="@/assets/camera.svg"
            alt=""
          />
        </button>
        <form @submit.prevent action="" class="flex w-full items-center h-full">
          <input
            type="text"
            placeholder="Message"
            class="grow shrink h-full rounded-full px-3 focus:outline-none focus:border-2 border-fuchsia-200 md:text-2xl"
          />
          <button class="w-8 h-8 md:w-12 md:h-12 mx-3">
            <img
              class="w-8 h-8 md:w-12 md:h-12"
              src="@/assets/voice.svg"
              alt=""
            />
          </button>
          <button class="w-8 h-8 md:w-12 md:h-12">
            <img
              class="w-8 h-8 md:w-12 md:h-12"
              src="@/assets/send.svg"
              alt=""
            />
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
