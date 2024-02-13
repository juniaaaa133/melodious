import React from 'react'
import './button.css';

const ButtonY  = ({txt,add_style}) => {
  return (
    <button className={`b-btn ${add_style}`}>
        {txt.toUpperCase()}
    </button>
  )
}

export default ButtonY