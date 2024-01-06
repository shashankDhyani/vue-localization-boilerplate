<template>
  <div class="about">
    <h1>{{ $t('headingTitle') }} 😀</h1>
    <h1>{{ $t('app.learn-about-placeholder', { lastYear: '2023', currentYear: '2024' }) }}</h1>
    <h2>{{ $tc('app.linesOfCode', 0) }}</h2>
    <h2>{{ $tc('app.linesOfCode', 1) }}</h2>
    <h2>{{ $tc('app.linesOfCode', 9, { count: 999 }) }}</h2>
    <p>{{ $d(new Date(), 'long') }}</p>
    <!-- <i18n-t keypath="repo.repoLink" tag="p">
    <template v-slot:repoName>
      <a href="https://github.com/shashankDhyani/vue-localization-boilerplate">{{ `dagdhja` }}</a>
    </template>
  </i18n-t> -->
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
