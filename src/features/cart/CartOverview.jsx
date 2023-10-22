import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" flex items-center justify-between bg-stone-800 p-3 uppercase text-stone-200">
      <p className="space-x-5">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link className="text-stone-300" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
