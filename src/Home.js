import React from 'react';
import "./Home.css";
import banner from "./images/banner.jpg"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home-container">
          <img className='hero-img' src={banner} alt="banner" />

          <div className="home-row">
            <Product id='34562' title="Do it Today: practices to avoid procastination" price={29.99} image="https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg" rating={3}/>

            <Product id='65843' title="Attitude Is Everything: Change Your Attitude ... Change Your Life!" price={29.99} image="https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg" rating={3}/>

            <Product id='54245' title="Think Straight: Change Your Thoughts, Change Your Life" price={30} image="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY218_.jpg" rating={4}/>
          </div>

          <div className="home-row">
            <Product id='87653' title="ASUS ROG Zephyrus G15 (2022), 15.6(39.62 cm) WQHD 165Hz/3ms, AMD Ryzen 7 6800HS, 6GB RTX 3060 Graphics" price={1500} image="https://m.media-amazon.com/images/I/819sH4bXkGL._AC_UY218_.jpg" rating={3}/>

            <Product id='35373' title="ASUS TUF Dash 15 FX516PM-AZ154TS Intel I7-11370H/RTX3060-6GB/8GB+8GB/1T SSD" price={1200} image="https://m.media-amazon.com/images/I/61PDdOk-rhS._SX679_.jpg" rating={4}/>
          </div>

          <div className="home-row">
            <Product id='64324' title="Apple iPhone 14 Pro Max 128GB Deep Purple" price={1200} image="https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg" rating={5}/>

            <Product id='53455' title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB)" price={800} image="https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX750_.jpg" rating={3}/>

            <Product id='76545' title="Apple Watch SE (2nd Gen) GPS 44mm silver" price={2000} image="https://m.media-amazon.com/images/I/71RAk7Bn2ZL._AC_SX352_SY330_.jpg" rating={4}/>
          </div>

          <div className="home-row">
            <Product id='65345' title="Samsung 123.9cm Gaming Monitor with 240Hz Refresh Rate" price={2000} image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg" rating={4}/>
          </div>

          <div className="home-row">
            <Product id='86744' title="Nothing Phone (1) 5G (Black, 256 GB) (8 GB RAM)" price={2000} image="https://m.media-amazon.com/images/I/71WjJ2w8ikL._AC_UY218_.jpg" rating={4}/>

            <Product id='45324' title="Google pixel 6 pro 5G(Matte Black, 256 GB)" price={2000} image="https://m.media-amazon.com/images/I/61OJJSFEkBL._AC_UY218_.jpg" rating={4}/>

            <Product id='24645' title="OPPO Reno8 Pro 5G (Glazed Green, 256 GB)  (12 GB RAM)" price={2000} image="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/u/r/k/-original-imagge6uzzhkz4bh.jpeg?q=70" rating={4}/>
          </div>

          <div className="home-row">
            <Product id='75334' title="IQOO Neo 6 pro 5G (Gradient White) 128 GB" price={2000} image="https://m.media-amazon.com/images/I/71HSkLoLDLL._AC_UY218_.jpg" rating={4}/>

            <Product id='24634' title="Redmi K50i 5G (Quick Silver, 6GB RAM, 128GB Storage)" price={2000} image="https://m.media-amazon.com/images/I/71iaqy+yM2L._SX679_.jpg" rating={4}/>

            <Product id='62541' title="SAMSUNG Galaxy Z Flip3 5G (Cream, 128 GB)  (8 GB RAM)" price={2000} image="https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=70" rating={4}/>
          </div>
       </div>
    </div>
  )
}

export default Home