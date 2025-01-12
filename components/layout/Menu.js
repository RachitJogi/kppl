import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className='navigation clearfix'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/parent'>Parent Company</Link>
        </li>
        <li className='dropdown'>
          <Link href='/project'>Projects</Link>
          <ul>
            <li>
              <Link href='/boric-acid'>Boric Acid</Link>
            </li>
            <li>
              <Link href='/upcoming-projects'>Upcoming projects</Link>
            </li>
          </ul>
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
    </>
  );
}
