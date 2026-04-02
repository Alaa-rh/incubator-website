import React from "react";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Select from "../../Select";

const FormBuilder = ({ season }) => {
  const isOpen = season.statusType === "open";

  return (
    <div className="flex gap-6">
      {/* العمود الأيمن */}
      <div className="flex-1 p-5">
        {/* عنوان */}
        <h1 className="text-lg font-bold mb-6">
          {season.title}
          <span className="text-sm text-gray-500 mr-2">(تصميم النموذج)</span>
        </h1>

        {/* الحقول */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input
            label="الاسم"
            name="name"
            placeholder="اكتب اسمك الكامل"
            disabled
          />

          <Input
            label="رقم الهاتف"
            name="phone"
            placeholder="09xxxxxxxx"
            disabled
          />

          <Input
            label="المحافظة"
            name="governorate"
            placeholder="اختر المحافظة"
            disabled
          />

          <Input
            label="عنوان الفكرة"
            name="ideaTitle"
            placeholder="اكتب عنوان الفكرة"
            disabled
          />
        </div>

        {/* القطاع */}
        <div className="mb-4">
          <label className="text-sm font-bold mb-2 block">القطاع المستهدف</label>
          <Select
            name="sector"
            placeholder="اختر القطاع المستهدف"
            options={[
              { label: "تعليمي", value: "educational" },
              { label: "طبي", value: "medical" },
              { label: "تجاري", value: "commercial" }
            ]}
          />
        </div>

        {/* وصف الفكرة */}
        <div className="mb-6">
          <Textarea
            label="وصف الفكرة"
            name="ideaDescription"
            placeholder="اكتب وصفاً مختصراً عن فكرتك"
            rows={4}
            disabled
          />
        </div>
      </div>
       {/* العمود الأيسر */}
      <div className="w-64 h-fit border border-second-color bg-white rounded-lg shadow p-4 flex flex-col gap-2">
     
        <p className="text-sm">
          <span className="font-semibold">عدد الطلبات المستلمة: </span>
          {season.applications}
        </p>

        {isOpen && (
          <p className="text-sm">
            <span className="font-semibold">المتبقي لإغلاق التقديم: </span>
            {season.remainingDays} أيام
          </p>
        )}
      </div>
    </div>
  );
};

export default FormBuilder;
