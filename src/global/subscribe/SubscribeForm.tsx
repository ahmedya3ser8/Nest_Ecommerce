
function SubscribeForm() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#f8c144] to-[#3cb47c] to-[80%]">
      <div className="container">
        <div className="flex justify-around items-center flex-col-reverse lg:flex-row gap-5">
          <div className="left hidden lg:block">
            <img src="/images/footer/footer-01.png" alt="footer-contact" className="w-full h-[250px]" />
          </div>
          <div className="center text-white text-center">
            <p className="text-[14px] mb-[5px]">Start You&apos;r Daily Shopping with Nest Mart</p>
            <h2 className="text-[25px] lg:text-[30px] font-medium mb-2">Stay home & get your daily <br /> needs from our shop</h2>
            <div className="footer-contact-subscribe flex justify-between gap-5 bg-white p-3 rounded-[10px] mb-4">
              <input type="email" placeholder="Your Email" className="w-full text-black text-[18px] p-2 outline-none" />
              <button className="bg-[#fdc040] text-black p-2 rounded-[10px]">subscribe</button>
            </div>
            <div className="flex justify-center gap-5">
              <div>
                <img src="/images/footer/app-store.jpg" alt="app-store" className="w-[100px]" />
              </div>
              <div>
                <img src="/images/footer/google-play.jpg" alt="google-play" className="w-[100px]" />
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/images/footer/footer-02.png" alt="footer-contact" className="w-full h-[250px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeForm;