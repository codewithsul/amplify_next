import React, { ChangeEvent } from "react";
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

  const [UploadedFile, setUplaodedFile] = useState<File | null>(null);

  //printing the image captured
  console.log("imageCaptured:", ImageSource);

  console.log("uploadedImage:", UploadedFile);

  //function to implement facial capturing for recognition
  const capture = useCallback(() => {
    const imgSrc = webcamRef?.current?.getScreenshot();
    if (imgSrc) {
      setImageSource(imgSrc);
    }
  }, [webcamRef]);

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setUplaodedFile(files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedImgSrc = reader.result as string;
        setImageSource(uploadedImgSrc);
      };

      reader.readAsDataURL(files[0]); // Start reading the file
    }
  };

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
      <div className="flex absolute ml-80 mt-44 w-110 px-16 ">
        <Image src={WelcomeScreenImage} alt="Welcome" />
      </div>
      <div className="flex flex-col h-130 w-100 ml-96 items-center">
        <p className="font-bold text-3xl text-slate-400">Face ID</p>
        <div className="flex flex-col h-120 w-100 bg-slate-200 items-center">
          <div className="flex h-80 w-96 bg-white mt-2">
            {ImageSource ? (
              <Image src={ImageSource} alt="Image" width={1000} height={1000} />
            ) : (
              // <Webcam
              //   audio={false}
              //   height={720}
              //   ref={webcamRef}
              //   screenshotFormat="image/jpeg"
              //   width={1280}
              // />
              ImageSource
            )}
          </div>
          <div className="flex flex-col gap-3 h-44 w-100 mt-16 items-center ">
            <input
              type="button"
              className="bg-slate-400 w-44 h-10 text-white rounded-xl mt-5 text-lg hover:cursor-pointer hover:bg-slate-300 transition duration-300 ease-out active:bg-slate-200"
              value="Capture"
              onClick={() => capture()}
            />
            <input
              type="file"
              id="pictureUpload"
              accept="image/*"
              hidden
              onChange={handleUploadImage} // Attach onChange event handler here
            />
            <label
              htmlFor="pictureUpload"
              className="flex items-center justify-center bg-slate-400 w-44 h-10 text-white rounded-xl mt-5 text-lg hover:cursor-pointer hover:bg-slate-300 transition duration-300 ease-out active:bg-slate-200"
            >
              Upload Image
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
