import React from "react";
import service1 from "../../assets/images/service-1.svg";
import service2 from "../../assets/images/service-2.svg";
import service3 from "../../assets/images/service-3.svg";
import { IoArrowForward } from "react-icons/io5";

const services = [
  {
    title: "Women’s Course",
    text: "Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.",
    img: service1,
    alt: "Women’s Course",
  },
  {
    title: "Basic Course",
    text: "Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.",
    img: service2,
    alt: "Basic Course",
    active: true,
  },
  {
    title: "Men’s Course",
    text: "Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.",
    img: service3,
    alt: "Men’s Course",
  },
  
];

export default function Services() {
  return (
    <section
      className="section service active" 
      aria-label="service"
      data-section
    >
      <div className="container">
        <ul className="grid-list">
          {services.map((service, index) => (
            <li key={index}>
              <div
                className={`service-card ${service.active ? "active" : ""}`}
              >
                <div className="card-icon">
                  <img
                    src={service.img}
                    width="60"
                    height="60"
                    loading="lazy"
                    alt={service.alt}
                  />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    {service.title}
                  </a>
                </h3>
                <p className="card-text">{service.text}</p>
                <a href="#" className="btn btn-secondary">
                  <IoArrowForward />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
