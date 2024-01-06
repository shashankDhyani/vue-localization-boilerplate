import { createI18n } from 'vue-i18n'
import { en, es, ja } from './translations'
const messages = {
    en,
    es,
    ja
}

const i18n = createI18n({
    // default locale
    locale: 'en',
    datetimeFormats: {
        'en': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'short', day: 'numeric',
                weekday: 'short', hour: 'numeric', minute: 'numeric'
            }
        },
        'es': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'short', day: 'numeric',
                weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
            }
        },
        'ja': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'short', day: 'numeric',
                weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
            }
        }
    },
    messages
    // translations
    // messages: {
    //     en: {
    //         headingTitle: 'Hi, Team Algenib',
    //         app: {
    //             description: 'This is a sample to get you up and running with localization fundamentals.',
    //             'learn-about-placeholder': 'I had a great {lastYear} and {currentYear} will be amazing',
    //             linesOfCode: 'No lines of code | 1 line of code | {count} lines of code'
    //         },
    //         "repo": {
    //             "repo-link": "You can find all code for this app on this {repoName}",
    //             "repository": "Repository"
    //         }
    //     },
    //     es: {
    //         headingTitle: 'Hola, equipo Algenib',
    //         app: {
    //             description: 'Este es un ejemplo para empezar a utilizar los fundamentos de la localización.',
    //             'learn-about-placeholder': 'Tuve un gran {lastYear} y {currentYear} será increíble',
    //             linesOfCode: 'Sin líneas de código | 1 línea de código | {count} líneas de código'
    //         },
    //         "repo": {
    //             "repo-link": "You can find all code for this app on this {repoName}",
    //             "repository": "Repository"
    //         }
    //     },
    //     ja: {
    //         headingTitle: 'こんにちは、チーム・アルジェニブ',
    //         app: {
    //             description: 'これは、ローカリゼーションの基礎を立ち上げて実行するためのサンプルです。',
    //             'learn-about-placeholder': '素晴らしい {lastYear} を過ごせました。{currentYear} も素晴らしいものになるでしょう',
    //             linesOfCode: 'コード行はありません | 1 行のコード |コードの {count} 行'
    //         },
    //         "repository-intro": "このデモのコードはすべて次の場所にあります。",
    //         "repository": "リポジトリ"
    //     }
    // },
})

export default i18n