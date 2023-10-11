import React from 'react'

const Card = ({img,hewteg,hewteg2,name,about,data}) => {
  return (
    <div className='text-left text-[black] w-[90%] hover:bg-[whitesmoke] hover:cursor-pointer pt-[3%] hover:rounded-[10px]'>
        <img src={img} alt="" className='m-auto h-[30vh] rounded-[10px] w-[80%]' />
        <div className="flex text-[grey] justify-evenly mt-[2%] text-[20px]">
            <h1>{hewteg}</h1>
            <h1>{hewteg2}</h1>
        </div>
        <h1 className='text-[18px] font-[600] mt-[3%] w-[80%] m-auto'>{name}</h1>
        <h1 className='mt-[3%] w-[80%] m-auto h-[35vh]'>{about}</h1>
        <h1 className='text-[19px] w-[80%]  m-auto mt-[4%]'>{data}</h1>
        <button className='text-[#4781ED]  text-[19px] ml-[10%] m-auto mb-[10%]' >Read More...</button>
    </div>
  )
}

export default Card