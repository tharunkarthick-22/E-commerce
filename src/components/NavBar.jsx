import { Link } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { RiHome9Line, RiShoppingCartLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { searchProductsByCatorgory } from "../store/productSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.product.searchTerm);

  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navBar relative z-50 flex justify-center items-center">
      <div className="search-bar hidden min-[601px]:flex border-2 p-2 rounded items-center outline-0">
        <input
          type="text"
          placeholder="Search Products"
          name="search"
          className="outline-0"
          value={searchTerm}
          onChange={(e) => dispatch(searchProductsByCatorgory(e.target.value))}
        />

        <button>
          <PiMagnifyingGlassBold />
        </button>
      </div>

      <button
        className="min-[601px]:hidden text-2xl outline-0"
        onClick={() => setShowSearch(!showSearch)}
      >
        <PiMagnifyingGlassBold />
      </button>

      <div className="nav-links">
        <ul className="nav-ul flex gap-3 text-3xl items-center mb-0">
          <li>
            <Link to="/">
              <RiHome9Line />
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <RiShoppingCartLine />
            </Link>
          </li>
        </ul>
      </div>

      {showSearch && (
        <div className="fixed top-15 left-0 w-screen bg-white p-3 shadow-md z-50 min-[601px]:hidden">
          <div className="border-2 p-2 rounded flex items-center">
            <input
              type="text"
              placeholder="Search Products"
              name="search"
              className="outline-0 w-full"
              value={searchTerm}
              onChange={(e) =>
                dispatch(searchProductsByCatorgory(e.target.value))
              }
            />

            <button>
              <PiMagnifyingGlassBold />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
