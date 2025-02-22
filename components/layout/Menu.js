import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
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
              <Link href='/project/boric-acid'>Boric Acid</Link>
            </li>
            <li>
              <Link href='/project/upcoming-projects'>Upcoming projects</Link>
            </li>
          </ul>
        </li>
        <li className='dropdown'>
          <Link href='/products'>Products</Link>
          <ul>
            <li>
              <Link href='/products/boric-acid'>Boric Acid</Link>
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
