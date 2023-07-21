"use client"

import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          All your favourite items in the best online store
        </h1>

        <p className="hero__subtitle">
          Find anything you need with our amazing website
        </p>

        <CustomButton
          title="Explore Shop"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
}

export default Hero;
