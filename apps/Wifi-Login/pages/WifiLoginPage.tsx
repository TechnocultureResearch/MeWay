import React from "react";
import { Header } from "../src/components/Header";
import { Form } from "../src/components/Form/Form";

const WifiLoginPage = () => {
  return (
    <div>
      <div className="bg-black sm:flex flex-col items-center justify-between p-8 gap-24 h-screen relative">
        <div className="w-72 h-64 flex flex-col items-start p-0 gap-8">
          <Header />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default WifiLoginPage;
