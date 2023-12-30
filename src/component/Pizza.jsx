const Pizza = ({ pizzaObj }) => {
  //if (pizzaObj.soldOut) return null;

  return (
    <div className="">
      <li className="w-4/5 mx-auto bg-slate-100 cursor-pointer rounded-lg flex flex-col items-center shadow-md border border-slate-300">
        <img
          src={pizzaObj.photoName}
          alt={pizzaObj.name}
          className="w-60 rounded-full mb-5 mt-5 "
        />
        <div className="border-t-2 border-slate-300 bg-cyan-100 p-8 w-[100%]">
          <h3 className="text-slate-600 text-start text-xl font-bold">
            {pizzaObj.name}
          </h3>
          <h4 className="text-slate-700 text-start">{pizzaObj.ingredients}</h4>
          <h4 className="text-green-700 text-start">
            ₦{pizzaObj.soldOut ? "NOT AVAILABLE" : pizzaObj.price}
          </h4>
        </div>
      </li>
    </div>
  );
};

export default Pizza;
