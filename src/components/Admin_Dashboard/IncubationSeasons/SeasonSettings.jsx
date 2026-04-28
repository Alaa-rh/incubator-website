import React, { useState } from "react";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Button from "../../Button";

// TODO: بعد الربط استخدمي هذا الـ hook
// import { useUpdateIncubationSeasonMutation } from "../../../api/endpoints/seasonsApi";

const SeasonSettings = ({ season, onSave, onCloseSubmission }) => {
  const [startDate, setStartDate] = useState(season.startDate || "");
  const [endDate, setEndDate] = useState(season.endDate || "");
  const [name, setName] = useState(season.name || "");
  const [description, setDescription] = useState(season.description || "");
  const [successMessage, setSuccessMessage] = useState(season.successMessage || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isOpen = season.statusType === "open";

  // const [updateSeason, { isLoading }] = useUpdateIncubationSeasonMutation();

  const handleSave = async () => {
    setIsSubmitting(true);
    setError("");

    const updated = {
      ...season,
      startDate,
      endDate,
      name,
      description,
      successMessage,
    };

    // try {
    //   await updateSeason({ id: season.id, data: updated }).unwrap();
    //   alert("تم حفظ التغييرات بنجاح");
    //   onSave && onSave(updated);
    // } catch (err) {
    //   console.error("Error updating season:", err);
    //   setError(err?.data?.message || "حدث خطأ في حفظ التغييرات");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // حالياً: محاكاة للإرسال
    console.log("حفظ التغييرات:", updated);
    setTimeout(() => {
      alert("تم حفظ التغييرات بنجاح (محاكاة)");
      onSave && onSave(updated);
      setIsSubmitting(false);
    }, 500);
  };

  const handleCloseSubmission = () => {
    if (window.confirm("هل أنت متأكد من إغلاق التقديم؟")) {
      onCloseSubmission && onCloseSubmission(season.id);
    }
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

        {/* عرض الخطأ */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* تواريخ التقديم */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input
            label="تاريخ بدء التقديم"
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            disabled={isSubmitting}
          />

          <Input
            label="تاريخ انتهاء التقديم"
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        {/* رسالة النجاح */}
        <div className="mb-4">
          <Textarea
            label="رسالة النجاح (تظهر بعد قبول الطلب)"
            name="successMessage"
            value={successMessage}
            onChange={(e) => setSuccessMessage(e.target.value)}
            rows={2}
            placeholder="سيتم عرض هذه الرسالة للمستخدم بعد قبول طلبه"
            disabled={isSubmitting}
          />
        </div>

        {/* الأزرار */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-3">
            <Button
              label={isSubmitting ? "جاري الحفظ..." : "حفظ التغييرات"}
              onClick={handleSave}
              className="bg-main-color"
              disabled={isSubmitting}
            />
          </div>

          {isOpen && (
            <Button
              label="إغلاق التقديم"
              onClick={handleCloseSubmission}
              className="bg-red-color"
              disabled={isSubmitting}
            />
          )}
        </div>
      </div>

      {/* العمود الأيسر */}
      <div className="w-64 h-fit border border-second-color bg-white rounded-lg shadow p-4 flex flex-col gap-2">
        <p className="text-sm">
          <span className="font-semibold">عدد الطلبات المستلمة: </span>
          {season.applications || 0}
        </p>

        {isOpen && (
          <p className="text-sm">
            <span className="font-semibold">المتبقي لإغلاق التقديم: </span>
            {season.remainingDays || 0} أيام
          </p>
        )}
      </div>
    </div>
  );
};

export default SeasonSettings;