import React from "react";
import './jaguar.css';
import log from'./SURYA-HTML/neww logo.png';
import rt from'./SURYA-HTML/bac.png';
import mo from'./SURYA-HTML/service.jpg'; 
import as from'./SURYA-HTML/fuel.png';
import alt from'./SURYA-HTML/km.png';
import al from'./SURYA-HTML/year.png';
import ti from'./SURYA-HTML/tick.jpeg';
import df from'./SURYA-HTML/logog.png';
import { Link } from "react-router-dom";
import {Jaguslider} from "./jaguslider";
import ImageSliderj from "./jaguimage";

export default function Jagu(){
    return(
  <div>
    <div className='wbox'></div>
    <div class="index"></div>
    <div className="mag">
        <img src={df} alt="fuel"></img>
        </div>
    <div class="home">
<a href="#" style={{top:"40px",left:"570px"}}>HOME</a>
<a href ="#" style={{top:"40px" ,left:"675px"}} >INVENTORY</a>
<a href="#" style={{top:"40px",left:"835px"}} >GALLERY</a>
<a href="#" style={{top:"40px" ,left:"970px"}} >ABOUTUS</a>
<a href="#" style={{top:"40px",left:"1100px"}}>LOGIN</a>
 </div>
      <div className="kk">
       <img src={rt} alt="background"></img></div> 
      <div className="txt">
        CAR DETAILS
      </div>
      <ImageSliderj slides={Jaguslider}/>
        <div className="na">JAGUAR XJ L 3.0 PORTFOLIO</div>
        <div className="lk">
          _____________________________
          <br></br>
          _____________________________
          </div>
        <div className="pa">
        </div>
        <div class="con">
      ______________________________________
        <br></br>
        <h3>
 Brand:
<br></br>
<br></br>
Model:
<br></br>
<br></br>
Variant:
<br></br>
<br></br>
Drive Train:
<br></br>
<br></br>
Body Style:
<br></br>
<br></br>
Exterior Color:
<br></br>
<br></br>
InteriorColor:
<br></br>
<br></br>
Condition:
<br></br>
<br></br>
Transimission:
<br></br>
<br></br>
Engine:
<br></br>
<br></br>
No.ofgears:
<br></br>
<br></br>
Location:
<br></br>
<br></br>
Fuel Type:
<br></br>
<br></br>
Owners:
        </h3>
 </div>
 <div className="ans">
  <p>
    JAGUAR
    <br></br>
    <br></br>
    XJ L
    <br></br>
    <br></br>
    3.0 PORTFOLIO
    <br></br>
    <br></br>
    AWD
    <br></br>
    <br></br>
    SEDAN
    <br></br>
    <br></br>
    CAVIARA BROWN
    <br></br>
    <br></br>
    BEIGE
    <br></br>
    <br></br>
    PRISTINE
    <br></br>
    <br></br>
    AUTOMATIC
    <br></br>
    <br></br>
    2993CC
    <br></br>
    <br></br>
    8
    <br></br>
    <br></br>
    COIMBATORE
    <br></br>
    <br></br>
    DIESEL
    <br></br>
    <br></br>
    1
  </p>
  </div>
        <div className="rs">
        </div>
        <div className="kj">
         CBU Variant
        </div>
        <div className="des">
          <h3>Description</h3>
          <br></br>                        
          • JAGUAR
          <br></br>
          <br></br>
          • Follow Me Lamps
          <br></br>
          <br></br>
          • Meridian Surround
          <br></br>
          <br></br>
          • Warranty upto 2023
          <br></br>
          <br></br>
          • Dual Sunroof
         <br></br>
         <br></br>
          • Petrol
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          • ₹57,00,000/-
        </div>
        <div className="note">
          <br></br>
          <br></br>
          <p>Note: Octane 96 does not charge any commission on the cars we sell. </p>
          <br></br>
          Step into Octane96 or Call us at 📞9942137316, we will indulge you into world class ambience and an Elite lineup of cars. Our team will ensure you make the perfect choice in choosing your ride and deliver your dream car in fine magnificence.
          <br></br>
          <br></br>
          <br></br>
          Octane96 Pre-Owned Luxury car,          
          <br></br>
          <br></br>
          opp to BrookFields R.S Puram South Coimbatore-641002
          <br></br>          
          <br></br>          
          <br></br>          
          <br></br>          
          <br></br>          
          <br></br>
          www.octane96.com  
          <br></br>        
          <br></br>        
          <br></br>
          74181 66666  |  74182 66666  | 74183 66666  | 74187 66666        
        </div>
        <div className="det">
          <h2>DETAILS</h2>
        </div>
        <div className="lo">
          <img src={log} alt="logo"></img>
        </div>
        <div className="inform">
        </div>
        <div className="what">
        </div>
        <div className="below">
          14000 Kms
        </div>
        <div className="yea">
          2021
        </div>
        <div className="fue">
          Petrol
        </div>
        <div className="ca">
          <a href="tel: +91 9942137316">
        <button>CALL</button>
        </a>
        </div>
        <div className="wa">
          <a href="https://wa.me/9942137316">
          <button>WHATS APP</button>
          </a>
        </div>
        <div className="cro">
        <img src={mo} alt="logo"></img>
        </div>
        <div className="bn">
        </div>
        <div className="typ">
          Get To Test Your Dream Car From Octane96 
        </div>
        <div className="im1">
        <img src={as} alt="fuel"></img>
        </div>
        <div className="img2">
        <img src={alt} alt="fuel"></img>
        </div>
        <div className="img3">
        <img src={al} alt="fuel"></img>
        </div>
        <div className="tick">
          <img src={ti} alt="tick"></img>
        </div>
        <div className="now">
        <a href="tel: +91 9942137316">
        <button>CALL NOW!!</button>
        </a>
        </div>
        <div className="uk">
        <marquee>Welcome to Octane 96!!</marquee>
        </div>
        <div className="mag">
        <img src={df} alt="fuel"></img>
        </div>
        <div class="conth"></div>
    <div class="coh"></div>
    <div class="cnh">contact us</div>
    <div className='cn1h'>Visit octane96 and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the delivery of your car a memorable one.</div>
    <div className='cn2h'>
      <img src={require("./octane96/phone3.png")} alt="pn"></img>
    </div>
    <div className='cn3h'>
     Phone no
     +919942137316
    </div>
    <div className='cn4h'>
      <img src={require("./octane96/mail.jpg")} alt="mail"></img>
    </div>
    <div className='cn5h'>
      Mail Address
      octane96@gmail.com
    </div>
    <div className='cn6h'>
      Our info
    </div>
    <div className='cn7h'>
    <a href="/Home">HOME</a>
    <a href="/oct"style={{top: "2220px"}}>INVENTORY</a>
    <a href="/gallery" style={{top: "2250px"}}>GALLERY</a>
    <a herf="/aboutus" style={{top: "2280px",width:"90px"}}>ABOUT US</a>
    </div>
    <div className='ch'>Follow us</div>
    <div className='cn8h'>
      <img src={require("./octane96/fb.png")} alt="fb"></img>
      <img src={require("./octane96/Instagram.png")} alt="insta" style={{left: "1040px"}}></img>
      <img src={require("./octane96/youtubepng.png")} alt="youtube" style={{left:"1080px"}}></img>
    </div>
    <div className="add">
      Address:
      <br></br>
      opp to BrookFields R.S Puram South Coimbatore-641002
    </div>
    </div>
  )
}
