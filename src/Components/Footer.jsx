import React from 'react'
import styled from "styled-components";

function Footer() {
  return <StFooter>Copirigth</StFooter>
}

export default Footer;

const StFooter = styled.footer`  
  width:100%;
  height: 80%;
  line-height:80%;
  text-align:center;
  border-top: 1px solid gray;
  position: fixed;
  bottom: 0;
  `