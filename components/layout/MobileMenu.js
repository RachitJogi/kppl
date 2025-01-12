"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*Start Mobile Menu  */}
      <div className='mobile-menu close-menu'>
        <div className='nav-menu-close' onClick={handleMobileMenu}>
          <span className='fa fa-times' />
        </div>
        <nav className='menu-box'>
          <ul className='navigation'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about/'>About</Link>
            </li>
            <li>
              <Link href='/parent'>Parent Company</Link>
            </li>
            <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
              <Link href='/project'>Projects</Link>
              <ul
                style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
              >
                <li>
                  <Link href='/boric-acid'>Boric Acid</Link>
                </li>
                <li>
                  <Link href='/upcoming-projects'>Upcoming projects</Link>
                </li>
              </ul>
              <div
                className={
                  isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                }
                onClick={() => handleToggle(2)}
              >
                <span className='fa fa-angle-right' />
              </div>
            </li>
            <li>
              <Link href='/enquiry'>Enquiry</Link>
            </li>
            <li>
              <Link href='/career'>Career</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='nav-overlay' onClick={handleMobileMenu}></div>
    </>
  );
};
export default MobileMenu;
