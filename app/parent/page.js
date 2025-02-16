"use client";

import Layout from "@/components/layout/Layout";
import { parentCompaniesItems } from "@/lib/contentful/client";

const parentItems = await parentCompaniesItems();
const Parent = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Parent Company'>
        {/*Start Main Service Two Section */}
        <section className='main-service-one-section two'>
          <div className='container'>
            <div className='row'>
              {parentItems.map((item) => (
                <div key={item.sys.id} className='col-xl-4 col-lg-4'>
                  {/*Main Service One Sec Single*/}
                  <div
                    className='main-service-one-sec-single wow fadeInUp'
                    data-wow-delay='100ms'
                  >
                    <div className='main-service-one-sec-img'>
                      <img
                        src={item.fields.parentCompanyLogo.fields.file.url}
                        alt=''
                      />
                    </div>
                    <div className='main-service-one-sec-content'>
                      <h3>{item.fields.parentCompanyName}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*End Main Service Two Section */}
      </Layout>
    </>
  );
};

export default Parent;
