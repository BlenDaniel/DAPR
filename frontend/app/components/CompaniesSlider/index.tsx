"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import * as Styled from "./styles";

// Import Swiper styles
import "swiper/css";

import Container from "../ui/Container";
import TitleSection from "../ui/TitleSection";

interface Company {
  id: number;
  name: string;
  logo: string;
}

const CompaniesSlider: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/companies");
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <Container section={true}>
        <div className="flex justify-center items-center h-40">
          <p>Loading partners...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container section={true}>
      <TitleSection
        title="Trusted Partners"
        subtitle="Companies I've Worked With"
        center
      />
      <Styled.SliderContainer>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <Styled.CompanyItem>
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={150}
                  height={80}
                  style={{ objectFit: "contain" }}
                  unoptimized={true}
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://via.placeholder.com/150x80?text=" + company.name;
                  }}
                />
              </Styled.CompanyItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SliderContainer>
    </Container>
  );
};

export default CompaniesSlider;
