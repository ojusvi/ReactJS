import { Link } from "react-router-dom";
import { INflag, nbanimate } from "../assets/images";
import { dashLinks } from "../constants";
import { InputDemo } from "./Demo/InputDemo";

function DashNav() {
  return (
    <>
      <header className="padding-x py-3 w-full bg-adgray text-white">
        <nav className="flex items-center max-container">
          <Link to="/" className="mt-3">
            <img
              src={nbanimate}
              alt=""
              width={100}
              height={100}
              className="px-2 ml-5"
            />
          </Link>
          <img
            src={location}
            alt=""
            width={12}
            height={12}
            className="ml-20 mt-3.5 max-sm:hidden"
          />

          <div className="ml-3 text-sm max-sm:hidden">
            Hello User, <br />
            <span className="font-bold">Select Your Address</span>
          </div>
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
            Hello, Sign In <br />
            <span className="font-bold text-sm">Account & Lists</span>
          </div>

          <div className="ml-10 text-xs max-sm:hidden">
            Returns
            <br />
            <span className="font-bold text-sm">& Orders</span>
          </div>
        </nav>
      </header>

      <div className="bg-acharcol text-white items-center py-2 font-bold">
        <ul className="flex flex-1 justify-center items-center gap-16">
          {dashLinks.map((item) => (
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

export default DashNav;
