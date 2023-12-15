
function AboutPerformance() {
  const perInfo = [
    {title: 'Who we are'},
    {title: 'Our history'},
    {title: 'Our mission'}
  ]
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row gap-5 p-5">
          <div className="left w-full lg:w-1/2">
            <img src="/images/about/performance.png" alt="performance-img" className="w-full" />
          </div>
          <div className="right w-full lg:w-1/2 p-5">
            <span className="block text-[22px] text-[#3cb47c] mb-3">Our performance</span>
            <h2 className="text-[35px] text-[#222] mb-3">Your Partner for <br /> e-commerce grocery solution</h2>
            <p className="text-[17px] text-[#777] mb-3">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className="text-[17px] text-[#777]">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
          </div>
        </div>
        <div className="performance-info py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perInfo.map((item, index) => (
              <div className="box p-5" key={index}>
                <h2 className="text-[25px] text-[#222] tracking-wider font-bold mb-3">{item.title}</h2>
                <p className="text-[#777]">
                  Volutpat diam ut venenatis tellus in metus.
                  Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPerformance;