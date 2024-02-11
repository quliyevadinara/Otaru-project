import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import NavPage from "./components/NavPage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Blogs from "./pages/Blogs";
import AddBlog from "./admin/AddBlog";
import { useSelector } from "react-redux";
import { createContext, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import ShopPage from "./pages/ShopPage";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { WishlistProvider } from "react-use-wishlist";
import SingleProduct from "./components/SingleProduct";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogAdmin from "./admin/BlogAdmin";
import SingleBlogPage from "./pages/SingleBlogPage";

// contextler=============================================
export const ProductContext = createContext();
export const UserContext = createContext();
export const AccountDataContext = createContext();

function App() {
  useEffect(() => {
    axios
      .get(
        "https://nbamfosohtqozthdlzzc.supabase.co/rest/v1/Otaru-project?select=*",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYW1mb3NvaHRxb3p0aGRsenpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MDMxMjMsImV4cCI6MjAyMjM3OTEyM30.UKliPE7NIK_7E9Wa2_B5Y2ZQkjMnxQ_z38WFweENzuU",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYW1mb3NvaHRxb3p0aGRsenpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MDMxMjMsImV4cCI6MjAyMjM3OTEyM30.UKliPE7NIK_7E9Wa2_B5Y2ZQkjMnxQ_z38WFweENzuU",
          },
        }
      )
      .then((res) => setProductData(res.data));
  }, []);
  // satate ler ==========================================
  const [productData, setProductData] = useState();
  const [accountData, setAccountData] = useState(
    localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [
          {
            name: "",
            mail: "",
            pass: "",
          },
        ]
  );
  const blogs = useSelector((store) => store.AppReducer);
  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);
  //==========================================================
  return (
    <div className="App">
      <ProductContext.Provider value={[productData, setProductData]}>
        <AccountDataContext.Provider value={[accountData, setAccountData]}>
          <UserContext.Provider value={[user, setUser]}>
            <WishlistProvider>
              <CartProvider>
                <BrowserRouter>
                  <NavPage />
                  <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="light"
                  />
                  <ToastContainer />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/our-team" element={<OurTeamPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/shop/:id" element={<SingleProduct />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:id" element={<SingleBlogPage />} />
                    <Route path="/addBlog" element={<AddBlog />} />
                    <Route path="/blogAdmin" element={<BlogAdmin />} />
                  </Routes>
                  <Footer />
                </BrowserRouter>
              </CartProvider>
            </WishlistProvider>
          </UserContext.Provider>
        </AccountDataContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
