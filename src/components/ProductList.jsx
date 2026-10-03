import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.filteredProducts);

  const cartProducts = useSelector((state) => state.cart);

  const cartAddItems = (product) => {
    const productsCart = cartProducts.some((item) => item.id === product.id);

    if (!productsCart) {
      dispatch(addToCart(product));
      toast.success("Added to cart");
    } else {
      toast.error("Item already in cart!!");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="productList grid gap-3 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const isProductInCart = cartProducts.some(
            (item) => item.id === product.id,
          );

          return (
            <div key={product.id}>
              <div className="shadow-md rounded-md text-black flex flex-col items-center h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-container p-1"
                />

                <div className="font-semibold flex flex-col flex-1 bg-gray-200 w-full pt-4 px-3">
                  <p className="text-2xl line-clamp-1">{product.name}</p>

                  <p className="text-sm line-clamp-2 text-zinc-700 pb-3 border-b">
                    {product.description.substring(0, 70) + "..."}
                  </p>

                  <div className="flex justify-between px-2">
                    <p>Rs.{product.price.toLocaleString("en-IN")}</p>

                    <Link className="outline-0" to={`/product/${product.id}`}>
                      View details
                    </Link>
                  </div>

                  <div className="mt-auto">
                    {isProductInCart ? (
                      <Link
                        to="/cart"
                        className="w-full p-2 bg-zinc-500 rounded hover:bg-zinc-700  duration-300 text-white flex items-center justify-center gap-2 mb-3"
                      >
                        <span>Go to cart</span>
                        <RiShoppingCartLine />
                      </Link>
                    ) : (
                      <button
                        className="w-full p-2 bg-zinc-500 rounded hover:bg-zinc-700 duration-300 text-white flex items-center justify-center gap-2 mb-3"
                        onClick={() => cartAddItems(product)}
                      >
                        <span>Add to cart</span>
                        <RiShoppingCartLine />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
