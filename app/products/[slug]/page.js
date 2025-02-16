"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { getProductPage } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";

const Home = () => {
  const [productPage, setProductPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductPage = async () => {
      try {
        const data = await getProductPage();
        setProductPage(data[0].fields);
      } catch (error) {
        console.error("Error fetching product page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductPage();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  if (!productPage) {
    return <p>Error loading product details. Please try again later.</p>;
  }

  const {
    productName,
    productDetails,
    chemicalName,
    casNumber,
    appearance, // Added the missing field
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
  } = productPage;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={productName}>
      {/* Product Banner */}
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

      {/* Product Details */}
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
                    <strong>Chemical Name: </strong> {chemicalName}
                  </p>
                  <p>
                    <strong>CAS Number: </strong> {casNumber}
                  </p>
                  <p>
                    <strong>Appearance: </strong> {appearance}
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

      {/* Product Images & Packaging Options */}
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
                  <p>Available packaging options:</p>
                </div>
                <ul>
                  {packagingOptions.map((item, index) => (
                    <li key={index}>
                      <i className='fa fa-angle-right'></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Now */}
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
    </Layout>
  );
};

export default Home;
