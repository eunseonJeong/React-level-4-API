import React, { useEffect } from 'react';
import Router from './shared/Router';
import { useDispatch, useSelector } from 'react-redux'
import { __getTodo } from './reducer/Module/moduleSlice';
// import Footer from './Components/Footer';

function App() {

  const dispatch = useDispatch();

  const {todos, isLoading, error} = useSelector(state=> {
    return state.todos;
  });

  useEffect(()=> {
    dispatch(__getTodo())
  },[])

  if (isLoading) {
    return <div>로딩 중....</div>
  };

  if (error) {
    return <div>에러입니다요</div>
  };

  return (
    <>
    <Router todos={todos} />
    {/* <Footer/> */}
    </>
  )
}

export default App;
