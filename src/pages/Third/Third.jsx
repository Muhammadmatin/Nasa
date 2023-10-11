import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AddIcon from '@mui/icons-material/Add';
import swip1 from "../../assets/swipper1.jpg"
import swip2 from "../../assets/swip2.jpg"
import swip3 from "../../assets/swip3.jpg"
import swip4 from "../../assets/swip4.jpg"
import swip5 from "../../assets/swip5.jpg"
import EastIcon from '@mui/icons-material/East';
import foto from "../../assets/foto1.jpg"
import foto2 from "../../assets/foto2.jpg"
import foto3 from "../../assets/foto3.jpg"
import foto4 from "../../assets/foto4.jpg"
import foto5 from "../../assets/foto5.jpg"
import modalka4 from "../../assets/modal4.jpg"
import modalka42 from "../../assets/modal4-2.jpg"
import modalka5 from "../../assets/modal5.jpg"
import modalka51 from "../../assets/modal51.jpg"
import modalka6 from "../../assets/modal6.jpg"
import modalka61 from "../../assets/modal61.jpg"
import modalka7 from "../../assets/modal7jpg.jpg"
import modalka71 from "../../assets/modal71.jpg"
// css 
import "./Third.css"
// Swiper
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Third = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [modal1 , setModal1] = useState(false)
  const [modal2 , setModal2] = useState(false)
  const [modal3 , setModal3] = useState(false)
  const [modal4 , setModal4] = useState(false)
  const [modal5 , setModal5] = useState(false)
  const [modal6 , setModal6] = useState(false)
  const [modal7 , setModal7] = useState(false)

  const handleMouseEnter = () => {
    setShowInfo(true);
};

const handleMouseLeave = () => {
    setShowInfo(false);
};

const handleMouseEnter2 = () => {
  setShowInfo2(true);
};

const handleMouseLeave2 = () => {
  setShowInfo2(false);
};


  return (
    <div className=''>
     <div className='hero3'>
        <div className='pt-[150px] ml-[50px]'>
            <p className='text-[30px] text-white'>Understanding our planet to benefit humankind</p>
        </div>      

      <div  className='flex flex-wrap justify-start pl-[30px] gap-[30px] mt-[50px]'>
        <div onClick={()=> setModal1(true)} className='w-[30%] card1 p-[20px] flex  justify-between items-center cursor-pointer' >
         <div>
          <h1 className='text-[40px] text-[gold]'>Carbon Diozide</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button className=''><AddIcon className='text-[gold]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>
       
        <div onClick={()=> setModal2(true)} className='w-[30%] cursor-pointer card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#F38478]'>Global Temperature</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 1.1 C Sence preindustrial</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#F38478]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>
       
        <div onClick={()=> setModal3(true)} className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#FF984B]'>Methane</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 1923.6 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#FF984B]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div onClick={()=> setModal4(true)} className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[24px] font-bold text-[#8098C0]'>Artic Sea Ice Minimum Extent</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#8098C0]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div onClick={()=> setModal5(true)} className='w-[30%] cursor-pointer card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#AB9AE0]'>Ice Sheetst</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#AB9AE0]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div onClick={()=> setModal6(true)} className='w-[30%] cursor-pointer card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#76A9B9]'>Sea level</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#76A9B9]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div onClick={()=> setModal7(true)} className='w-[30%] cursor-pointer card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#57A5E7]'>Ocean Warming</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#57A5E7]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>
      </div>
      </div> 


      <div  className='bg-[black] h-[100vh]'>
        <div>
          <p className='text-[white] text-[50px] ml-[75px] pt-[30px]'>News & Future</p>
        </div>

     <div data-aos="fade-up" data-aos-duration="3000" className='px-[5%] pt-[50px] cursor-pointer'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="https://climate.nasa.gov/news/3285/nasa-led-study-pinpoints-areas-of-new-york-city-sinking-rising/"  className=''><img src={swip1}  alt="" /></a>
            {showInfo && 
            <div>
              <a href="https://climate.nasa.gov/news/3285/nasa-led-study-pinpoints-areas-of-new-york-city-sinking-rising/">
                 <div className="info  w-[100%] h-[310px] text-black font-bold">
             Scientists using space-based radar found that in New Yourk CIty is sinking at varying rates from humen and natural factors.  a few  spots are rising.
              </div>
              </a>
            </div>
           }
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
         <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href=""><img src={swip2}  alt="" /></a>
          {showInfo && <div> <a href="https://climate.nasa.gov/news/3284/arctic-sea-ice-6th-lowest-on-record-antarctic-sees-record-low-growth/"><div className="info  w-[100%] h-[310px] text-black font-bold">The annual Arctic sea ice minimum (lowest) 
          annual extent was the sixth-lowest on record this year, while Antarctic sea ice reached its lowest maximum ever.
            These both continue a long-term downward trend due to human-caused global warming </div></a></div>}
        </div> 
          </SwiperSlide>
        <SwiperSlide>
          <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href=""><img src={swip3}  alt="" /></a>
            {showInfo && <div> <a href="https://climate.nasa.gov/news/3283/water-watching-satellite-monitors-warming-ocean-off-california-coast/"><div className="info  w-[100%] h-[310px] text-black font-bold"> The international Surface Water and
             Ocean Topography mission is able to measure ocean features, like El Niño, 
             closer to a coastline than previous space-based missions.</div></a></div>}
          </div>        
        </SwiperSlide>
        
        <SwiperSlide>
          <div  className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href=""><img src={swip4}  alt="" /></a>
          {showInfo && <div><a href="https://climate.nasa.gov/news/3281/nasa-built-greenhouse-gas-detector-moves-closer-to-launch/"><div className="info  w-[100%] h-[310px] text-black font-bold"> The instrument will enable nonprofit
           organization Carbon Mapper to pinpoint and measure methane and carbon dioxide sources from space. </div></a></div>}
          </div>
          </SwiperSlide>
        
        <SwiperSlide>
        <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href="https://climate.nasa.gov/news/3282/nasa-announces-summer-2023-hottest-on-record/"><img src={swip5}  alt="" /></a>
          {showInfo && <div> <a href="https://climate.nasa.gov/news/3282/nasa-announces-summer-2023-hottest-on-record/"><div className="info  w-[100%] h-[310px] text-black font-bold"> Summer of 2023 was Earth’s hottest since global records began in 1880, according to scientists at NASA’s Goddard Institute of Space Studies (GISS) in New York. </div></a></div>}
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div> 
      </div>

      <div className='bg-[black]'>
        <div className='text-center pb-[50px]'>
          <p className='text-[white] text-[40px]'>What is Climate Change ?</p>
        </div>

      <div data-aos="fade-up" data-aos-duration="3000"  className='flex flex-wrap coun2 cursor-pointer'>
        <div  className='bg1 w-[50%] '>
          <a href="https://climate.nasa.gov/evidence/">
          <div className='text-center pt-[20%] hoverchik'>
          <h1 className='text-[30px] font-bold text-white'>Evedence</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>How Do We Know Climate Change is Real</p>
          </div>
          </a>  
        </div>

        <div className='bg2 w-[50%]'>
        <a href="https://climate.nasa.gov/causes/">
        <div className='text-center pt-[20%] hoverchik'>
          <h1 className='text-[30px] font-bold text-white'>Causes</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>Why is Climate Change Happening</p>
          </div>
        </a>
        </div>

        <div className='bg3 w-[50%]'>
        <a href="https://climate.nasa.gov/effects/">
        <div className='text-center pt-[20%] hoverchik'>
          <h1 className='text-[30px] font-bold text-white'>Effects</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>What Are the Effects of Climate Change</p>
          </div>
        </a>  
        </div>
        
        <div className='bg4 w-[50%]'>
        <a href="https://climate.nasa.gov/solutions/resources/">
        <div className='text-center pt-[20%] hoverchik'>
          <h1 className='text-[30px] font-bold text-white'>Sollution</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>What Is Being Done to Solve Climate Change </p>
          </div>
        </a>  
        </div>
      </div> 
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" className='bg-[#E2F0FD] h-[100vh]'>
        <div className='text-center'>
          <p className='pt-[50px] text-[30px] font-bold'>Climate Change Resources</p>
          <p className='w-[40%] pt-[20px] m-[auto] text-[24px] font-bold'>An extensive collection of global warming resources for media, educators, weathercasters, and public speakers.</p>
        </div>

      
      <div className=''>
        <div>
          <p className='text-[30px] ml-[295px] mb-[30px] font-bold'>Explore</p>
        </div>

        <div className='flex m-[auto] cursor-pointer  text-[18px]   w-[60%] justify-between'>
          <div>
            <a href='https://climate.nasa.gov/images-of-change/?id=870#870-ice-melt-accelerates-in-southern-greenland' className='font-bold'>Images Of Ghange</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/images-of-change/?id=870#870-ice-melt-accelerates-in-southern-greenland'>Before-and-after images of Earth</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/images-of-change/?id=870#870-ice-melt-accelerates-in-southern-greenland"><EastIcon/></a>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a href='https://climate.nasa.gov/interactives/global-ice-viewer/#/' className='font-bold'>Global Ice Viever</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/interactives/global-ice-viewer/#/'>Climate Change's Impact on Ice</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/interactives/global-ice-viewer/#/">
            <EastIcon/>
            </a>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a href='https://climate.nasa.gov/explore/earth-minute/' className='font-bold'>Earcth Minute Videos</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/explore/earth-minute/'>Animated video series illustrating Earth science topics</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/explore/earth-minute/">
            <EastIcon/>
            </a>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a href='https://climate.nasa.gov/interactives/climate-time-machine/' className='font-bold'>Images Of Ghange</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/interactives/climate-time-machine/'>Climate change in recent history</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/interactives/climate-time-machine/">
            <EastIcon/>
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className='text-[24px] ml-[295px] mt-[35px] font-bold'>Resourses</p>
      </div>

        
      <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a href='https://climate.nasa.gov/resources/graphics-and-multimedia/?page=0&per_page=25&order=pub_date+desc&search=&condition_1=1%3Ais_in_resource_list' className='font-bold'>Multimedia</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/resources/graphics-and-multimedia/?page=0&per_page=25&order=pub_date+desc&search=&condition_1=1%3Ais_in_resource_list'>Vast library if images, videos, graphics, and more</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/resources/graphics-and-multimedia/?page=0&per_page=25&order=pub_date+desc&search=&condition_1=1%3Ais_in_resource_list">
            <EastIcon/>
            </a>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a  href='https://climate.nasa.gov/en-espanol/datos/evidencia/' className='font-bold'>En espanol</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/en-espanol/datos/evidencia/'> Creciente biblioteca de recursos en espanol</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/en-espanol/datos/evidencia/">
            <EastIcon/>
            </a>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a href='https://climate.nasa.gov/for-educators/' className='font-bold'>For Education</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/for-educators/'> Student and educator resourses</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/for-educators/">
            <EastIcon/>
            </a>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <a href='https://climate.nasa.gov/for-kids/coloring-pages/?page=0&per_page=25&order=pub_date+desc&search=&category=177' className='font-bold'>For Kids</a>
          </div>
          
          <div>
            <a href='https://climate.nasa.gov/for-kids/coloring-pages/?page=0&per_page=25&order=pub_date+desc&search=&category=177'>Webquests, Climate Kids , and more</a>
          </div>

          <div>
            <a href="https://climate.nasa.gov/for-kids/coloring-pages/?page=0&per_page=25&order=pub_date+desc&search=&category=177">
            <EastIcon/>
            </a>
          </div>
        </div>

      </div>


        {modal1 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Carbon Dioxide</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal1(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='text-[#FBBC6B] ml-[30px] '>DIRECT MEASUREMENTS: 1958-PRESENT</p>
                <p className='text-[#999999] ml-[30px]'>Data source: Monthly measurements.</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={foto} alt="" />
                <p className='text-[white] w-[90%] ml-[30px]'>Carbon dioxide (CO2) is an important heat-trapping gas, or greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and from natural processes like volcanic eruptions. The first graph shows atmospheric carbon dioxide (CO2) levels measured by NOAA at Mauna Loa Observatory, Hawaii, since 1958</p>
                <p className='ml-[30px] text-[white] w-[90%] mt-[20px] pb-[30px]'>Since the onset of industrial times in the 18th century, human activities have raised atmospheric CO2 by 50% – meaning the amount of CO2 is now 150% of its value in 1750. This human-induced rise is greater than the natural increase observed at the end of the last ice age 20,000 years ago.</p>
              </div>
              <div className='w-[45%]'>
                <img src={foto2} alt="" />
                <p className='mt-[10px] text-[white]'>The animated map shows how global carbon dioxide has changed over time. Note how the map changes colors as the amount of CO2 rises from 365 parts per million (ppm) in 2002 to over 400 ppm currently. (“Parts per million” refers to the number of carbon dioxide molecules per million molecules of dry air.) These measurements are from the mid-troposphere, the layer of Earth's atmosphere that is 8 to 12 kilometers (about 5 to 7 miles) above the ground.</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }

        {modal2 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Global Temperature</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal2(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='ml-[30px] text-[#F38478]'>GLOBAL LAND-OCEAN TEMPERATURE INDEX</p>
                <p className='text-[#999999] ml-[30px] w-[40%]'>Data source: NASA's Goddard Institute for Space Studies (GISS). Credit: NASA/GISS</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={foto3} alt="" />
                <p className='text-[white] w-[90%] ml-[30px] pb-[30px]'>This graph shows the change in global surface temperature compared to the long-term average from 1951 to 1980. The year 2020 statistically tied with 2016 for the hottest year on record since recordkeeping began in 1880 (source: NASA/GISS). NASA’s analyses generally matches independent analyses prepared by National Oceanic and Atmospheric Administration (NOAA) and other research groups.</p>
              </div>
              <div className='w-[45%]'>
                <img src={foto4} alt="" />
                <p className='mt-[10px] text-[white]'>The animation above shows the change in global surface temperatures. Dark blue shows areas cooler than average. Dark red shows areas warmer than average. To smooth out variations due to short-term temperature changes (which are considered “noise” in the data), this map shows a 5-year running average.</p>
                <p className='mt-[20px] mb-[30px] text-[white]'>The “Global Temperature” value on the home page dashboard shows global temperature change since 1880, compared to NASA’s 1951-1980 baseline.</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }
        
        {modal3 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Methane</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal3(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='ml-[30px] text-[#FF882F]'>ATMOSPHERIC METHANE CONCENTRATIONS SINCE 1984</p>
                <p className='text-[#999999] ml-[30px] w-[40%]'>Data source: Data from NOAA, measured from a global network of air sampling sites</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={foto5} alt="" />
                <p className='text-[white] w-[90%] ml-[30px] mb-[10px]'>Methane (CH4) is a powerful greenhouse gas, and is the second-largest contributor to climate warming after carbon dioxide (CO2). A molecule of methane traps more heat than a molecule of CO2, but methane has a relatively short lifespan of 7 to 12 years in the atmosphere, while CO2 can persist for hundreds of years or more.</p>
                <p className='text-[white] w-[90%] ml-[30px] pb-[30px]'>Methane comes from both natural sources and human activities. An estimated 60% of today’s methane emissions are the result of human activities. The largest sources of methane are agriculture, fossil fuels, and decomposition of landfill waste. Natural processes account for 40% of methane emissions, with wetlands being the largest natural source. (Learn more about the Global Methane Budget.)</p>
              </div>
              <div className='w-[45%]'>
                <img src="" alt="" />
                <p className='mt-[10px] text-[white]'>Nasa</p>
                <p className='mt-[20px] mb-[30px] text-[white]'>The concentration of methane in the atmosphere has more than doubled over the past 200 years. Scientists estimate that this increase is responsible for 20 to 30% of climate warming since the Industrial Revolution (which began in 1750).</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }

      {modal4 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Arctic Sea Ice Extent</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal4(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='ml-[30px] text-[#94AED9]'>ANNUAL SEPTEMBER MINIMUM EXTENT</p>
                <p className='text-[#999999] ml-[30px] w-[40%]'>Data source: Satellite observations. Credit: NSIDC/NASA</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={modalka4} alt="" />
                <p className='text-[white] w-[90%] ml-[30px] pb-[30px] mt-[30px]'>Arctic sea ice reaches its minimum extent (the area in which satellite sensors show individual pixels to be at least 15% covered in ice) each September. September Arctic sea ice is now shrinking at a rate of 12.3% per decade, compared to its average extent during the period of 1981 to 2010. This graph shows the size of the Arctic sea ice each September since satellite observations started in 1979. The monthly value shown is the average of daily observations across the month of September during each year and is measured from satellites.</p>
              </div>
              <div className='w-[45%]'>
                <img src={modalka42} alt="" />
                <p className='mt-[20px] mb-[30px] text-[white]'>The animated map above shows the minimum size of the Arctic sea ice measured each year since 1979, based on satellite observations. The 2012 sea ice extent is the lowest in the satellite record.</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }

      {modal5 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Ice Sheets</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal5(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='ml-[30px] text-[#AB9AE0]'>ANTARCTICA MASS VARIATION SINCE 2002</p>
                <p className='text-[#999999] ml-[30px] w-[40%] mb-[20px]'>Data source: Ice mass measurement by NASA's GRACE satellites. Gap represents time between missions. Credit: NASA</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={modalka5} alt="" />
                <p className='text-[white] w-[90%] ml-[30px] pb-[10px] mt-[30px]'>Data from NASA's GRACE and GRACE Follow-On satellites show that the land ice sheets in both Antarctica (left chart) and Greenland (right chart) have been losing mass since 2002.</p>
                <p className='text-[white] w-[90%] ml-[30px] pb-[30px] mt-[30px]'>The GRACE mission ended in June 2017. The GRACE Follow-On mission began collecting data in June 2018 and is continuing to monitor both ice sheets. This record includes new data-processing methods and is continually updated as more numbers come in, with a delay of up to two months.</p>
              </div>
              <div className='w-[45%]'>
                <img src={modalka51} alt="" />
                <p className='mt-[20px] mb-[30px] text-[white]'>Note: You now need to create an Earthdata account to access NASA's ice sheet data. Register here for free. Once logged in, click "HTTP" under the charts on this page to access the data.</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }

      {modal6 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Sea Level</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal6(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='ml-[30px] text-[#76A995]'>SOURCE DATA: 1900-2018</p>
                <p className='text-[#999999] ml-[30px] w-[40%] mb-[20px]'>Data source: Frederikse et al. (2020)  Credit: NASA’s Goddard Space Flight Center/PO.DAAC</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={modalka6} alt="" />
                <p className='text-[white] w-[90%] ml-[30px] pb-[10px] mt-[30px]'>Sea level rise is caused primarily by two factors related to global warming: the added water from melting ice sheets and glaciers, and the expansion of seawater as it warms. The first graph tracks the change in global sea level since 1993, as observed by satellites.</p>
                <p className='text-[white] w-[90%] ml-[30px] pb-[30px] mt-[30px]'>The graph on the left, which is from coastal tide gauge and satellite data, shows how much sea level changed from about 1900 to 2018. Items with pluses (+) are factors that cause global sea level to increase, while minuses (-) are what cause sea level to decrease. These items are displayed at the time they were affecting sea level.</p>
              </div>
              <div className='w-[45%]'>
                <img src={modalka61} alt="" />
                <p className='mt-[20px] mb-[10px] text-[white]'>This graph tracks the change in sea level since 1993, as observed by satellites. The data shown are the latest available, with a four- to five-month delay needed for processing. (Source)</p>
                <p className='mt-[20px] mb-[30px] text-[white]'>Note: You now need to create an Earthdata account to access NASA’s sea level data. Register here for free. Once logged in, click “HTTP” under the “Satellite Data” chart on this page to access the data.</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }

        {modal7 ? <div>
          <div className='modal'>
            <div className='modalcontent'>
              <div className='flex justify-between ml-[30px] mr-[30px] text-[white]'>
                <div>
                  <h1 className='font-bold text-[28px]'>Ocean Warming</h1>
                </div>
                <div>
                  <button className='text-[30px] font-bold' onClick={()=> setModal7(false)}>X</button>
                </div>
              </div>

              <div>
                <p className='ml-[30px] text-[#57A5C6]'>OCEAN HEAT CONTENT CHANGES SINCE 1955 (NOAA)</p>
                <p className='text-[#999999] ml-[30px] w-[40%] mb-[20px]'>Data source: Observations from various ocean measurement devices, including conductivity-temperature-depth instruments (CTDs), Argo profiling floats, and eXpendable BathyThermographs (XBTs). Credit: NOAA/NCEI World Ocean Database</p>
              </div>

            <div className='flex gap-[20px]'>
              <div className='w-[50%] border-r-2'>
                <img src={modalka7} alt="" />
                <p className='text-[white] w-[90%] ml-[30px] pb-[10px] mt-[20px]'>Ninety percent of global warming is occurring in the ocean, causing the water’s internal heat to increase since modern recordkeeping began in 1955, as shown in the chart. (The shaded blue region indicates the 95% margin of uncertainty.)</p>
                <p className='text-[white] w-[90%] ml-[30px] pb-[10px] mt-[20px]'>Each data point in the chart represents a five-year average, expressed in zettajoules. For example, the 2020 value represents the average change in ocean heat content (since 1955) for the years 2018 up to and including 2022.</p>
                <p className='text-[white] w-[90%] ml-[30px] pb-[30px] mt-[20px]'>Heat stored in the ocean causes its water to expand, which is responsible for one-third to one-half of global sea level rise. Most of the added energy is stored at the surface, at a depth of zero to 700 meters. The last 10 years were the ocean’s warmest decade since at least the 1800s. The year 2022 was the ocean’s warmest recorded year and saw the highest global sea level.</p>
              </div>
              <div className='w-[45%]'>
                <p className='text-[28px] text-[white] mb-[20px]'>Why Ocean Heat Matters</p>
                <img src={modalka71} alt="" />
                <p className='mt-[20px] mb-[10px] text-[white]'>Covering more than 70% of Earth’s surface, our global ocean has a very high heat capacity. It has absorbed 90% of the warming that has occurred in recent decades due to increasing greenhouse gases, and the top few meters of the ocean store as much heat as Earth's entire atmosphere.</p>
                <p className='mt-[20px] mb-[30px] text-[white]'>The effects of ocean warming include sea level rise due to thermal expansion, coral bleaching, accelerated melting of Earth’s major ice sheets, intensified hurricanes, and changes in ocean health and biochemistry.</p>
              </div>
            </div>
            </div>
          </div>
        </div>: null
        }






    </div>
  )
}

export default Third