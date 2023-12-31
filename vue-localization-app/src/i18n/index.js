import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    // default locale
    locale: 'en',
    // translations
    messages: {
        en: {  
            headingTitle: 'Hi, Team Algenib',
            app: {
                description: 'This is a sample to get you up and running with localization fundamentals.',
                'learn-about-placeholder': 'I had a great {lastYear} and {currentYear} will be amazing',
                linesOfCode: 'No lines of code | 1 line of code | {count} lines of code'
            }
        },
        es: {
            headingTitle: 'Hola, equipo Algenib',
            app: {
                description: 'Este es un ejemplo para empezar a utilizar los fundamentos de la localización.',
                'learn-about-placeholder': 'Tuve un gran {lastYear} y {currentYear} será increíble',
                linesOfCode:'Sin líneas de código | 1 línea de código | {count} líneas de código'
            }
        },
        ja: {
            headingTitle: 'こんにちは、チーム・アルジェニブ',
            app: {
                description: 'これは、ローカリゼーションの基礎を立ち上げて実行するためのサンプルです。',
                'learn-about-placeholder':'素晴らしい {lastYear} を過ごせました。{currentYear} も素晴らしいものになるでしょう',
                linesOfCode:'コード行はありません | 1 行のコード |コードの {count} 行'
            }
        }
    },
})

export default i18n