import React from 'react'
import "./fourth.css"

import IMG from "../../images/1.jpg"
import IMG2 from "../../images/3.jpg"
import IMG3 from "../../images/i.webp"
import IMG4 from "../../images/4.webp"
import IMG6 from "../../images/6.jpg"
import Card from '../../component/card/Card'


import IMG15 from "../../images/Nasaaa.png"
import IMG16 from "../../images/Noaa.png"
import IMG17 from "../../images/usda.png"
import IMG18 from "../../images/usgs.png"
import IMG19 from "../../images/nih.png"
import IMG20 from "../../images/Usa.png"

const Forth = () => {
  return (
    <div className='all h-[auto] pb-[5%] ddd'>
      <video src="src/videos/video3.mp4" autoPlay loop className='w-[100%] relative rr'> 
    <source src='src/videos/video3.mp4' type='video/mp4' />
  </video>
      <div className="flex ml-[10%] pt-[5%] w-[70%] justify-between items-center " data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="500"
     data-aos-offset="100">
        <hr className='w-[40%] text-[30px] text-[red] aaa ' />
        <h1 className='aaa     text-[40px]'>Top 6 news about water issues</h1>
      </div>
      <h1 className='text-[45px] w-[80%] m-auto pt-[5%] aaaa' data-aos="flip-up" data-aos-duration="1500">Many regions around the world are facing a shortage of water due to factors such as climate change, population growth, and overuse of water resources.</h1>
      {/* all */}
    <div className="flex justify-evenly px-[4%] mt-[5%]" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1000"
     data-aos-offset="100">
      <h1 className='w-[40%] text-[20px] text-[white]'>Industrial and agricultural activities, as well as improper waste disposal, have led to the contamination of water bodies, making it unsafe for human consumption and harming aquatic life</h1>
      <h1 className='w-[40%] text-[20px] text-[white]'>Unequal distribution of water resources: In many regions <span className='text-[blue] font-[600] a'> water resources </span>are not distributed<span className='text-[blue] font-[600] a'> equitably,</span>, leading to disparities in access and further exacerbating  <span className='text-[blue] font-[600] a'> water-related problems.</span></h1>
    </div>
    <div className="div w-[80%] m-auto mt-[3%]"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1500"
     data-aos-offset="100">
    <img src="src/images/2.jpg" alt="" className='m-auto '  />
    </div>
    <div className="div mt-[3%] bg-[white] w-[80%] m-auto">
      <div className="flex w-[100%] px-[10%] items-center m-auto" data-aos="zoom-in" data-aos-duration="2000">
        <hr className='w-[30%] h-[0.5vh] bg-[#F1677F]' />
        <h1 className='text-[#F1677F] ml-[20%] text-[20px]'>Markets</h1>
      </div>
      <h1 className='text-[50px] w-[100%] m-auto text-center mt-[5%] a1 font-[600]' data-aos="zoom-in" data-aos-duration="2000">Pollution of Freshwater Sources    </h1>
    <div className="flex justify-evenly mt-[8%]">
      <div className="div w-[50%]" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
     >
      <h1 className='text-[30px] text-[black] w-[70%] m-auto'>Plastic </h1>
      <h1 className='w-[70%] text-[20px] pt-[2%] m-auto text-[black]'>Plastic water pollution is a global scourge, affecting every continent on earth. Plastics are the most prevalent type of marine debris found in waterways today. These microplastics and macroplastics originate from larger pieces of plastic trash that have broken down or from manufactured microplastics called nurdles, used to make plastic products.</h1>
      <h1 className='w-[50%] w mb-[5%] mt-[5%] text-center ml-[15%] h-[8vh] text-[20px] pt-[2%] font-[600] bg-[#4781ED] text-white'>More Information</h1>
      </div>
      <img src="src/images/ш2.webp" alt="" width={500} className='mb-[5%] m-auto'
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
       data-aos-duration="2000"></img>
    </div>
    <div className="flex">
      <img src="src/images/4.jpg" alt="" width={500} className='m-auto' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      data-aos-duration="2000"/>
      <div className="div w-[50%]" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
      <h1 className='text-[30px] text-[black] w-[70%] m-auto'>Sediment</h1>
      <h1 className='w-[70%] text-[19px] pt-[2%] m-auto text-[black]'> 
Sediment pollution occurs when forests are “clear-cut.” This kills the root systems that were previously keeping the soil in place and the sediment runs off into the nearest water source.Soil is also exposed through poor farming practices, causing sediment pollution in the nearby rivers and streams. This has a disastrous effect on the fish and aquatic life in these bodies of water.</h1>
      <h1 className='w-[50%] w mb-[5%] mt-[5%] text-center ml-[15%] h-[8vh] text-[20px] pt-[2%] font-[600] bg-[#4781ED] text-white'>More Information</h1>
      </div>
    </div>
    <div className="flex justify-evenly mt-[8%]" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
      <div className="div w-[50%]">
      <h1 className='text-[30px] text-[black] w-[70%] m-auto'>Fuel  </h1>
      <h1 className='w-[70%] text-[20px] pt-[2%] m-auto text-[black]'> Pollution of a watercourse, groundwater or harbours by fuel is a type of water pollution incident dealt with by environment agencies. On land, such incidents tend to be caused by leaks and spills from storage facilities or pipelines which then enter the watercourse. In harbours and rivers, direct spills or accidents involving shipping are the main causes.</h1>
      <h1 className='w-[50%] w mb-[5%] mt-[5%] text-center ml-[15%] h-[8vh] text-[20px] pt-[2%] font-[600] bg-[#4781ED] text-white'>More Information</h1>

      </div>
      <img src="src/images/i3.webp" alt="" width={500} className='mb-[10%] m-auto mt-[5%]' />
    </div>
   
    <div className="flex w-[100%] px-[10%] items-center m-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"> 
        <hr className='w-[30%] h-[0.5vh] bg-[#F1677F]' />
        <h1 className='text-[#F1677F] ml-[20%] text-[30px]'>News</h1>
      </div>
      <h1 className='text-[40px] w-[100%] m-auto ml-[10%] mt-[5%] a1 font-[600]'data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"> Latest news. Stay up-to-date on 3D!</h1>
      <div className="flex justify-evenly mt-[5%]" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-duration="1500"
     data-aos-offset="0">
      <Card img={IMG4} hewteg={"#pmd News,"} hewteg2={"#3D News, #News"} name={"Improper use of chemicals"} about={"Improper use of chemicals, such as detergents and medicines, which can enter the water through the sewer and lead to contamination."} data={""}/>
      <Card img={IMG2} hewteg={"#pmd News,"} hewteg2={"#3D News, #News"} name={"Organic Minerals"} about={"Organic minerals are present in nature in small amounts but may contaminate water supplies when human intervention exposes them more frequently to sources of water. Depending on the type of mineral present in water, it may lead to poisoning in humans, as well as to respiratory and circulatory dysfunction, birth defects, cancer, and nervous system damage. These pollutants may include arsenic, lead, iron, and more."} data={""}/>
      <Card img={IMG6} hewteg={"#pmd News,"} hewteg2={"#3D News, #News"} name={"Mining:"} about={"When it comes to mining and over-mining, water pollution is one of the big ones. When mining is present, it is much more likely to find dangerous minerals in fresh water supplies. Although a small amount of minerals present in water is natural and sometimes even beneficial for humans and animals alike, an overabundance of any of these can potentially cause severe illness and even death when that water is consumed. "} data={""}/>
      </div>
    {/* all2 */}
    </div>
    <div className="flex justify-evenly mt-[5%] pb-[5%] hover:cursor-pointer" >
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="500"
     data-aos-offset="100">
      <a href="https://climate.nasa.gov/news/2977/when-it-comes-to-water-you-have-to-think-global/">
          <img src={IMG15} alt="" width={100}  />
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="600"
     data-aos-offset="100">
      <a href="https://coast.noaa.gov/digitalcoast/topics/water-quality.html">
          <img src={IMG16} alt="" width={100}/>
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="800"
     data-aos-offset="100">
      <a href="https://www.usgs.gov/mission-areas/water-resources/science/common-water-issues">
          <img src={IMG17} alt="" width={100}/>
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1000"
     data-aos-offset="100">
      <a href="https://www.niehs.nih.gov/health/topics/agents/water-poll/index.cfm">
          <img src={IMG18} alt="" width={100}/>
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1100"
     data-aos-offset="100">
    <a href="https://www.rd.usda.gov/programs-services/water-environmental-programs">
          <img src={IMG19} alt="" width={100}/>
    </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1300"
     data-aos-offset="100">
      <a href="https://www.epa.gov/environmental-topics/water-topics">
          <img src={IMG20} alt="" width={100}/>
      </a>
          </div>
        </div>
    <h1 className='text-[40px] text-[whitesmoke] a5 p-[2%] text-center mt-[20%] w-[80%] ml-[10%] font-[600] absolute top-15 r' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1500"
     data-aos-offset="100">Ocean: a body of water occupying two-thirds of a world made for man who has no gills.</h1>

    {/*all */}
    </div>
  )
}

export default Forth