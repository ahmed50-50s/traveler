import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="my-17">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
