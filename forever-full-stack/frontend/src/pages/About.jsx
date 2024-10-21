import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">Review
            <span className="text-gray-700 font-medium"></span></p>
        </div>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, natus, ea accusantium quibusdam, unde repudiandae quo soluta impedit ad laudantium quia qui molestiae incidunt ducimus quis labore autem repellendus vel.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur architecto animi, odit officiis nam repellat adipisci aperiam voluptatum officia dicta consectetur repudiandae nemo eius repellendus et quia, asperiores veritatis. Facilis?</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nobis dignissimos temporibus doloribus voluptas? Recusandae exercitationem sequi optio esse quos itaque maiores ad quidem dolorem, hic quis ipsa sit consequuntur!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam id deleniti ratione natus neque fuga molestiae ipsum distinctio, quos voluptatem hic ad aspernatur placeat tempore voluptas quaerat! Nostrum, voluptatibus cumque!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam quo nihil recusandae accusantium id corrupti architecto neque voluptatibus cupiditate quis tempore, aliquid unde autem doloremque rerum, repellat porro quam.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
