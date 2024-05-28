"use client";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Sidebar } from "primereact/sidebar";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { ScrollTop } from "primereact/scrolltop";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import "./globals.css";
import "./menubar.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { MenuItem } from "primereact/menuitem";
import { Avatar } from "primereact/avatar";
import Logo from "../public/vercel.svg";
import Image from "next/image";
import { Toast } from "primereact/toast";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const [opacity, setOpacity] = useState(1);
  // const [opacity, setOpacity] = useState(false);

  // const router = useRouter();
  const toast = useRef(null);
  const menubarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newOpacity = Math.max(1 - scrollTop / 300, 0.3);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Resume",
      icon: "pi pi-file",
      url: "/resume",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      url: "/projects",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      url: "/contact",
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
      url: "/about",
    },
    {
      label: "Leave Star",
      icon: "pi pi-star",      
      command: () => {
        toast.current.show({severity: "sucess", summary: "success", detail: "star added successful", life: 3000});
      }
    },
  ];

  const start = (
    <Image
      src="/vercel.svg"
      alt="hero-1"
      className="md:ml-auto block md:h-full"
      style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
      width={100}
      height={100}
    />
  );

  const end = (
    <Image
      src="/next.svg"
      alt="hero-1"
      className="md:ml-auto block md:h-full"
      style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
      width={100}
      height={100}
    />
  );
  return (
    <html>
      <body>
        <header>
          <Menubar
            model={items}
            // start={start}
            end={end}
            ref={menubarRef}
            className="menubar-fixed text-black"
            style={{
              backgroundColor: `rgba(10,150,150,${opacity})`,
              transition: "background-color 0.3s ease",
              color: "#000",
            }}
          />
        </header>
        <main>
          {children}
          <Toast ref={toast} />
          <div className="flex justify-content-between align-items-center">
            <i className="pi pi-facebook"></i>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
