
import { coreCategories} from '../data/coreCategoriesData'



function CoreCategories() {
  return (
    <>
{/*       <!-- Categories Section --> */}
    <div className ="container category my-4 py-5" id="core-categories">
        <h2 className ="fw-bold">Our Core Categories</h2>
        <p className ="pb-3">We bring you a thoughtfully curated range of handmade products across diverse categories</p>

        <div className ="g-4 row">

            {
                coreCategories.map((singleCategory)=>(

            <div className ="col-6 col-lg-3 col-md-6 pb-3" key={singleCategory.id}>
                <a href={singleCategory.viewMoreLink} target="_blank" rel="noopener noreferrer">
                <div className ="d-flex category-card" /* data-bs-toggle="modal" data-bs-target={singleCategory.dataTarget} */>
                    <div className ="category-text">
                        <h5>{singleCategory.categoryTitle}</h5>
                    </div>
                    <div className ="category-img">
                        <img src={singleCategory.categoryImage} alt={singleCategory.altText} loading='lazy' style={{ aspectRatio: "1/1" }}/>
                    </div>
                </div>
                </a>
            </div>
                ))
            }

        </div>





{/* Start of the modal  */}


{/* {
    categoryRelatedData.map((singleCategoryData,index)=>(
        <div className ="modal fade" id={singleCategoryData.modalId} tabIndex="-1" aria-hidden="true" key={index}>
            <div className ="modal-dialog modal-lg">
                <div className ="modal-content">
                    <div className ="modal-body"> */}
                       {/*  <!-- Close Button --> */}
                       {/*  <button type="button" className ="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div className ="col-md-6 left-section"> */}
                        {/*     <!-- Bootstrap Carousel --> */}
                           {/*  <div id="{singleCategoryData.name}" className ="carousel slide" data-bs-ride="carousel"> */}
                          {/*       <!-- Indicators --> */}
                               {/*  <div className ="carousel-indicators">
                                    <button type="button" data-bs-target="#{singleCategoryData.name}" data-bs-slide-to="0"
                                        className ="active"></button>
                                    <button type="button" data-bs-target="#{singleCategoryData.name}" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#{singleCategoryData.name}" data-bs-slide-to="2"></button>
                                </div>

                                <div className ="carousel-inner categories">
                                    <div className ="active carousel-item" style={{ height: (index >= 0) ? "42vh": "" }}>
                                        <img src={singleCategoryData.image1} alt={singleCategoryData['image1_altText']} />
                                    </div>

                                    { singleCategoryData.image2 && (<div className ="carousel-item" style={{ height: (index >= 0) ? "42vh": "" }}>
                                        <img src={singleCategoryData.image2} alt={singleCategoryData['image2_altText']} />
                                    </div>)}  */}
                                    

                                  {/*   { singleCategoryData.image3 && (<div className ="carousel-item" style={{ height: (index > 0) ? "47vh": "" }}>
                                        <img src={singleCategoryData.image3} alt={singleCategoryData['image3_altText']} />
                                    </div>)}  */}
                                    
                              {/*   </div>
                            </div>
                        </div>

                        <div className ="col-md-6 right-section">
                            <h4><b>{singleCategoryData.name}</b></h4>
                            <p>{ singleCategoryData.description}</p>
                            <div className ="category-list"> */}
                      {/*           
                                { singleCategoryData.link1 && (<div>
                                    <a
                                        href={singleCategoryData.link1} target="_blank" rel="noopener noreferrer"><img
                                            src={singleCategoryData["link1_Image"]} alt={singleCategoryData["link1_title"]} /></a>
                                    <p>{singleCategoryData["link1_title"]}</p>
                                </div>)}
                                
                                {singleCategoryData.link2 && (<div>
                                    <a
                                        href={singleCategoryData.link2} target="_blank" rel="noopener noreferrer"><img
                                            src={singleCategoryData["link2_Image"]} alt={singleCategoryData["link2_title"]}  /></a>
                                    <p>{singleCategoryData["link2_title"]}</p>
                                </div>)}
                                {singleCategoryData.link3 && (<div>
                                    <a
                                        href={singleCategoryData.link3} target="_blank" rel="noopener noreferrer"><img
                                            src={singleCategoryData["link3_Image"]} alt={singleCategoryData["link3_title"]}  /></a>
                                    <p>{singleCategoryData["link3_title"]}</p>
                                </div>)} */}
                           {/*  </div>
                            <a       className='view-more-btn-a'
                                    href=  {singleCategoryData.viewMoreLink}
                                    target="_blank" rel="noopener noreferrer"><button className ="view-more-btn">VIEW MORE</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
} */}

{/* End of the modal  */}
       




    </div>
    </>
  )
}

export default CoreCategories