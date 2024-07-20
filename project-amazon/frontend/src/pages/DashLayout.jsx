// DashLayout.jsx
import { Outlet } from "react-router-dom";
import DashNav from "../components/DashNav";

const DashLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <DashNav />
      <div className="flex-grow">
        <Outlet />
      </div>
    </main>
  );
};

export default DashLayout;
