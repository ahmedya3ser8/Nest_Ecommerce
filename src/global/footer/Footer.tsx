import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const years = date.getFullYear();
  const footerInfo = [
    {title: 'Company', links:['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center']},
    {title: 'Account', links:['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center']},
    {title: 'Company', links:['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center']}
  ]
  return (
    <footer className="pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="box p-5">
            <img src="/images/logo.png" alt="logo" className="w-[150px]" />
            <div className="my-4">
              <div className="flex items-center gap-1 mb-3">
                <span> <FaLocationDot /> </span>
                <p className="text-[15px]">Address 5674 W Campbell Ave undefined Kent, Utah 56748 United States</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <span> <MdCall /> </span>
                <p className="text-[14px]">Call Us(+96)-940-085-928853</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <span> <MdEmail /> </span>
                <p className="text-[14px]">anythingelse@any.com</p>
              </div>
              <div className="flex items-center gap-1">
                <span> <TbClockHour5 /> </span>
                <p className="text-[14px]">Hours 10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
          </div>
          {footerInfo.map((item, index) => (
            <div className="box" key={index}>
              <h2 className="text-[25px] text-[#666]">{item.title}</h2>
              <ul className="flex flex-col p-2">
                {item.links.map((text, index) => (
                  <li className="py-1" key={index}>
                    <Link to="#" className="text-[#666]">{text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-[18px]">
          <span className="text-[#777]">&copy; {years}, All rights reserved</span>
          <Link to={'https://twitter.com/ahmed_ya3ser_8'} target="_blank" className="text-[#3cb47c] transition-colors duration-300 hover:underline font-medium" >ahmed yasser</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;