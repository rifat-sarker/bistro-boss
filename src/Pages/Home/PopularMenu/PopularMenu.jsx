
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
 
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-12">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mx-auto text-center mt-4n">
        <button className="btn  btn-outline my-4 border-0 border-b-4">
         View all menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
