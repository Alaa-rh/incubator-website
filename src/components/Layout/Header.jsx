import NavLinksGroup from "../NavLinksGroup"
import NavLinkUniversal from "../NavLinkUniversal"
import logo from "../../assets/images/logo.png"
import '../../index.css';
const Header = ({ navOptions }) => {
   return (
    <header className="bg-main-color text-white px-6 py-2 mb-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </div>
      <nav className="flex-1 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 min-w-max py-1 px-4">
      <NavLinksGroup options={navOptions} variant="landing" className="container flex justify-center gap-6 font-medium text-[30px]" />
      <NavLinkUniversal
        label="لنبدأ معاً"
        to="/signup"
    className="bg-second-color px-4 py-2 rounded hover:scale-105 transition"
      />
      </div>
      </nav>
    </header>
  )
}

export default Header