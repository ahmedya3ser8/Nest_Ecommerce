import { FaUser, FaBookmark } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  return (
    <section className="py-12">
      <div className="container">
        <span className="text-[#3cb47c] text-[17px] mb-2">Contact form</span>
        <h2 className="text-[30px] text-[#222] mb-2">Drop Us a Line</h2>
        <p className="text-[15px] text-[#777] mb-3">Your email address will not be published. Required fields are marked *</p>
        <div className="flex justify-between items-center gap-5 flex-col lg:flex-row">
          <div className="left w-full lg:w-[47%]">
            <form action="#" >
              <div className="bg-[#eee] flex items-center px-3 mb-4 rounded-[10px]">
                <label htmlFor=""><FaUser /></label>
                <input type="text" placeholder="your name" className="bg-transparent w-full h-[40px] p-3 outline-none" />
              </div>
              <div className="bg-[#eee] flex items-center px-3 mb-4 rounded-[10px]">
                <label htmlFor=""><MdEmail /></label>
                <input type="email" placeholder="your email" className="bg-transparent w-full h-[40px] p-3 outline-none" />
              </div>
              <div className="bg-[#eee] flex items-center px-3 mb-4 rounded-[10px]">
                <label htmlFor=""><FaBookmark /></label>
                <input type="text" placeholder="your subject" className="bg-transparent w-full h-[40px] p-3 outline-none" />
              </div>
              <textarea name="" placeholder="your message" className="bg-[#eee] w-full h-[220px] p-3 mb-3 rounded-[10px] resize-none outline-none"></textarea>
              <button className="block w-full p-3 bg-[#3cb47c] text-white rounded-[10px]">send message</button>
            </form>
          </div>
          <div className="right w-full lg:w-[47%]">
            <img src="/images/contact.png" alt="contact-img" className="w-[500px] h-[500px] rounded-[10px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;