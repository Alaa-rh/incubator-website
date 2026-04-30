export const initialProfileState = {
  full_name: "",
  email: "",
  phone: "",
  residence: "",
  projects_count: "",
  years_of_experience: "",
  volunteer_type: "",
  availability_type: "",
  primary_Skills: "",
  additional_Skills: "",
  bio: "",
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
