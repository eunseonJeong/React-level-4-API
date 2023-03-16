import React from 'react'
import Header from '../Components/Header'
import Input from '../Components/Input'
import { useInput } from '../hook/useInput'
import styled from 'styled-components'
import { __addTodo, __getTodo } from '../reducer/Module/moduleSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function TDWrite() {
  const [nikName, nikNameHander,setNikName] = useInput()
  const [title, titleHander,setTitle] = useInput()
  const [contents, ContentHander,setContent] = useInput()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormHander = async (e) => {
    e.preventDefault();
    await dispatch(__addTodo({nikName ,title, contents, isDone:false}))
    await dispatch(__getTodo())
    setNikName('');
    setTitle('');
    setContent('');
    navigate('/list');
  }
  
  return (
    <>
      <Header/>
      <div>
        <StForm onSubmit={onFormHander}>
        <Input 
            h2="닉네임"
            value={nikName}
            onChange={nikNameHander}
            maxLength='5'
            placeholder='닉네임을 입력해주세요. 5자 이내로'/>

          <Input 
            h2="제목"
            value={title}
            onChange={titleHander}
            maxLength='10'
            placeholder='제목을 입력해주세요. 10자 이내로'/>

            <Input 
            h2="내용"
            value={contents}
            onChange={ContentHander}
            maxLength='50'
            placeholder='내용을 입력해주세요. 50자 이내로'/>
          
          <StBtn> 확인 </StBtn>
        </StForm>
      </div>
    </>
  )
}

export default TDWrite

const StForm = styled.form`
  width:80%;
  margin:0 auto;
  padding:20px;
`

const StBtn = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  color: gray;
`