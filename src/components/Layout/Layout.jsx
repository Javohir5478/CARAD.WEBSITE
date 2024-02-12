import { Fragment } from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
        <Fragment>

       <main>
        <Header/>
        <Outlet/>
      <Footer/>
       </main>
        

        </Fragment>
  )
}

export default Layout;