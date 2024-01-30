import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, ,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item)=>{
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if(result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`)
        console.log(res.data);
        refetch();
        if(res.data.deletedCount > 0){
          Swal.fire({ 
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success"
          });

        }
      }
    });

  }

  return (
    <div>
      <SectionTitle
        subHeading={"Hurry up"}
        heading={"Manage All Items"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-xl">
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td><button
                    className="btn btn-ghost btn-lg bg-orange-500"
                  >
                    <FaEdit className="text-white "></FaEdit>
                  </button></td>
                  <th>
                    <button
                      onClick={() =>handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrash className="text-red-600"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
