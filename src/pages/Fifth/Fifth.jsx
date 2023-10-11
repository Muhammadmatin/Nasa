import React from 'react'
import tarozu from "../../assets/tarozu.svg"
import neraven1 from "../../assets/neraven1.svg"
import neraven2 from "../../assets/neraven2.svg"
import neraven3 from "../../assets/neraven3.svg"
import neraven4 from "../../assets/neraven4.svg"
import nasa1 from "../../assets/nasas.svg"
import nasa2 from "../../assets/nasa2.svg"
import nasa3 from "../../assets/nasa3.svg"
import nasa4 from "../../assets/nasa4.svg"
import nasa5 from "../../assets/nasa5.svg"
import nasa6 from "../../assets/nasa6.svg"


const Fifth = () => {
  return (
    <div className='pt-[100px]'>
      <div>
      <img src={tarozu} className='w-[100%]' alt="" />
      </div>

      <div>
        <div>
          <p data-aos="fade-up-left" className='text-[40px] text-end mt-[20px] pr-[100px] text-[#00B3FF]'>Social inequality is ?</p>
          <hr className=' mt-[10px] w-[50%] float-right mr-[50px] bg-[black] h-[3px]' />
        </div>
      </div>

    <div data-aos="fade-up-right" className='flex mt-[20px] items-center'>
      <div className='w-[30%] '>
        <img src={neraven1} className='m-[auto]' alt="" />
      </div>

      <div className='w-[56%]  mt-[-40px]'>
        <p className='text-[28px]'>Social inequality is a form of differentiation in which individuals, social groups, strata, classes are at different levels of the vertical social hierarchy and have unequal life chances and opportunities to meet needs.</p>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] ml-[50px] mt-[50px]' />


    <div data-aos="fade-up-left" className='mt-[50px]'>
      <div className='inline-block'>
        <p className='text-[40px] ml-[70px] text-[#00B3FF] '>Types of inequality</p>
      </div>
      
      <div className='flex items-center mt-[-40px]'>
        <div className='w-[60%]'>
          <p className='text-[24px] ml-[60px]'>Social inequality can manifest itself in various forms, including economic inequality, educational inequality, health inequality and social mobility</p>
        </div>

        <div className='w-[30%]'>
          <img src={neraven2} alt="" />
        </div>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] float-right mr-[50px]' />


    <div data-aos="fade-up-right" className='mt-[100px]'>
        <div>
          <p className='text-[40px] ml-[50px] mt-[20px] pr-[100px] text-[#00B3FF]'>Consequences of inequality</p>
          <hr className=' mt-[10px] w-[50%]  ml-[50px] bg-[black] h-[3px]' />
        </div>
      </div>

    <div className='flex mt-[20px] items-center'>
      <div className='w-[30%] '>
        <img src={neraven3} className='m-[auto]' alt="" />
      </div>

      <div className='w-[56%]  mt-[-40px]'>
        <p className='text-[28px]'>Social inequality can have serious consequences for society as a whole. It can lead to social conflict, discontent, low levels of well-being, limited opportunities for development and unequal distribution of power and resources.</p>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] float-right mr-[50px] mt-[50px]' />



    <div data-aos="fade-up-right" className='mt-[150px]'>
      <div className=''>
        <p className='text-[40px] ml-[70px] text-[#00B3FF] '>Fighting inequality</p>
        <hr className=' mt-[20px] w-[50%]  ml-[50px] bg-[black] h-[3px]' />
      </div>
      
      <div className='flex items-center '>
        <div className='w-[60%]'>
          <p className='text-[24px] ml-[60px]'>The fight against social inequality requires a comprehensive approach. This may include creating policies and programs to reduce inequality, increase access to education and health care, create equal opportunities for all members of society, and promote social justice.</p>
        </div>

        <div className='w-[30%]'>
          <img src={neraven4} className='m-[auto]' alt="" />
        </div>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] float-right mr-[50px]' />  



    <div  className='flex justify-center pt-[50px] pb-[50px] ml-[50px] mt-[100px]'>
        <div className='w-[15%]'>
          <a href="https://www.nasa.gov/">
          <img src={nasa1} className='w-[50%] scaleee' alt="" />
          </a>
        </div>
       
        <div className='w-[15%]'>
          <a href="https://www.noaa.gov/">
          <img src={nasa2} className='w-[50%] scaleee' alt="" />
          </a>
        </div>
       
        <div className='w-[15%]'>
          <a href="https://www.usda.gov/">
          <img src={nasa3} className='w-[50%] scaleee' alt="" />
          </a>
        </div>
       
        <div className='w-[15%]'>
          <a href="https://www.usgs.gov/">
          <img src={nasa4} className='w-[50%] scaleee' alt="" />
          </a>
        </div>
       
        <div className='w-[15%]'>
          <a href="https://www.nih.gov/">
          <img src={nasa5} className='w-[50%] scaleee' alt="" />
          </a>
        </div>
       
        <div className='w-[15%]'>
          <a href="https://www.epa.gov/">
          <img src={nasa6} className='w-[50%] scaleee' alt="" />
          </a>
        </div>
      </div>


      



    </div>
  )
}

export default Fifth