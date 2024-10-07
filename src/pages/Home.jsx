import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import "./styles/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
      <HeroSection />
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
