
function AboutCount() {
  const count = [
    {num: 5},
    {num: 13},
    {num: 19},
    {num: 7},
    {num: 3},
  ]
  return (
    <section className="py-20 bg-[url('/images/about/count-img.png')] bg-cover bg-center bg-fixed relative z-[2]">
      <div className="container before:content-[''] before:absolute before:w-full before:h-full before:bg-[#4b675acc] before:inset-0 before:z-[-1]">
        <div className="flex justify-between items-center gap-5 flex-wrap text-white">
          {count.map((count, index) => (
            <div className="box text-center" key={index}>
              <div className="space-x-2">
                <span className="text-[50px] font-bold">{count.num}</span>
                <span className="text-[40px]">+</span>
              </div>
              <span className="text-[20px]">Glorious years</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCount;