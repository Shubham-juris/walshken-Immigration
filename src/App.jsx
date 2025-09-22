import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import CursorGlow from "./Components/CursorGlow"; // 👈 import your effect

function App() {
  return (
    <>
      {/* Cursor Hover Effect */}
     
      <CursorGlow/>

      {/* Layout */}
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
