import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
// import Nav from "../components/Nav";

function Layout() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* <Nav /> */}
      <div className=" flex">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default Layout;
