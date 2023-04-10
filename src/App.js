import { Navigation } from "./navigation";
import { Routes,Route } from "react-router-dom";
import {Home} from './components/Home'
import { Banner } from "./components/banner";
import About from "./components/about";
import Support from './components/support'
import { Cart } from "./components/cart";
import { Footer } from "./footer";
import { Productview } from "./components/productview";
import Men from "./components/men";
import Women from "./components/women";
import Kids from "./components/kids";


export function App(){
  return(
    <>
    <Navigation />
    <Banner />
    <Routes>
    <Route exact path = "/"  element = {<Home />}></Route>
    <Route exact path = "/men" element = {<Men />}></Route>
    <Route exact path = "/women"  element = {<Women />}></Route>
    <Route exact path = "/kids"  element = {<Kids />}></Route>
    <Route exact path = "/about" element = {<About />}></Route>
    <Route exact path = "/support" element = {<Support />}></Route>
    <Route exact path = "/cart" element = {<Cart />}></Route>
    <Route path = "/productview/:id" element = {<Productview />}></Route>
    <Route path = "men/productview/:id" element = {<Productview />}></Route>
    <Route path = "women/productview/:id" element = {<Productview />}></Route>
    <Route path = "kids/productview/:id" element = {<Productview />}></Route>
    </Routes>
   <Footer />
    </>
  )
}