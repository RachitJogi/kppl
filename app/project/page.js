"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Projects'>
        {/*Start Portfolio One Section */}
        <section className='portfolio-one-section'>
          <div className='container'>
            <div className='portfolio-one-content'>
              <div className='sortable-masonry'>
                <div className='row items-container'>
                  {/*Single Case One*/}
                  <div className='col-xl-6 col-md-6 masonry-item all mechanical chemical material'>
                    <div className='portfolio-one-single'>
                      <div className='portfolio-one-img-box'>
                        <img
                          src='assets/images/project/project-boric-acid.jpeg'
                          alt=''
                        />
                        <div className='portfolio-two-icon-box'>
                          <Link href='/project/boric-acid'>
                            <i className='fa fa-link'></i>
                          </Link>
                        </div>
                        <div className='portfolio-text'>
                          <h4>Boric Acid</h4>
                          <p>Chemical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Single Case One*/}
                  <div className='col-xl-6 col-md-6 masonry-item all agriculture chemical material'>
                    <div className='portfolio-one-single'>
                      <div className='portfolio-one-img-box'>
                        <img
                          src='assets/images/project/project-upcoming-projects.jpeg'
                          alt=''
                        />
                        <div className='portfolio-two-icon-box'>
                          <Link href='/project/upcoming-projects'>
                            <i className='fa fa-link'></i>
                          </Link>
                        </div>
                        <div className='portfolio-text'>
                          <h4>Upcoming Projects</h4>
                          <p>Chemical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Portfolio One Section */}
      </Layout>
    </>
  );
}

export default Home;
