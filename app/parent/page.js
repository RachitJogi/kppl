"use client";

import Layout from "@/components/layout/Layout";
import { parentCompaniesItems } from "@/lib/contentful/client";
import { useState, useEffect } from "react";

const Parent = () => {
  const [parentItems, setParentItems] = useState([]);

  useEffect(() => {
    const fetchParentCompanies = async () => {
      try {
        const data = await parentCompaniesItems();
        setParentItems(data);
      } catch (error) {
        console.error("Error fetching parent company data:", error);
      }
    };

    fetchParentCompanies();
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Parent Company'>
      {/*Start Main Service Two Section */}
      <section className='main-service-one-section two'>
        <div className='container'>
          <div className='row'>
            {parentItems.length > 0 ? (
              parentItems.map((item) => (
                <div key={item.sys.id} className='col-xl-4 col-lg-4'>
                  {/*Main Service One Sec Single*/}
                  <div
                    className='main-service-one-sec-single wow fadeInUp'
                    data-wow-delay='100ms'
                  >
                    <div className='main-service-one-sec-img'>
                      <img
                        src={item.fields.parentCompanyLogo.fields.file.url}
                        alt={item.fields.parentCompanyName}
                      />
                    </div>
                    <div className='main-service-one-sec-content'>
                      <h3>{item.fields.parentCompanyName}</h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading parent companies...</p>
            )}
          </div>
        </div>
      </section>
      {/*End Main Service Two Section */}
    </Layout>
  );
};

export default Parent;
