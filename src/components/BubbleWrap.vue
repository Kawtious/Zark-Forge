<script setup lang="ts">
import {ref} from 'vue'

const {columns = 10, rows = 4} = defineProps<{
  columns?: number,
  rows?: number
}>()

type Bubble = {
  popped: boolean
}

const bubbles = ref<Bubble[]>(
    Array.from({length: columns * rows}, () => ({popped: false}))
)

function popBubble(index: number) {
  if (!bubbles.value[index]) {
    return;
  }

  if (!bubbles.value[index].popped) {
    bubbles.value[index].popped = true
  }
}
</script>

<template>
  <div class="bubble-wrap">
    <div
        v-for="(bubble, i) in bubbles"
        :key="i"
        class="bubble"
        :class="{ popped: bubble.popped }"
        @click="popBubble(i)"
    >
      <span v-if="!bubble.popped" class="spoiler"></span>
      <span v-else class="pop-text">POP</span>
    </div>
  </div>
</template>

<style scoped>
.bubble-wrap {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  grid-template-rows: repeat(v-bind(rows), 1fr);
  gap: 4px;
}

.bubble {
  background-color: #191919;
  border-radius: 6px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.15s ease,
  transform 0.08s ease;
}

.bubble:hover:not(.popped) {
  background-color: #373737;
  transform: translateY(-1px);
}

.spoiler {
  color: transparent;
  background-color: #373737;
  border-radius: 4px;
  padding: 4px 8px;
  transition: filter 0.15s ease;
}

.bubble.popped {
  background-color: transparent;
  cursor: default;
}

.pop-text {
  font-weight: 700;
  font-size: clamp(0.6rem, 2vw, 1rem);
  letter-spacing: 1px;
  white-space: nowrap;
}
</style>