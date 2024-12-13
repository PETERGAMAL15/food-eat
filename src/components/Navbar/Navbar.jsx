import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <Logo />
        {/* menu section */}
        <Menu />
      </div>
    </div>
  );
};

function Logo() {
  return (
    <div>
      <p className="text-3xl lg:text-4xl font-semibold">
        FOOD <span className="text-primary">EAT</span>
      </p>
    </div>
  );
}
function Menu() {
  return (
    <div className="flex justify-center items-center cursor-pointer gap-10">
      <ul className="gap-8 hidden sm:flex">
        <li className="hover:border-b-2 border-primary uppercase">home</li>
        <li className="hover:border-b-2 border-primary uppercase">menu</li>
        <li className="hover:border-b-2 border-primary uppercase">about</li>
      </ul>
      {/* login section */}
      <div className="flex gap-4 items-center">
        <img src={Profile} alt="" className="w-10 rounded-full" />
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Navbar;
