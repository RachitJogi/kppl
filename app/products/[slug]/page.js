"use client";
import Layout from "@/components/layout/Layout";
import { getProductPage } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const productPage = await getProductPage();

function Home() {
  const {
    productName,
    productDetails,
    chemicalName,
    casNumber,
    gradeName1,
    gradeName2,
    gradeName3,
    gradeName4,
    gradeUse1,
    gradeUse2,
    gradeUse3,
    gradeUse4,
    applications,
    productImages,
    packagingOptions,
    productBannerImage,
    orderNow,
  } = productPage[0].fields;

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={productName}>
        {/*Start Project Details Section */}
        <section className='project-details-image-box'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='project-details-img'>
                  <img
                    src={productBannerImage.fields.file.url}
                    alt={productBannerImage.fields.file.fileName}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Project Details Section */}

        {/*Start Project Details content Section */}
        <section className='project-details-content-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-8'>
                <div className='project-details-left-content'>
                  <div className='title'>
                    <h2>Product Details</h2>
                  </div>
                  <div className='text rich-text'>
                    {documentToReactComponents(productDetails)}
                  </div>
                </div>
                <div className='project-details-left-content'>
                  <div className='title'>
                    <h2>Product Overview</h2>
                  </div>
                  <div className='text'>
                    <p>
                      <strong>Chemical Name: </strong>
                      {chemicalName}
                    </p>
                    <p>
                      <strong>CAS Number: </strong>
                      {casNumber}
                    </p>
                    <p>
                      <strong>Appearance: </strong>
                      {casNumber}
                    </p>
                  </div>
                </div>
                <div className='project-details-left-content'>
                  <div className='title'>
                    <h2>Product Applications</h2>
                  </div>
                  <div className='text rich-text'>
                    {documentToReactComponents(applications)}
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='project-details-right'>
                  <ul>
                    <li>
                      <h4>{gradeName1}</h4>
                      <p>{gradeUse1}</p>
                    </li>
                    <li>
                      <h4>{gradeName2}</h4>
                      <p>{gradeUse2}</p>
                    </li>
                    <li>
                      <h4>{gradeName3}</h4>
                      <p>{gradeUse3}</p>
                    </li>
                    <li>
                      <h4>{gradeName4}</h4>
                      <p>{gradeUse4}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Project Details content Section */}

        <section className='project-details-benifits-section'>
          <div className='container'>
            <div className='row'>
              {productImages.map((item) => (
                <div className='col-xl-4' key={item.sys.id}>
                  <div className='project-details-benifits-single'>
                    <div className='project-details-benifits-image'>
                      <img
                        src={item.fields.file.url}
                        alt={item.fields.file.fileName}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className='col-xl-4'>
                <div className='project-details-benifits'>
                  <h3>Packaging Options</h3>
                  <div className='text'>
                    <p>
                      Boric Acid is available in the following packaging
                      options:
                    </p>
                  </div>
                  <ul>
                    {packagingOptions.map((item, index) => (
                      <li key={index}>
                        <i className='fa fa-angle-right'></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Start Project Details content Section */}
        <section className='project-details-content-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-8'>
                <div className='project-details-left-content'>
                  <div className='title'>
                    <h2>Order Now</h2>
                  </div>
                  <div className='text rich-text'>
                    {documentToReactComponents(orderNow)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Project Details content Section */}
      </Layout>
    </>
  );
}

export default Home;
