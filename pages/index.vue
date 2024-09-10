<template>
  <h1>TOP</h1>
  <div>
    <p>↓ここにたくさん一覧が並ぶ予定↓</p>
    <p><NuxtLink :to="{ name: 'sample-testPage' }">押してみろ </NuxtLink></p>
    <NuxtLink to="/">To Index</NuxtLink>
    <div class="flex justify-start">
      <div class="mx-4 my-8">
        <NuxtImg src="/piyo.png" quality="80" width="100" height="100" :placeholder="[100, 100]" />
        <p>これはひよこ</p>
      </div>
      <div class="mx-4 my-8">
        <NuxtImg src="/innu.png" quality="80" width="100" height="100" :placeholder="[100, 100]" />
        <p>これはいっぬ</p>
      </div>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: underline;
  color: blue;
}
</style>
