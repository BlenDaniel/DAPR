"use client";

import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Container from "../ui/Container";
import TitleSection from "../ui/TitleSection";
import FormatHtml from "../utils/FormatHtml";
import * as S from "./styles";

import { SectionTitle } from "../../helpers/definitions";

interface Testimonial {
  id: string;
  html: string;
  title: string;
  coverImage: string;
  company?: string;
}

interface TestimonialsProps {
  sectionTitle?: SectionTitle;
  testimonials?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  sectionTitle: initialSectionTitle,
  testimonials: initialTestimonials,
}) => {
  const [sectionTitle, setSectionTitle] = useState<SectionTitle | null>(
    initialSectionTitle || null
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>(
    initialTestimonials || []
  );
  const [loading, setLoading] = useState<boolean>(
    !initialSectionTitle || !initialTestimonials
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch section title if not provided
        if (!initialSectionTitle) {
          const sectionTitleRes = await fetch("/api/testimonials-section");
          const sectionTitleData = await sectionTitleRes.json();
          setSectionTitle(sectionTitleData);
        }

        // Fetch testimonials if not provided
        if (!initialTestimonials) {
          const testimonialsRes = await fetch("/api/testimonials");
          const testimonialsData = await testimonialsRes.json();
          setTestimonials(testimonialsData);
        }
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialSectionTitle || !initialTestimonials) {
      fetchData();
    }
  }, [initialSectionTitle, initialTestimonials]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (loading) {
    return (
      <Container section={true}>
        <S.LoadingContainer>
          <p>Loading testimonials...</p>
        </S.LoadingContainer>
      </Container>
    );
  }

  if (!testimonials.length) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Container section={true}>
      {sectionTitle && (
        <TitleSection
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
          center
        />
      )}
      <S.TestimonialsWrapper>
        <S.SliderControls>
          <S.SliderButton
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </S.SliderButton>

          <S.TestimonialCard>
            <S.ImageContainer>
              <NextImage
                src={currentTestimonial.coverImage}
                alt={currentTestimonial.title}
                width={80}
                height={80}
                className="border-4 border-white rounded-full object-cover w-full h-full"
                unoptimized={true}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/80x80?text=Person";
                }}
              />
            </S.ImageContainer>
            <S.Title>{currentTestimonial.title}</S.Title>
            {currentTestimonial.company && (
              <S.Company>{currentTestimonial.company}</S.Company>
            )}
            <S.QuoteIcon>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </S.QuoteIcon>
            <S.Content>
              <FormatHtml content={currentTestimonial.html} />
            </S.Content>
          </S.TestimonialCard>

          <S.SliderButton onClick={goToNext} aria-label="Next testimonial">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </S.SliderButton>
        </S.SliderControls>

        <S.Indicators>
          {testimonials.map((_, index) => (
            <S.IndicatorDot
              key={index}
              onClick={() => setCurrentIndex(index)}
              active={index === currentIndex}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </S.Indicators>
      </S.TestimonialsWrapper>
    </Container>
  );
};

export default Testimonials;
