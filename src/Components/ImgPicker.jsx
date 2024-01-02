import React, { useState } from 'react';
import './ImgPicker.css';
import data from '../data';
import ImgDiv from './ImgDiv';
const ImgPicker = () => {
    const [Img] = useState(
        data.map((item)=> item.imgsrc)
    )
    const [mainimg, setMainimg] = useState(Img[0]);

    function passindex(id){
        setMainimg(Img[id])
    }
    
  return (
    <div className='Container'>
        <div className='subdiv1'>
            <img src={mainimg} alt="" width={150} />
        </div>
        <div className='subdiv2'>
            {Img.map((imglink, id) => (
                <ImgDiv key={id} img={imglink} onClick = {()=>{passindex(id)}}/>
            ))}
        </div>
        
    </div>
  )
}

export default ImgPicker;