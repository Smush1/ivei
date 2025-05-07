import { useState } from 'react';
import { FeaturedItemsImage, FeaturedItemsTab } from '../data/featuredItem';
import $ from 'jquery';


function FeaturedItems() {

    const [viewTab, setViewTab] = useState(true);

     // featured items container
     

     const toggleView = () => {
        const section = $('.fi-toggle-section');
    
        if (viewTab) {
          // Show with flex
          section
            .css({ display: 'flex', height: 0, overflow: 'hidden' })
            .animate({ height: section.get(0).scrollHeight }, 500, () => {
              section.css({ height: '', overflow: '' });
            });
        } else {
          // Hide with animation
          section
            .css({ overflow: 'hidden' })
            .animate({ height: 0 }, 500, () => {
              section.css({ display: 'none', height: '', overflow: '' });
            });
        }
    
        setViewTab(!viewTab);
      };

    




  return (
    <>
    <div className='container mb-4' id="featured-products">
        <h2 className='featured-items-heading fw-bold'>Featured Products</h2>
        <p >Explore our range of finest handmade products across popular categories</p>
            <div className='row fi-grid--container '>
                {/* Start of rendering 8 featured product items */}
                    {
                        FeaturedItemsImage.map((featureditem, index)=>(
                        <div className='col-lg-3 col-6 fi-item-container' key={index} >
                            <figure>
                            <a target="_blank" rel="noreferrer" href={featureditem.productLink}><img src={featureditem.imageLink} loading='lazy' /* data-bs-toggle="modal"  data-bs-target={"#"+ featureditem.modalId } */  alt={featureditem.altText} className='fi-img' /></a>
                                <figcaption className='figcaption-text'>{featureditem.altText}</figcaption>
                                <p className='price'> {featureditem.salePrice && (<s className='sale-price p-1'>₹{featureditem.salePrice} </s>)} ₹{ featureditem.price } </p>
                            </figure>
                            <a target="_blank" rel="noreferrer" href={featureditem.productLink} aria-label="Buy Now" className='btn btn-outline-danger w-100 buy-btn py-3' /* data-bs-toggle="modal"  data-bs-target={"#"+featureditem.modalId } */>Buy Now</a>
                        </div>
                        ))
                    }
                {/* End of rendering 8 featured product items */}             
            </div>

            {/* Start of rendering 4 featured product items */}
    </div>
    

    <div className='container mb-4'>
    <div className="row my-4 fi-toggle-section fi-toggle-section-styling">
              {
                FeaturedItemsTab.map((featureditem, index)=>(
                <div className='col-lg-3 col-6 fi-item-container' key={index} >
                    <figure>
                         <a target="_blank" rel="noreferrer" href={featureditem.productLink}><img src={featureditem.imageLink} alt={featureditem.altText} /* data-bs-toggle="modal"  data-bs-target={"#"+ featureditem.modalId } */  className='fi-img' /> </a>
                        <figcaption className="figcaption-text">{featureditem.altText}</figcaption>
                        <p className='price'>  {featureditem.salePrice && (<s className='sale-price p-1'>₹{featureditem.salePrice} </s>)}  ₹{ featureditem.price } </p>
                    </figure>
                    <a target="_blank" rel="noreferrer" href={featureditem.productLink} className='btn btn-outline-danger w-100 buy-btn py-3' /* data-bs-toggle="modal" data-bs-target={"#"+ featureditem.modalId } */ aria-label="Buy Now" >Buy Now</a>
                </div>
                        ))
              }
            </div>


            {/* End of rendering 4 featured product items */}

            <div className='view-all-btn-container d-flex'>
               <div className='view-all-single-btn-container'>
               <button type="button" onClick={toggleView} className="btn btn-primary view-all-btn py-3" aria-label='show or hide'>{viewTab ? 'View More' : 'View Less'}</button>
               </div>
               <div className='view-all-single-btn-container'>
               <a href='https://indusmela.in/collections/stonkraft' rel="noreferrer" target='_blank' className="btn btn-primary view-all-btn py-3 " aria-label='explore'>Explore MORE</a>
               </div>
             </div>

           
        </div>


                    
    </>
  )
}

export default FeaturedItems