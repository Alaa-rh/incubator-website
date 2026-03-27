import { navOptions } from "../config/NavOptions";

export function buildUserNavOptions(roles) {
  // 1) أولوية الأدوار (صاحب الفكرة دائمًا أول)
  let mainRole = null;

  if (roles.includes("ideaOwner")) {
    mainRole = "ideaOwner";
  } else if (roles.includes("volunteer")) {
    mainRole = "volunteer";
  } else if (roles.includes("volunteer_evaluator")) {
    mainRole = "volunteer_evaluator";
  } else if (roles.includes("volunteer_incubated")) {
    mainRole = "volunteer_incubated";
  } else if (roles.includes("visitor")) {
    mainRole = "visitor";
  }

  // 2) مسارات الرئيسية
  const homeRoutes = {
    visitor: "/visitor-mainpage",
    ideaOwner: "/ideaowner-mainpage",
    volunteer: "/volunteer-mainpage",
    volunteer_evaluator: "/volunteer-evaluated-mainpage",
    volunteer_incubated: "/volunteer-incubated-mainpage",
  };

  const homeLink = mainRole
    ? { label: "الرئيسية", to: homeRoutes[mainRole], scrollId: "" }
    : null;

  // 3) دمج وتنظيف الروابط
  const mergedOptions = roles.flatMap((role) => navOptions[role] || []);
  const withoutHome = mergedOptions.filter(opt => opt.label !== "الرئيسية");

  const cleanedOptions = Array.from(
    new Map(withoutHome.map(opt => [opt.to, opt])).values()
  );

  // 4) القائمة النهائية
  return [homeLink, ...cleanedOptions].filter(Boolean);
}
