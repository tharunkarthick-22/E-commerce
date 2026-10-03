import {Link} from "react-router-dom"
import { RiArrowLeftSLine } from "react-icons/ri";

const UnderConstruction = () => {
  return (
    <div className="m-3 ">
        <div className="flex gap-1 items-center">
          <Link
            to="/"
            className="product-link flex items-center justify-center p-1 text-zinc-900 hover:bg-zinc-300 rounded-4xl duration-300"
          >
            <RiArrowLeftSLine size={30} className="outline-0" />
          </Link>
          <span>Return to Home</span>
        </div>
        <p className="font-semibold text-xl h-80 flex justify-center items-center">Page is under Construction! Please come later</p>
    </div>
  )
}

export default UnderConstruction