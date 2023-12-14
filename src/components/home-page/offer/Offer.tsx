import { Link } from "react-router-dom";

function Offer() {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-[#f8c144] to-[#28404c] to-[80%]">
    <ul className="h-10 flex justify-center items-center gap-5 text-[#f6f6f6]">
      <li>
        <Link to="/">Everyday fresh products</Link>
      </li>
      <li>
        <Link to="/">Free delivery for order over $70</Link>
        </li>
      <li>
        <Link to="/">Daily Mega Discounts</Link>
      </li>
      <li>
        <Link to="/">Best price on the market</Link>
      </li>
    </ul>
  </div>
  )
}

export default Offer;