<script setup lang="ts"></script>

<template>
  <div class="sparks" aria-hidden="true">
    <span v-for="i in 12" :key="i" class="spark" />
  </div>
</template>

<style scoped>
.sparks {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.spark {
  position: absolute;
  top: 55%; /* anvil height */
  left: 50%;
  width: 14px;
  height: 2px;
  background: linear-gradient(90deg, #fff6d1, #ff9c2a, transparent);
  opacity: 0;
  transform-origin: left center;
}

.spark:nth-child(1) {
  transform: rotate(-60deg);
}

.spark:nth-child(2) {
  transform: rotate(-40deg);
}

.spark:nth-child(3) {
  transform: rotate(-20deg);
}

.spark:nth-child(4) {
  transform: rotate(0deg);
}

.spark:nth-child(5) {
  transform: rotate(20deg);
}

.spark:nth-child(6) {
  transform: rotate(40deg);
}

.spark:nth-child(7) {
  transform: rotate(60deg);
}

.spark:nth-child(8) {
  transform: rotate(100deg);
}

.spark:nth-child(9) {
  transform: rotate(140deg);
}

.spark:nth-child(10) {
  transform: rotate(180deg);
}

.spark:nth-child(11) {
  transform: rotate(220deg);
}

.spark:nth-child(12) {
  transform: rotate(260deg);
}

@keyframes sparkFly {
  0% {
    opacity: 1;
    transform: scaleX(0.2) translateX(0);
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scaleX(1) translateX(80px);
  }
}
</style>
