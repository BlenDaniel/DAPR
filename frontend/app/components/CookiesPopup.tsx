"use client";

import { useState, useEffect } from "react";
import styles from "../styles/CookiesPopup.module.css";

const CookiesPopup = () => {
  const [showFront, setShowFront] = useState(true);
  const [showBack, setShowBack] = useState(false);
  const [necessary, setNecessary] = useState(true);
  const [statistics, setStatistics] = useState(false);
  const [functionality, setFunctionality] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Check if cookies are already set (optional)
    // If so, you could set initial states based on cookie values
    // Example:
    // const savedCookies = document.cookie;
    // if (savedCookies.includes('statistics=true')) setStatistics(true);
  }, []);

  const handleCustomizeClick = () => {
    setShowFront(false);
    setShowBack(true);
  };

  const handleBackClick = () => {
    setShowFront(true);
    setShowBack(false);
  };

  const handleSaveClick = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent form submission
    // Save cookie preferences here
    document.cookie = `necessary=${necessary};path=/`;
    document.cookie = `statistics=${statistics};path=/`;
    document.cookie = `functionality=${functionality};path=/`;
    document.cookie = `marketing=${marketing};path=/`;

    // Hide the popup or update state as needed
    setShowFront(true); // Or set a state to completely hide the popup
    setShowBack(false);
  };

  const handleAllowAllClick = () => {
    // Set all cookies to true
    setNecessary(true);
    setStatistics(true);
    setFunctionality(true);
    setMarketing(true);

    // Save cookie preferences here
    document.cookie = `necessary=${necessary};path=/`;
    document.cookie = `statistics=${statistics};path=/`;
    document.cookie = `functionality=${functionality};path=/`;
    document.cookie = `marketing=${marketing};path=/`;

    setShowFront(true);
    setShowBack(false);
  };

  return (
    <div className={styles.popup}>
      {showFront && (
        <div className={styles.cookie_front}>
          <h1>Do you allow us to use cookies?</h1>
          <p>
            We use cookies to learn where you struggle when you’re <br />
            navigating our website and fix them for your future visit.
          </p>
          <div className={styles.buttons}>
            <a
              href="#"
              className={styles.declineButton}
              onClick={handleCustomizeClick}
            >
              Customize
            </a>
            <a
              href="#"
              className={`${styles.acceptButton} ${styles.allow}`}
              onClick={handleAllowAllClick}
            >
              Allow all
            </a>
          </div>
        </div>
      )}
      {showBack && (
        <div className={styles.cookie_back}>
          <div className={styles.back_header}>
            <i className="fas fa-arrow-left" onClick={handleBackClick}></i>{" "}
            <h1>Customize your preferences</h1>
          </div>
          <form onSubmit={handleSaveClick}>
            <div className={styles.label}>
              <span className={styles.text}>Necessary</span>
              <input
                type="checkbox"
                className={styles.check}
                checked={necessary}
                onChange={(e) => setNecessary(e.target.checked)}
              />
            </div>
            <div className={styles.label}>
              <span className={styles.text}>Statistics</span>
              <input
                type="checkbox"
                className={styles.check}
                checked={statistics}
                onChange={(e) => setStatistics(e.target.checked)}
              />
            </div>
            <div className={styles.label}>
              <span className={styles.text}>Functionality</span>
              <input
                type="checkbox"
                className={styles.check}
                checked={functionality}
                onChange={(e) => setFunctionality(e.target.checked)}
              />
            </div>
            <div className={styles.label}>
              <span className={styles.text}>Marketing</span>
              <input
                type="checkbox"
                className={styles.check}
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
            </div>
            <div className={styles.form_footer}>
              <input
                type="submit"
                className={`${styles.form_send} ${styles.acceptButton}`}
                value="Save and submit"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CookiesPopup;
