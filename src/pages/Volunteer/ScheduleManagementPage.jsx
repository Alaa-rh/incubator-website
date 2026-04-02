import React, { useState } from 'react';
import { LuCirclePlus } from "react-icons/lu";
import Input from "../../components/Input";
import Button from '../../components/Button';

const ScheduleManagementPage = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const allDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  
  const [holidayFrom, setHolidayFrom] = useState(null);
  const [holidayTo, setHolidayTo] = useState(null);

  const [startTime, setStartTime] = useState({ hours: 7, minutes: 0, period: 'PM' });
  const [endTime, setEndTime] = useState({ hours: 7, minutes: 0, period: 'PM' });
  const [appointments, setAppointments] = useState([
    { id: crypto.randomUUID(), text: "الاثنين: من الساعة 7:00 PM إلى 9:00 PM" },
  ]);

  const daysOfWeek = ['أحد', 'اثنين', 'ثلاثاء', 'اربعاء', 'الخميس', 'الجمعة', 'سبت'];
  const handleAddAppointment = () => {
    if (selectedDays.length === 0) {
      alert("يرجى اختيار يوم واحد على الأقل");
      return;
    }

    const timeString =` من الساعة
     ${formatTime(startTime)} إلى ${formatTime(endTime)}`;
    const daysString = selectedDays.join('، ');

   const newAppointment = {
  id: crypto.randomUUID(),
  text: `${daysString}: ${timeString}`
}


    setAppointments(prevAppointments => [
      ...prevAppointments,
      { ...newAppointment }
    ]);
   
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };
  const deleteHoliday = () => {
    setHolidayFrom("...");
    setHolidayTo("...");
  };

  const incrementDay = (currentDay, setDay) => {
    const currentIndex = allDays.indexOf(currentDay);
    const nextIndex = (currentIndex + 1) % allDays.length;
    setDay(allDays[nextIndex]);
  };

  const incrementTime = (setTime) => {
    setTime((prev) => {
      let newHours = prev.hours + 1;
      let newPeriod = prev.period;
      if (newHours > 12) newHours = 1;
      if (newHours === 12) newPeriod = prev.period === 'AM' ? 'PM' : 'AM';
      return { ...prev, hours: newHours, period: newPeriod };
    });
  };

  const formatTime = (time) => {
    const h = time.hours.toString().padStart(2, '0');
    const m = time.minutes.toString().padStart(2, '0');
    return `${h}:${m} ${time.period}`;
  };

  return (
    <div className="bg-white-color min-h-screen flex flex-col font-sans">
    <div className="container"> 
      <h1 className="text-4xl font-bold text-second-color my-6">إدارة الجدولة</h1>
      <div>
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-gray-200">
          <h3 className="font-bold text-third-color mb-2 text-[20px]">حدد توفرك الاسبوعي</h3>
          <p className="text-m text-black mb-5">اختر الايام والاوقات التي تكون متاحا فيها عادة كل أسبوع</p>
        </div>
        
        <div className="flex flex-row-reverse gap-2 justify-between mb-8" dir='ltr'>
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDays(prev => 
                prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
              )}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                selectedDays.includes(day)
                  ? 'bg-main-color text-white'
                  : 'bg-white text-third-color border-second-color '
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-x-10 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-third-color font-medium">من</span>
            <div className="relative flex-1 group">
              <LuCirclePlus
                onClick={() => incrementTime(setStartTime)}
                className="absolute right-78 top-1/2 -translate-y-1/2 w-6 h-6 text-second-color cursor-pointer hover:scale-110" 
              />
              <Input 
                type="text" 
                readOnly
                value={formatTime(startTime)} 
                className="w-[300px] p-2.5 px-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mr-2">
            <span className="text-third-color font-medium">إلى</span>
            <div className="relative flex-1 group">
              <LuCirclePlus
                onClick={() => incrementTime(setEndTime)}
                className="absolute right-78 top-1/2 -translate-y-1/2 w-6 h-6 text-second-color cursor-pointer hover:scale-110" 
              />
              <Input
                type="text" 
                readOnly
                value={formatTime(endTime)} 
                className="w-[300px] p-2.5 px-10"
              />
            </div>
          </div>
        </div>
        <Button
        label="اضافة" 
          onClick={handleAddAppointment}
          className="w-[300px] bg-main-color hover:bg-[#1e3450] transition shadow-md"
        />
      </div>

        <hr className="my-8 border-second-color" />

      <div className="mb-10">
        <h2 className="text-second-color font-bold mb-4">المواعيد المحددة:</h2>
        <div className="space-y-3">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-100">
              <div className="text-gray-700 font-medium order-1">
                {apt.text}
              </div>
              <Button
                label="حذف"
                onClick={() => deleteAppointment(apt.id)}
                className="bg-main-color px-4 py-1.5 hover:bg-red-700 transition order-2"
              />
            </div>
          ))}
        </div>
      </div>
        <div className="pb-10">
        <h2 className="text-second-color font-bold mb-4">حدد أيام الأجازة :</h2>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-x-10 mb-8" dir='rtl'>
          
          <div className="flex items-center gap-2">
            <span className="text-third-color font-medium">من</span>
            <div className="relative flex-1 group">
              <LuCirclePlus
                onClick={() => incrementDay(holidayFrom, setHolidayFrom)}
                className="absolute right-78 top-1/2 -translate-y-1/2 w-6 h-6 text-second-color cursor-pointer hover:scale-110 transition-transform" 
              />
              <Input
                placeholder="الأحد, الاثنين,..."
                type="text" 
                readOnly
                value={holidayFrom} 
                className="w-[300px] p-2.5 px-10"
              />
            </div>
          </div>
 <div className="flex items-center gap-2 mr-2">
            <span className="text-third-color font-medium">إلى</span>
            <div className="relative flex-1 group">
              <LuCirclePlus 
                onClick={() => incrementDay(holidayTo, setHolidayTo)}
                className="absolute right-78 top-1/2 -translate-y-1/2 w-6 h-6 text-second-color cursor-pointer hover:scale-110 transition-transform" 
              />
              <Input
                placeholder="الأحد, الاثنين,..."
                type="text" 
                readOnly
                value={holidayTo} 
                className="w-[300px] p-2.5 px-10"
              />
            </div>
          </div>
        </div>

        <Button label="اضافة إجازة" className="w-[300px] bg-main-color py-2.5 hover:bg-[#1e3450]" />

        <div className="bg-white p-3 rounded-lg shadow-2xl flex justify-between items-center border border-gray-200 mt-3">
          <div className="text-third-color text-[15px] font-medium" >
            تم تحديد ايام الاجازة من {holidayFrom} الى {holidayTo}
          </div> 
          <Button label="حذف" onClick={deleteHoliday} className="bg-main-color px-5 py-1.5 hover:bg-red-500 transition" />
        </div>
      </div>
      </div>
    </div>
  );
};
export default ScheduleManagementPage;