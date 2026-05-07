import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Select from '../../components/Select';

const ContactPage = () => {
  const inquiries = [
    { value: "General", label: "عام" },
    { value: "AboutIncubator", label: "حول خدمات الحاضنة" },
    { value: "Volunteering", label: "التطوع/الارشاد" },
    { value: "Investment", label: "الاستثمار/الشراكة" },
    { value: "TechnicalIssue", label: "مشكلة تقنية" },
  ];

  //  لاحقًا: رح نرسل البيانات للباك عبر API
  // const [sendContactMessage] = useSendContactMessageMutation();
  

  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    console.log("Inquiry:", inquiryType);
    console.log("Message:", message);

    // لاحقًا: استدعاء API إرسال الرسالة
    // await sendContactMessage({
    //   type: inquiryType,
    //   message: message,
    // });
  };

  return (
    <div>
     <div className="container mx-auto px-4 flex flex-col items-start bg-gray-100">
      
      <h1 className='text-3xl font-bold text-second-color my-10'>تواصل معنا</h1>

        <Select
          label="نوع الاستفسار:"
          placeholder="اختر نوع الاستفسار"
          name="sector"
          value={inquiryType}
          options={inquiries}
          onChange={(e) => setInquiryType(e.target.value)}
          className='w-full md:w-[450px] mb-10'
        />

        <Textarea
          label="اكتب رسالتك هنا:"
          className='w-full md:w-[450px] bg-white mb-10'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          label="إرسال"
          className='bg-main-color px-20 py-2'
          onClick={handleSubmit}
        />

        <div className='w-fit border border-second-color bg-white p-6 rounded my-15'>
          <h3 className='text-[20px] font-bold mb-2'>ساعات العمل :</h3>
          <p>من الأحد إلى الخميس, من 9:00 صباحا إلى 4:00 مساء وتعطل الحاضنة يوم الجمعة فقط</p>
        </div>

        <div className="flex items-center gap-2 mb-10">
          <CiLocationOn className='text-second-color text-5xl' />
          <p>موقع <br /> جامعة حمص خلف كلية العلوم</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
