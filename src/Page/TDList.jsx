import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import ListBox from '../Components/ListBox'

function TDList({todos}) {
  console.log(todos);
  return (
    <div>
      <Header/>
      <Stbox>
      {
        todos?.map((item)=>
        (
          <div key={item.id}>
            <ListBox id={item.id} nik={item.nikName} titles={item.title} content={item.contents} />
          </div>
        ) 
        )
      }
      </Stbox>
    </div>
  )
}

export default TDList

const Stbox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`