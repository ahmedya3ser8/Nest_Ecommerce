import {FaCartShopping, FaHeart, FaUser} from 'react-icons/fa6';
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
import { Link } from 'react-router-dom';


function Header() {
  const links = [
    {path: '/', text: 'Home'},
    {path: 'about', text: 'About'},
    {path: 'shop', text: 'Shop'},
    {path: 'blog', text: 'Blog'},
    {path: 'contact', text: 'Contact'},
  ]

  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => setMenu(!menu);
  
  return (
    <header className="p-5 h-18 bg-[#eee]">
      <div className="container">
        <div className="flex justify-between items-center gap-1 lg:gap-5">
          <div className="logo">
            <Link to={'/'} >
              <img src="/images/logo.png" alt="logo" className='h-[40px] w-full' />
            </Link>
          </div>
          <div className="links">
            <ul className={menu ? 'absolute left-0 top-[70px] w-full h-auto bg-[#ddd] p-2 z-10' : 'hidden lg:flex md:gap-8'}>
              {links.map(link => (
                <li className="p-[8px] md:p-0 border-b-[1px] border-solid border-[#ccc] last:border-none md:border-none" key={link.path}>
                  <Link to={link.path} className="block text-[18px] w-full text-[#333] transition-colors duration-300 hover:text-[#888]">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="icons flex items-center gap-3 lg:space-x-2">
            <Link to={'cart'} title="cart">
              <div className="bg-white rounded-full p-[10px] relative">
                <FaCartShopping />
                <span className="absolute top-[-10px] left-[40%] w-5 h-5 rounded-full bg-[#3cb47c] text-white text-[14px] flex items-center justify-center">2</span>
              </div>
            </Link>
            <Link to={'wishlist'} title="wishlist">
              <div className="bg-white rounded-full p-[10px] relative">
                <FaHeart />
                <span className="absolute top-[-10px] left-[40%] w-5 h-5 rounded-full bg-[#3cb47c] text-white text-[14px] flex items-center justify-center">1</span>
              </div>
            </Link>
            <Link to={'register'} title="register">
              <div className="bg-white rounded-full p-[10px]">
                <FaUser />
              </div>
            </Link>
            <div className="text-[22px] ml-[5px] lg:hidden" onClick={toggleMenu}>
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;