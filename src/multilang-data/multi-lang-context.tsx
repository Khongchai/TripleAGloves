import { dictionaryList, languageOptions } from "./languages"
import React, { useState, createContext } from "react"

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
  changeLanguage: (selected: any) => {},
})

const serverSideRendering = typeof window == "undefined"

export function LanguageProvider({ children }) {
  let defaultLanguage: undefined | string = undefined
  if (!serverSideRendering) {
    defaultLanguage = localStorage.get("lang")
  }
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en")

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    changeLanguage: selected => {
      const newLanguage = languageOptions[selected] ? selected : "en"
      setUserLanguage(newLanguage)
      if (!serverSideRendering) {
        localStorage.setItem("lang", newLanguage)
      }
    },
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}
