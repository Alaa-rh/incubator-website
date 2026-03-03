
export const initialForm = {
  name: "",
  tel: "",
  city: "",
  title: "",
  sector: "",
  description: "",
  productType: "",
  targetAudience: "",
  productProblem: "",
  teamMembers: "",
  teamEmails: "",
  hasTeam: "",
  projectDuration: "",
  agree: false
}

export function ideaReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value }

    case "RESET":
      return initialForm

    default:
      return state
  }
}
