
function ContactMap() {
  return (
    <section className="py-12">
      <div>
        <iframe 
          className="w-full h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76973624219!2d31.1884237221946!3d30.05946989044669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1671565887077!5m2!1sen!2seg"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </section>
  )
}

export default ContactMap;