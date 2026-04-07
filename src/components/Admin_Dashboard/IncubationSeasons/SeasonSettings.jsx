import React, { useState } from "react";
import Input from "../../Input"
import Textarea from "../../Textarea";
import Button from "../../Button";

const SeasonSettings = ({ season, onSave, onCloseSubmission }) => {
 

  const [startDate, setStartDate] = useState(season.startDate || "");
  const [endDate, setEndDate] = useState(season.endDate || "");
  const [name, setName] = useState(season.name || "");
  const [description, setDescription] = useState(season.description || "");

  const isOpen = season.statusType === "open";

  const handleSave = () => {
    const updated = {
      ...season,
      startDate,
      endDate,
      name,
      description,
    };

    onSave && onSave(updated);
  };

  return (
    <div className="flex gap-6">
      {/* العمود الأيمن */}
      <div className="flex-1 p-5">
        {/* عنوان الموسم */}
        <div className="mb-6">
          <h1 className="text-lg font-bold mb-1">
            {season.title}
            {season.statusType === "open" && (
              <span className="text-sm text-gray-500 mr-2">(قيد التقديم)</span>
            )}
            {season.statusType === "evaluation" && (
              <span className="text-sm text-gray-500 mr-2">(قيد التقييم)</span>
            )}
            {season.statusType === "camp" && (
              <span className="text-sm text-gray-500 mr-2">(مرحلة المعسكر)</span>
            )}
            {season.statusType === "finished" && (
              <span className="text-sm text-gray-500 mr-2">(منتهي)</span>
            )}
          </h1>
        </div>

        {/* تواريخ التقديم */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input
            label="تاريخ بدء التقديم"
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <Input
            label="تاريخ انتهاء التقديم"
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        {/* اسم الموسم */}
        <div className="mb-4">
          <Input
            label="اسم الموسم"
            type="text"
            name="seasonName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* وصف الموسم */}
        <div className="mb-4">
          <Textarea
            label="وصف الموسم"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>


        {/* الأزرار */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-3">
            <Button
              label="حفظ التغييرات"
              onClick={handleSave}
              className="bg-main-color"
            />
          </div>

          {isOpen && (
            <Button
              label="إغلاق التقديم"
              onClick={() => onCloseSubmission(season.id)}
              className="bg-main-color"
            />
          )}
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

export default SeasonSettings;
