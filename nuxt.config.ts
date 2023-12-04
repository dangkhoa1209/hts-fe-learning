export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    srcDir: 'src/',
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                }
            ]
        }
    },
    components: [
        {
            path: '~/components',
            prefix: 'k'
        }
    ],
    modules: ['@nuxt/ui', '@nuxtjs/eslint-module']
})
