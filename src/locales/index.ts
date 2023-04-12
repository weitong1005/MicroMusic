import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    },
    zhCN: {
        message: {
            hello: '你好、世界'
        }
    }
}

const i18n = createI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages,
    legacy: false,
    globalInjection: true,
})


export default i18n
