import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle Google login click
  const handleGoogleLogin = () => {
    // Replace current tab with Google OAuth login
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const styles = {
    container: {
      minHeight: "90.4vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2d2d2d",
    },
    loginBox: {
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "#2d2d2d",
      border: "1px solid #fcaaa8",
      borderRadius: "10px",
      boxShadow: "10px 10px 10px #5c4242",
      zIndex: "999",
    },
    title: {
      fontSize: "50px",
      fontFamily: "Oswald, sans-serif",
      color: "#fcaaa8",
      textAlign: "center",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "#f56664",
      color: "#fff",
      fontFamily: "Montserrat",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
    buttonHover: {
      backgroundColor: "#fff",
      color: "#f56664",
    },
    imageAbove: {
      position: "absolute",
      left: "10px",
      top: "80px",
      width: "400px",
    },
    imageBelow: {
      position: "absolute",
      right: "10px",
      bottom: "50px",
      width: "400px",
    },
  };

  return (
    <div style={styles.container}>
      <img src={"/assets/images/1.png"} alt="Above" style={styles.imageAbove} />
      <div style={styles.loginBox}>
        <h1 style={styles.title}>LOGIN</h1>
        <div style={styles.buttonContainer}>
          <Button
            style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </Button>
        </div>
      </div>
      <img src={"/assets/images/2.png"} alt="Below" style={styles.imageBelow} />
    </div>
  );
};

export default Login;
