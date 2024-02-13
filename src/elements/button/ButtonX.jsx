import React from 'react'
import './button.css';

const ButtonX = ({txt,add_style}) => {
  return (
    <button className={`w-btn ${add_style}`}>
        {txt.toUpperCase()}
    </button>
  )
}

export default ButtonX