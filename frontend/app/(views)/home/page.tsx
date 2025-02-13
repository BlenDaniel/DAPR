// app/components/MainScreen.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/MainScreen.module.css";
import ClientThemeToggle from "@/app/components/ClientThemeToggle";
//import useMainScreenViewModel from "./ViewModel";

export default function MainScreen() {
  //const { loading, projects, fetchProjects } = useMainScreenViewModel();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
      text: "Welcome to Our Company",
    },
    {
      image:
        "https://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
      text: "Innovative Solutions",
    },
    {
      image:
        "https://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
      text: "Expert Team",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.mainScreen}>
      <div className={styles.slideshow}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h2>{slide.text}</h2>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h1>Welcome to Our Company</h1>
        <p>We provide cutting-edge solutions for your business needs.</p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Quality Service</h3>
            <p>
              We pride ourselves on delivering top-notch services to our
              clients.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Innovative Approach</h3>
            <p>Our team is always at the forefront of industry innovations.</p>
          </div>
          <div className={styles.feature}>
            <h3>Customer Satisfaction</h3>
            <p>We put our customers first and strive for 100% satisfaction.</p>
          </div>
        </div>
      </div>
      <main style={{ padding: "100px 20px" }}>
        <h1>Welcome to My Website</h1>
        <p>This is an example page with a cookies popup.</p>
        <ClientThemeToggle />
      </main>
    </div>
  );
}
