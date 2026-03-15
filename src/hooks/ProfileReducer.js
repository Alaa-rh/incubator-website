export const initialProfileState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  projectsCount: "",
  experience: "",
  volunteerType: "",
  collaborationType: "",
  mainSkills: "",
  extraSkills: "",
  cv: null,
  link: ""
}

export function profileReducer(state, action) {
  switch (action.type) {

    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value
      }

    case "SET_FILE":
      return {
        ...state,
        cv: action.file
      }

    case "SET_ALL":
      return {
        ...state,
        ...action.payload
      }

    case "RESET":
      return initialProfileState

    default:
      return state
  }
}
