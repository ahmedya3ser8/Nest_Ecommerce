import { Link } from "react-router-dom";

function TeamInfo() {
  return (
    <div className="left w-full lg:w-1/3">
      <span className="text-[#3cb47c] text-[20px] mb-2">Our Team</span>
      <h1 className="text-[#222] text-[35px] mb-2">Meet Our Expert Team</h1>
      <p className="text-[17px] text-[#777] mb-3">
        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      </p>
      <p className="text-[17px] text-[#777] mb-4">
        Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      </p>
      <Link to={'#'} className="block w-fit p-3 bg-[#3cb47c] text-white rounded-[10px]">View All Members</Link>
    </div>
  )
}

export default TeamInfo;