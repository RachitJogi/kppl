import Link from "next/link";
export default function Footer1() {
  return (
    <>
      {/*Start Footer Section */}
      <footer className='footer-section'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-5 col-lg-6 col-md-6 wow fadeInUp'
              data-wow-delay='100ms'
            >
              <div className='footer-widget-single footer-widget-about'>
                <div className='footer-widget-title'>
                  <h3>About Us</h3>
                </div>
                <div className='footer-widget-about-text'>
                  <p>
                    Kutch Potash Pvt. Ltd. is a forward-thinking company
                    dedicated to driving innovation in the chemical industry.
                    Founded with a vision to be a catalyst for positive change,
                    we are committed to providing sustainable and innovative
                    solutions that cater to the growing demands of modern
                    industries.
                  </p>
                </div>
                {/* <div className='footer-widget-about-social'>
                  <Link href='#'>
                    <i className='fab fa-facebook-square'></i>
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-twitter'></i>
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-dribbble'></i>
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-instagram'></i>
                  </Link>
                </div> */}
              </div>
            </div>
            <div
              className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
              data-wow-delay='200ms'
            >
              <div className='footer-widget-single footer-widget-useful-links'>
                <div className='footer-widget-title'>
                  <h3>Usefull Links</h3>
                </div>
                <ul className='footer-widget-useful-links-list list-unstyled'>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/parent'>Parent Company</Link>
                  </li>
                  <li>
                    <Link href='/project'>Projects</Link>
                  </li>
                  <li>
                    <Link href='/enquiry'>Enquiry</Link>
                  </li>
                  <li>
                    <Link href='/career'>Career</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-xl-4 col-lg-6 col-md-6 wow fadeInUp'
              data-wow-delay='300ms'
            >
              <div className='footer-widget-single footer-widget-contact'>
                <div className='footer-widget-title'>
                  <h3>Contact Us</h3>
                </div>
                <div className='footer-widget_contact-info'>
                  <p>
                    A/A-201, CITADEL GREENZ,
                    <br />
                    B/H. VOLKSWAGEN SHOWROOM
                    <br />
                    NR.SOLA BRIDGE, S.G HIGHWAY, SOLA ,
                    <br /> AHMEDABAD, Gujarat, India - 380060
                  </p>
                  <p>
                    <Link href='tel:+91 90045 18645'>+91 90045 18645</Link>
                  </p>
                  <p>
                    <Link href='mailto:info@kppl.com'>info@kppl.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='footer-bottom'>
                <p>© 2024, All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*End Footer Section */}
    </>
  );
}
