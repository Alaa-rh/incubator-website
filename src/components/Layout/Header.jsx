import NavLinksGroup from "../NavLinksGroup"
import NavLinkUniversal from "../NavLinkUniversal"
import logo from "../../assets/images/logo.png"
import '../../index.css';
const Header = ({ navOptions }) => {
  return (
    <header className="bg-main-color text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </div>

      <NavLinksGroup options={navOptions} className="flex gap-5" />

      <NavLinkUniversal
        label="لنبدأ معاً"
        to="/signup"
    className="bg-second-color px-4 py-2 rounded hover:scale-105 transition"
      />
    </header>
  )
}

export default Header