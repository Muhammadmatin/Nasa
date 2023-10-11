import React, { useEffect } from 'react'
import "./About.css"
import IMG from "../../images/img1.png"
import IMG1 from "../../images/img2.png"
import IMG2 from "../../images/туц.jpg"
import IMG3 from "../../images/вщс.jpg"
import IMG4 from "../../images/doccc.webp"
import IMG5 from "../../images/docd.webp"
import { Swiper, SwiperSlide } from 'swiper/react'
import Card2 from '../../component/Card2/Card2'
import { Pagination } from 'swiper/modules'

import IMG6 from "../../images/covid.webp"
import IMG7 from "../../images/climate.webp"
import IMG8 from "../../images/antibiotik.webp"
import IMG9 from "../../images/alcohol.webp"
import IMG10 from "../../images/drug.webp"
import IMG11 from "../../images/obesity.webp"
import Card3 from '../../component/card3/Card3'
import IMG12 from "../../images/news.webp"
import IMG13 from "../../images/circle.webp"
import IMG14 from "../../images/glob.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';


import IMG15 from "../../images/Nasaaa.png"
import IMG16 from "../../images/Noaa.png"
import IMG17 from "../../images/usda.png"
import IMG18 from "../../images/usgs.png"
import IMG19 from "../../images/nih.png"
import IMG20 from "../../images/Usa.png"

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="all ">

        <div >
      <div className="flex p-[5%]"></div>
      <div className="div relative mt-[-4.5%] dd">

      <div className='banner1' >
        <img src={IMG3} alt=""  width={50} className='i h-[100vh]'/>
        <div className='text ' data-aos="zoom-in-down" data-aos-duration="2000">
          <h1 className='text-[35px] text-[gold] ' >11 Global health issues to watch here</h1>
          <h1 className='text-[20px] text-[gold]'>You can find some information about health here </h1>
        </div>
      </div>
      <div className='banner2' >
        <img src={IMG4} alt="" width={50}  className='i h-[100vh]'/>
        <div className='text' data-aos="zoom-in-down" data-aos-duration="2000">
          <h1 className='text-[35px] font-[600] text-[red] mt-[13%] ml-[60%] w-[100%]'>11 global health issues to watch</h1>
          <h1></h1>
        </div>
      </div>
      <div className='banner3' >
        <img src={IMG5} alt=""  className='i h-[100vh]' width={50} />
        <div className='text' data-aos="zoom-in-down" data-aos-duration="2000">
          <h1 className='text-[35px] text-[black] font-[600]'>Thank`s for choosing our website</h1>
          <h1 className='text-[black] text-[20px]'>Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.</h1>
        </div>
      </div>
      



      {/* relative */}
      </div>
    </div>

    <div className="div mt-[40%]">
      <h1 className='text-[35px] w-[60%] m-auto text-center' data-aos="zoom-out" data-aos-duration="2000">What Is Global Health? The 6 Biggest Issues You Need to Know About</h1>
      <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease"
     data-aos-delay="300"
     data-aos-offset="100" data-aos-duration="1500">
    
        <Swiper slidesPerView={1}
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
        className="mySwiper pb-[2%]"
      >
          <SwiperSlide>
            <Card2 img={IMG6} name={"Covid19"} about={"Covid-19 is common and harmful among current public health issues 2019. In that year, we all remember the day when we encountered a new pandemic. It affected humans in the city of Wuhan in China. Initially, it was just in China. Then, it becomes the Worldwide pandemic names as COVID-19. It is caused by a virus known as “Corona.” More than two million individuals died in 17 countries."}/>
          </SwiperSlide>
          
          <SwiperSlide>
            <Card2 img={IMG7} name={"Climate change"} about={"We change our lifestyle concerning climate change. According to WHO, our life is on threat due to climate change. It includes our requirements like clean air, clean water, and shelter"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card2 img={IMG8} name={"Antibiotic-resistant microbes "} about={"antimicrobial microbes are a significant issue not only in America but worldwide. These are also called “superbugs.” They are considered among common public health issues. They resist the treatment of various infections like viral infections. These are bacteria, viruses, parasites, and fungi resist the medicine to treat a disease. This disease includes Tuberculosis, HIV, and Malaria."}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card2 img={IMG9} name={"Alcohol"} about={"Alcohol has a major role in creating public health issues. Nowadays, it is continuously increasing. It is common for children under 18 to an older person. It is equally common in men and women. Alcohol causes severe issues like high blood pressure, liver infection, kidney failure, digestive problems, diabetes, cancer, and mental issues. It leads to death.It also a significant cause of social and moral issues"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card2 img={IMG10} name={"Drug and opioid epidemic"} about={"It is a well-known carrier that causes the creation of public health issues. Drug abuse is drug overdose. These epidemics, such as oxycodone and hydrocodone, were the leading cause of death.The Department of Health and Human Services (HHS) suggested the following measurements control drug abuse: All these can be applied by making a bridge between the community and health workers."}/>
          </SwiperSlide>
          <SwiperSlide>
            <Card2 img={IMG11} name={"Obesity"} about={"Eating food more than your body requirements leads to obesity. More than 93.3 million American adults suffered from obesity. It is also a common problem in children. About 13.7 million children effected due to obesity. It causes serious health problems like hypertension, type 2 diabetes, chronic heart diseases, colon cancers, etc."}/>
          </SwiperSlide>



        </Swiper>
      </div>
          <h1 className='text-[40px] text-center mt-[3%]' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
     data-aos-delay="300"
     data-aos-offset="0">Our advantages</h1>
        <div className="div ttt mt-[2%] pt-[8.5%]" >
          <div className="div w-[60%] h-[50vh] p-[8%] m-auto ppp grid grid-cols-3 gap-10" data-aos="flip-left"
     data-aos-easing="ease-out"
     data-aos-duration="2000">
            <Card3 img={IMG12} name={"New News"}/>
            <Card3 img={IMG13} name={"Main Info"}/>
            <Card3 img={IMG14} name={"Last News"}/>
          </div>
        </div>
  
    </div>

        <div className="flex justify-evenly mt-[5%] pb-[5%] hover:cursor-pointer" >
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="500"
     data-aos-offset="100">
          <a href="https://www.nasa.gov/humans-in-space/the-human-body-in-space/#:~:text=Increased%20risk%20of%20cancer%20and,driven%20by%20long%2Dterm%20impacts.">
          <img src={IMG15} alt="" width={100} />
          </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="600"
     data-aos-offset="100">
      <a href="https://www.noaa.gov/topic-tags/human-health">
          <img src={IMG16} alt="" width={100}/>
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="800"
     data-aos-offset="100">
      <a href="https://www.usgs.gov/programs/toxic-substances-hydrology/science/science-topics/health-effects">
          <img src={IMG17} alt="" width={100}/>
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1000"
     data-aos-offset="100">
      <a href="https://www.nih.gov/about-nih/what-we-do/nih-turning-discovery-into-health/our-biggest-health-challenges">
          <img src={IMG18} alt="" width={100}/>
      </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1100"
     data-aos-offset="100">
          <a href="https://www.usda.gov/topics/health-and-safety">
          <img src={IMG19} alt="" width={100}/>
          </a>
          </div>
          <div className="div" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-duration="1300"
     data-aos-offset="100">
      <a href="https://www.epa.gov/environmental-topics/health-topics">
          <img src={IMG20} alt="" width={100}/>
      </a>
          </div>
        </div>
  


    {/* all */}
    </div>

  
)}

export default About