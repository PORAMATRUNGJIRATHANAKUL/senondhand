import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full bg-[#141414] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-14 mt-20 text-sm pt-12 pb-4 font-kanit' >
        <div>
          <img src={assets.logo_white} className='w-5/6 h-auto  m-auto mb-5 w-42 -ml-4 -mt-1' alt="" />
          <p className='flex flex-col gap-1 text-[#C8C8C8] font-kanit'>
            เว็บไซต์ขายของมือสองเป็นแพลตฟอร์มที่มอบ
            โอกาสให้ทุกคนสามารถซื้อหรือ
            ขายสินค้าที่ไม่ได้ใช้งานอยู่แต่ยังคงมีสภาพดี
          </p>
          <p className='flex flex-col gap-1 text-[#C8C8C8]'>
            © 2567 บริษัท Second-Hand Products Centre</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-white'>ข้อมูลทางกฎหมาย</p>
          <ul className='flex flex-col gap-1 text-[#C8C8C8]'>
            <li>ข้อตกลงและเงื่อนไขการใช้งาน</li>
            <li>ความเป็นส่วนตัว</li>
          </ul>
        </div>

        <div className='font-kanit  '>
          <p className='text-xl font-medium mb-5 text-white'>ศูนย์ช่วยเหลือ</p>
          <ul className='flex flex-col gap-1 text-[#C8C8C8]'>
            <li>การคืนสินค้า</li>
            <li>แจ้งปัญหา</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-white font-kanit'>ติดต่อเรา</p>
          <ul className='flex flex-col gap-1 text-[#C8C8C8] font-kanit'>
            <li>9/1 หมู่ 5 ถนนพหลโยธิน ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี 12120.</li>
            <li>082-815-7756</li>
            <li>secondhand@bumail.net</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
