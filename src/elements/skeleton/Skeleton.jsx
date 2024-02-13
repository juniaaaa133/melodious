import React from 'react'
import './skeleton.css';

const Skeleton = ({width,height}) => {
  return (
    <div className={`skl ${width} ${height}`}> 
    </div>
  )
}

export default Skeleton