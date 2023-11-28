import React from 'react';
import './App.css';

function App() {
  return (
  
    <div>
  <section id="nav-bar">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="../NewAssests/logo2.jpg"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            <ul className="navbar-nav">
            <li><a className="nav-link" href="#top">HOME</a></li>
            <li><a className="nav-link" href="#services">SERVICES</a></li>
            <li><a className="nav-link" href="#about-us">ABOUT US</a></li>
            <li><a className="nav-link" href="#testimonials">TESTIMONIALS</a></li>
            <li><a className="nav-link" href="#footer" >CONTACT</a></li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>



<section id="banner">
  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <p className="promo-title">MEDIA TECH</p>
      <p>Media Tech company is an organization that specializes in the development and deployment of technology solutions within the media and entertainment industry.</p>
      <a href="#"><img src="../NewAssests/play.png" className="play-btn"/>Watch Tutorials</a>
    </div>
    <div className="col-md-6 text-center">
      <img src="../NewAssests/home2.png" className="img-fluid"/>
    </div>

  </div>
</div>
<img src='../NewAssests/wave1.png' className="bottom-img"/>

</section>  


<section id="services">
  <div className="container text-center">
    <h1 className="title"> WHAT WE DO ?</h1>
    <div className="row text-center">
      <div className="col-md-4 services">
      <img src="../NewAssests/service1.png" className="service-img"/>
      <h4>Growth Marketing</h4>
      <p>Growth marketing involves understanding our audience, setting clear goals, and analyzing data to refine strategies. Experiment with different approaches, 
        collaborate across teams, and optimize the entire customer journey. Utilize content, referral programs. </p>
      </div>

      <div className="col-md-4 services">
        <img src="../NewAssests/service2.png" className="service-img"/>
        <h4>Online Branding</h4>
        <p>To build a strong online brand, define our brand identity, create a consistent visual look, and develop a user-friendly website. Share valuable content on social media, 
          be consistent in our messaging, and engage with our audience regularly.</p>
        </div>

        <div className="col-md-4 services">
          <img src="../NewAssests/service3.png" className="service-img"/>
          <h4>Animated Ads</h4>
          <p>To make animated ads, a company first sets clear goals. They we understand our audience and plan the ad's sequence through storyboarding. 
            After creating a concise script, We design visuals and use animation software to bring the ad to life.</p>
          </div>
    </div>
    <button type="button" className="btn btn-primary"> All Services</button>
  </div>
</section>


<section id="about-us">
  <div className="container">
    <h1 className="title text-center"> WHY CHOOSE US ?</h1>
    <div className="row">
      <div className="col-md-6 about-us">
        <p className="about-title"> Why we're different</p>
        <ul>
          <li>Showcase unique and innovative products or services </li>
          <li>Showcase specific examples of successful projects, client testimonials </li>
          <li>Showcase your company's ability to adapt quickly to market changes </li>
          <li>Highlight a commitment to outstanding customer service </li>
          <li>Emphasize a collaborative and partnership-focused working style </li>
          <li>If applicable, emphasize the use of advanced or cutting-edge technology </li>
          <li>Communicate a commitment to ongoing improvement </li>


        </ul>
      </div>
      <div className="col-md-6">
        <img src="../NewAssests/network.png" className="img-fluid"/>
      </div>
    </div>
  </div>
</section>


<section id="testimonials">
  <div className="container">
    <h1 className="title text-center"> WHAT CLIENTS SAY </h1>
    <div className="row offset-1">
      <div className="col-md-5 testimonials">
        <p>"I have been incredibly impressed with the exceptional service and expertise provided by Media Tech. From the initial consultation to the final deliverables, the team demonstrated a deep understanding of our needs. </p>
        <img src="../NewAssests/user1.jpg"/>
        <p className="user-details"><b>Angelina</b><br/> Co-founder at VidTube</p>

      </div>

      <div className="col-md-5 testimonials">
        <p>"Working with Media Tech has been a game-changer for our business. Their team's dedication and innovative approach have significantly contributed to the success of our recent project.</p>
        <img src="../NewAssests/user2.jpg"/>
        <p className="user-details"><b>John Doe</b><br/> Director at Finsta</p>
      </div>
    </div>
  </div>
</section>


<section id="social-media">
  <div className="container text-center" >
    <p>FIND US ON SOCIAL MEDIA</p>
    <div className="social-icons">
      <a href="https://www.facebook.com/" target="_blank"> <img src="../NewAssests/facebook-icon.png"/></a>
      <a href="https://www.instagram.com/" target="_blank"> <img src="../NewAssests/instagram-icon.png"/></a>
      <a href="https://twitter.com/" target="_blank"> <img src="../NewAssests/twitter-icon.png"/></a>
      <a href="https://web.whatsapp.com/" target="_blank"> <img src="../NewAssests/whatsapp-icon.png"/></a>
      <a href="https://in.linkedin.com/" target="_blank"> <img src="../NewAssests/linkedin-icon.png"/></a>
      <a href="https://www.snapchat.com/" target="_blank"> <img src="../NewAssests/snapchat-icon.png"/></a>
    </div>
  </div>
</section>


<section id="footer">
  <img src="../NewAssests/wave2.png" className="footer-img"/>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-box">
        <img src="../NewAssests/logo2.jpg"/>
        <p>This company leverage advanced technologies to enhance content creation, distribution, and consumption</p>

      </div>

      <div className="col-md-4 footer-box">
        <p><b>CONTACT US</b></p>
        <p> <i className="fa-solid fa-location-dot"></i> World Trade Centre, Bangalore </p>
        <p><i className="fa-solid fa-phone"></i> +1 0123456789</p>
        <p><i className="fa-solid fa-envelope"></i> mediatech01@gmail.com</p>
      </div>
      <div className="col-md-4 footer-box">
        <p><b>SUBSCRIBE NEWSLETTER</b></p>
        <input type="email" className="form-control" placeholder="Your Email"/>
        <button type="button" className="btn btn-primary">Subscribe</button>
      </div>
    </div>
    <hr/>
    <p className="copyright"> Website Crafted by Media Tech</p>

  </div>

</section>   
</div>
  )
}

export default App
