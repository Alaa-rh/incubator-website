import React, { useState } from "react";
import DataTable from "../../Admin_Dashboard/DataTable";
import Button from "../../Button";
import Select from "../../Select";
import NavLinkUniversal from "../../NavLinkUniversal";

const ApplicationsReview = ({ season, applications }) => {
  const isOpen = season.statusType === "open";

  const [sortType, setSortType] = useState("newest");

  const sortedApps = [...applications].sort((a, b) => {
    if (sortType === "newest") return new Date(b.date) - new Date(a.date);
    if (sortType === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortType === "positive") return a.projectName.localeCompare(b.projectName);
    return 0;
  });

  const columns = [
  
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <NavLinkUniversal
        label={
        <Button
          label="عرض الطلب"
          className="bg-main-color"
        />
        }
        to={`/admin/incubation_seasons/applications/${row.id}`}
        />
      ),
    },  
    { key: "applicant", label: "مقدم الطلب" },
    { key: "date", label: "تاريخ التقديم" }, 
    { key: "projectName", label: "اسم المشروع" },
  ];

  return (
    <div className="flex gap-6">
      {/* العمود الأيمن */}
      <div className="flex-1 p-5">
        <h1 className="text-lg font-bold mb-6">
          {season.title}
          <span className="text-sm text-gray-500 mr-2">(مراجعة الطلبات)</span>
        </h1>

        {/* Select فقط */}
        <div className="w-48 mb-4">
          <Select
            label="ترتيب حسب"
            name="sort"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            options={[
              { value: "newest", label: "الأحدث أولاً" },
              { value: "positive", label: "ترتيب إيجابي" },
              { value: "oldest", label: "الأقدم أولاً" },
            ]}
            placeholder="ترتيب حسب"
          />
        </div>

        {/* جدول الطلبات */}
        <DataTable columns={columns} data={sortedApps} />
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

export default ApplicationsReview;
