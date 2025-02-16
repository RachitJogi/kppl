import { useEffect, useState } from "react";
import { getBannerImage } from "@/lib/contentful/client";
import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  const [bannerImage, setBannerImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerImage();
        if (data.length > 0) {
          setBannerImage(data[0].fields.bannerImage.fields.file.url);
        } else {
          setError("No banner image available.");
        }
      } catch (err) {
        console.error("Error fetching banner image:", err);
        setError("Failed to load banner image.");
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  if (error) return <p>{error}</p>;
  if (!bannerImage) return null;

  return (
    <>
      {/* Start Page Header Section */}
      <section
        className='page-header'
        style={{
          backgroundImage: `url(${bannerImage})`,
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
      {/* End Page Header Section */}
    </>
  );
}
