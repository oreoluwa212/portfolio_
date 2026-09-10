import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";

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
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="portfolio-slider">
      {/* Life Plus */}
      <div className="portfolio-item">
        <a
          href="https://life-plus-webapp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web8}
              alt="Life Plus web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* Store Clothing */}
      <div className="portfolio-item">
        <a
          href="https://store-clothing.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web1}
              alt="Store Clothing web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* Stream Vibe */}
      <div className="portfolio-item">
        <a
          href="https://stream-vibe-ebon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web3}
              alt="Stream Vibe web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* BIS Payer */}
      <div className="portfolio-item">
        <a
          href="https://bis-payer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web4}
              alt="BIS Payer web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* Group L Team Task */}
      <div className="portfolio-item">
        <a
          href="https://group-l-team-task.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web5}
              alt="Group L team task web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* SchoolBase */}
      <div className="portfolio-item">
        <a
          href="https://schoolbase-webapp.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web7}
              alt="SchoolBase web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* Match Lesson */}
      <div className="portfolio-item">
        <a
          href="https://match-lesson.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web6}
              alt="Match Lesson web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>

      {/* Simbi Tech */}
      <div className="portfolio-item">
        <a
          href="https://simbi-tech-web-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-item-inner">
            <Image
              className="rounded-lg object-cover"
              fill
              src={web2}
              alt="Simbi Tech web application"
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        </a>
      </div>
    </Slider>
  );
};

export default PortfolioSlider;
