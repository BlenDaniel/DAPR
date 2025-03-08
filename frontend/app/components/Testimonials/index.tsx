"use client"; // Mark this component as a Client Component

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import FormatHtml from "../../components/utils/FormatHtml";

import { SectionTitle } from "../../helpers/definitions";

import * as Styled from "./styles";

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import("../../components/ui/Carousel"), {
  ssr: false,
});

interface Testimonial {
  id: string;
  html: string;
  title: string;
  coverImage: string;
}

interface TestimonialsProps {
  sectionTitle: SectionTitle;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  sectionTitle,
  testimonials,
}) => {
  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Testimonials>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Styled.Testimonial key={testimonial.id}>
              <Styled.Image>
                <Image
                  src={testimonial.coverImage}
                  alt={testimonial.title}
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </Styled.Image>
              <Styled.Title>{testimonial.title}</Styled.Title>
              <FormatHtml content={testimonial.html} />
            </Styled.Testimonial>
          ))}
        </Carousel>
      </Styled.Testimonials>
    </Container>
  );
};

export default Testimonials;
