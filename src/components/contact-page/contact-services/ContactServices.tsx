
function ContactServices() {
  const servicesItems = [
    {title: 'Visit Feedback'},
    {title: 'Employer Services'},
    {title: 'Billing Inquiries'},
    {title: 'General Inquiries'}
  ]
  return (
    <section className="py-12">
      <div className="container">
        <div className="title text-center pb-8">
          <h2 className="text-[#3cb47c] text-[25px] mb-2">How can help you ?</h2>
          <p className="text-[#333] text-[20px] lg:text-[25px] tracking-wide">Let us know how we can help you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-white text-center">
          {servicesItems.map((item, index) => (
            <div className="box bg-[#3cb47c] p-5 h-[250px] flex justify-center items-center flex-col rounded-[10px]" key={index}>
              <h4 className="text-[22px] mb-2">{item.title}</h4>
              <p className="text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactServices;