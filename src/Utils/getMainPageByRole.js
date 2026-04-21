const homeRoutes = {
  visitor: "/visitor-mainpage",
  ideaOwner: "/ideaowner-mainpage",
  volunteer: "/volunteer-mainpage",
  volunteer_evaluator: "/volunteer-evaluated-mainpage",
  volunteer_incubated: "/volunteer-incubated-mainpage",
  admin: "/admin-mainpage",
};

export const getMainPageByRole = (roles) => {
 
  if (roles.includes("ideaOwner")) {
    return homeRoutes.ideaOwner;
  }
  if (roles.includes("volunteer")) {
    return homeRoutes.volunteer;
  }
  if (roles.includes("volunteer_evaluator")) {
    return homeRoutes.volunteer_evaluator;
  }
  if (roles.includes("volunteer_incubated")) {
    return homeRoutes.volunteer_incubated;
  }
  if (roles.includes("visitor")) {
    return homeRoutes.visitor;
  }
  if (roles.includes("admin")) {
    return homeRoutes.admin;
  }
  
  // default
  return homeRoutes.visitor;
};