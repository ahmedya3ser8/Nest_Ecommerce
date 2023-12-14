import {useState} from 'react'

function SpecialDiscount() {
  // Dec 31 2023 23:59:59
  const newDate = new Date('May 10 2024 23:59:59').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const count = setInterval(() => {
    const date = new Date().getTime();
    const diff = newDate - date;

    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((diff % (1000 * 60)) / 1000));

    if(diff < 0) {
      clearInterval(count);
    }
  }, 1000)
  
  return (
    <section className='py-8'>
      <div className="container">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-5">
          <div className="left">
            <h2 className='text-[25px] font-bold'>The hot product for this week</h2>
            <p className='text-[14px] text-[#777]'>Dont miss this opportunity at a special discount just for this week.</p>
          </div>
          <div className="right flex gap-3">
            <div className="p-[5px_10px] border-[1px] border-solid border-[#f6f6f6f] text-center">
              <span className='block text-[20px] text-[#3cb47c]'>{days < 10 ? `0${days}` : days}</span>
              <span className='block text-[18px] text-[#666]'>Days</span>
            </div>
            <div className="p-[5px_10px] border-[1px] border-solid border-[#f6f6f6f] text-center">
              <span className='block text-[20px] text-[#3cb47c]'>{hours < 10 ? `0${hours}` : hours}</span>
              <span className='block text-[18px] text-[#666]'>Hours</span>
            </div>
            <div className="p-[5px_10px] border-[1px] border-solid border-[#f6f6f6f] text-center">
              <span className='block text-[20px] text-[#3cb47c]'>{minutes < 10 ? `0${minutes}` : minutes}</span>
              <span className='block text-[18px] text-[#666]'>Minutes</span>
            </div>
            <div className="p-[5px_10px] border-[1px] border-solid border-[#f6f6f6f] text-center">
              <span className='block text-[20px] text-[#3cb47c]'>{seconds < 10 ? `0${seconds}` : seconds}</span>
              <span className='block text-[18px] text-[#666]'>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialDiscount;