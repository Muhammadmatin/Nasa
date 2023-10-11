import React from 'react'
import hero2 from "./Seven.css"
import help from "../../assets/help.jpg"
import kitop from "../../assets/kitob.svg"
import diagrama from "../../assets/diagrama.svg"
import derevo from "../../assets/derevo.svg"
const Seven = () => {
  return (
    <div>
      <div className=''>
      <img src={help} className='w-[100%]  h-[100vh]' alt="" />
      </div>


      <div className='text-center'>
        <p className='w-[40%] m-[auto] text-[30px] pt-[20px]'>SOME MAIN ISADVANTAGES OF MODERN GENERAL EDUCATION SCHOOL</p>
      </div>

      <div>
        <p className='text-[26px] pl-[5%] pr-[5%] pt-[30px]'>
          The first problem of modern education is that most educational programs assume equal study of the humanities, exact and natural sciences. The interests and inclinations of a particular child are not taken into account. Each subject teacher considers his discipline to be the main one and tries to load students to the maximum.
          The opportunity to choose any profile is usually only available to high school students, and even then not in all schools. Children waste time on hated and unnecessary subjects - this is a significant drawback of modern school education.
        </p>
      </div>

      <div className='pt-[20px]'>
        <img src={kitop} className='m-[auto]' alt="" />
      </div>

      <div className=''>
        <p className='text-[28px] pl-[5%] pr-[5%] pt-[30px]'>
            Standardized curriculum: One of the main disadvantages of modern general education schools is the reliance on a standardized curriculum. This approach does not take into account individual learning styles and interests, leading to a lack of engagement and motivation among students.
            Overemphasis on academic achievement: Modern general education schools often prioritize academic achievement over the holistic development of students. This can result in high levels of stress and pressure on students to perform well academically, neglecting their social, emotional, and physical well-being.
        </p>
      </div>


      <div className='flex mt-[40px]'>
          <div className='w-[40%] pl-[80px]'>
            <img src={diagrama} className='m-[auto]' alt="" />
          </div>

          <div className='w-[40%] relative left-[120px]'>
              <p className='text-[25px] mt-[50px] '>
                Standardized curriculum: One of the main disadvantages of modern general education schools is the reliance on a standardized curriculum. This approach does not take into account individual learning styles and interests, leading to a lack of engagement and motivation among students.
                Overemphasis on academic achievement: Modern general education schools often prioritize academic achievement over the holistic development of students. This can result in high levels of stress and pressure on students to perform well academically, neglecting their social, emotional, and physical well-being.
              </p>
          </div>
      </div>

      <div>
        <img src={derevo} className='w-[60%] m-[auto] mt-[50px]' alt="" />
      </div>

      <div>
        <p className='text-[24px] pl-[30px] pr-[30px] mt-[30px]'>Lack of emphasis on holistic well-being: Modern general education schools often neglect the importance of promoting students' mental, emotional, and physical well-being. This can contribute to high levels of stress, anxiety, and burnout among students Inflexible curriculum: The rigid nature of the curriculum in modern general education schools leaves little room for customization and personalization. This can result in students feeling disengaged and uninterested in their education.</p>
      </div>
    </div>
    
  )
}

export default Seven