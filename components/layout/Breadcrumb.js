import { getBannerImage } from "@/lib/contentful/client";
import Link from "next/link";

const bannerImage = await getBannerImage();

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      {/*Start Page Header Section*/}
      <section
        className='page-header'
        style={{
          backgroundImage: `url(${bannerImage[0].fields.bannerImage.fields.file.url})`,
        }}
      >
        <div className='container'>
          <h2>{breadcrumbTitle}</h2>
          <ul className='thm-breadcrumb'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <span>-</span>
            </li>
            <li>
              <span>{breadcrumbTitle}</span>
            </li>
          </ul>
        </div>
      </section>
      {/*End Page Header Section*/}
    </>
  );
}
