function ScrollToTop() {

  
    
  window.addEventListener('scroll', ()=>{
    const scrollBtn = document.querySelector('.scroll-top-container');

    const scrollVertical = window.scrollY
  /*   console.log(scrollVertical) */
    if (scrollVertical > 500){
      scrollBtn.classList.remove('d-none')
    }
    else{
      scrollBtn.classList.add('d-none')
    }
  })
  
 

return (
  

  <div className="scroll-top-container d-none">
      <a href="#main-banner-section">
          <div className="scroll-top" >↑</div>
      </a>    
  </div>
)
}

export default ScrollToTop