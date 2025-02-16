import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Products'>
        <div>
          {/*Start Team One Section */}
          <section className='team-one-section'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  {/*Team One Single*/}
                  <div
                    className='team-one-single wow fadeInLeft'
                    data-wow-delay='100ms'
                  >
                    <div className='team-one-img'>
                      <img
                        src='assets/images/portfolio/port-1-img-1.jpg'
                        alt=''
                      />
                      <div className='team-one-hover'>
                        <div className='team-one-social'>
                          <Link href='/products/boric-acid'>
                            <i className='fa fa-link'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='team-one-content'>
                      <h3>BORIC ACID</h3>
                      <p>Chemical</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Team One Section */}
        </div>
      </Layout>
    </>
  );
}
