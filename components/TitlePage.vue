<template>
  <div class="container">
    <div id="left" class="content-block"></div>
    <div id="right" class="content-block"></div>
  </div>
  <Aura />
</template>

<script setup>
import Aura from "@/components/Aura.vue";
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121317;
  margin: 0;
}

.content-block {
  height: 100%;
  width: 50%;
  position: relative;
  border: 1px solid #41b1b4;
}
</style>
