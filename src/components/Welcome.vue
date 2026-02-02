<script setup lang="ts">
import BubbleWrap from "./BubbleWrap.vue";
</script>

<template>
  <span>
    <p class="welcome">
      Welcome to the fiery forge of<br/>
      <span class="welcome-name">Z'ark Ashveil, the blacksmith of the ember fields!</span>
    </p>
  </span>

  <p>
    I am still tidying up the forge. There is not much to see here right now
  </p>

  <p>
    Have some <strong>bubble wrap</strong> in the meantime
  </p>

  <div class="card">
    <BubbleWrap rows="10" columns="4"/>
  </div>

  <p class="bye">Hope you're having a great day!<br/>Much love to my wife, sheep! 🐑 🐑 🌙 🐍 🦎 💜</p>
</template>

<style scoped>
.welcome {
  font-weight: 700;
  font-size: 2em;
  white-space: pre-line;
}

.welcome-name {
  font-style: italic;
}

.bye {
  color: #888;
}
</style>
