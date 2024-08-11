export const localeData: { es: localeDataType; en: localeDataType; br: localeDataType; getLocale: (locale: string) => localeDataType } = {
  es: {
    NO_PROFESSIONAL_FOUND: 'No se ha encontrado el profesional solicitado',
    NO_SERVICE_FOUND: 'NO se ha encontrado el servicio solicitado',
    NEXT_BUTTON: 'Siguiente'
  },
  en: {
    NO_PROFESSIONAL_FOUND: '',
    NO_SERVICE_FOUND: '',
    NEXT_BUTTON: 'Next'
  },
  br: {
    NO_PROFESSIONAL_FOUND: '',
    NO_SERVICE_FOUND: '',
    NEXT_BUTTON: ''
  },

  getLocale(locale: string): localeDataType {
    switch (locale) {
      case 'es':
        return this.es
      case 'en':
        return this.en
      case 'br':
        return this.br
      default:
        return this.en
    }
  }
}

export type localeDataType = {
  NO_PROFESSIONAL_FOUND: string
  NO_SERVICE_FOUND: string
  NEXT_BUTTON: string
}
