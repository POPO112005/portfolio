import { createContext } from 'react'

export type Language = 'en' | 'th'

export interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
