import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Contact'>
        <div>
          {/*Start Contact One Section*/}
          <section className='contact-one-section'>
            <div className='container'>
              <h5>
                We appreciate your interest in Kutch Potash Pvt. Ltd. and look
                forward to connecting with you! Your feedback and inquiries are
                important to us as we strive to provide the best service and
                solutions in the chemical industry.
              </h5>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='contact-one-image'>
                    <img
                      src='assets/images/resource/contact-one-img-1.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <form action='inc/sendemail.php' className='contact-one-form'>
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Your full name'
                          />
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Your E-mail'
                          />
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='phone'
                            placeholder='Phone Number'
                          />
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='Subject'
                            placeholder='Subject'
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='input-box'>
                          <textarea
                            name='message'
                            placeholder='Please let us know how we can assist you'
                          ></textarea>
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='contact__btn'>
                          <button type='submit' className='theme-btn'>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*End Contact One Section*/}

          <section className='google_map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6676408448575!2d72.51962957489154!3d23.072643414458554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834ceadc8679%3A0x441aff7bc478dd25!2sCitadel%20greenz!5e0!3m2!1sen!2sin!4v1736660368568!5m2!1sen!2sin'
              className='google-map__contact'
            ></iframe>
          </section>

          {/*Start ContactinfoSection */}
          <section className='contactinfo'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-4 col-lg-4'>
                  {/*Contactinfo Single*/}
                  <div className='contactinfo-single'>
                    <div className='contactinfo-icon'>
                      <span className='far fa-envelope-open'></span>
                    </div>
                    <div className='contactinfo-content'>
                      <h4>Mail Address</h4>
                      <Link href='mailto:info@kppl.com'>info@kppl.com</Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4'>
                  {/*Contactinfo Single*/}
                  <div className='contactinfo-single'>
                    <div className='contactinfo-icon'>
                      <span className='far fa-phone'></span>
                    </div>
                    <div className='contactinfo-content'>
                      <h4>Call Us</h4>
                      <Link href='tel:+91 90045 18645'>+91 90045 18645</Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4'>
                  {/*Contactinfo Single*/}
                  <div className='contactinfo-single'>
                    <div className='contactinfo-icon'>
                      <span className='far fa-map-pin'></span>
                    </div>
                    <div className='contactinfo-content'>
                      <h4>Visit us</h4>
                      <p>
                        A/A-201, CITADEL GREENZ,
                        <br />
                        B/H. VOLKSWAGEN SHOWROOM
                        <br />
                        NR.SOLA BRIDGE, S.G HIGHWAY, SOLA ,
                        <br /> AHMEDABAD, Gujarat, India - 380060
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End ContactinfoSection */}
        </div>
      </Layout>
    </>
  );
}
