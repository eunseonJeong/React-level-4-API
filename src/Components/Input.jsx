import React from 'react'
import styled from 'styled-components'

//재활용되는 input을 만들기 위해 프롭스로 다 내려준다
function Input({h2, value, onChange,maxLength,placeholder}) {
  return (
    <>
    <h2>{h2}</h2>
    <StInput
      required
      type="text"
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
    />
    </>
  )
}

export default Input;

const StInput = styled.input`
  display:block;
  width:100%;
  margin:0 auto;
  height:50px;
  padding:5px;
  border:2px solid gray;
  border-radius:10px;
`