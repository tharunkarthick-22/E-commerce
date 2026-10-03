import { Link, useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftSLine, RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id)),
  );

  const cartProducts = useSelector((state) => state.cart);
  const products = cartProducts.some((item) => item.id === product.id);

  const cartAddItems = (product) => {
    if (products) {
      navigate("/cart");
    } else {
      if (!products) {
        dispatch(addToCart(product));
        toast.success("Added to cart");
      } else {
        toast.error("Item already in cart!!");
      }
    }
  };

  const CatogoryLabel = () => {
    switch (product.category) {
      case "Mobiles":
        return (
          <>
            <div className="flex gap-2">
              <span className="font-semibold">Display: </span>
              <p>{product.specs.display}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">RAM: </span>
              <p>{product.specs.ram}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Storage: </span>
              <p>{product.specs.storage}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Camera: </span>
              <p>{product.specs.camera}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Battery: </span>
              <p>{product.specs.battery}</p>
            </div>
          </>
        );
      case "Laptops":
        return (
          <>
            <div className="flex gap-2">
              <span className="font-semibold">Processor: </span>
              <p>{product.specs.processor}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">RAM: </span>
              <p>{product.specs.ram}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Storage: </span>
              <p>{product.specs.storage}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Graphics card: </span>
              <p>{product.specs?.gpu}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Display: </span>
              <p>{product.specs.display}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Battery: </span>
              <p>{product.specs?.battery}</p>
            </div>
          </>
        );
      case "Tablets":
        return (
          <>
            <div className="flex gap-2">
              <span className="font-semibold">Processor: </span>
              <p>{product.specs.processor}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">RAM: </span>
              <p>{product.specs.ram}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Storage: </span>
              <p>{product.specs.storage}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Display: </span>
              <p>{product.specs.display}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Battery: </span>
              <p>{product.specs.battery}</p>
            </div>
          </>
        );
      case "Headphones":
        return (
          <>
            <div className="flex gap-2">
              <span className="font-semibold">Headphone type: </span>
              <p>{product.specs.type}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Connectivity: </span>
              <p>{product.specs.connectivity}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Battery: </span>
              <p>{product.specs.battery}</p>
            </div>
          </>
        );
      case "TWS":
        return (
          <>
            <div className="flex gap-2">
              <span className="font-semibold">ANC: </span>
              <p>{product.specs.anc}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Battery: </span>
              <p>{product.specs.battery}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Connectivity: </span>
              <p>{product.specs.connectivity}</p>
            </div>
          </>
        );
      case "Monitors":
        return (
          <>
            <div className="flex gap-2">
              <span className="font-semibold">Display size(inch): </span>
              <p>{product.specs.size}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Resolution: </span>
              <p>{product.specs.resolution}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Refresh rate: </span>
              <p>{product.specs.refreshRate}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Panel: </span>
              <p>{product.specs.panel}</p>
            </div>
          </>
        );
    }
  };

  if (!product) {
    return (
      <div className="m-3">
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <div className="flex gap-1 items-center">
          <Link
            to="/"
            className="product-link flex items-center justify-center p-1 text-zinc-900 hover:bg-zinc-300 rounded-4xl duration-300"
          >
            <RiArrowLeftSLine size={30} className="outline-0" />
          </Link>
          <span>Return to Home</span>
        </div>
        <p className="font-bold text-3xl text-center">Product not found</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className="products">
        <div className="flex gap-1 items-center ">
          <Link
            to="/"
            className="product-link flex items-center justify-center p-1 text-zinc-900 hover:bg-zinc-300 rounded-4xl duration-300"
          >
            <RiArrowLeftSLine size={30} />
          </Link>
          <span>Return to Home</span>
        </div>
        <div className="container grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="shadow-md ">
            <img
              src={product.image}
              alt={product.name}
              className="p-2 mx-auto w-sm h-sm"
            />
          </div>
          <div>
            <div>
              <p className="font-bold text-2xl">{product.name}</p>
              <p className="font-medium md:text-xl">{product.description}</p>
              <CatogoryLabel></CatogoryLabel>
            </div>
            <div className="flex">
              <span>₹</span>
              <p className="font-semibold text-xl md:text-3xl">
                {product.price.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <button
                className="w-full p-2 bg-zinc-500 rounded text-white flex items-center justify-center gap-2 mb-3 hover:bg-zinc-700 duration-300"
                onClick={() => cartAddItems(product)}
              >
                {products ? (
                  <span>Go to cart </span>
                ) : (
                  <span>Add to cart </span>
                )}
                <RiShoppingCartLine className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
