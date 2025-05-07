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
                              <h1 className="pb-2">Proudly Retailing on <br/> IndusMela & Amazon</h1>
                              <p className="pb-2">Explore our handcrafted collection, trusted by customers across the globe. Every product is
                                  handmade, designed by us, and crafted under our supervision. We proudly retail globally
                                  on <a href="https://www.indusmela.com" target="_blank" rel="noreferrer"  className="hero-banner-link">Indusmela.com</a>, <a href="https://www.indusmela.in" target="_blank" rel="noreferrer"  className="hero-banner-link">Indusmela.in</a> and <a href="https://www.amazon.in/stores/StonKraft/page/B4E8B06D-B977-4B7A-BCC6-EC923DB769E1" target="_blank" rel="noreferrer"  className="hero-banner-link">Amazon</a> ensuring premium quality, fair pricing, and reliable delivery. Our mission is to bring the warmth of Indian artistry into homes worldwide.</p>
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