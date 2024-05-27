import { Link, useNavigate } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export function SheetDemo() {
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <img src={hamburger} alt="" width={25} height={25} />
          <h1 className="font-montserrat text-sm mt-1 ml-2 leading-normal font-bold">
            All
          </h1>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <span className="font-montserrat">
              Hello,{" "}
              {localStorage.getItem("username")
                ? localStorage.getItem("username")
                : "user"}
            </span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          <div className="py-2">
            <h1 className="font-bold text-lg grid">Help & Settings</h1>
            {localStorage.getItem("email") === "admin@gmail.com" ? (
              <button className="flex py-2">Dashbord</button>
            ) : null}
            <button>Customer Support</button>
          </div>
        </div>
        {!localStorage.getItem("email") && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="flex-1">
                <Link className="w-full" to="signin">
                  Sign in
                </Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
        {localStorage.getItem("email") && (
          <SheetFooter>
            <SheetClose asChild>
              <Button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                className="flex-1"
              >
                Log Out
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
