"use client";

import { useState } from "react";

interface ContactFormViewModel {
  name: string;
  email: string;
  companyName: string;
  message: string;
  isChecked: boolean;
  nameError: string;
  emailError: string;
  companyNameError: string;
  messageError: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setCompanyName: (companyName: string) => void;
  setMessage: (message: string) => void;
  setIsChecked: (isChecked: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  reset: () => void;
}

export default function useContactFormViewModel(): ContactFormViewModel {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [companyNameError, setCompanyNameError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const validateName = (name: string): boolean => {
    const letters = /^[a-zA-Z\s]*$/;
    if (name.trim() === "") {
      setNameError("Please fill out this field!");
      return false;
    } else if (!letters.test(name)) {
      setNameError("Please enter only characters!");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      setEmailError("Please fill out this field!");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address!");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateCompanyName = (companyName: string): boolean => {
    if (companyName.trim() === "") {
      setCompanyNameError("Please fill out this field!");
      return false;
    }
    setCompanyNameError("");
    return true;
  };

  const validateMessage = (message: string): boolean => {
    if (message.trim().length < 20) {
      setMessageError("Message must be at least 20 characters long!");
      return false;
    }
    setMessageError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isCompanyNameValid = validateCompanyName(companyName);
    const isMessageValid = validateMessage(message);

    if (isNameValid && isEmailValid && isCompanyNameValid && isMessageValid) {
      // Perform form submission logic here
      console.log("Form submitted successfully");
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setCompanyName("");
    setMessage("");
    setIsChecked(true);
    setNameError("");
    setEmailError("");
    setCompanyNameError("");
    setMessageError("");
  };

  return {
    name,
    email,
    companyName,
    message,
    isChecked,
    nameError,
    emailError,
    companyNameError,
    messageError,
    setName,
    setEmail,
    setCompanyName,
    setMessage,
    setIsChecked,
    handleSubmit,
    reset,
  };
}
