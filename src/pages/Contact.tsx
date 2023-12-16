import ContactForm from "../components/contact-page/contact-form/ContactForm";
import ContactInfo from "../components/contact-page/contact-info/ContactInfo";
import ContactMap from "../components/contact-page/contact-map/ContactMap";
import ContactServices from "../components/contact-page/contact-services/ContactServices";

function Contact() {
  return (
    <main className="overflow-hidden">
      <ContactServices />
      <ContactMap />
      <ContactInfo />
      <ContactForm />
    </main>
  )
}

export default Contact;