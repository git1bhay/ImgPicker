import React from 'react'
import './ImgDiv.css';

const ImgDiv = ({img,onClick}) => {
  return (
    <div className='imgdiv'>
        <img src={img} alt="" width={150} onClick={onClick}/>
    </div>
  )
}

export default ImgDiv;