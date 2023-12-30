import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { pizzaData } from "../assets/DATA/data";
import { useTheme } from "../contextapi/themeContext";

const Menu = () => {
  const pizzas = pizzaData;
  const [search, setSearch] = useState("");
  // const [meals, setMeals] = useState([]);
  // Initial meal query

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         if (data.meals) {
  //           console.log(data);
  //           setMeals(data.meals);
  //         } else {
  //           setMeals([]); // No meals found
  //         }
  //       } else {
  //         console.error("Failed to fetch meals");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching meals:", error);
  //     }
  //   };

  //   fetchMeals();
  // }, [search]);

  const handleAddToCart = (meal) => {
    dispatch(addToCart(meal));
    navigate("/basket");
    console.log(meal);
  };
  const { darkMode } = useTheme();
  return (
    <div className={` ${darkMode && "dark"}`}>
      <div className="dark:bg-gray-900 bg-white pt-20">
        <Header />
        <div className="mb-5">
          <h1 className="mt-20 text-4xl text-cyan-600 font-extrabold text-center">
            All our meal varieties
          </h1>
        </div>
        <div className=" w-1/2 mx-auto ">
          <input
            type="text"
            placeholder="Search for meal"
            className="border rounded-2xl p-5 w-full mx-auto mb-5 dark:bg-slate-700 text-slate-700 dark:text-white"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="p-10">
          <ul className="md:grid xxs:block grid-rows-3 grid-flow-col gap-5 mb-10">
            {pizzas
              .filter((meal) => {
                return search.toLowerCase() === ""
                  ? meal
                  : meal.name.toLowerCase().includes(search);
              })
              ?.map((meal) => (
                <li
                  key={meal.idpizza}
                  className=" mx-auto cursor-pointer rounded-lg flex flex-col items-center shadow-md mb-5"
                >
                  <img
                    src={meal.photoName}
                    alt="meals"
                    className="md:w-80 xxs:w-100 rounded-xl"
                  />
                  <div className="border-t-2 border-slate-300 bg-cyan-100  w-[100%] text-end h-[100%] pl-2 ">
                    <h3 className="text-slate-600 text-start text-lg font-bold">
                      {meal.name}
                    </h3>

                    <h4 className="text-slate-700 text-start">₦{meal.price}</h4>
                    <button
                      className="px-6 py-4 bg-yellow-500 hover:opacity-80 font-semibold"
                      onClick={() => handleAddToCart(meal)}
                    >
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-cyan-600 text-lg mr-2"
                      />
                      Add to cart
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
