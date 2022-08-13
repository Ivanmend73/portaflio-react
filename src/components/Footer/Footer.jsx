import React,{ useContext } from 'react';
import "../../App.css";
import { ThemeContext } from "../../context";

const Footer = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='footer'style={{backgroundColor: darkMode && "#222"}} >Ivan @Desarrollador__2020</div>
  )
}

export default Footer