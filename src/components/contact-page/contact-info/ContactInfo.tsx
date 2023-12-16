import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";

function ContactInfo() {
  const contactData = [
    {icons: <FaLocationDot />, title: 'Address 5674 W Campbell Ave undefined Kent, Utah 56748 United States'},
    {icons: <MdCall />, title: 'Call Us(+96)-940-085-928853'},
    {icons: <MdEmail />, title: 'anythingelse@any.com'},
    {icons: <TbClockHour5 />, title: 'Hours 10:00 - 18:00, Mon - Sat'},
  ]
  return (
    <section className="pt-6 pb-12">
      <div className="container">
        <h2 className="text-[#3cb47c] text-[25px] text-center mb-4">About Company</h2>
        <div className="box flex justify-center flex-col border-[1px] border-solid border-[#00000017] lg:w-[55%] h-[260px] p-8 m-auto rounded-[10px]">
          {contactData.map((item, index) => (
            <div className="flex items-center gap-2 mb-5 last:mb-0" key={index}>
              <span className="text-[#3cb47c]"> {item.icons} </span>
              <p className="text-[18px] text-[#777]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo;