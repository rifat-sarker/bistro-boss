import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendMenu from "./RecommendMenu";
import useMenu from "../../../hooks/useMenu";

const Recommend = () => {
  const [recommend] = useMenu();
  const recommendedRecipe = recommend.filter(recipe => recipe.price > '14').slice(0,6);
 

  return (
    <div>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef recommends"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-8 mt-12">
        {
            recommendedRecipe.map(recommended => <RecommendMenu
            key={recommended._id}
            recommended={recommended}
            ></RecommendMenu> )
        }
      </div>
    </div>
  );
};

export default Recommend;
