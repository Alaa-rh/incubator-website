import React, { useState, /*useEffect*/ } from 'react';
import { LuCirclePlus } from "react-icons/lu";
import Input from "../../components/Input";
import Button from '../../components/Button';
// import { 
//   useGetScheduleQuery, 
//   useAddAppointmentMutation, 
//   useDeleteAppointmentMutation,
//   useAddHolidayMutation,
//   useDeleteHolidayMutation 
// } from '../../api/endpoints/scheduleApi';

const ScheduleManagementPage = () => {
  // -----------------------------
  // State للواجهة
  // -----------------------------
  const [selectedDays, setSelectedDays] = useState([]);
  const allDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const daysOfWeek = ['أحد', 'اثنين', 'ثلاثاء', 'اربعاء', 'الخميس', 'الجمعة', 'سبت'];
  
  const [holidayFrom, setHolidayFrom] = useState(null);
  const [holidayTo, setHolidayTo] = useState(null);
  //eslint-disable-next-line
  const [currentHolidayId, setCurrentHolidayId] = useState(null);

  const [startTime, setStartTime] = useState({ hours: 7, minutes: 0, period: 'PM' });
  const [endTime, setEndTime] = useState({ hours: 7, minutes: 0, period: 'PM' });
  const [appointments, setAppointments] = useState([]);
  const [holiday, setHoliday] = useState(null);

  // -----------------------------
  // const { data: scheduleData, isLoading, error, refetch } = useGetScheduleQuery();
  // const [addAppointment, { isLoading: isAddingAppointment }] = useAddAppointmentMutation();
  // const [deleteAppointment] = useDeleteAppointmentMutation();
  // const [addHoliday, { isLoading: isAddingHoliday }] = useAddHolidayMutation();
  // const [deleteHoliday] = useDeleteHolidayMutation();

  // -----------------------------
  // تحميل البيانات من API (عند الربط)
  // -----------------------------
  // useEffect(() => {
  //   if (scheduleData) {
  //     setAppointments(scheduleData.appointments || []);
  //     if (scheduleData.holiday) {
  //       setHoliday(scheduleData.holiday);
  //       setHolidayFrom(scheduleData.holiday.from);
  //       setHolidayTo(scheduleData.holiday.to);
        // setCurrentHolidayId(scheduleData.holiday.id);
  //     }
  //   }
  // }, [scheduleData]);

  // -----------------------------
  // بيانات ثابتة حالياً (للتجربة)
  // -----------------------------
  // useEffect(() => {
    // بيانات تجريبية
  //   setAppointments([
  //     { id: crypto.randomUUID(), text: "الاثنين: من الساعة 7:00 PM إلى 9:00 PM" },
  //   ]);
  // }, []);

  // -----------------------------
  // دوال مساعدة
  // -----------------------------
  const formatTime = (time) => {
    const h = time.hours.toString().padStart(2, '0');
    const m = time.minutes.toString().padStart(2, '0');
    return `${h}:${m} ${time.period}`;
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

  const incrementDay = (currentDay, setDay) => {
    const currentIndex = allDays.indexOf(currentDay);
    const nextIndex = (currentIndex + 1) % allDays.length;
    setDay(allDays[nextIndex]);
  };

  // -----------------------------
  // إضافة موعد جديد
  // -----------------------------
  const handleAddAppointment = async () => {
    if (selectedDays.length === 0) {
      alert("يرجى اختيار يوم واحد على الأقل");
      return;
    }

    const timeString = `من الساعة ${formatTime(startTime)} إلى ${formatTime(endTime)}`;
    const daysString = selectedDays.join('، ');

    // TODO
    // try {
    //   const newAppointment = {
    //     days: selectedDays,
    //     start_time: `${startTime.hours}:${startTime.minutes} ${startTime.period}`,
    //     end_time: `${endTime.hours}:${endTime.minutes} ${endTime.period}`,
    //   };
    //   await addAppointment(newAppointment).unwrap();
    //   setSelectedDays([]);
    //   setStartTime({ hours: 7, minutes: 0, period: 'PM' });
    //   setEndTime({ hours: 7, minutes: 0, period: 'PM' });
    // } catch (error) {
    //   console.error("Error adding appointment:", error);
    //   alert("حدث خطأ في إضافة الموعد");
    // }

    // حالياً: إضافة محلية
    const newAppointment = {
      id: crypto.randomUUID(),
      text: `${daysString}: ${timeString}`,
      days: selectedDays,
      start_time: formatTime(startTime),
      end_time: formatTime(endTime),
    };
    setAppointments(prev => [...prev, newAppointment]);
    setSelectedDays([]);
  };

  // -----------------------------
  // حذف موعد
  // -----------------------------
  const deleteAppointment = async (id) => {
    // TODO: بعد الربط هذا الكود
    // try {
    //   await deleteAppointment(id).unwrap();
    // } catch (error) {
    //   console.error("Error deleting appointment:", error);
    //   alert("حدث خطأ في حذف الموعد");
    // }

    // حالياً: حذف محلي
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  // -----------------------------
  // إضافة أجازة
  // -----------------------------
  const handleAddHoliday = async () => {
    if (!holidayFrom || !holidayTo) {
      alert("يرجى اختيار فترة الأجازة");
      return;
    }

    // TODO: بعد الربط هذا الكود
    // try {
    //   const holidayData = {
    //     from: holidayFrom,
    //     to: holidayTo,
    //   };
    //   const response = await addHoliday(holidayData).unwrap();
    //   setHoliday({ from: holidayFrom, to: holidayTo, id: response.id });
    //   setCurrentHolidayId(response.id);
    // } catch (error) {
    //   console.error("Error adding holiday:", error);
    //   alert("حدث خطأ في إضافة الأجازة");
    // }

    // حالياً: إضافة محلية
    setHoliday({ from: holidayFrom, to: holidayTo });
    alert("تم إضافة الأجازة بنجاح");
  };

  // -----------------------------
  // حذف أجازة
  // -----------------------------
  const deleteHoliday = async () => {
    // TODO: بعد الربط استخدمي هذا الكود
    // if (currentHolidayId) {
    //   try {
    //     await deleteHoliday(currentHolidayId).unwrap();
    //     setHoliday(null);
    //     setHolidayFrom(null);
    //     setHolidayTo(null);
    //     setCurrentHolidayId(null);
    //   } catch (error) {
    //     console.error("Error deleting holiday:", error);
    //     alert("حدث خطأ في حذف الأجازة");
    //   }
    // }

    // حالياً: حذف محلي
    setHoliday(null);
    setHolidayFrom(null);
    setHolidayTo(null);
    setCurrentHolidayId(null);
    alert("تم حذف الأجازة");
  };

  // -----------------------------
  // حالة التحميل (بعد الربط)
  // -----------------------------
  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color min-h-screen flex justify-center items-center">
  //       <p className="text-xl">جاري تحميل الجدول...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white-color min-h-screen flex justify-center items-center">
  //       <p className="text-xl text-red-500">حدث خطأ في تحميل البيانات</p>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white-color min-h-screen flex flex-col font-sans">
      <div className="container"> 
        <h1 className="text-4xl font-bold text-second-color my-6">إدارة الجدولة</h1>
        
        {/* قسم التوفر الاسبوعي */}
        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-gray-200">
            <h3 className="font-bold text-third-color mb-2 text-[20px]">حدد توفرك الاسبوعي</h3>
            <p className="text-m text-black mb-5">اختر الايام والاوقات التي تكون متاحا فيها عادة كل أسبوع</p>
          </div>
          
          {/* أيام الأسبوع */}
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
                    : 'bg-white text-third-color border-second-color'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* وقت البداية والنهاية */}
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

        {/* قائمة المواعيد المحددة */}
        <div className="mb-10">
          <h2 className="text-second-color font-bold mb-4">المواعيد المحددة:</h2>
          <div className="space-y-3">
            {appointments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">لا توجد مواعيد محددة</p>
            ) : (
              appointments.map((apt) => (
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
              ))
            )}
          </div>
        </div>

        {/* قسم الأجازات */}
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
                  value={holidayFrom || ''} 
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
                  value={holidayTo || ''} 
                  className="w-[300px] p-2.5 px-10"
                />
              </div>
            </div>
          </div>

          <Button 
            label="اضافة إجازة" 
            onClick={handleAddHoliday}
            className="w-[300px] bg-main-color py-2.5 hover:bg-[#1e3450]" 
          />

          {holiday && (
            <div className="bg-white p-3 rounded-lg shadow-2xl flex justify-between items-center border border-gray-200 mt-3">
              <div className="text-third-color text-[15px] font-medium">
                تم تحديد ايام الاجازة من {holiday.from} الى {holiday.to}
              </div> 
              <Button 
                label="حذف" 
                onClick={deleteHoliday} 
                className="bg-main-color px-5 py-1.5 hover:bg-red-500 transition" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleManagementPage;