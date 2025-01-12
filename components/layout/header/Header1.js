import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handlePopup,
}) {
  return (
    <>
      {/* Main Header*/}
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        {/* Header Upper */}
        <div className='header_upper'>
          <div className='auto-container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='header_upper_inner clearfix'>
                  <div className='header_upper_one_box pull-left'>
                    <div className='logo'>
                      <Link href='/'>
                        <img
                          src='assets/images/kppl-logo.png'
                          alt='kppl logo'
                          title=''
                        />
                      </Link>
                      <span>Kutch Potash</span>
                    </div>
                  </div>
                  <div className='header_upper_two_box one pull-right'>
                    <div className='nav-outer'>
                      {/*Mobile Navigation Toggler*/}
                      <div
                        className='mobile-nav-toggler'
                        onClick={handleMobileMenu}
                      >
                        <span className='icon flaticon-menu'></span>
                      </div>
                      <div className='nav-inner'>
                        {/* Main Menu */}
                        <nav className='main-menu navbar-expand-xl navbar-dark'>
                          <div
                            className='collapse navbar-collapse'
                            id='navbarSupportedContent'
                          >
                            <Menu />
                          </div>
                        </nav>
                        {/* Main Menu End*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}

        {/*End Header Upper*/}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className='auto-container'>
            <div className='outer-container'>
              <div className='header-column'>
                <div className='logo-box'>
                  <div className='logo'>
                    <Link href='/'>
                      <img
                        src='assets/images/kppl-logo.png'
                        alt='kppl logo'
                        title=''
                      />
                    </Link>
                    <span>Kutch Potash</span>
                  </div>
                </div>
              </div>
              <div className='header-column'>
                <div className='nav-outer'>
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className='mobile-nav-toggler'
                    onClick={handleMobileMenu}
                  >
                    <span className='icon flaticon-menu'></span>
                  </div>

                  <div className='nav-inner'>
                    {/* Main Menu */}
                    <nav className='main-menu navbar-expand-xl navbar-dark'>
                      <div className='collapse navbar-collapse'>
                        <Menu />
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
      {/* End Main Header */}
    </>
  );
}
