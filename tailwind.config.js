/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 rất quan trọng: để Tailwind biết quét class ở đâu
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
