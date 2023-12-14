import { Link } from "react-router-dom";

function HeaderTop() {
  return (
    <div className='hidden lg:block py-3 bg-[#3cb47c] text-white'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="left text-[14px] xl:text-[16px]">
            <ul className='flex items-center gap-2'>
              <li>
                <Link to={'/'} >My Account</Link>
              </li>
              <li>
                <Link to={'about'} >About Us</Link>
              </li>
              <li>
                <Link to={'wishlist'} >Whilist</Link>
              </li>
              <li>
                <Link to={'/'} >Order Tracking</Link>
              </li>
            </ul>
          </div>
          <div className="center text-[14px] xl:text-[16px]">
            <p>Supper Value Deals - Save more with coupons</p>
          </div>
          <div className="right text-[14px] xl:text-[16px]">
            <span>Need help? Call Us: +1874909127</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;