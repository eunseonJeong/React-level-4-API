import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { useEffect } from 'react';
import api from '../api/api';

//경로 만들어주기
function TDMain() {
  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        console.log("결과 => ",res);
      })
      .catch((err) => {
        console.log("오류가 발생하였습니다!");
      });
  }, []);
  return (
    <>
    <Header/>
    <p>
      <Link to='/write'>
        이동하기(할일 작성)
      </Link>
    </p>
    <p>
      <Link to='/list'>
        이동하기(할일 목록)
      </Link>
    </p>
    </>
  )
}

export default TDMain