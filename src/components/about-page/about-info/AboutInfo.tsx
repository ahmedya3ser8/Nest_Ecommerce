
function AboutInfo() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row gap-5">
          <div className="left w-full lg:w-1/2">
            <img src="/images/about/about-01.png" alt="about-img" className="w-full h-[500px]" />
          </div>
          <div className="right w-full lg:w-1/2 p-5">
            <h2 className="text-[22px] font-bold mb-2">Welcome to Nest</h2>
            <p className="text-[#777] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate id est laborum.
            </p>
            <p className="text-[#777] mb-4">
              Ius ferri velit sanctus cu, sed at soleat accusata.
              Dictas prompta et Ut placerat legendos interpre.
              Donec vitae sapien ut libero venenatis faucibus.
              Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing.
              Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
            </p>
            <div className="imgs-info flex flex-wrap gap-3">
              <img src="/images/about/about-02.png" alt="about-info" className="w-[120px]" />
              <img src="/images/about/about-03.png" alt="about-info" className="w-[120px]" />
              <img src="/images/about/about-04.png" alt="about-info" className="w-[120px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo;