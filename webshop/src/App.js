import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Route, Routes} from 'react-router-dom'
import Cart from "./Pages/Cart";
import {ContactUs} from "./Pages/ContactUs"; //selleks, et kasutada Email.js teenust, tuleb see import panna { } sisse
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Shops from "./Pages/Shops";
import SignUp from "./Pages/SignUp";
import SingleProduct from "./Pages/SingleProduct";
import AddProduct from "./Pages/admin/AddProduct";
import AdminHome from "./Pages/admin/AdminHome";
import EditProduct from "./Pages/admin/EditProduct";
import MaintainCategories from "./Pages/admin/MaintainCategories";
import MaintainProducts from "./Pages/admin/MaintainProducts";
import MaintainShops from "./Pages/admin/MaintainShops";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language" , newLang)
  }
  return (
    <div className="App" >
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin"> {t("admin")} </Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
          </Nav>
          <img className='lang' src="/english.png  " alt="" onClick={()=> changeLang("en")} />
          <img className='lang' src="/estonian.png" alt="" onClick={()=> changeLang("ee")} />
        </Container>
      </Navbar>   
      
      <Routes>
        <Route path=""  element={ <HomePage/> } />
        <Route path="cart"  element={ <Cart/> } />
        <Route path="contact"  element={ <ContactUs/> } />
        <Route path="product"  element={ <SingleProduct/> } />
        <Route path="shops"  element={ <Shops/> } />
        <Route path="login"  element={ <Login/> } />
        <Route path="signup"  element={ <SignUp/> } />
        <Route path="admin"  element={ <AdminHome/> } />
        <Route path="admin/add-product"  element={ <AddProduct/> } />
        <Route path="admin/edit-product/:id"  element={ <EditProduct/> } />
        <Route path="admin/maintain-categories"  element={ <MaintainCategories/> } />
        <Route path="admin/maintain-products"  element={ <MaintainProducts/> } />
        <Route path="admin/maintain-shops"  element={ <MaintainShops/> } />
      </Routes>  
    </div>
  );
}

export default App;
