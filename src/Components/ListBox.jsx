import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { __deleteTodo, __getTodo,__fixTodo } from '../reducer/Module/moduleSlice';
import Input from './Input';
import { useInput } from '../hook/useInput';

//박스 스타일
function ListBox({id,nik,titles,content}) {

  const dispatch = useDispatch();

  const [edit,setEdit] = useState(false);

  const [nikName,nikNameHander, setNikName] = useInput(nik);
  const [title, titleHander, setTitle] = useInput(titles);
  const [contents, ContentHander, setContent ] = useInput(content);
  //id, nikName, title, coutents 는 payload 값
  const newData = {id,nikName,title,contents}
  
  const onDelete = async () => {
    await dispatch(__deleteTodo(id));
    await dispatch(__getTodo());
  }
  
  const onFix = async() => {
      setEdit(pre => !pre) //true or flase
      await dispatch(__fixTodo(newData)) //fix할려면 필욘한건? 뭐지? : id, 고쳐질값(setEdit을 통해서 저장이된 Edit값)[{id},{id:,nik:,title:,contnets:}]
      await dispatch(__getTodo());
    }

  return (
    <StBox>
       {!edit ? (
        <>
        <p>{id}</p>
        <p>{nik}</p>
        <p>{titles}</p>
        <p>{content}</p>
        <button onClick={()=>{
          setEdit(pre => !pre)
        }}>수정하기</button>
        <button>완료하기</button>
        <button onClick={onDelete}>삭제하기</button>
        </>
       ) : (
        <>
         <Input 
            value={nikName}
            onChange={nikNameHander}
            maxLength='5'
            placeholder='닉네임을 입력해주세요. 5자 이내로'/>
          <Input 
            value={title}
            onChange={titleHander}
            maxLength='10'
            placeholder='제목을 입력해주세요. 10자 이내로'/>
          <Input 
            value={contents}
            onChange={ContentHander}
            maxLength='50'
            placeholder='내용을 입력해주세요. 50자 이내로'/>
        <button onClick={onFix}>수정완료</button>
        <button>완료하기</button>
        <button onClick={onDelete}>삭제하기</button>
        </>
       )}
    </StBox>
  )
}

export default ListBox;

const StBox = styled.div`
    margin: 20px;
    padding: 20px;
    border:2px solid gray;
    border-radius: 30px;
    width: 300px;
`
