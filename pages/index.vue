<template>
  <h1>TOP</h1>
  <div>
    <p>↓ここにたくさん一覧が並ぶ予定↓</p>
    <p><NuxtLink :to="{ name: 'sample-testPage' }">押してみろ、飛ぶぞ</NuxtLink></p>
    <NuxtLink to="/">To Index</NuxtLink>
  </div>
</template>

<style>
a {
  text-decoration: underline;
  color: blue;
}
</style>
