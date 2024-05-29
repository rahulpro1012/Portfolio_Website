import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Page() {
  return (
    <div className="scroll-smooth flex flex-col min-w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default Page;
