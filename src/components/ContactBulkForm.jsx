

function ContactBulkForm() {
  return (
  <div className="bulk-contact-form--main-container container-fluid" id="bulk-buy">
    <div className="bulk-contact-inner-container ">
      <div className="bulk-form-overlay">
      <div className="row">
        <div className="col-lg-5 text-btn-container col-md-12">
          <h3 className="bulk-left-heading">Enjoy assured discounts on products when you buy in bulk from<p className="bulk-left-custom-heading">StonKraft</p></h3>
          {/* <p className="bulk-left-para">Stock up on Stonekraft’s quality products and enjoy guaranteed discounts on large quantity purchases.</p> */}
          {/* <a className="btn btn-primary bulk-buy-btn px-4 py-3 mt-2" href="#" rel="noreferrer" role="button">Contact for bulk buying</a> */}
        </div>
        <div className="col-lg-5 bulk-contact-form-container mx-auto col-md-12">
          <h4 className="bulk-contact-form-heading">Please share your details and we will be in touch with you</h4>
          <form action="" method="post">
            <label htmlFor="name" className="w-100">Name*</label>
            <input name="name" id="name" className="w-100" type="text" required placeholder="John Doe" />

            <label htmlFor="company-email" className="w-100">Email*</label>
            <input name="company-email" className="w-100" id="company-email"  required placeholder="company@xyz.com"/>

            <label htmlFor="phone" className="w-100">Phone*</label>
            <input name="phone" id="phone" className="w-100" type="phone" pattern='[1-9]{1}[0-9]{9}' placeholder='9999999999' required/>

            <label htmlFor="company-name" className="w-100" >Company Name</label>
            <input name="company-name" id="company-name" className="w-100" type="text" placeholder="XYZ" />

            <label htmlFor="message" className="w-100" >Tell us what you're looking for</label>
            <textarea name="message" id="message" className="w-100" placeholder="Your message"></textarea>

            <input type="hidden" name="_cc" value="sumesh.kumar@mediax.com"></input>

            <input className="btn btn-primary submit-btn px-5 w-100 text-uppercase" type="SUBMIT"  />
          </form>
        </div>
      </div>
      </div>        
    </div>
  </div>
  )
}

export default ContactBulkForm