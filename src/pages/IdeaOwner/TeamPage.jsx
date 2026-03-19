import React, { useState } from "react"
import CurrentTeamList from "../../components/CurrentTeamList"
import SuggestedVolunteersList from "../../components/SuggestedVolunteerList"

const TeamPage = () => {

  // حالياً ثابت للتجربة
  const hasTeam = false;

  const [activeTab, setActiveTab] = useState("current")

  const currentTeam = [
    { id: 1, name: "مايا المحمد", email: "maya123@gmail.com" },
    { id: 2, name: "مايا المحمد", email: "maya123@gmail.com" },
    { id: 3, name: "مايا المحمد", email: "maya123@gmail.com" },
  ]

  const suggestedVolunteers = [
    { id: 1, name: "مايا المحمد", email: "maya123@gmail.com", role: "backend" },
    { id: 2, name: "مايا المحمد", email: "maya123@gmail.com", role: "frontend" },
    { id: 3, name: "مايا المحمد", email: "مايا المحمد", role: "design" },
    { id: 4, name: "مايا المحمد", email: "مايا المحمد", role: "testing" },
  ]

  return (
    <div className="container py-6">

      <h1 className="text-3xl font-bold text-second-color mb-6">الفريق</h1>

      {/* التبويبات */}
      <div className="flex gap-4 mb-6">

        {/* تبويب الفريق الحالي */}
        <button
          onClick={() => setActiveTab("current")}
          className={`px-4 py-2 rounded-xl border cursor-pointer ${
            activeTab === "current" ? "bg-second-color text-white font-bold" : "bg-white"
          }`}
        >
          الفريق الحالي
        </button>

        {/*تبويب المتطوعين المقترحين يظهر فقط إذا صاحب الفكرة ليس لديه فريق */}
        {!hasTeam && (
          <button
            onClick={() => setActiveTab("suggested")}
            className={`px-4 py-2 rounded-xl border cursor-pointer ${
              activeTab === "suggested" ? "bg-second-color text-white font-bold" : "bg-white"
            }`}
          >
            المتطوعون المقترحون
          </button>
        )}

      </div>

      {/* المحتوى */}
      {activeTab === "current" ? (
        <CurrentTeamList members={currentTeam} />
      ) : (
        <SuggestedVolunteersList volunteers={suggestedVolunteers} />
      )}
    </div>
  )
}

export default TeamPage
