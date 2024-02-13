import React from 'react'
import './toast.css';

const ToastX = ({txt,add_style}) => {
  return (
    <div className={`ts ${add_style}`}>
        {txt}
    </div>
  )
}

export default ToastX