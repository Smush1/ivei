function HeroBanner({desktopBanner, mobileBanner}) {
    return (
      <>
  
          {/* <!-- carousel section --> */}
          <div id='main-banner-section' className="container-fluid px-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/*         <!-- Indicators --> */}
         {/*      <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                      aria-label="Slide 4"></button>
              </div> */}
  
  {/*             <!-- Carousel Items --> */}
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="mobile-banner-wrapper">
                      <img loading="eager" fetchPriority="high" src={mobileBanner} className="w-100 carousel-image mobile-banner" style={{ height: "auto", width: "100%", aspectRatio: "auto"  }} alt="Desktop Banner" srcSet={         
                      mobileBanner +  " 210w, " 
                      + mobileBanner +  " 420w, " 
                      + mobileBanner +  " 440w, "
                      + mobileBanner +  " 575w, " 
                      + mobileBanner +  " 630w, "
                      + mobileBanner +  " 830w " } />
                      <div className="overlay"></div>
                          <img loading="eager" fetchPriority="high" src={desktopBanner} className="carousel-image desktop-banner" style={{ height: "auto", width: "100%", aspectRatio: "auto" }} alt="Mobile Banner" srcSet={ 
                              desktopBanner +  " 900w," + 
                              desktopBanner +  " 1000w," + 
                              desktopBanner +  " 1100w," + 
                              desktopBanner +  " 1200w," + 
                              desktopBanner +  " 1300w," + 
                              desktopBanner +  " 1400w," +              
                              desktopBanner +  " 1440w " } />              
                          <div className="carousel-caption">
                              <h1 className="pb-2">Available Worldwide on <br/> IndusMela & Amazon</h1>
                              <p className="pb-2">Explore handcrafted products by IVEI – I Value Every Idea—where function meets creativity. From workspace organizers to thoughtful home décor, each piece is designed with care and made in collaboration with rural artisans. Available globally on <a href="https://www.indusmela.com" target="_blank" rel="noreferrer"  className="hero-banner-link">Indusmela.com </a>, <a href="https://www.indusmela.in" target="_blank" rel="noreferrer"  className="hero-banner-link">Indusmela.in</a>, and <a href="https://www.amazon.com/stores/IVEI-IValueEveryIdea/page/D5E12179-A710-4895-9AF1-5B5D70A57E54?lp_asin=B085MVJZDC&ref_=ast_bln" target="_blank" rel="noreferrer"  className="hero-banner-link">Amazon</a>, IVEI brings the charm of Indian craftsmanship to everyday life with trusted quality and fair pricing.</p>
                              <a href="#featured-products" className="btn btn-custom" aria-label='View Products' >VIEW PRODUCTS</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default HeroBanner