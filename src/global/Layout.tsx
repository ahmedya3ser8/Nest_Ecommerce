import { Outlet } from "react-router-dom";
import HeaderTop from "./header/HeaderTop";
import Header from "./header/Header";
import Icons from "./icons/Icons";
import SubscribeForm from "./subscribe/SubscribeForm";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <>
    <HeaderTop />
    <Header />
    <Outlet/> 
    <Icons />
    <SubscribeForm />
    <Footer />
    </>
  )
}

export default Layout;