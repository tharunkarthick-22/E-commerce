import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 ">
          <Outlet />
        </main>
        <footer className="footer">
          <BackToTop></BackToTop>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default Layout;
