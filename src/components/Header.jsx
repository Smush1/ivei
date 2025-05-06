import logo from '../images/ivei-logo.png'

function Header() {
  

  const handleHeaderBG = (e) => {
    const toggler = document.querySelector('.navbar-toggler')
        toggler.classList.toggle('orange-bg')
  }

  return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
           {/*  <!-- Left-aligned Navigation --> */}
            <div className="d-flex">
                <button className="navbar-toggler me-3" onClick={handleHeaderBG} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      {/*   <li className="nav-item"><a className="nav-link" href="index.html" rel="noreferrer">Home</a></li> */}
                        <li className="nav-item"><a className="nav-link" href="#core-categories" rel="noreferrer">Collections</a></li>
                        <li className="nav-item"><a className="nav-link" href="#featured-products" rel="noreferrer">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact-us" rel="noreferrer">Contact</a></li>
                    </ul>
                </div>
            </div>

          {/*   <!-- Centered Logo --> */}
            <a className="navbar-brand mx-auto" href="index.html" rel="noreferrer" aria-label='Logo'>
                <img src={logo} alt="StonKraft" className="logo-img" fetchPriority='high' /> 
             </a>

        {/*     <!-- Right-aligned Button --> */}
            <a href="#bulk-buy" rel="noreferrer" className="d-lg-block d-none corporate-btn" aria-label='Bulk Buy Form'>CONTACT FOR BULK BUYING</a>
        </div>
        </nav>
      </header>
  )
}



export default Header