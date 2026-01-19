import React from 'react'
import about from "../assets/images/about.jpg"
import SignupLink from '../components/SignupLink';
const About = ({id}) => {
  return (
        <div className="container relative flex justify-between items-center gap-8 mt-20 mb-40" id={id}>
            <div className='w-[60%]'>
            <h1 className='text-second-color font-semibold text-[40px] mb-10'>من نحن!</h1>
            <p className='text-[25px] font-medium mb-15'>نحن حاضنة تكنولوجيا المعلومات والاتصالات ICT INCUBATOR، مؤسسة غير ربحية تكرّس جهودها لدعم رواد الأعمال في قطاع التكنولوجيا بحمص. مهمتنا هي تحويل فكرتك التقنية الواعدة إلى شركة ناشئة حقيقية. نحن نوفر لك كل ما تحتاجه للنجاح: مكتب مجهز، ودعم مباشر من شبكة واسعة من الخبراء والمتطوعين الذين يقدمون الإرشاد المتخصص والتدريب المكثف في المجالات التقنية، القانونية، والإدارية. كما نفتح لك الأبواب للتشبيك مع المستثمرين. إننا نستقبل دائماً المتطوعين والمدربين ليكونوا جزءاً من عملية بناء هذه المشاريع، مؤمنين بأن تبادل الخبرات هو مفتاح النجاح. هدفنا هو تمكين الشباب وصناعة مشاريع تكنولوجية مستدامة.</p>
            <SignupLink label="قدم فكرتك الآن!" className="mt-10"/>
            </div>
            <div className='w-[40%] h-[500px]'>
                <img src={about} alt="about us" className='w-full h-full object-cover' />
            </div>
        </div>
  )
}

export default About