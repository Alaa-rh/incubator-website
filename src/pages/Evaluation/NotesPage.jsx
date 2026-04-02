import React, { useState } from 'react'; 
import Textarea  from '../../components/Textarea';
import Button from '../../components/Button';
const NotesPage = () => {
  const [note, setNote] = useState("");
  const [sentNotes, setSentNotes] = useState([
    "التركيز كله على التسويق الرقمي. يجب إضافة استراتيجيات الشراكة مع المؤتمرات والفعاليات التعليمية للوصول المباشر للجهات التدريبية والمدربين، لتقليل تكلفة الاكتساب الأولية."
  ]);

  const handleSend = () => {
    if (note.trim() !== "") {
      setSentNotes([note, ...sentNotes]);
      setNote(""); 
    }
  };

  return (
    <div className="min-h-screen bg-white-color md:p-15 flex flex-col">  
      <div className="container">
        <h2 className="text-second-color text-2xl font-bold my-10">الملاحظات</h2>
        <div className="mb-12">
          <label className="block text-black font-semibold mb-3 text-lg text-right">اكتب الملاحظة هنا :</label>
          < Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mb-6 w-100"
          ></Textarea>
          <Button
          label="ارسال"
            onClick={handleSend}
            className="bg-main-color"
          />
        </div>
        <div className="w-200  bg-white shadow-md">
          <h3 className="text-black text-lg font-bold p-5 text-right">الملاحظات المرسلة</h3>
          <div className="w-full h-[1px] bg-second-color mb-2"></div>
          
          <div className="space-y-6">
            {sentNotes.map((item, index) => (
              <div key={index} >
                <p className="text-black text-[20px] text-right p-2">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotesPage;