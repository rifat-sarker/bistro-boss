import {
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaComments,
  FaEnvelope,
  FaHouse,
  FaList,
  FaSearchengin,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // todo: get admin value from the database
  const [isAdmin] =useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen text-black bg-[#D1A054]">
        <ul className="menu p-4 uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouse></FaHouse> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook> Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers> all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaWallet></FaWallet> Payment
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
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* divider */}
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
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>Contact
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
