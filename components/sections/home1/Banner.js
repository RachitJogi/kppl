"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getSliderItems } from "@/lib/contentful/client";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
};

export default function Banner() {
  const [sliderItems, setSliderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliderItems = async () => {
      try {
        const data = await getSliderItems();
        setSliderItems(data);
      } catch (err) {
        console.error("Error fetching slider items:", err);
        setError("Failed to load slider.");
      } finally {
        setLoading(false);
      }
    };

    fetchSliderItems();
  }, []);

  if (error) return <p>{error}</p>;
  if (!sliderItems.length) return null;

  return (
    <>
      <section className='banner-section wow fadeIn'>
        <Swiper
          {...swiperOptions}
          className='banner-carousel theme_carousel owl-theme'
        >
          {sliderItems.map((item) => (
            <SwiperSlide
              className='slide-item'
              style={{
                backgroundImage: `url(${item.fields.sliderImage.fields.file.url})`,
              }}
              key={item.sys.id}
            >
              <div className='content-outer'>
                <div className='content-box'>
                  <div className='inner'>
                    <h1>
                      {item.fields.title}
                      <br />
                      {item.fields.titleSecondLine}
                      <br />
                      {item.fields.titleThirdLine}{" "}
                      <span>{item.fields.highlightedText}</span>
                    </h1>
                    <div className='text'>{item.fields.subTitle}</div>
                    <div className='link-box'>
                      <Link
                        href={item.fields.sliderButtonLink}
                        className='theme-btn btn-style-one'
                      >
                        <span>{item.fields.sliderButtonText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='banner-slider-nav'>
          <div className='banner-slider-control banner-slider-button-prev h1p'>
            <span>
              <i className='far fa-angle-left'></i>
            </span>
          </div>
          <div className='banner-slider-control banner-slider-button-next h1n'>
            <span>
              <i className='far fa-angle-right'></i>
            </span>
          </div>
        </div>
        <div className='banner-shape__left_1'></div>
        <div className='banner-shape__left_2'></div>
        <div className='banner-big-title' data-parallax='{"x": 200}'>
          KPPL
        </div>
      </section>
    </>
  );
}
