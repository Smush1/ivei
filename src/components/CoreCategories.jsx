
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

    </div>
    </>
  )
}

export default CoreCategories