import amazon from '../images/Amazon.webp'
import indusmela from '../images/Indusmela.webp'


function EcommercePlatform() {
  return (
    <>
  
    {/* <!-- E-commerce Shopping Platform --> */}
    <div className="container store-container">
        <div className="g-3 row">
            {/* <!-- Amazon Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://www.amazon.in/stores/IVEI-IValueEveryIdea/page/E038CA22-D0EA-4BC6-B5A4-DE7B56A383DB?lp_asin=B07YZ8XY2H&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto" target="_blank" rel="noreferrer" className="text-decoration-underline">
                    <div className="amazon-box store-box">
                        <span>Also available on</span>
                        <img src={amazon} alt="Amazon" />
                    </div>
                </a>
            </div>

            {/* <!-- Indusmela Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://indusmela.in/collections/ivei" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div className="indusmela-box store-box">
                        <span>Shop from our <br/> one-stop store!</span>
                        <img src={indusmela} alt="IndusMela" />
                    </div>
                </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default EcommercePlatform






