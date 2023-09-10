<template>
  <div
    class="cursor-aura"
    :style="{
      background:
        'radial-gradient(600px at ' +
        cursorX +
        'px ' +
        cursorY +
        'px, rgba(29, 78, 216, 0.15), transparent 80%)',
    }"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let cursorX = ref(0);
let cursorY = ref(0);

onMounted(() => {
  window.addEventListener("mousemove", updateCursorPosition);
});

function updateCursorPosition(event) {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
}
</script>

<style scoped>
.cursor-aura {
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  transition: all 300ms;
}

@media (min-width: 1024px) {
  .cursor-aura {
    position: absolute;
  }
}
</style>
