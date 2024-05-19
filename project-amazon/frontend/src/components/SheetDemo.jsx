import { Link } from "react-router-dom";
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
            <span className="font-montserrat">Hello, User</span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          <div className="py-2">
            <h1 className="font-bold text-lg grid">Help & Settings</h1>
            <button className="flex py-2">Settings</button>
            <button>Customer Support</button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="flex-1">
              <Link to={`signin`}>Sign in / Sign up</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
