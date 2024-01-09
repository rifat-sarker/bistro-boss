import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Pagination]);


const OrderTab = ({ items }) => {

  return (
    <div>
      <Swiper slidesPerView={3} 
        pagination={{ clickable: true }}>
        <div className="grid md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-12 mt-8">
          {items.map((item) => (
            <SwiperSlide key={item._id} className="grid md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-12 mt-8">
              <div className="">
                <FoodCard key={item._id} item={item}></FoodCard>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default OrderTab;
