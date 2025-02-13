"use client";

import React from "react";
import styles from "../../styles/Contact.module.css";
import useContactFormViewModel from "./ViewModel";

const ContactForm: React.FC = () => {
  const viewModel = useContactFormViewModel();

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <h4>GET IN TOUCH</h4>
            <h2 className={styles.formHeadline}>Send us a message</h2>
            <form
              className={styles.formContainer}
              onSubmit={viewModel.handleSubmit}
            >
              <p className={styles.formParagraph}>
                <input
                  id="name"
                  className={styles.formInput}
                  type="text"
                  placeholder="Your Name*"
                  value={viewModel.name}
                  onChange={(e) => viewModel.setName(e.target.value)}
                />
                <small className={styles.error}>{viewModel.nameError}</small>
              </p>
              <p className={styles.formParagraph}>
                <input
                  id="email"
                  className={styles.formInput}
                  type="email"
                  placeholder="Your Email*"
                  value={viewModel.email}
                  onChange={(e) => viewModel.setEmail(e.target.value)}
                />
                <small className={styles.error}>{viewModel.emailError}</small>
              </p>
              <p className={`${styles.formParagraph} ${styles.fullWidth}`}>
                <input
                  id="company-name"
                  className={styles.formInput}
                  type="text"
                  placeholder="Company Name*"
                  value={viewModel.companyName}
                  onChange={(e) => viewModel.setCompanyName(e.target.value)}
                />
                <small className={styles.error}>
                  {viewModel.companyNameError}
                </small>
              </p>
              <p className={`${styles.formParagraph} ${styles.fullWidth}`}>
                <textarea
                  id="message"
                  className={styles.textArea}
                  placeholder="Your Message*"
                  value={viewModel.message}
                  onChange={(e) => viewModel.setMessage(e.target.value)}
                ></textarea>
                <small className={styles.error}>{viewModel.messageError}</small>
              </p>
              <p className={`${styles.formParagraph} ${styles.fullWidth}`}>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  checked={viewModel.isChecked}
                  onChange={(e) => viewModel.setIsChecked(e.target.checked)}
                />
                <label htmlFor="checkbox">
                  {
                    " Yes, I would like to receive communications by call / email about Company's services."
                  }
                </label>
              </p>
              <p className={`${styles.formParagraph} ${styles.fullWidth}`}>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={viewModel.reset}
                >
                  Reset
                </button>
              </p>
            </form>
          </div>

          <div className={`${styles.contacts} ${styles.contactWrapper}`}>
            <ul>
              <li>
                {
                  " We've driven online revenues of over our clients. Ready to know how we can help you?"
                }
              </li>
              <span className={styles.highlightContactInfo}>
                <li className={styles.emailInfo}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  info@demo.com
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  <span className={styles.highlightText}>+91 11 1111 2900</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
