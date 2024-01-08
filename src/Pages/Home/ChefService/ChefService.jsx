import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  const divStyle = {
    backgroundImage: `url(${chefService})`,
    backgroundSize: "cover",
    height: "572px",
  };

  return (
    <div className="flex items-center my-12" style={divStyle}>
      <div className="max-w-6xl h-[334px] text-center px-24 text-black py-24 rounded-lg mx-auto bg-slate-100">
        <h2 className="text-3xl mb-4 font-semibold">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          assumenda <br /> dolore enim, aut accusamus minus quisquam quibusdam
          tempora vitae esse <br />
          repudiandae optio quaerat magnam iure consequatur.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
