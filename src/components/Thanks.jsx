import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

const Thanks = () => {
    

  return (
    <div className="m-3">
        <div className="flex gap-1 items-center ">
          <Link
            to="/"
            className="product-link flex items-center justify-center p-1 text-zinc-900 hover:bg-zinc-300 rounded-4xl duration-300"
          >
            <RiArrowLeftSLine size={30} className="outline-0" />
          </Link>
          <span>Return to Home</span>
        </div>
        <p className="h-80 flex items-center justify-center font-bold text-2xl">Thanks for Purchase!</p>
    </div>
  )
}

export default Thanks