<script setup>
import i18n from '@/i18n';
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{ $t('app.description') }}
    </h3>
    <div class="AvailableLanguages">
      <h3>We are supporting {{ i18n.global.availableLocales.length }} Languages</h3>
    </div>
    <li :key="lang" v-for="lang in i18n.global.availableLocales">
      {{ lang }}
    </li>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>