import { search } from "../../assets/icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function InputDemo() {
  return (
    <div className="flex items-center space-x-1">
      <Input
        id="search"
        type="text"
        placeholder="Search Amazon"
        style={{ color: "black" }}
      />
      <Button variant="secondary" type="submit" className="bg-amber-400">
        <img src={search} alt="" width={20} height={20} />
      </Button>
    </div>
  );
}
