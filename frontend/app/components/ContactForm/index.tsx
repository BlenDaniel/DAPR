"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import TitleSection from "../ui/TitleSection";
import * as Styled from "./styles";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Send the form data to the API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitError(
        "There was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Styled.ContactFormWrapper>
      <TitleSection
        title="Contact Me"
        subtitle="Get in touch for project inquiries or consultations"
        center
      />

      {submitSuccess && (
        <Styled.SuccessMessage>
          Thank you for your message! I&apos;ll get back to you as soon as
          possible.
        </Styled.SuccessMessage>
      )}

      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FormGroup>
          <Styled.Label htmlFor="name">Name *</Styled.Label>
          <Styled.Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <Styled.ErrorMessage>{errors.name}</Styled.ErrorMessage>
          )}
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.Label htmlFor="email">Email *</Styled.Label>
          <Styled.Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Styled.ErrorMessage>{errors.email}</Styled.ErrorMessage>
          )}
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.Label htmlFor="phone">Phone</Styled.Label>
          <Styled.Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.Label htmlFor="subject">Subject</Styled.Label>
          <Styled.Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.Label htmlFor="message">Message *</Styled.Label>
          <Styled.Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <Styled.ErrorMessage>{errors.message}</Styled.ErrorMessage>
          )}
        </Styled.FormGroup>

        <Styled.SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Styled.SubmitButton>

        {submitError && (
          <Styled.ErrorMessage>{submitError}</Styled.ErrorMessage>
        )}
      </Styled.Form>

      <Styled.ContactInfoSection>
        <Styled.ContactInfoTitle>Contact Information</Styled.ContactInfoTitle>

        <Styled.ContactInfoGrid>
          <Styled.ContactInfoCard>
            <Styled.ContactInfoIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Styled.ContactInfoIcon>
            <Styled.ContactInfoLabel>Office Address</Styled.ContactInfoLabel>
            <Styled.ContactInfoValue>
              123 Architecture Plaza
              <br />
              San Francisco, CA 94105
            </Styled.ContactInfoValue>
          </Styled.ContactInfoCard>

          <Styled.ContactInfoCard>
            <Styled.ContactInfoIcon>
              <FontAwesomeIcon icon={faPhone} />
            </Styled.ContactInfoIcon>
            <Styled.ContactInfoLabel>Phone</Styled.ContactInfoLabel>
            <Styled.ContactInfoValue>
              (415) 555-1234
              <br />
              Mon-Fri, 9am-5pm PST
            </Styled.ContactInfoValue>
          </Styled.ContactInfoCard>

          <Styled.ContactInfoCard>
            <Styled.ContactInfoIcon>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Styled.ContactInfoIcon>
            <Styled.ContactInfoLabel>Email</Styled.ContactInfoLabel>
            <Styled.ContactInfoValue>
              john.smith@architecture.com
              <br />
              info@smitharchitecture.com
            </Styled.ContactInfoValue>
          </Styled.ContactInfoCard>
        </Styled.ContactInfoGrid>
      </Styled.ContactInfoSection>
    </Styled.ContactFormWrapper>
  );
};

export default ContactForm;
