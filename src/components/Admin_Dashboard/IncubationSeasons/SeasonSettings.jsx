import React, { useState } from "react";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Button from "../../Button";

// import { useUpdateIncubationSeasonMutation } from "../../../api/endpoints/seasonsApi";

const SeasonSettings = ({ season, onSave, onCloseSubmission }) => {
  const [start_date, setStartDate] = useState(season.start_date || "");
  const [end_date, setEndDate] = useState(season.end_date || "");
  const [name, setName] = useState(season.name || "");
  const [description, setDescription] = useState(season.description || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // استخدام القيم من season مباشرة
  const remaining_days = season.remaining_days || 0;
  const ideas_count = season.ideas_count || season.idea_count || 0;

  const getPhaseStatus = () => {
    const phase = season.phase;
    switch (phase) {
      case "SUBMISSION":
        return { isOpen: true, label: "(قيد التقديم)" };
      case "EVALUATION":
        return { isOpen: false, label: "(قيد التقييم)" };
      case "BOOTCAMP":
        return { isOpen: false, label: "(مرحلة المعسكر)" };
      case "EXHIBITION":
        return { isOpen: false, label: "(مرحلة المعرض)" };
      case "FINISHED":
        return { isOpen: false, label: "(منتهي)" };
      default:
        return { isOpen: false, label: "" };
    }
  };

  const { isOpen, phaseLabel } = getPhaseStatus();

  // TODO: بعد الربط استخدمي هذا السطر
  // const [updateSeason, { isLoading }] = useUpdateIncubationSeasonMutation();

  const handleSave = async () => {
    setIsSubmitting(true);
    setError("");

    const updated = {
      id: season.id,
      name,
      description,
      start_date,
      end_date,
      phase: season.phase,
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
            {name || season.name}
            {phaseLabel && (
              <span className="text-sm text-gray-500 mr-2">{phaseLabel}</span>
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
            name="start_date"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
            disabled={isSubmitting}
          />

          <Input
            label="تاريخ انتهاء التقديم"
            type="date"
            name="end_date"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        {/* اسم الموسم */}
        <div className="mb-4">
          <Input
            label="اسم الموسم"
            type="text"
            name="name"
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
              className="bg-main-color"
              disabled={isSubmitting}
            />
          )}
        </div>
      </div>

      {/* العمود الأيسر - عرض عدد الطلبات والأيام المتبقية */}
      <div className="w-64 h-fit border border-second-color bg-white rounded-lg shadow p-4 flex flex-col gap-2">
        <p className="text-sm">
          <span className="font-semibold">عدد الطلبات المستلمة: </span>
          {ideas_count}
        </p>

        {isOpen && (
          <p className="text-sm">
            <span className="font-semibold">المتبقي لإغلاق التقديم: </span>
            {remaining_days} أيام
          </p>
        )}
      </div>
    </div>
  );
};

export default SeasonSettings;