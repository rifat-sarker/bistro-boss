import FoodCard from "../../../components/FoodCard/FoodCard";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Pagination]);

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-12 mt-8">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
