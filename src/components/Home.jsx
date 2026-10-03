import ProductList from "./ProductList";
import SwiperList from "./SwiperList";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
        <div className="mt-4 m-auto">
          <SwiperList></SwiperList>
        </div>
        <hr />
        <div className="p-1">
          <ProductList></ProductList>
        </div>
      </div>
  )
}

export default Home