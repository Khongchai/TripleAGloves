import React, { useContext } from "react"
import { LanguageContext } from "./multi-lang-context"

export const Text: React.FC<{ text: string }> = ({ text }) => {
  const { dictionary } = useContext(LanguageContext)
  if (!dictionary[text]) {
    return <span>{text}</span>
  }
  return <span>{dictionary[text]}</span>
}
