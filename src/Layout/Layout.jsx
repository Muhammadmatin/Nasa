import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/logo.svg"
import loggo from "../assets/logggo.svg"

import AOS from 'aos';
import 'aos/dist/aos.css';

// Css 
import "./Layout.css"
const Layout = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <div>
    <div className=''>
      <div className='bgg flex items-center p-[1%]  justify-between w-[100%] pl-[10%] pt-[1%] pr-[5%] text-[gold]'>
        <div> 
          <img src={loggo}  className='w-[50%]' alt="" />
        </div>

        <div className=' lii flex gap-[20px] items-center'>
          <Link to={"/"}>
            <li>
              Home
            </li>
          </Link>
          <Link to={"About"}>
            <li>
              Health
            </li>
          </Link>
          <Link to={"Third"}>
            <li>
              Climat
            </li>
          </Link>
          <Link to={"Forth"}>
            <li>
              Water issues
            </li>
          </Link> 
          <Link to={"Fifth"}>
            <li>
            Social inequality
            </li>
          </Link>
           {/* <Link to={"Six"}>
            <li>
            USDA
            </li>
          </Link>   */}
          {/* <Link to={"Seven"}>
            <li>
            EPA
            </li>
          </Link> */}
        </div>
      </div>
    
    </div>
   <Outlet/>

    <div className='Footer bg-[black] pt-[30px]'>
      <div className='flex gap-[100px] items-center'>
        <div className='w-[20%]'>
            <img src={loggo} alt="" />
            <p className='text-white w-[100%] ml-[30px] pr-[30px] mt-[20px]'>Overall, an info hub serves as a comprehensive resource center that brings together various sources of information in one convenient location. It simplifies the process of finding information and helps users save time by eliminating the need to visit multiple websites.</p>
        </div>

        <div className='text-white'>
            <p className='text-[#0075CC]'>Problems</p>
            <Link to={"/Third"}>
            <p className='mt-[10px]'>Climates change</p>
            </Link>
            <Link to={"/Forth"}>
            <p className='mt-[10px]'>Water issues</p>
            </Link>
            
            <Link to={"/About"}>
            <p className='mt-[10px]'>Health and epidamics</p>
            </Link>




            <Link to={"/Fifth"}>
            <p className='mt-[10px]'>Social inequality</p>
            </Link>
        </div>
  
        <div className='text-white'>
            <p className='text-[#0075CC]'>Organization</p>
            <a className='' href="https://www.nasa.gov/">Nasa</a> <br />
            <a className='' href="https://www.noaa.gov/">NOAA</a> <br />
            <a className='' href="https://www.usgs.gov/">USGS</a> <br />
            <a className='' href="https://www.usda.gov/">USDA</a> <br />
            <a className='' href="https://www.nih.gov/">NIH</a>  <br />
            <a className='' href="https://www.epa.gov/">EPA</a>
          </div>

        <div className='text-white'>
          <p className='text-[#0075CC]'>About</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Help</p>
          <p className='text-black'>.</p>
          <p className='text-black'>.</p>
        </div>

        <div className="circlee sm:hidden lg:inline-block mt-[100px]">
        <div className="earthh hhhhhh">
        </div>
        <div className="contentt">
            <div className="continentss">
                <div className="continentt one">
                    {/* <a target='_blank' id="n-a" href="https://www.google.ru/maps/place/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0/@29.0686106,-153.5784602,3z/data=!3m1!4b1!4m6!3m5!1s0x52b30b71698e729d:0x131328839761a382!8m2!3d54.5259614!4d-105.2551187!16zL20vMDU5ZzQ?entry=ttu">North America</a> */}
                </div>
                <div className="continent two">
                    {/* <a target='_blank' id="s-a" href="https://www.google.ru/maps/place/%D0%AE%D0%B6%D0%BD%D0%B0%D1%8F+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0/@-13.5554014,-109.8572333,3z/data=!3m1!4b1!4m6!3m5!1s0x9409341c355d34b5:0x69d40ccfc9c6e32b!8m2!3d-8.783195!4d-55.491477!16zL20vMDZuM3k?entry=ttu">south America</a> */}
                </div>
                <div className="continent three">
                    {/* <a target='_blank' id="eur" href="https://www.google.ru/maps/place/%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/@47.5479471,1.0083866,4z/data=!3m1!4b1!4m6!3m5!1s0x46ed8886cfadda85:0x72ef99e6b3fcf079!8m2!3d54.5259614!4d15.2551187!16zL20vMDJqOXo?entry=ttu">Europe</a> */}
                </div>
                <div className="continent four">
                    {/* <a target='_blank' id="afr" href="https://www.google.ru/maps/place/%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B0/@1.4494091,-26.6488949,3z/data=!3m1!4b1!4m6!3m5!1s0x10a06c0a948cf5d5:0x108270c99e90f0b3!8m2!3d-8.783195!4d34.508523!16zL20vMGRnM24x?entry=ttu">Africa</a> */}
                </div>
                <div className="continent five">
                    {/* <a target='_blank' id="asi" href="https://www.google.ru/maps/place/%D0%90%D0%B7%D0%B8%D1%8F/@29,100,3z/data=!3m1!4b1!4m6!3m5!1s0x3663f18a24cbe857:0xa9416bfcd3a0f459!8m2!3d34.047863!4d100.6196553!16zL20vMGowaw?entry=ttu">Tajikistan</a> */}
                </div>
                <div className="continent six">
                    {/* <a target='_blank' id="aus" href="https://www.google.ru/maps/place/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/@-18.7342503,87.0416775,3z/data=!3m1!4b1!4m6!3m5!1s0x2b2bfd076787c5df:0x538267a1955b1352!8m2!3d-25.274398!4d133.775136!16zL20vMGNoZ2h5?entry=ttu">Australia</a> */}
                </div>
            </div>
        </div>
    </div>

      </div>
    </div>


    </div>
  )
}

export default Layout