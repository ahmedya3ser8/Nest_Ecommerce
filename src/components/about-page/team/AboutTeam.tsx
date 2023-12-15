import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TeamInfo from "./TeamInfo";

function AboutTeam() {
  const teamInfo = [
    {imgURL: '/images/about/client-1.png', name: 'H. Merinda', title: 'CEO & Co-Founder'},
    {imgURL: '/images/about/client-2.png', name: 'Dilan Specter', title: 'Head Engineer'},
  ]
  return (
    <section className="pt-12 pb-20">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row gap-5">
          <TeamInfo />
          <div className="right flex flex-col lg:flex-row gap-5 w-full lg:w-2/3">
            {teamInfo.map((team, index) => (
              <div className="p-5 relative transition-all duration-300 group" key={index}>
                <img src={team.imgURL} alt="team-info" className="rounded-[10px]" />
                <div className="info bg-white absolute bottom-[-50px] left-1/2 translate-x-[-50%] w-[70%] p-5 rounded-[20px] flex justify-center items-center flex-col transition-all duration-300 group-hover:translate-y-[-10px]">
                  <h2 className="text-[22px] text-[#222] font-bold mb-1">{team.name}</h2>
                  <span className="text-[15px] text-[#777] mb-2">{team.title}</span>
                  <div className="social-media flex items-center space-x-2 p-2">
                    <Link to={'https://www.facebook.com/ahmedya3ser8'} target="_blank" className="text-[18px] text-[#3cb47c] transition-all duration-300 hover:text-[#c25]">
                      <FaFacebookF />
                    </Link>
                    <Link to={'https://www.instagram.com/ahmed_ya3ser_8/'} target="_blank" className="text-[18px] text-[#3cb47c] transition-all duration-300 hover:text-[#c25]">
                      <FaInstagram />
                    </Link>
                    <Link to={'https://twitter.com/ahmed_ya3ser_8'} target="_blank" className="text-[18px] text-[#3cb47c] transition-all duration-300 hover:text-[#c25]">
                      <FaTwitter />
                    </Link>
                    <Link to={'https://www.linkedin.com/in/ahmed-yasser-21382a267/'} target="_blank" className="text-[18px] text-[#3cb47c] transition-all duration-300 hover:text-[#c25]">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam;