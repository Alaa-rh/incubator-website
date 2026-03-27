import { RoleOptions } from "../config/RoleOptions";

export function BuildDashboardOptions(roles) {
  // الأولوية للمتطوع
  let mainRole = null;

  if (roles.includes("volunteer")) {
    mainRole = "volunteer";
  } else if (roles.includes("volunteer_evaluator")) {
    mainRole = "volunteer_evaluator";
  } else if (roles.includes("volunteer_incubated")) {
    mainRole = "volunteer_incubated";
  } else if (roles.includes("ideaOwner")) {
    mainRole = "ideaOwner";
  } else if (roles.includes("visitor")) {
    mainRole = "visitor";
  }

  return RoleOptions[mainRole] || [];
}
