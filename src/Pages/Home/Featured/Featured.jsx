import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="FEATURED ITEM"
      ></SectionTitle>
      <div className="md:flex bg-slate-400 bg-opacity-40 justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>
            {new Date().getDate() +
              "-" +
              new Date().getMonth() +
              1 +
              "-" +
              new Date().getFullYear()}
          </p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            eligendi vel tempore dignissimos assumenda ipsum? Minus aperiam
            atque enim cupiditate, voluptatem odio voluptate. Recusandae fuga,
            officia suscipit rem aperiam veritatis?
          </p>
          <button className="btn btn-outline my-4 border-0 border-b-4">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
