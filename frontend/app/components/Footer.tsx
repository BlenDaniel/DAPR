// components/Footer.tsx
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <a href="/about">About</a> | <a href="/contact">Contact</a> |{" "}
      <a href="/privacy">Privacy Policy</a>
    </footer>
  );
};

export default Footer;
