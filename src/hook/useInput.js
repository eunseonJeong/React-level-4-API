import { useState } from "react"
//이전에 입력했던 값이 초기값이었으면 좋겠다! = text
export const useInput = (text) => {
    const [inputValue, setInputValue] = useState(text || '')
    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }
    return [inputValue, inputHandler, setInputValue]
};