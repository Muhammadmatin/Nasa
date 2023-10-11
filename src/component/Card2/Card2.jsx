import React from 'react'

const Card2 = ({img,name,about}) => {
  return (
    <div className='mt-[5%] p-[5%] hover:bg-[gray] hover:cursor-pointer hover:text-[white]'>
        <img src={img} width={500} alt="" className='rounded-[15px] h-[33vh]' />
        <h1 className='text-[30px] text-center'>{name}</h1>
        <h1 className='text-center h-[29vh] mt-[3%]'>{about}</h1>
        <h1 className='text-center text-[27px] w-[50%] m-auto bg-[skyblue]'>More Info</h1>
    </div>
  )
}

export default Card2