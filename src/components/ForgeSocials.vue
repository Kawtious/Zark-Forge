<script setup lang="ts">
import IconEmail from '@/components/icons/IconEmail.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
</script>

<template>
  <div class="socials">
    <div class="socials-buttons">
      <a href="https://github.com/Kawtious" class="social-btn github" aria-label="GitHub">
        <IconGitHub class="icon" colour="#FF3C00" />
        <span class="social-btn-label">GitHub</span>
      </a>
      <a href="mailto:contact@zarkforge.xyz" class="social-btn email" aria-label="Email">
        <IconEmail class="icon" colour="#FF3C00" />
        <span class="social-btn-label">Email</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.socials-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));

  gap: 0.75rem;

  align-items: center;
  justify-content: center;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.4rem;
  padding: 0.55rem 0.6rem;

  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffd27d;

  border-radius: 0.75rem;

  transition:
    transform 0.15s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.social-btn .icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  font-size: 1rem;
}

.social-btn:hover {
  background: rgba(255, 122, 24, 0.18);
  transform: translateY(-1px);
}

@media (max-width: 1280px) {
  .social-btn .icon {
    width: 2rem;
    height: 2rem;
  }

  .social-btn-label {
    display: none;
  }

  .socials-buttons > .social-btn {
    max-width: none;
  }
}

@media (max-width: 1024px) {
  .social-btn-label {
    display: block;
  }
}
</style>
