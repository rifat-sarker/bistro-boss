const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-4 p-4">
      <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
      <div>
        <h2 className="text-xl uppercase">{name} -----------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
