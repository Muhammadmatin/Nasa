import React from 'react'

const Card3 = ({img,name}) => {
  return (
    <div >
        <img src={img} alt="" className='rounded-[50px] m-auto h-[14vh]' width={100} />
        <h1 className='text-center text-[30px] text-white'>{name}</h1>
    </div>
  )
}

export default Card3