import {
  FaCalendar,
  FaCartShopping,
  FaComments,
  FaHouse,
  FaList,
  FaSearchengin,
  FaWallet,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen text-black bg-[#D1A054]">
        <ul className="menu p-4 uppercase">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHouse></FaHouse> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaWallet></FaWallet> Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping>My Cart ( {cart.length} )
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
             <FaComments></FaComments> add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
             <FaList></FaList> my booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHouse></FaHouse>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
            <FaSearchengin></FaSearchengin>Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
