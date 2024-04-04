import React from "react";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import WelcomeScreenImage from "../../../public/welcome.jpg";
import { Button } from "@aws-amplify/ui-react";

interface onClickProps {
  onClick: () => void;
}

const Recognition: React.FC<onClickProps> = ({ onClick }) => {
  //webcam re<
  const webcamRef = useRef<Webcam>(null);

  //State for storing image for face recognition
  const [ImageSource, setImageSource] = useState<string>("");

  //function to implement facial capturing for recognition
  const capture = useCallback(() => {
    const imgSrc = webcamRef?.current?.getScreenshot();
    if (imgSrc) {
      setImageSource(imgSrc);
    }
  }, [webcamRef]);

  return (
    <div className="flex w-full h-screen items-center">
      <div className="flex flex-col h-96 w-120 ml-7 bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text">
        <p className="font-bold text-7xl">Welcome back!</p>
        <p className="font-bold text-6xl">Secure and seamless</p>
        <p className="font-bold text-5xl text-slate-200">Login.</p>
        <input
          type="button"
          className=" shadow-lg bg-orange-400 w-52 h-16 text-white rounded-xl mt-5 text-lg hover:cursor-pointer hover:bg-orange-300 transition duration-300 ease-out active:bg-orange-200"
          value="Login with username!"
          onClick={() => onClick()}
        />
      </div>
      <div className="flex absolute ml-80 mt-11 w-110 px-16 ">
        <Image src={WelcomeScreenImage} alt="Welcome" />
      </div>
      <div className="flex flex-col h-130 w-100 ml-96 items-center">
        <p className="font-bold text-3xl text-slate-400">Face ID</p>
        <div className="flex flex-col h-120 w-100 bg-slate-200 items-center">
          <div className="flex h-80 w-96 bg-white mt-2"></div>
          <div className="flex h-24 w-100 mt-16 justify-center">
            <input
              type="button"
              className="bg-slate-400 w-32 h-14 text-white rounded-xl mt-5 text-lg hover:cursor-pointer hover:bg-slate-300 transition duration-300 ease-out active:bg-slate-200"
              value="Start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
