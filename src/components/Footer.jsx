import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link} from "react-router-dom"

const Footer = () => {

  return (
    <footer className="footer-component bg-slate-900 shadow-md  ">
      <div className="w-4/5 mx-auto">
      <div className="footer-container w-full min-h-16 text-white py-3 px-5 grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-15">
        <div>
          <p className="mb-1 font-semibold text-2xl">NexCart</p>
          <p className="mb-1 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima assumenda deleniti velit totam repellendus ex accusantium quas, aspernatur beatae id, corporis veniam! Fugit perferendis qui nam illum dolorum mollitia.
          </p>
          <div className="footer-icons flex gap-4">
            <a href="" >
              <FaFacebookF
                size={30}
                className="bg-white text-slate-900 p-1 rounded-md mt-1"
              />
            </a>
            <a href="">
              <FaXTwitter
                size={30}
                className="bg-white text-slate-900 p-1 rounded-md mt-1"
              />
            </a>
            <a href="">
              <FaInstagram
                size={30}
                className="bg-white text-slate-900 p-1 rounded-md mt-1"
              />
            </a>
            <a href="">
              <FaYoutube
                size={30}
                className="bg-white text-slate-900 p-1 rounded-md mt-1"
              />
            </a>
          </div>
        </div>
        <div className="footer-services "> 
          <p className="font-semibold text-xl mb-2">Pages</p>
          <ul className="p-0 mb-0">
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li><Link >Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishList">Wish List</Link></li>
          </ul>
        </div>
        <div className="footer-catogories">
          <p className="font-semibold text-xl mb-2">Catogories</p>
          <ul className="p-0 ">
            <li>
              <Link>Headphones</Link>
            </li>
            <li>
              <Link>Laptops</Link>
            </li>
            <li>
              <Link>Mobiles</Link>
            </li>
            <li>
              <Link>Monitors</Link>
            </li>
            <li>
              <Link>Tablets</Link>
            </li>
            <li>
              <Link>TWS</Link>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <p className="font-semibold text-xl mb-2">Help</p>
          <ul className="p-0 ">
            <li>
              <Link to={"/underConstruction"} >Account locked</Link>
            </li>
            <li>
              <Link to={"/underConstruction"}>Return a Product</Link>
            </li>
            <li>
              <Link to={"/underConstruction"}>Customer Support</Link>
            </li>
            <li>
              <Link to={"/underConstruction"}>Help</Link>
            </li>
            <li>
              <Link to={"/underConstruction"}>App Download</Link>
            </li>
          </ul>
        </div>
      </div>
      
      </div>
      {/* <div>
        <p>Copy &copy; Tharun @2026</p>
      </div> */}
    </footer>
  );
};

export default Footer;
