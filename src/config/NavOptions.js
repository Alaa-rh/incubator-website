
const baseNav = {
  visitor: [
    { label: "الرئيسية", to: "/visitor-mainpage", scrollId: "" },
    { label: "المشاريع", to: "/projectspage", scrollId: "" },
    { label: "النشاطات", to: "/activitiespage", scrollId: "" },
    { label: "المفضلة", to: "/favoritespage", scrollId: "" },
  ],

  ideaOwner: [
    { label: "الرئيسية", to: "/ideaowner-mainpage", scrollId: "" },
    { label: "المشاريع", to: "/projectspage", scrollId: "" },
    { label: "النشاطات", to: "/activitiespage", scrollId: "" },
    { label: "مراحل الاحتضان", to: "/incubation-stages", scrollId: "" },
  ],

  volunteer: [
    { label: "الرئيسية", to: "/volunteer-mainpage", scrollId: "" },
    { label: "المشاريع", to: "/projectspage", scrollId: "" },
    { label: "النشاطات", to: "/activitiespage", scrollId: "" },
  ],
};

export const navOptions = {
  ...baseNav,

  volunteer_evaluator: [
     { label: "الرئيسية", to: "/volunteer-evaluated-mainpage", scrollId: "" },
    { label: "المشاريع", to: "/projectspage", scrollId: "" },
    { label: "النشاطات", to: "/activitiespage", scrollId: "" },
  ],

  volunteer_incubated: [
     { label: "الرئيسية", to: "/volunteer-incubated-mainpage", scrollId: "" },
    { label: "المشاريع", to: "/projectspage", scrollId: "" },
    { label: "النشاطات", to: "/activitiespage", scrollId: "" },
  ],
};
