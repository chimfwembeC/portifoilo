"use client"; // Add this line at the top

import { SpeedDial } from "primereact/speeddial";
import Image from "next/image";
import RootLayout from "./layout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { MenuItem } from "primereact/menuitem";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import VectorProfile from "../public/vector-placement.png";
// import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import RobotoFont from "three/examples/fonts/helvetiker_bold.typeface.json"; // You can replace this with your preferred font
import { Avatar } from "primereact/avatar";
import GitHubCalendarComponent from "../components/GitHubCalendarComponent";

const Home: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  const TypedComponent: React.FC = () => {
    const typedElement = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (typedElement.current) {
        const typed = new Typed(typedElement.current, {
          strings: ["Welcome! i create screens your visitors deserve to see"],
          typeSpeed: 70,
          backSpeed: 25,
          loop: true,
        });

        return () => {
          typed.destroy();
        };
      }
    }, []);

    return (
      <span
        className="block text-6xl font-bold mb-1 text-primary"
        ref={typedElement}
      ></span>
    );
  };



  return (
    <RootLayout>
      <div className="flex min-h-screen flex-col items-center justify-between pt-10">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-2 surface-0 text-800">
          <div className="col-span col-span-2 p-6 text-center md:text-left flex align-items-center">
            <section>
              <span className="block text-6xl font-bold mb-1">Hello</span>
              <div className="text-6xl text-primary font-bold mb-3">
                I'm Chimfwembe Kangwa.
              </div>
              {/* <TypedComponent /> */}
              <p className="mt-0 mb-4 text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Button
                label="About Me"
                icon="pi pi-user"
                // type="button"
                severity="secondary"
                className="mr-3 p-button-raised bg-primary p-2 text-light"
              />
              
              <Button
                label="Download CV"
                type="button"
                className="p-button-outlined p-2"
                icon="pi pi-download"
              />
            </section>
          </div>
          <div className="p-8 flex justify-center align-items-center">
            <Image
              src={VectorProfile}
              alt="hero-1"
              className="md:ml-auto block rounded-lg shadow-primary"
              // style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="w-full  surface-0 text-center">
          <div className="mb-3 font-bold text-3xl">
            <span className="text-900">Professional </span>
            <span className="text-primary">Skills</span>
          </div>
          <div className="text-700 mb-6">
            Ac turpis egestas maecenas pharetra convallis posuere morbi leo
            urna.
          </div>
          <div className="mx-8 grid grid-cols-3 md:grid-cols-5 gap-4 p-4">
            <div className="p-4 border-2  border-solid hover:border-dotted shadow-custom-cyan cursor-pointer transition-all rounded-md border-primary border-2 border-solid rounded-md border-primary">
              <span
                className="shadow-2 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-github text-7xl text-blue-500 transition-all"></i>
              </span>
            </div>
            <div className="p-4 border-2  border-solid hover:border-dotted shadow-custom-cyan cursor-pointer transition-all rounded-md border-primary border-2 border-solid rounded-md border-primary">
              <span
                className="shadow-2 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-facebook text-7xl text-blue-500 transition-all"></i>
              </span>
            </div>
            <div className="p-4 border-2  border-solid hover:border-dotted shadow-custom-cyan cursor-pointer transition-all rounded-md border-primary border-2 border-solid rounded-md border-primary">
              <span
                className="shadow-2 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-twitter text-7xl text-blue-500 transition-all"></i>
              </span>
            </div>
            <div className="p-4 border-2  border-solid hover:border-dotted shadow-custom-cyan cursor-pointer transition-all rounded-md border-primary border-2 border-solid rounded-md border-primary">
              <span
                className="shadow-2 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-twitter text-7xl text-blue-500 transition-all"></i>
              </span>
            </div>
            <div className="p-4 border-2  border-solid hover:border-dotted shadow-custom-cyan cursor-pointer transition-all rounded-md border-primary border-2 border-solid rounded-md border-primary">
              <span
                className="shadow-2 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-nodejs text-7xl text-blue-500 transition-all"></i>
              </span>
            </div>
          </div>          
        </div>

        <div className="w-full  surface-0">
          <div className="container mx-auto px-6">
            <div className="mb-3 font-bold text-3xl  text-center">
              <span className="text-900">About </span>
              <span className="text-primary">Chimfwembe Kangwa</span>
            </div>
            <div className="text-700 mb-6">
              Ac turpis egestas maecenas pharetra convallis posuere morbi leo
              urna. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Esse rem voluptates vero unde. Reprehenderit itaque nesciunt
              laborum mollitia, et quae maiores. Odit nobis doloremque, debitis
              dignissimos voluptate dolorum rerum corporis?
            </div>
          </div>

          <div className="lg:mx-8 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">                   
            <div className="">
              <div className="mb-3 font-bold text-3xl">
                <span className="text-blue-600 text-start">
                  Basic Information
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-primary surface-0 p-4 overflow-auto">
          <div className="flex justify-content-center align-itemss-center">
            <GitHubCalendarComponent username="ChimfwembeC" />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Home;
