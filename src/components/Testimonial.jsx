import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from '../data/testimonials'


function Testimonial() {

// State to track which testimonial's "Read more" is expanded
const [expanded, setExpanded] = useState({});

const handleTestContent = (index) => {
  // Toggle the expanded state for the specific testimonial
  setExpanded((prev) => ({
    ...prev,

    [index]: !prev[index], // Toggle true/false for this index

    
  })
);

  
};





    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      }
    
   
  return (
    <div className="testimonial">
      <h3 className="testimonial-heading text-center fw-bold">Hear from our happy customers</h3>
      <p className="testimonial-para text-center mx-auto">Look at what they have to say about their purchase & product</p>
      <div className='container'>
      <Slider {...settings}>

        {/* Start of Testimonial */}

        {
          Testimonials.map((singleTestimonial, index)=>(

        <div className='single-testimonial-outer-container d-flex justify-content-center text-center' key={index}>
          <div className="single-testimonial d-flex align-items-center flex-column">
            <div className="left-img">
            <a href={singleTestimonial.testimonialLink} target='_blank' rel="noreferrer" >
              <img src={singleTestimonial.image} alt="" className='w-100 review-img'/>
            </a>
              <a href={singleTestimonial.testimonialLink} target='_blank' rel="noreferrer" ><button className='btn btn-outline-danger w-100 buy-btn py-1 mt-3'> See the Review </button></a>
            </div>
            <div className="right-test w-100 mt-2">
                <img src={ singleTestimonial.rating } loading='lazy' alt="" className='d-block mx-auto mb-1 rating-img' />
                <p className='test-para'>{singleTestimonial.testimonial}<span className={`test-more ${expanded[index] ? 'visible' : ''}`}>{singleTestimonial.testimonialMore}</span><span className='test-dots' onClick={() => handleTestContent(index)}>{expanded[index] ? 'Read less' : '...Read more'}</span></p>
            </div>

          </div> 
        </div>
          ))
        }


        {/* End of Testimonial */}
      </Slider>
      </div>



    </div>
  )
}

export default Testimonial