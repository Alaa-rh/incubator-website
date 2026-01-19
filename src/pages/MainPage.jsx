import React from 'react'
import NavBarVisitor from '../components/NavBarVisitor';

const navLinkOptions = [
  { label: " الرئيسية", to: "/mainpage", scrollId: "" }, 
  { label: "المشاريع", to: "/projectspage", scrollId: "" },
  { label: "النشاطات", to: "/activitiespage", scrollId: "" },
  { label: "المفضلة", to: "/favoritespage", scrollId: "" },
]
const MainPage = () => {
  return (
    <div>
     <NavBarVisitor navOptions={navLinkOptions} />  
    </div>
  )
}

export default MainPage