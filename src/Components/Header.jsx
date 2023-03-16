import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <>
    <Stheader height="80%" >
     <Link to="/">Header</Link>
    </Stheader>
    </>
  )
}

export default Header

const Stheader = styled.header`
    width: 100%;
    height: ${props=> props.height};
    text-align: center;
    line-height: ${props=> props.height};
    font-size: 1.5rem;
`