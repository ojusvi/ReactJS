import { Link } from "react-router-dom";
import { cart } from "../assets/icons";
import { INflag, location, nbanimate } from "../assets/images";
import { navLinks } from "../constants/index";
import { name } from "../lib/utils";
import { InputDemo } from "./Demo/InputDemo";
import { SheetDemo } from "./SheetDemo";

function Nav() {
  return (
    <>
      <header className="padding-x py-3 w-full bg-adgray text-white">
        <nav className="flex items-center max-container">
          <Link to="/" className="mt-1">
            <img
              src={nbanimate}
              alt=""
              width={120}
              height={100}
              className="px-3 ml-4"
            />
          </Link>
          <img
            src={location}
            alt=""
            width={12}
            height={12}
            className="ml-14 mt-3.5 max-sm:hidden"
          />

          <Link to="">
            <div className="ml-3 text-sm max-sm:hidden">
              Hello {name}
              <br />
              <span className="font-bold">Select Your Address</span>
            </div>
          </Link>
          <div className="mx-16 w-[50%] max-sm:w-[50%]">
            <InputDemo></InputDemo>
          </div>

          <img
            src={INflag}
            alt=""
            width={40}
            height={40}
            className="-mx-10 max-sm:hidden"
          />
          <span className="mx-5 max-sm:hidden">EN</span>

          <div className="text-xs max-sm:hidden">
            Hello, {name}
            <br />
            <span className="font-bold text-sm">Account & Lists</span>
          </div>

          <Link to="">
            <div className="ml-10 text-xs max-sm:hidden">
              Returns
              <br />
              <span className="font-bold text-sm">& Orders</span>
            </div>
          </Link>

          <img src={cart} alt="" width={35} height={35} className="mx-10" />

          <Link to="/cart">
            <div className="-ml-9 mt-2 text-sm font-bold max-sm:hidden">
              Cart
            </div>
          </Link>
        </nav>
      </header>
      <div className="bg-acharcol text-white py-2 font-bold">
        <ul className="flex flex-1 items-center gap-16">
          <div>
            <SheetDemo></SheetDemo>
          </div>
          {navLinks.map((item) => (
            <li key={item.label} className="max-sm:hidden">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;
