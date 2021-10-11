import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    attributify: true,
    theme: {
        extend: {
            colors: {
            },
        },
    },
    plugins: [formsPlugin],
})