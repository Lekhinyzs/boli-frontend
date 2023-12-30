import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contextapi/themeContext";

function Basket() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-gray-900 bg-white  h-screen">
        <Header />
        <h1 className="pt-28 text-center font-extrabold md:text-4xl xxs:text-2xl text-cyan-600">
          Your Cart List
        </h1>
        <div className=" p-10 md:w-3/4 xxs:w-full mx-auto dark:bg-gray-900">
          {cart.cartItems.length === 0 ? (
            <>
              <div className="text-center">
                <div className="text-8xl">😔</div>
                <p className="text-3xl text-slate-800 dark:text-white mt-1">
                  Its empty here
                </p>
                <Link to="/menu">
                  <span className="text-xl text-slate-800 dark:text-white">
                    <FontAwesomeIcon
                      icon={faShoppingBasket}
                      className="text-cyan-500 mt-4"
                    />{" "}
                    Start Shopping
                  </span>
                </Link>
              </div>
            </>
          ) : (
            <div>
              <div>
                <ul className="flex flex-row justify-between border-b-2 border-cyan-500 dark:text-white">
                  <li className="w-1/4">Meal</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Total</li>
                </ul>
              </div>
              {cart.cartItems?.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex flex-row justify-between items-center border-b-2 border-cyan-100"
                >
                  <div className="w-1/4 md:flex xxs:block flex-row gap-10  items-center mb-5">
                    <img
                      src={cartItem.photoName}
                      alt="food"
                      className="w-20 rounded-xl mt-3"
                    />
                    <div>
                      <h3 className="m-2 md:text-sm xxs:text-xs dark:text-white">
                        {cartItem.name}
                      </h3>
                      <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        className="text-red-500 hover:text-white hover:bg-red-500 px-3 py-2 border rounded-lg mb-1 dark:text-white "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="pl-10">
                    <p className="dark:text-white">₦{cartItem.price}</p>
                  </div>
                  <div>
                    <div className="flex flex-row gap-8 md:px-5 xxs:px-1 md:py-2 border rounded-xl bg-cyan-200 border-slate-300">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div>{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="dark:text-white">
                    ₦{cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
              <div className="md:flex xxs:block flex-row justify-between dark:text-white mt-5">
                <div></div>
                <div>
                  <div className="flex flex-row justify-between mb-3">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-semibold">
                      ₦{cart.cartTotalAmount}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="mb-2">
                      Taxes and delivery are calculted at checkout
                    </h1>
                    <button className="px-5 py-3 bg-slate-500 hover:bg-cyan-600 transition duration-500 text-white rounded">
                      Check out
                    </button>
                    <button
                      className="text-white mt-5 md:px-5 xxs:px-32 py-3 rounded-lg bg-red-500 hover:opacity-80"
                      onClick={() => handleClearCart()}
                    >
                      Clear All
                    </button>
                    <Link to="/menu" className="mt-2 text-center">
                      <span className="text-xl">
                        <FontAwesomeIcon
                          icon={faShoppingBasket}
                          className="text-cyan-500"
                        />{" "}
                        Continue Shopping
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Basket;
