import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { increaseQuantity, decreaseQuantity } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartProducts = useSelector((state) => state.cart);

  let totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  let checkOut = () => {
    navigate("/thanks");
  };

  if (cartProducts.length === 0)
    return (
      <div className="m-3 ">
        <div className="flex gap-1 items-center ">
          <Link
            to="/"
            className="product-link flex items-center justify-center p-1 text-zinc-900 hover:bg-zinc-300 rounded-4xl duration-300"
          >
            <RiArrowLeftSLine size={30} className="outline-0" />
          </Link>
          <span>Return to Home</span>
        </div>
        <div className="flex items-center justify-center h-80">
          <p className="text-2xl font-semibold">
            Please add some products to the cart
          </p>
        </div>
      </div>
    );

  return (
    <div className="mx-auto">
      <div className="m-3">
        <div className="flex gap-1 items-center">
          <Link
            to="/"
            className="product-link flex items-center justify-center p-1 text-zinc-900 hover:bg-zinc-300 rounded-4xl duration-300"
          >
            <RiArrowLeftSLine size={30} className="outline-0" />
          </Link>
          <span>Return to Home</span>
        </div>
      </div>
      <div className="container grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="shadow-md col-span-1 md:col-span-2 lg:col-span-3 ">
          {/* {
            cartProducts.map( product => <div  className="shadow-md grid gap-2 justify-items-end p-1 mb-3 grid-cols-5 lg:grid-cols-4 ">
              <div className="flex items-center md:col-span-2 lg:col-span-1">
                <img src={product.image} alt="" className="w-15 h-15 md:w-55 md:h-55 object-contain" />
              </div>
              <div className="col-span-4 md:col-span-3 lg:col-span-3">
                <p className="text-sm md:text-xl font-semibold mb-1 pt-2 min-w-0">{product.name}</p>
                <p className="text-xs lg:text-xl font-medium mb-1 line-clamp-3">{product.description}</p>
                <div className="cart-quantity-counter px-1">
                  <div className=" flex gap-1 items-center">
                    <button ><AiOutlineMinus className=" lg:text-xl my-2 p-1  bg-slate-400 rounded"/></button>
                    <span className="lg:text-xl">{product.quantity}</span>
                    <button><AiOutlinePlus className="lg:text-xl my-2 p-1 bg-slate-400 rounded"/></button>
                  </div>
                  <div>
                    <span></span>
                  </div>
                </div>
              </div>
            </div> )
          } */}
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="shadow-md grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 p-3 mb-3"
            >
              <div className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 lg:w-52 lg:h-52 object-contain"
                />
              </div>

              <div className="card-product-description flex flex-col min-w-0">
                <div>
                  <p className="text-sm md:text-xl font-semibold mb-1 pt-2">
                    {product.name}
                  </p>

                  <p className="text-xs lg:text-lg font-medium mb-3 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="cart-quantity-counter flex items-center justify-between px-3 mt-auto">
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity({ id: product.id }))
                      }
                    >
                      <AiOutlineMinus className="lg:text-xl my-2 p-1 bg-slate-400 rounded outline-0" />
                    </button>

                    <span className="lg:text-xl">{product.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity({ id: product.id }))
                      }
                    >
                      <AiOutlinePlus className="lg:text-xl my-2 p-1 bg-slate-400 outline-0 rounded" />
                    </button>
                  </div>
                  <div>
                    <span>₹</span>
                    <span className="text-lg font-bold">
                      {(product.price * product.quantity).toLocaleString(
                        "en-IN",
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-md p-4 rounded-md">
          <div className="text-xl font-bold">
            <p>Order Summary</p>
          </div>
          <div className="flex justify-between">
            <span>Sub total</span>
            <span>
              <span>₹</span>
              {totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">
              <span>₹</span>
              {totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="mt-3 font-bold text-xl">
            <button
              className="text-center w-full bg-gray-500 p-2 rounded text-white hover:bg-gray-600"
              onClick={() => checkOut()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// {
//             cartProducts.map( product => <div  className="shadow-md flex gap-2 justify-items-end p-1">
//               <div className="flex items-center">
//                 <img src={product.image} alt="" className="w-15 h-15 md:w-55 md:h-55 " />
//               </div>
//               <div className="border-2 ">
//                 <p className="text-sm md:text-xl font-semibold mb-1 pt-2">{product.name}</p>
//                 <p className="text-xs lg:text-xl font-medium mb-1">{product.description}</p>
//                 <div className="cart-quantity-counter px-1">
//                   <div className=" flex gap-1 items-center">
//                     <button ><AiOutlineMinus className=" lg:text-xl my-2 p-1  bg-slate-400 rounded"/></button>
//                     <span className="lg:text-xl">{product.quantity}</span>
//                     <button><AiOutlinePlus className="lg:text-xl my-2 p-1 bg-slate-400 rounded"/></button>
//                   </div>
//                   <div>
//                     <span></span>
//                   </div>
//                 </div>
//               </div>
//             </div> )
//           }
