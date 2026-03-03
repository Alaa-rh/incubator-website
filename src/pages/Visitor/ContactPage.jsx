import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Select from '../../components/Select';
const ContactPage = () => {
    const inquiries =[
        {value: "General", label:"عام"},
        {value: "AboutIncubator", label:"حول خدمات الحاضنة"},
        {value: "Volunteering", label:"التطوع/الارشاد"},
        {value: "Investment", label:"الاستثمار/الشراكة"},
        {value: "TechnicalIssue", label:"مشكلة تقنية"},

    ]

  return (
     <div>
        <h1 className='text-3xl font-bold text-second-color pt-10 mr-30 mb-20'>تواصل معنا</h1>
        <div className="container">
        <Select 
        label= " نوع الاستفسار:" 
        placeholder="اختر نوع الاستفسار"
        name="sector"
        value={inquiries.value}
        options={inquiries}
        className='w-[450px] mb-10'
        />
        <Textarea label= "اكتب رسالتك هنا:" className='w-[450px] bg-white mb-10'/>
        <Button label= "إرسال" className='bg-main-color px-20 py-2'/>
        <div className='w-fit border border-second-color bg-white p-6 rounded my-15'>
            <h3 className='text-[20px] font-bold mb-2'>ساعات العمل :</h3>
           <p>من الأحد إلى الخميس, من 9:00 صباحا إلى 4:00 مساء وتعطل الحاضنة يوم الجمعة فقط</p>
        </div>
        <div className="flex items-center gap-2">
            <CiLocationOn className='text-second-color text-5xl'/>
            <p>موقع <br/> جامعة حمص خلف كلية العلوم</p>
        </div>
        </div>

    </div>
  )
}

export default ContactPage