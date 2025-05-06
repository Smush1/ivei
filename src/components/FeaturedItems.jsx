import { useState } from 'react';
import { FeaturedItemsImage, FeaturedItemsTab } from '../data/featuredItem';



function FeaturedItems() {

    const [viewTab, setViewTab] = useState(true);
    



// display and hide the featured items
    function toggleViewTab(){

        // featured items container
        const toggleSectionProducts = document.querySelector('.fi-toggle-section');

        const viewTabBtn = document.querySelector('.view-all-btn');



        setViewTab(!viewTab)
      console.log(viewTab)

       // console.log(toggleSectionProducts)
        
  
        if(viewTab){
            toggleSectionProducts.classList.add('d-flex');
            toggleSectionProducts.classList.remove('unvisible')
            viewTabBtn.textContent = "Hide"
        }
        else{
            toggleSectionProducts.classList.remove('d-flex');
            toggleSectionProducts.classList.add('unvisible')
            viewTabBtn.textContent = "View More";
        }
    }

  return (
    <>
    <div className='container mb-4' id="featured-products">
        <h2 className='featured-items-heading fw-bold'>Featured Products</h2>
        <p >We bring you a thoughtfully curated range of handmade products across diverse categories</p>
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

            <div className='view-all-btn-container justify-content-center d-flex'>
               <button type="button" onClick={toggleViewTab} className="btn btn-primary w-25 view-all-btn py-3" aria-label='show or hide'>View More</button>
             </div>
        </div>

       {/*  <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        { /*
        AllFeaturedItems.map((featureditem, index)=>(

        <div className="modal fade" id={featureditem.modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false" key={index}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='d-flex align-content-center pop-up-flex-container'>
                    <img src={featureditem.imageLink} className='w-50 fi-pop-up-img' alt={FeaturedItemsImage.altText}/>
                    <div className='pop-up-content'>
                        <h5>{featureditem.altText}</h5>
                        <p className='pop-up-price'>₹{ featureditem.price }</p>
                        <p className='pop-up-para'> { featureditem.desc }</p>
                        <a target="_blank" rel="noreferrer" href={featureditem.productLink} className='btn btn-outline-danger w-100 buy-btn submit py-3'> BUY NOW </a>
                    <table className=' mt-4'>
                      <tbody>
                        <tr>
                            <td className='w-50'>SKU</td>
                            <td className='w-50'>{featureditem.sku}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{featureditem.type}</td>
                        </tr> 
                        <tr>
                            <td>Vendor</td>
                            <td>Stonkraft</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        ))
*/}

                    
    </>
  )
}

export default FeaturedItems