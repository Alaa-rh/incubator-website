import React, { useState } from "react";
import Input from "../../../Input"
import Textarea from "../../../Textarea";
import Button from "../../../Button";

const NewSeasonSettings = ({ onSubmit }) => {
  const [seasonName, setSeasonName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [applyLink, setApplyLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      seasonName,
      description,
      startDate,
      endDate,
      applyLink,
    };

    onSubmit && onSubmit(payload);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* صف الأعمدة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* العمود الأيمن */}
          <div className="flex flex-col gap-4">
            <Input
              label="تاريخ بدء التقديم"
              type="date"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="YYYY/MM/DD"
            />

            <Input
              label="تاريخ انتهاء التقديم"
              type="date"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="YYYY/MM/DD"
            />

            <Input
              label="رابط التقديم"
              type="url"
              name="applyLink"
              value={applyLink}
              onChange={(e) => setApplyLink(e.target.value)}
              placeholder="https://example.com/apply"
            />
          </div>
          {/* العمود الأيسر */}
          <div className="flex flex-col gap-4">
            <Input
              label="اسم الموسم"
              type="text"
              name="seasonName"
              value={seasonName}
              onChange={(e) => setSeasonName(e.target.value)}
              placeholder="اكتب اسم الموسم"
            />

            <Textarea
              label="وصف الموسم"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder=" وصفاً مختصراً عن الموسم"
            />
          </div>

         
        </div>

        {/* الأزرار */}
        <div className="flex justify-end gap-3">
          <Button
            type="submit"
            label="حفظ الإعدادات"
            className="bg-main-color"
          />
        </div>
      </form>
    </div>
  );
};

export default NewSeasonSettings;
