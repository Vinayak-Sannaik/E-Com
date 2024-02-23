// import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from "../../redux/cartSlice";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const dispatch = useDispatch(); 
  // const cartItem = useSelector((state) => state.cart)

  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart =()=>{
  //   dispatch(deleteFromCart("shirt"));
  // }
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className='bg-gray-300 px-5 py-5 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
