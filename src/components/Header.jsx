import React from "react";
import Navbar from "./Navbar";
import { ScrollRestoration } from "react-router-dom";

function Header() {
  return (
    <div className="p-4">
      <ScrollRestoration
        getKey={(location, matches) => {
          console.log(matches);
          return location.pathname;
        }}
      />

      <Navbar />
    </div>
  );
}

export default Header;
