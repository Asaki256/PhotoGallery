/** @type {import('tailwindcss').Config} */
export default {
  // tailwindを適用したいファイル群を指定
  purge: [
    './app.vue', // <= ドキュメントからさらに追加
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

