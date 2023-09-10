<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-[#121317] m-0"
  >
    <div id="left" class="h-full w-1/2 relative border border-[#41b1b4]"></div>
    <div id="right" class="h-full w-1/2 relative border border-[#41b1b4]"></div>
  </div>
  <Aura />
</template>

<script setup>
import Aura from "@/components/Aura.vue";
</script>
