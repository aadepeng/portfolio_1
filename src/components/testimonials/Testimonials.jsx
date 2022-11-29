import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam saepe dolorum exercitationem sequi tempore porro, placeat et, quas hic aspernatur illo rem molestias tenetur magni consectetur amet sunt ea? ",
  },
  {
    avatar: AVTR2,
    name: "John Snow",
    review:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nihil voluptate eius illum, rem officia sed repellat tempora modi ratione? ",
  },
  {
    avatar: AVTR3,
    name: "Poppy Snow",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur odio ea deleniti voluptate quas exercitationem minima, in nesciunt adipisci consequatur at! Assumenda suscipit minima animi quibusdam eveniet incidunt perspiciatis! ",
  },
  {
    avatar: AVTR4,
    name: "Danny Snow",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, id? Labore, quis pariatur adipisci sapiente porro consequatur perferendis ea laudantium, maiores voluptas repellat quo! Aliquam quibusdam eius qui, similique, recusandae dolorum fugiat minima obcaecati exercitationem ut voluptas? Asperiores, dolorum consequatur. ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="test" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
