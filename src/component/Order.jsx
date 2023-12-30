import { useTheme } from "../contextapi/themeContext";
const Order = ({ closeHour, openHour }) => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      {
        <p className="text-slate-700 dark:text-white">
          Good Day 😎... We are currently open from {openHour}:00hrs to{" "}
          {closeHour}:00hrs Come visit us or order online!
        </p>
      }
      <button className="dark:text-white">Place your order!</button>
    </div>
  );
};

export default Order;
