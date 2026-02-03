<script setup lang="ts"></script>

<template>
  <div class="embers" aria-hidden="true">
    <span v-for="i in 30" :key="i" class="ember" />
  </div>
</template>

<style scoped>
.embers {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.ember {
  position: absolute;
  bottom: -10px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffd27d 0%, #ff7a18 60%, transparent 70%);
  opacity: 0.35;
  filter: blur(1px);
  animation: emberFloat linear infinite;
}

.ember:nth-child(odd) {
  width: 3px;
  height: 3px;
}

.ember:nth-child(3n) {
  width: 5px;
  height: 5px;
}

.ember:nth-child(1n) {
  left: 5%;
  animation-duration: 14s;
  animation-delay: -2s;
}

.ember:nth-child(2n) {
  left: 15%;
  animation-duration: 18s;
  animation-delay: -6s;
}

.ember:nth-child(3n) {
  left: 25%;
  animation-duration: 22s;
  animation-delay: -10s;
}

.ember:nth-child(4n) {
  left: 35%;
  animation-duration: 16s;
  animation-delay: -4s;
}

.ember:nth-child(5n) {
  left: 45%;
  animation-duration: 20s;
  animation-delay: -8s;
}

.ember:nth-child(6n) {
  left: 55%;
  animation-duration: 24s;
  animation-delay: -12s;
}

.ember:nth-child(7n) {
  left: 65%;
  animation-duration: 19s;
  animation-delay: -5s;
}

.ember:nth-child(8n) {
  left: 75%;
  animation-duration: 21s;
  animation-delay: -9s;
}

.ember:nth-child(9n) {
  left: 85%;
  animation-duration: 17s;
  animation-delay: -3s;
}

@keyframes emberFloat {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-120vh) translateX(20px);
    opacity: 0;
  }
}
</style>
