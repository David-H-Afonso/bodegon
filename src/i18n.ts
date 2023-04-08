import i18n, { Module } from 'i18next'
import { initReactI18next } from 'react-i18next'

import GENERAL_EN from './langs/en/general.json'
import GENERAL_ES from './langs/es/general.json'
import GENERAL_DE from './langs/de/general.json'

const resources = {
	es: {
		general: GENERAL_ES,
	},
	en: {
		general: GENERAL_EN,
	},
	de: {
		general: GENERAL_DE,
	},
}

const userLang = navigator.language

const languageDetector = {
	type: 'languageDetector',
	async: true,
	detect: (callback: (lng: string) => void) => {
		const lang = userLang // if you want to use the device langauge use => Localization.locale, if you want to change it inside the app use the store
		callback(lang)
		return lang
	},
	init: () => {},
	cacheUserLanguage: () => {},
}

i18n
	.use(initReactI18next)
	.use(languageDetector as Module)
	.init({
		compatibilityJSON: 'v3', // This is needed in Android Simulators to avoid getting an error
		resources,
		fallbackLng: 'es',
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
