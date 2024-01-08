import React from "react";

const RecommendMenu = ({ recommended }) => {
  const { image, recipe, name } = recommended;
  return (
    <div className=" w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
        <button className="btn text-orange-700 btn-outline uppercase my-4 border-0 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendMenu;
