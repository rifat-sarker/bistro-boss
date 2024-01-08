const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="absolute right-0 top-0 mt-4 rounded-lg px-3 bg-slate-800 text-white mx-4">
          $ {price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn text-orange-700 border-slate-400 btn-outline uppercase my-4 border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
