// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import UnderConstruction from "./components/UnderConstruction";
import Thanks from "./components/Thanks";

function App() {
  return (
    <>
      <div className="Container">
        <BrowserRouter basename="/E-commerce">
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />

              <Route path="/product/:id" element={<Products />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/wishList" element={<WishList />} />
              <Route
                path="/underConstruction"
                element={<UnderConstruction />}
              ></Route>
              <Route path="/thanks" element={<Thanks />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
