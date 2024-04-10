import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.PNG";
import web8 from "../public/web8.png";
import web7 from "../public/web7.png";

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="portfolio-slider">
      <div className="portfolio-item">
        <a
          href="https://life-plus-webapp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web8}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://store-clothing.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web1}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://gadgets-store.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web3}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://bis-payer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web4}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://group-l-team-task.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web5}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://schoolbase-webapp.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web7}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://match-lesson.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web6}
              alt="image"
            />
          </div>
        </a>
      </div>
      <div className="portfolio-item">
        <a
          href="https://simbi-tech-web-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              layout="fill"
              src={web2}
              alt="image"
            />
          </div>
        </a>
      </div>
    </Slider>
  );
};

export default PortfolioSlider;
